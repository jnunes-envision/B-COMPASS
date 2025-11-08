import { usePillars } from '../hooks/useMockData';
import './Pillars.css';

const Pillars = () => {
  const { data: pillars, loading, error } = usePillars();

  if (loading) {
    return <div className="loading-container"><div className="spinner"></div></div>;
  }

  if (error || !pillars) {
    return <div className="error-container">Error loading pillars data</div>;
  }

  const getMaturityEmoji = (level: number): string => {
    return '⭐'.repeat(level);
  };

  const getMaturityLevel = (level: number): string => {
    const levels = ['', 'Ad-hoc', 'Inconsistent', 'Defined', 'Managed', 'Optimized'];
    return levels[level];
  };

  return (
    <div className="pillars-page">
      <div className="page-header">
        <h1>🏛️ Operational Pillars</h1>
        <p>Deep dive into each operational area and its maturity</p>
      </div>

      <div className="pillars-detailed-list">
        {pillars.map((pillar) => (
          <div key={pillar.id} className="pillar-detail-section">
            <div className="pillar-detail-header">
              <div className="pillar-info">
                <h2>{pillar.name}</h2>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
              <div className="pillar-score-box">
                <div className="score-value">{pillar.overallScore.toFixed(1)}</div>
                <div className="score-text">Overall Score</div>
              </div>
            </div>

            <div className="dimension-scores">
              <h3>Dimension Scores</h3>
              <div className="dimensions-mini-grid">
                {Object.entries(pillar.dimensionScores).map(([dimension, score]) => (
                  <div key={dimension} className="dimension-mini">
                    <div className="dimension-name">
                      {dimension.replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase())}
                    </div>
                    <div className="dimension-score-mini">{score.toFixed(1)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="activities-section">
              <h3>Activities ({pillar.activities.length})</h3>
              <div className="activities-grid">
                {pillar.activities.map((activity) => (
                  <div key={activity.id} className="activity-card">
                    <div className="activity-header">
                      <h4>{activity.name}</h4>
                      <div className="maturity-display">
                        <span className="maturity-stars">
                          {getMaturityEmoji(activity.currentMaturityLevel)}
                        </span>
                        <span className="maturity-text">
                          Level {activity.currentMaturityLevel}: {getMaturityLevel(activity.currentMaturityLevel)}
                        </span>
                      </div>
                    </div>

                    <p className="activity-desc">{activity.description}</p>

                    <div className="maturity-progression">
                      <div className="progression-label">Target: Level {activity.targetMaturityLevel}</div>
                      <div className="progression-bar">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            className={`progression-dot ${level <= activity.currentMaturityLevel ? 'current' : ''} ${level === activity.targetMaturityLevel ? 'target' : ''}`}
                          />
                        ))}
                      </div>
                    </div>

                    {activity.recommendations && activity.recommendations.length > 0 && (
                      <div className="recommendations">
                        <h5>Recommendations:</h5>
                        <ul>
                          {activity.recommendations.slice(0, 2).map((rec, idx) => (
                            <li key={idx}>{rec}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="impact-weights">
                      <h5>Impact Weights:</h5>
                      <div className="weights-grid">
                        {Object.entries(activity.impactWeights).map(([dimension, weight]) => (
                          <div key={dimension} className="weight-item">
                            <div className="weight-bar" style={{ width: `${weight * 10}%` }}></div>
                            <span className="weight-value">{weight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {activity.lastAssessed && (
                      <div className="last-assessed">
                        Last assessed: {new Date(activity.lastAssessed).toLocaleDateString()}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pillars;
