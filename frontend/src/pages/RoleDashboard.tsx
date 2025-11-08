import { useState } from 'react';
import { mockRoleProfiles } from '../data/interconnectionsData';
import { usePillars, useKPIMetrics } from '../hooks/useMockData';
import { Role } from '../types/interconnections';
import { OperationalPillar } from '../types';
import './RoleDashboard.css';

const RoleDashboard = () => {
  const [selectedRole, setSelectedRole] = useState<Role>(Role.CEO);
  const { data: pillars } = usePillars();
  const { data: kpiMetrics } = useKPIMetrics();

  const currentProfile = mockRoleProfiles.find((p) => p.role === selectedRole);

  if (!currentProfile || !pillars || !kpiMetrics) {
    return <div className="loading-container"><div className="spinner"></div></div>;
  }

  const pillarNames: Record<OperationalPillar, string> = {
    [OperationalPillar.FINANCIAL_PLANNING]: 'Financial Planning',
    [OperationalPillar.CUSTOMER_ACQUISITION]: 'Customer Acquisition',
    [OperationalPillar.OPERATIONAL_EFFICIENCY]: 'Operational Efficiency',
    [OperationalPillar.TALENT_MANAGEMENT]: 'Talent Management',
    [OperationalPillar.RISK_COMPLIANCE]: 'Risk & Compliance',
    [OperationalPillar.STRATEGIC_PLANNING]: 'Strategic Planning',
    [OperationalPillar.FINANCIAL_REPORTING]: 'Financial Reporting',
  };

  const primaryPillars = pillars.filter((p) => currentProfile.primaryPillars.includes(p.id));
  const crossFunctionalPillars = pillars.filter((p) => currentProfile.crossFunctionalPillars.includes(p.id));
  const relevantMetrics = kpiMetrics.filter((m) => currentProfile.keyMetrics.some((km) => m.name.includes(km.split(' ')[0])));

  return (
    <div className="role-dashboard-page">
      <div className="page-header">
        <h1>👤 Role-Specific Dashboard</h1>
        <p>View the platform from different leadership perspectives</p>
      </div>

      {/* Role Selector */}
      <section className="role-selector-section">
        <h2>Select Role</h2>
        <div className="role-buttons">
          {mockRoleProfiles.map((profile) => (
            <button
              key={profile.role}
              className={`role-btn ${selectedRole === profile.role ? 'active' : ''}`}
              onClick={() => setSelectedRole(profile.role)}
            >
              {profile.name}
            </button>
          ))}
        </div>
      </section>

      {/* Role Overview */}
      <section className="role-overview-section">
        <div className="role-card">
          <h2>{currentProfile.name}</h2>
          <p className="role-description">{currentProfile.description}</p>

          <div className="role-pillars">
            <div className="pillar-group">
              <h3>Primary Responsibilities</h3>
              <div className="pillar-tags">
                {currentProfile.primaryPillars.map((pillarId) => (
                  <span key={pillarId} className="pillar-tag primary">
                    {pillarNames[pillarId]}
                  </span>
                ))}
              </div>
            </div>

            <div className="pillar-group">
              <h3>Cross-Functional Involvement</h3>
              <div className="pillar-tags">
                {currentProfile.crossFunctionalPillars.map((pillarId) => (
                  <span key={pillarId} className="pillar-tag cross">
                    {pillarNames[pillarId]}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="responsibilities">
            <h3>Key Responsibilities</h3>
            <ul>
              {currentProfile.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Role-Specific Metrics */}
      <section className="metrics-section">
        <h2>Key Metrics for {currentProfile.name}</h2>
        <div className="metrics-grid">
          {currentProfile.keyMetrics.map((metricName, idx) => {
            const metric = relevantMetrics[idx] || kpiMetrics.find((m) => m.name.toLowerCase().includes(metricName.toLowerCase()));
            if (!metric) {
              return (
                <div key={idx} className="metric-card placeholder">
                  <h3>{metricName}</h3>
                  <div className="metric-value">--</div>
                  <div className="metric-label">No data available</div>
                </div>
              );
            }
            return (
              <div key={metric.id} className="metric-card">
                <h3>{metric.name}</h3>
                <div className="metric-value">
                  {typeof metric.value === 'number' ? metric.value.toLocaleString() : metric.value}
                  {metric.unit !== 'USD' && ` ${metric.unit}`}
                </div>
                {metric.changePercentage !== undefined && metric.changePercentage !== 0 && (
                  <div className={`metric-change ${metric.trend}`}>
                    {metric.changePercentage > 0 ? '+' : ''}
                    {metric.changePercentage}%
                  </div>
                )}
                <div className="metric-category">{metric.category}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Primary Pillars Detail */}
      <section className="pillars-detail-section">
        <h2>Primary Area Performance</h2>
        <div className="pillars-grid">
          {primaryPillars.map((pillar) => (
            <div key={pillar.id} className="pillar-detail-card">
              <h3>{pillar.name}</h3>
              <div className="pillar-score-large">
                {pillar.overallScore.toFixed(1)}
                <span className="score-max">/100</span>
              </div>
              <p className="pillar-description">{pillar.description}</p>
              <div className="activities-count">
                {pillar.activities.length} activities • {pillar.activities.filter((a) => a.currentMaturityLevel >= 4).length} mature
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-Functional Areas */}
      {crossFunctionalPillars.length > 0 && (
        <section className="cross-functional-section">
          <h2>Cross-Functional Areas</h2>
          <div className="cross-pillars-grid">
            {crossFunctionalPillars.map((pillar) => (
              <div key={pillar.id} className="cross-pillar-card">
                <h4>{pillar.name}</h4>
                <div className="small-score">{pillar.overallScore.toFixed(1)}</div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default RoleDashboard;
