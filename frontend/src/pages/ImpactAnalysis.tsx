import { mockImpactAnalysis } from '../data/interconnectionsData';
import { OperationalPillar } from '../types';
import './ImpactAnalysis.css';

const ImpactAnalysis = () => {
  const pillarNames: Record<OperationalPillar, string> = {
    [OperationalPillar.FINANCIAL_PLANNING]: 'Financial Planning',
    [OperationalPillar.CUSTOMER_ACQUISITION]: 'Customer Acquisition',
    [OperationalPillar.OPERATIONAL_EFFICIENCY]: 'Operational Efficiency',
    [OperationalPillar.TALENT_MANAGEMENT]: 'Talent Management',
    [OperationalPillar.RISK_COMPLIANCE]: 'Risk & Compliance',
    [OperationalPillar.STRATEGIC_PLANNING]: 'Strategic Planning',
    [OperationalPillar.FINANCIAL_REPORTING]: 'Financial Reporting',
  };

  const getImpactColor = (type: string) => {
    switch (type) {
      case 'positive': return '#10b981';
      case 'negative': return '#ef4444';
      case 'neutral': return '#6b7280';
      default: return '#6b7280';
    }
  };

  return (
    <div className="impact-analysis-page">
      <div className="page-header">
        <h1>📊 Impact Analysis</h1>
        <p>Understand the ripple effects of decisions across your organization</p>
      </div>

      {/* Analysis Summary */}
      <section className="analysis-summary">
        <div className="summary-card">
          <h2>Proposed Action</h2>
          <div className="action-card">
            <div className="action-title">{mockImpactAnalysis.action}</div>
            <div className="action-source">
              Source: {pillarNames[mockImpactAnalysis.sourcePillar]}
            </div>
            <div className={`risk-badge ${mockImpactAnalysis.overallRisk}`}>
              Overall Risk: {mockImpactAnalysis.overallRisk.toUpperCase()}
            </div>
          </div>
        </div>
      </section>

      {/* Impact on Pillars */}
      <section className="impacts-section">
        <h2>Cross-Functional Impacts</h2>
        <div className="impacts-grid">
          {mockImpactAnalysis.impacts.map((impact, idx) => (
            <div key={idx} className="impact-card">
              <div className="impact-header">
                <h3>{pillarNames[impact.pillar]}</h3>
                <span
                  className="impact-type-badge"
                  style={{ backgroundColor: getImpactColor(impact.impactType) }}
                >
                  {impact.impactType}
                </span>
              </div>

              <div className="impact-magnitude">
                <div className="magnitude-label">Impact Magnitude</div>
                <div className="magnitude-bar-container">
                  <div
                    className="magnitude-bar"
                    style={{
                      width: `${impact.magnitude}%`,
                      backgroundColor: getImpactColor(impact.impactType),
                    }}
                  />
                </div>
                <div className="magnitude-value">{impact.magnitude}%</div>
              </div>

              <p className="impact-description">{impact.description}</p>

              <div className="impact-timeframe">
                <strong>Timeframe:</strong> {impact.timeframe}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section className="recommendations-section">
        <h2>💡 Recommendations</h2>
        <div className="recommendations-list">
          {mockImpactAnalysis.recommendations.map((rec, idx) => (
            <div key={idx} className="recommendation-card">
              <span className="rec-number">{idx + 1}</span>
              <span className="rec-text">{rec}</span>
            </div>
          ))}
        </div>
      </section>

      {/* What-If Scenario Builder */}
      <section className="scenario-builder">
        <h2>🔮 What-If Analysis</h2>
        <div className="builder-card">
          <p className="builder-description">
            Use the scenario planner to model different decisions and see their projected impacts
            across all functions.
          </p>
          <a href="/scenarios" className="cta-button">
            Go to Scenario Planner →
          </a>
        </div>
      </section>
    </div>
  );
};

export default ImpactAnalysis;
