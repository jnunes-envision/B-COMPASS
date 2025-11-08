import { useState } from 'react';
import { mockDependencies, mockCrossFunctionalMaturity } from '../data/interconnectionsData';
import { OperationalPillar } from '../types';
import { Dependency } from '../types/interconnections';
import './Interconnections.css';

const Interconnections = () => {
  const [selectedPillar, setSelectedPillar] = useState<OperationalPillar | null>(null);

  const pillarNames: Record<OperationalPillar, string> = {
    [OperationalPillar.FINANCIAL_PLANNING]: 'Financial Planning',
    [OperationalPillar.CUSTOMER_ACQUISITION]: 'Customer Acquisition',
    [OperationalPillar.OPERATIONAL_EFFICIENCY]: 'Operational Efficiency',
    [OperationalPillar.TALENT_MANAGEMENT]: 'Talent Management',
    [OperationalPillar.RISK_COMPLIANCE]: 'Risk & Compliance',
    [OperationalPillar.STRATEGIC_PLANNING]: 'Strategic Planning',
    [OperationalPillar.FINANCIAL_REPORTING]: 'Financial Reporting',
  };

  const pillarIcons: Record<OperationalPillar, string> = {
    [OperationalPillar.FINANCIAL_PLANNING]: '💰',
    [OperationalPillar.CUSTOMER_ACQUISITION]: '👥',
    [OperationalPillar.OPERATIONAL_EFFICIENCY]: '⚙️',
    [OperationalPillar.TALENT_MANAGEMENT]: '🎯',
    [OperationalPillar.RISK_COMPLIANCE]: '🛡️',
    [OperationalPillar.STRATEGIC_PLANNING]: '🗺️',
    [OperationalPillar.FINANCIAL_REPORTING]: '📊',
  };

  const getImpactColor = (level: string) => {
    switch (level) {
      case 'critical': return '#ef4444';
      case 'high': return '#f59e0b';
      case 'medium': return '#3b82f6';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  const filteredDependencies = selectedPillar
    ? mockDependencies.filter(
        (dep) => dep.sourcePillar === selectedPillar || dep.targetPillar === selectedPillar
      )
    : mockDependencies;

  const getMaturityLevelText = (level: number) => {
    const levels = ['Fragmented', 'Aware', 'Coordinated', 'Integrated', 'Optimized'];
    return levels[level - 1];
  };

  const getMaturityColor = (level: number) => {
    const colors = ['#ef4444', '#f59e0b', '#3b82f6', '#10b981', '#8b5cf6'];
    return colors[level - 1];
  };

  return (
    <div className="interconnections-page">
      <div className="page-header">
        <h1>🔗 Cross-Functional Interconnections</h1>
        <p>Understand how different operational pillars influence each other</p>
      </div>

      {/* Maturity Level Card */}
      <section className="maturity-section">
        <div className="maturity-card">
          <h2>Cross-Functional Collaboration Maturity</h2>
          <div className="maturity-level">
            <div className="level-indicator">
              <span
                className="level-badge"
                style={{ backgroundColor: getMaturityColor(mockCrossFunctionalMaturity.level) }}
              >
                Level {mockCrossFunctionalMaturity.level}
              </span>
              <span className="level-name">
                {getMaturityLevelText(mockCrossFunctionalMaturity.level)}
              </span>
            </div>
            <div className="level-progress">
              {[1, 2, 3, 4, 5].map((level) => (
                <div
                  key={level}
                  className={`progress-dot ${level <= mockCrossFunctionalMaturity.level ? 'active' : ''}`}
                  style={{
                    backgroundColor:
                      level <= mockCrossFunctionalMaturity.level
                        ? getMaturityColor(mockCrossFunctionalMaturity.level)
                        : '#e5e7eb',
                  }}
                />
              ))}
            </div>
          </div>
          <p className="maturity-description">{mockCrossFunctionalMaturity.description}</p>

          <div className="characteristics">
            <h3>Current Characteristics:</h3>
            <ul>
              {mockCrossFunctionalMaturity.characteristics.map((char, idx) => (
                <li key={idx}>{char}</li>
              ))}
            </ul>
          </div>

          <div className="improvements">
            <h3>Recommended Improvements:</h3>
            <ul>
              {mockCrossFunctionalMaturity.improvements.map((improvement, idx) => (
                <li key={idx}>{improvement}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pillar Filter */}
      <section className="filter-section">
        <h2>Filter by Pillar</h2>
        <div className="pillar-filters">
          <button
            className={`filter-btn ${selectedPillar === null ? 'active' : ''}`}
            onClick={() => setSelectedPillar(null)}
          >
            All Pillars
          </button>
          {Object.entries(pillarNames).map(([key, name]) => (
            <button
              key={key}
              className={`filter-btn ${selectedPillar === key ? 'active' : ''}`}
              onClick={() => setSelectedPillar(key as OperationalPillar)}
            >
              {pillarIcons[key as OperationalPillar]} {name}
            </button>
          ))}
        </div>
      </section>

      {/* Dependencies List */}
      <section className="dependencies-section">
        <h2>
          Dependency Map
          {selectedPillar && ` - ${pillarNames[selectedPillar]}`}
        </h2>
        <div className="dependencies-list">
          {filteredDependencies.map((dep: Dependency) => (
            <div key={dep.id} className="dependency-card">
              <div className="dependency-header">
                <div className="pillar-connection">
                  <span className="pillar-tag source">
                    {pillarIcons[dep.sourcePillar]} {pillarNames[dep.sourcePillar]}
                  </span>
                  <span className="arrow">→</span>
                  <span className="pillar-tag target">
                    {pillarIcons[dep.targetPillar]} {pillarNames[dep.targetPillar]}
                  </span>
                </div>
                <span
                  className="impact-badge"
                  style={{ backgroundColor: getImpactColor(dep.impactLevel) }}
                >
                  {dep.impactLevel.toUpperCase()}
                </span>
              </div>

              <p className="dependency-description">{dep.description}</p>

              <div className="examples">
                <h4>Examples:</h4>
                <ul>
                  {dep.examples.map((example, idx) => (
                    <li key={idx}>{example}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visual Network (Simplified) */}
      <section className="network-section">
        <h2>Interconnection Network</h2>
        <div className="network-visual">
          <div className="pillars-circle">
            {Object.entries(pillarNames).map(([key, name]) => (
              <div
                key={key}
                className={`pillar-node ${selectedPillar === key ? 'selected' : ''} ${
                  selectedPillar === null ? 'all-active' : ''
                }`}
                onClick={() => setSelectedPillar(selectedPillar === key ? null : (key as OperationalPillar))}
              >
                <div className="node-icon">{pillarIcons[key as OperationalPillar]}</div>
                <div className="node-name">{name}</div>
              </div>
            ))}
          </div>
          <div className="network-info">
            <p>Click on a pillar to see its connections</p>
            <p className="connection-count">
              Showing {filteredDependencies.length} of {mockDependencies.length} connections
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Interconnections;
