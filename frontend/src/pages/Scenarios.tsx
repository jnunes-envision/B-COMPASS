import { mockScenarios } from '../data/interconnectionsData';
import { OperationalPillar } from '../types';
import './Scenarios.css';

const Scenarios = () => {
  const pillarNames: Record<OperationalPillar, string> = {
    [OperationalPillar.FINANCIAL_PLANNING]: 'Financial Planning',
    [OperationalPillar.CUSTOMER_ACQUISITION]: 'Customer Acquisition',
    [OperationalPillar.OPERATIONAL_EFFICIENCY]: 'Operational Efficiency',
    [OperationalPillar.TALENT_MANAGEMENT]: 'Talent Management',
    [OperationalPillar.RISK_COMPLIANCE]: 'Risk & Compliance',
    [OperationalPillar.STRATEGIC_PLANNING]: 'Strategic Planning',
    [OperationalPillar.FINANCIAL_REPORTING]: 'Financial Reporting',
  };

  const formatImpact = (value: number) => {
    if (value > 1) return `+${((value - 1) * 100).toFixed(0)}%`;
    if (value < 1) return `-${((1 - value) * 100).toFixed(0)}%`;
    return 'No change';
  };

  const getImpactColor = (value: number) => {
    if (value > 1) return '#10b981';
    if (value < 1) return '#ef4444';
    return '#6b7280';
  };

  return (
    <div className="scenarios-page">
      <div className="page-header">
        <h1>🔮 Scenario Planning</h1>
        <p>Model different strategic decisions and their projected outcomes</p>
      </div>

      <div className="scenarios-grid">
        {mockScenarios.map((scenario) => (
          <div key={scenario.id} className="scenario-card">
            <div className="scenario-header">
              <h2>{scenario.name}</h2>
              <p className="scenario-description">{scenario.description}</p>
            </div>

            {/* Proposed Changes */}
            <div className="scenario-section">
              <h3>Proposed Changes</h3>
              <div className="changes-list">
                {scenario.changes.map((change, idx) => (
                  <div key={idx} className="change-item">
                    <div className="change-pillar">{pillarNames[change.pillar]}</div>
                    <div className="change-metric">{change.metric}</div>
                    <div className="change-values">
                      <span className="current-value">{change.currentValue}</span>
                      <span className="arrow">→</span>
                      <span className="proposed-value">{change.proposedValue}</span>
                    </div>
                    {change.cost && (
                      <div className="change-cost">
                        Cost: ${change.cost.toLocaleString()}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Projected Impacts */}
            <div className="scenario-section">
              <h3>Projected Impacts</h3>
              <div className="impacts-grid-small">
                <div className="impact-item">
                  <div className="impact-label">Revenue</div>
                  <div
                    className="impact-value"
                    style={{ color: getImpactColor(scenario.projectedImpacts.revenue) }}
                  >
                    {formatImpact(scenario.projectedImpacts.revenue)}
                  </div>
                </div>
                <div className="impact-item">
                  <div className="impact-label">Costs</div>
                  <div
                    className="impact-value"
                    style={{ color: getImpactColor(1 / scenario.projectedImpacts.costs) }}
                  >
                    {formatImpact(scenario.projectedImpacts.costs)}
                  </div>
                </div>
                <div className="impact-item">
                  <div className="impact-label">Time to Market</div>
                  <div
                    className="impact-value"
                    style={{ color: getImpactColor(1 / scenario.projectedImpacts.timeToMarket) }}
                  >
                    {formatImpact(scenario.projectedImpacts.timeToMarket)}
                  </div>
                </div>
                <div className="impact-item">
                  <div className="impact-label">Customer Satisfaction</div>
                  <div
                    className="impact-value"
                    style={{
                      color:
                        scenario.projectedImpacts.customerSatisfaction > 0 ? '#10b981' : '#ef4444',
                    }}
                  >
                    {scenario.projectedImpacts.customerSatisfaction > 0 ? '+' : ''}
                    {scenario.projectedImpacts.customerSatisfaction}%
                  </div>
                </div>
              </div>
            </div>

            {/* Risks & Opportunities */}
            <div className="scenario-section">
              <div className="risks-opportunities">
                <div className="risks-col">
                  <h4>⚠️ Risks</h4>
                  <ul>
                    {scenario.risks.map((risk, idx) => (
                      <li key={idx}>{risk}</li>
                    ))}
                  </ul>
                </div>
                <div className="opportunities-col">
                  <h4>✨ Opportunities</h4>
                  <ul>
                    {scenario.opportunities.map((opp, idx) => (
                      <li key={idx}>{opp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="scenario-actions">
              <button className="btn-primary">Select Scenario</button>
              <button className="btn-secondary">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scenarios;
