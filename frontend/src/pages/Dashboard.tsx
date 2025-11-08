import { useDashboardData } from '../hooks/useMockData';
import { ImpactDimension } from '../types';
import './Dashboard.css';

const Dashboard = () => {
  const { data, loading, error } = useDashboardData();

  if (loading) {
    return (
      <div className="loading-container">
        <h2>Loading Busula Dashboard...</h2>
        <div className="spinner"></div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="error-container">
        <h2>Error Loading Data</h2>
        <p>{error?.message || 'Unknown error occurred'}</p>
      </div>
    );
  }

  const { company, currentAssessment, kpiMetrics, recentActivities, alerts } = data;

  const getMaturityEmoji = (level: number): string => {
    return '⭐'.repeat(level);
  };

  const getTrendEmoji = (trend: string): string => {
    switch (trend) {
      case 'up': return '📈';
      case 'down': return '📉';
      case 'stable': return '➡️';
      default: return '➡️';
    }
  };

  const getAlertColor = (severity: string): string => {
    switch (severity) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#3b82f6';
      default: return '#6b7280';
    }
  };

  return (
    <div className="dashboard">
      {/* Overall Health Score */}
      <section className="health-score-section">
        <div className="health-score-card">
          <h2>Overall Health Score</h2>
          <div className="score-display">
            <div className="score-number">{currentAssessment.overallHealthScore.toFixed(1)}</div>
            <div className="score-label">out of 100</div>
          </div>
          <div className="company-info">
            <span className="badge">{company.stage.replace('_', ' ')}</span>
            <span className="badge">{company.industry}</span>
            <span className="badge">{company.employeeCount} employees</span>
          </div>
        </div>
      </section>

      {/* Dimension Scores */}
      <section className="dimensions-section">
        <h2>Impact Dimensions</h2>
        <div className="dimensions-grid">
          <div className="dimension-card">
            <h3>💰 Revenue Generation</h3>
            <div className="dimension-score">
              {currentAssessment.dimensionScores[ImpactDimension.REVENUE_GENERATION].toFixed(1)}
            </div>
          </div>
          <div className="dimension-card">
            <h3>⚙️ Technical Execution</h3>
            <div className="dimension-score">
              {currentAssessment.dimensionScores[ImpactDimension.TECHNICAL_EXECUTION].toFixed(1)}
            </div>
          </div>
          <div className="dimension-card">
            <h3>🤝 Customer Retention</h3>
            <div className="dimension-score">
              {currentAssessment.dimensionScores[ImpactDimension.CUSTOMER_RETENTION].toFixed(1)}
            </div>
          </div>
          <div className="dimension-card">
            <h3>🚀 Growth Capacity</h3>
            <div className="dimension-score">
              {currentAssessment.dimensionScores[ImpactDimension.GROWTH_CAPACITY].toFixed(1)}
            </div>
          </div>
        </div>
      </section>

      {/* Operational Pillars */}
      <section className="pillars-section">
        <h2>Operational Pillars</h2>
        <div className="pillars-grid">
          {currentAssessment.pillars.map((pillar) => (
            <div key={pillar.id} className="pillar-card">
              <h3>{pillar.name}</h3>
              <p className="pillar-description">{pillar.description}</p>
              <div className="pillar-score">
                Score: <strong>{pillar.overallScore.toFixed(1)}</strong>
              </div>
              <div className="activities-summary">
                {pillar.activities.length} activities tracked
              </div>
              <div className="maturity-summary">
                {pillar.activities.slice(0, 2).map((activity) => (
                  <div key={activity.id} className="activity-mini">
                    <span className="activity-name">{activity.name}</span>
                    <span className="maturity-level">
                      {getMaturityEmoji(activity.currentMaturityLevel)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* KPI Metrics */}
      <section className="kpi-section">
        <h2>Key Performance Indicators</h2>
        <div className="kpi-grid">
          {kpiMetrics.map((kpi) => (
            <div key={kpi.id} className="kpi-card">
              <div className="kpi-header">
                <h3>{kpi.name}</h3>
                <span className="kpi-trend">{getTrendEmoji(kpi.trend)}</span>
              </div>
              <div className="kpi-value">
                {typeof kpi.value === 'number' ? kpi.value.toLocaleString() : kpi.value}
                {kpi.unit !== 'USD' && ` ${kpi.unit}`}
              </div>
              {kpi.changePercentage !== undefined && kpi.changePercentage !== 0 && (
                <div className={`kpi-change ${kpi.trend}`}>
                  {kpi.changePercentage > 0 ? '+' : ''}
                  {kpi.changePercentage}% vs last month
                </div>
              )}
              <div className="kpi-category">{kpi.category}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Alerts */}
      {alerts.length > 0 && (
        <section className="alerts-section">
          <h2>⚠️ Alerts & Recommendations</h2>
          <div className="alerts-list">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className="alert-card"
                style={{ borderLeftColor: getAlertColor(alert.severity) }}
              >
                <div className="alert-severity" style={{ color: getAlertColor(alert.severity) }}>
                  {alert.severity.toUpperCase()}
                </div>
                <div className="alert-message">{alert.message}</div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Recent Activities */}
      <section className="activities-section">
        <h2>Recent Activities</h2>
        <div className="activities-list">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="activity-item">
              <div className="activity-type">{activity.type.replace('_', ' ')}</div>
              <div className="activity-description">{activity.description}</div>
              <div className="activity-timestamp">
                {new Date(activity.timestamp).toLocaleDateString()}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
