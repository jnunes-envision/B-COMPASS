import { useState } from 'react';
import { useDashboardData } from '../hooks/useMockData';
import { ImpactDimension } from '../types';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from 'recharts';
import { FiTrendingUp, FiTrendingDown, FiMinus, FiAlertCircle, FiCheckCircle, FiClock } from 'react-icons/fi';
import { Card, StatCard, Button, ButtonGroup, SearchInput, DashboardSkeleton, Badge, Tooltip } from '../components/ui';
import './DashboardEnhanced.css';

const DashboardEnhanced = () => {
  const { data, loading, error } = useDashboardData();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedView, setSelectedView] = useState<'overview' | 'pillars' | 'kpis'>('overview');

  if (loading) {
    return <DashboardSkeleton />;
  }

  if (error || !data) {
    return (
      <div className="error-container">
        <FiAlertCircle size={48} />
        <h2>Error Loading Data</h2>
        <p>{error?.message || 'Unknown error occurred'}</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </div>
    );
  }

  const { company, currentAssessment, kpiMetrics, recentActivities, alerts } = data;

  // Prepare data for charts
  const dimensionChartData = [
    {
      dimension: 'Revenue',
      score: currentAssessment.dimensionScores[ImpactDimension.REVENUE_GENERATION],
      fullMark: 100,
    },
    {
      dimension: 'Technical',
      score: currentAssessment.dimensionScores[ImpactDimension.TECHNICAL_EXECUTION],
      fullMark: 100,
    },
    {
      dimension: 'Retention',
      score: currentAssessment.dimensionScores[ImpactDimension.CUSTOMER_RETENTION],
      fullMark: 100,
    },
    {
      dimension: 'Growth',
      score: currentAssessment.dimensionScores[ImpactDimension.GROWTH_CAPACITY],
      fullMark: 100,
    },
  ];

  const pillarChartData = currentAssessment.pillars.map((pillar) => ({
    name: pillar.name.replace(/&/g, '&\n').substring(0, 25),
    score: pillar.overallScore,
  }));

  // Filter pillars based on search
  const filteredPillars = currentAssessment.pillars.filter((pillar) =>
    pillar.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    pillar.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <FiTrendingUp />;
      case 'down':
        return <FiTrendingDown />;
      default:
        return <FiMinus />;
    }
  };

  const getHealthStatus = (score: number) => {
    if (score >= 80) return { label: 'Excellent', color: '#10b981' };
    if (score >= 70) return { label: 'Good', color: '#3b82f6' };
    if (score >= 60) return { label: 'Fair', color: '#f59e0b' };
    return { label: 'Needs Improvement', color: '#ef4444' };
  };

  const healthStatus = getHealthStatus(currentAssessment.overallHealthScore);

  return (
    <div className="dashboard-enhanced">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-content-wrapper">
          <div className="header-text">
            <h1>Dashboard Overview</h1>
            <p>{company.name} • {company.stage.replace('_', ' ')} • {company.industry}</p>
          </div>
          <ButtonGroup>
            <Button variant="outline" size="small">
              <FiClock /> Last updated: 2 min ago
            </Button>
            <Button variant="primary" size="small">Export Report</Button>
          </ButtonGroup>
        </div>
      </div>

      {/* View Selector */}
      <div className="view-selector">
        <ButtonGroup>
          <Button
            variant={selectedView === 'overview' ? 'primary' : 'ghost'}
            onClick={() => setSelectedView('overview')}
          >
            Overview
          </Button>
          <Button
            variant={selectedView === 'pillars' ? 'primary' : 'ghost'}
            onClick={() => setSelectedView('pillars')}
          >
            Pillars
          </Button>
          <Button
            variant={selectedView === 'kpis' ? 'primary' : 'ghost'}
            onClick={() => setSelectedView('kpis')}
          >
            KPIs
          </Button>
        </ButtonGroup>
      </div>

      {/* Alert Banner */}
      {alerts.length > 0 && (
        <div className="alert-banner">
          <FiAlertCircle />
          <span>{alerts.length} alert{alerts.length > 1 ? 's' : ''} require attention</span>
          <Button variant="ghost" size="small">View All</Button>
        </div>
      )}

      {/* Main Stats */}
      <div className="stats-grid">
        <StatCard
          label="Overall Health"
          value={currentAssessment.overallHealthScore.toFixed(1)}
          icon={<FiCheckCircle />}
          color={healthStatus.color}
        />
        <StatCard
          label="Employees"
          value={company.employeeCount}
          icon={<span>👥</span>}
          color="#3b82f6"
        />
        <StatCard
          label="MRR"
          value={`$${(company.monthlyRecurringRevenue! / 1000).toFixed(0)}K`}
          change={15}
          trend="up"
          icon={<span>💰</span>}
          color="#10b981"
        />
        <StatCard
          label="Cash Runway"
          value={`${company.cashRunway} mo`}
          icon={<span>📈</span>}
          color="#f59e0b"
        />
      </div>

      {selectedView === 'overview' && (
        <>
          {/* Charts Section */}
          <div className="charts-section">
            <div className="chart-row">
              <Card className="chart-card">
                <h3>Impact Dimensions</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <RadarChart data={dimensionChartData}>
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis dataKey="dimension" tick={{ fill: '#6b7280', fontSize: 12 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: '#6b7280' }} />
                    <Radar
                      name="Current Score"
                      dataKey="score"
                      stroke="#667eea"
                      fill="#667eea"
                      fillOpacity={0.6}
                    />
                    <RechartsTooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </Card>

              <Card className="chart-card">
                <h3>Pillar Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={pillarChartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis
                      dataKey="name"
                      tick={{ fill: '#6b7280', fontSize: 10 }}
                      angle={-45}
                      textAnchor="end"
                      height={100}
                    />
                    <YAxis domain={[0, 100]} tick={{ fill: '#6b7280' }} />
                    <RechartsTooltip />
                    <Bar dataKey="score" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                    <defs>
                      <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#667eea" stopOpacity={1} />
                        <stop offset="100%" stopColor="#764ba2" stopOpacity={1} />
                      </linearGradient>
                    </defs>
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </div>
          </div>

          {/* Recent Activities */}
          <Card className="activities-card">
            <div className="card-header-row">
              <h3>Recent Activities</h3>
              <Button variant="ghost" size="small">View All</Button>
            </div>
            <div className="activities-timeline">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="timeline-item">
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <Badge variant="info" size="small">{activity.type.replace('_', ' ')}</Badge>
                    <p>{activity.description}</p>
                    <span className="timeline-time">
                      {new Date(activity.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </>
      )}

      {selectedView === 'pillars' && (
        <>
          <div className="search-section">
            <SearchInput
              value={searchTerm}
              onChange={setSearchTerm}
              placeholder="Search pillars..."
            />
          </div>

          <div className="pillars-grid-enhanced">
            {filteredPillars.map((pillar) => (
              <Card key={pillar.id} className="pillar-card-enhanced" hover>
                <div className="pillar-header">
                  <h3>{pillar.name}</h3>
                  <Tooltip content={`Score: ${pillar.overallScore.toFixed(1)}/100`}>
                    <div className="score-badge" style={{
                      background: pillar.overallScore >= 70 ? '#d1fae5' : pillar.overallScore >= 50 ? '#fef3c7' : '#fee2e2',
                      color: pillar.overallScore >= 70 ? '#065f46' : pillar.overallScore >= 50 ? '#92400e' : '#991b1b',
                    }}>
                      {pillar.overallScore.toFixed(1)}
                    </div>
                  </Tooltip>
                </div>
                <p className="pillar-description">{pillar.description}</p>
                <div className="pillar-stats">
                  <span>{pillar.activities.length} activities</span>
                  <span>•</span>
                  <span>{pillar.activities.filter((a) => a.currentMaturityLevel >= 4).length} mature</span>
                </div>
                <div className="pillar-progress">
                  <div className="progress-bar-enhanced">
                    <div
                      className="progress-fill-enhanced"
                      style={{ width: `${pillar.overallScore}%` }}
                    />
                  </div>
                </div>
                <Button variant="ghost" size="small" fullWidth>View Details</Button>
              </Card>
            ))}
          </div>
        </>
      )}

      {selectedView === 'kpis' && (
        <div className="kpis-grid">
          {kpiMetrics.map((kpi) => (
            <Card key={kpi.id} className="kpi-card-enhanced" hover>
              <div className="kpi-header-row">
                <span className="kpi-category-badge">{kpi.category}</span>
                <span className="kpi-trend-icon">{getTrendIcon(kpi.trend)}</span>
              </div>
              <h4>{kpi.name}</h4>
              <div className="kpi-value-large">
                {typeof kpi.value === 'number' ? kpi.value.toLocaleString() : kpi.value}
                {kpi.unit !== 'USD' && <span className="kpi-unit"> {kpi.unit}</span>}
              </div>
              {kpi.changePercentage !== undefined && kpi.changePercentage !== 0 && (
                <div className={`kpi-change-enhanced ${kpi.trend}`}>
                  {kpi.changePercentage > 0 ? '+' : ''}
                  {kpi.changePercentage}% vs last month
                </div>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default DashboardEnhanced;
