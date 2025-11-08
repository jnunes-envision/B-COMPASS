import { mockAntiPatterns } from '../data/interconnectionsData';
import { OperationalPillar } from '../types';
import './AntiPatterns.css';

const AntiPatterns = () => {
  const pillarNames: Record<OperationalPillar, string> = {
    [OperationalPillar.FINANCIAL_PLANNING]: 'Financial Planning',
    [OperationalPillar.CUSTOMER_ACQUISITION]: 'Customer Acquisition',
    [OperationalPillar.OPERATIONAL_EFFICIENCY]: 'Operational Efficiency',
    [OperationalPillar.TALENT_MANAGEMENT]: 'Talent Management',
    [OperationalPillar.RISK_COMPLIANCE]: 'Risk & Compliance',
    [OperationalPillar.STRATEGIC_PLANNING]: 'Strategic Planning',
    [OperationalPillar.FINANCIAL_REPORTING]: 'Financial Reporting',
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return '#ef4444';
      case 'medium': return '#f59e0b';
      case 'low': return '#10b981';
      default: return '#6b7280';
    }
  };

  const detectedPatterns = mockAntiPatterns.filter((p) => p.detected);
  const notDetected = mockAntiPatterns.filter((p) => !p.detected);

  return (
    <div className="anti-patterns-page">
      <div className="page-header">
        <h1>⚠️ Anti-Pattern Detection</h1>
        <p>Identify and address common startup organizational dysfunctions</p>
      </div>

      {/* Detection Summary */}
      <section className="detection-summary">
        <div className="summary-cards">
          <div className="summary-stat">
            <div className="stat-number" style={{ color: '#ef4444' }}>
              {detectedPatterns.length}
            </div>
            <div className="stat-label">Detected Issues</div>
          </div>
          <div className="summary-stat">
            <div className="stat-number" style={{ color: '#10b981' }}>
              {notDetected.length}
            </div>
            <div className="stat-label">Not Detected</div>
          </div>
          <div className="summary-stat">
            <div className="stat-number" style={{ color: '#f59e0b' }}>
              {detectedPatterns.filter((p) => p.severity === 'high').length}
            </div>
            <div className="stat-label">High Severity</div>
          </div>
        </div>
      </section>

      {/* Detected Anti-Patterns */}
      {detectedPatterns.length > 0 && (
        <section className="patterns-section">
          <h2>🚨 Detected Anti-Patterns</h2>
          <div className="patterns-list">
            {detectedPatterns.map((pattern) => (
              <div key={pattern.id} className="pattern-card detected">
                <div className="pattern-header">
                  <div className="pattern-title">
                    <h3>{pattern.name}</h3>
                    <span
                      className="severity-badge"
                      style={{ backgroundColor: getSeverityColor(pattern.severity) }}
                    >
                      {pattern.severity.toUpperCase()}
                    </span>
                  </div>
                  <div className="affected-pillars">
                    {pattern.affectedPillars.map((pillarId) => (
                      <span key={pillarId} className="pillar-badge">
                        {pillarNames[pillarId]}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="pattern-description">{pattern.description}</p>

                <div className="pattern-details">
                  <div className="detail-section">
                    <h4>Symptoms:</h4>
                    <ul>
                      {pattern.symptoms.map((symptom, idx) => (
                        <li key={idx}>{symptom}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="detail-section">
                    <h4>Consequences:</h4>
                    <ul className="consequences-list">
                      {pattern.consequences.map((consequence, idx) => (
                        <li key={idx}>{consequence}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="solution-section">
                    <h4>✅ Recommended Solution:</h4>
                    <p>{pattern.solution}</p>
                  </div>
                </div>

                <div className="pattern-actions">
                  <button className="btn-resolve">Create Action Plan</button>
                  <button className="btn-dismiss">Dismiss</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Not Detected (Best Practices) */}
      <section className="patterns-section">
        <h2>✅ Not Currently Detected</h2>
        <p className="section-description">
          These anti-patterns are not currently present in your organization. Keep up the good work!
        </p>
        <div className="patterns-grid">
          {notDetected.map((pattern) => (
            <div key={pattern.id} className="pattern-card-small">
              <h4>{pattern.name}</h4>
              <p>{pattern.description}</p>
              <div className="affected-pillars-small">
                {pattern.affectedPillars.map((pillarId) => (
                  <span key={pillarId} className="pillar-badge-small">
                    {pillarNames[pillarId]}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AntiPatterns;
