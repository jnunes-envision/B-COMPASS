/**
 * Mock data for Busula App
 * This file contains comprehensive mock data for all operational pillars and activities
 */

import {
  Company,
  User,
  Assessment,
  Pillar,
  Activity,
  KPIMetric,
  DashboardData,
  BenchmarkData,
  CompanyStage,
  OperationalPillar,
  ImpactDimension,
  ImpactWeights,
} from '../types';

// Helper function to create impact weights
const createImpactWeights = (
  revenue: number,
  technical: number,
  retention: number,
  growth: number
): ImpactWeights => ({
  [ImpactDimension.REVENUE_GENERATION]: revenue,
  [ImpactDimension.TECHNICAL_EXECUTION]: technical,
  [ImpactDimension.CUSTOMER_RETENTION]: retention,
  [ImpactDimension.GROWTH_CAPACITY]: growth,
});

// Mock Company
export const mockCompany: Company = {
  id: 'comp-001',
  name: 'TechStartup Inc.',
  industry: 'SaaS',
  stage: CompanyStage.SEED,
  foundedDate: new Date('2023-01-15'),
  employeeCount: 12,
  monthlyRecurringRevenue: 25000,
  cashRunway: 18,
};

// Mock User
export const mockUser: User = {
  id: 'user-001',
  name: 'John Founder',
  email: 'john@techstartup.com',
  role: 'CEO & Founder',
  companyId: 'comp-001',
};

// Mock Activities for each pillar

// 1. Financial Planning & Budget Management
const financialPlanningActivities: Activity[] = [
  {
    id: 'fp-001',
    name: 'Budget Development',
    description: 'Create comprehensive budgets for different time periods',
    currentMaturityLevel: 3,
    targetMaturityLevel: 4,
    impactWeights: createImpactWeights(8, 5, 3, 9),
    recommendations: [
      'Implement rolling 12-month forecasts',
      'Add scenario planning capabilities',
      'Integrate with accounting software',
    ],
    lastAssessed: new Date('2024-11-01'),
  },
  {
    id: 'fp-002',
    name: 'Cash Flow Monitoring',
    description: 'Regular monitoring and management of cash flow',
    currentMaturityLevel: 4,
    targetMaturityLevel: 5,
    impactWeights: createImpactWeights(9, 4, 5, 10),
    recommendations: [
      'Set up automated cash flow alerts',
      'Implement 13-week rolling forecasts',
    ],
    lastAssessed: new Date('2024-11-01'),
  },
  {
    id: 'fp-003',
    name: 'Emergency Fund Management',
    description: 'Maintain adequate emergency reserves',
    currentMaturityLevel: 2,
    targetMaturityLevel: 4,
    impactWeights: createImpactWeights(6, 3, 4, 8),
    recommendations: [
      'Establish 6-month runway target',
      'Create emergency fund policy',
      'Set up automatic transfers to reserve account',
    ],
    lastAssessed: new Date('2024-11-01'),
  },
  {
    id: 'fp-004',
    name: 'Financial Performance Review',
    description: 'Regular review of financial performance against targets',
    currentMaturityLevel: 3,
    targetMaturityLevel: 4,
    impactWeights: createImpactWeights(7, 6, 4, 7),
    recommendations: [
      'Schedule monthly finance review meetings',
      'Create executive dashboard',
    ],
    lastAssessed: new Date('2024-11-01'),
  },
];

// 2. Customer Acquisition & Retention
const customerAcquisitionActivities: Activity[] = [
  {
    id: 'ca-001',
    name: 'Target Market Identification',
    description: 'Identify and segment target customer markets',
    currentMaturityLevel: 4,
    targetMaturityLevel: 5,
    impactWeights: createImpactWeights(10, 4, 6, 9),
    recommendations: [
      'Conduct deeper market research',
      'Create detailed buyer personas',
    ],
    lastAssessed: new Date('2024-11-02'),
  },
  {
    id: 'ca-002',
    name: 'Marketing Strategy Execution',
    description: 'Implement cost-effective marketing campaigns',
    currentMaturityLevel: 3,
    targetMaturityLevel: 4,
    impactWeights: createImpactWeights(9, 5, 5, 8),
    recommendations: [
      'Implement marketing automation',
      'A/B test all major campaigns',
      'Build content marketing engine',
    ],
    lastAssessed: new Date('2024-11-02'),
  },
  {
    id: 'ca-003',
    name: 'Customer Service Excellence',
    description: 'Provide exceptional customer support',
    currentMaturityLevel: 4,
    targetMaturityLevel: 5,
    impactWeights: createImpactWeights(6, 6, 10, 7),
    recommendations: [
      'Implement customer support software',
      'Create comprehensive help documentation',
    ],
    lastAssessed: new Date('2024-11-02'),
  },
  {
    id: 'ca-004',
    name: 'Loyalty & Referral Programs',
    description: 'Build and manage customer loyalty initiatives',
    currentMaturityLevel: 2,
    targetMaturityLevel: 4,
    impactWeights: createImpactWeights(8, 3, 9, 8),
    recommendations: [
      'Launch referral program with incentives',
      'Create customer success milestones',
      'Implement NPS tracking',
    ],
    lastAssessed: new Date('2024-11-02'),
  },
];

// 3. Operational Efficiency & Process Optimization
const operationalEfficiencyActivities: Activity[] = [
  {
    id: 'oe-001',
    name: 'Workflow Streamlining',
    description: 'Optimize and document core business processes',
    currentMaturityLevel: 3,
    targetMaturityLevel: 4,
    impactWeights: createImpactWeights(6, 9, 5, 8),
    recommendations: [
      'Map all critical workflows',
      'Identify and eliminate bottlenecks',
      'Create SOPs for key processes',
    ],
    lastAssessed: new Date('2024-10-28'),
  },
  {
    id: 'oe-002',
    name: 'Automation Investment',
    description: 'Implement automation tools to reduce manual work',
    currentMaturityLevel: 3,
    targetMaturityLevel: 5,
    impactWeights: createImpactWeights(7, 10, 4, 9),
    recommendations: [
      'Audit manual processes for automation opportunities',
      'Invest in workflow automation tools',
      'Train team on automation best practices',
    ],
    lastAssessed: new Date('2024-10-28'),
  },
  {
    id: 'oe-003',
    name: 'Employee Training',
    description: 'Continuous skill development for team members',
    currentMaturityLevel: 2,
    targetMaturityLevel: 4,
    impactWeights: createImpactWeights(5, 8, 6, 9),
    recommendations: [
      'Create training budget and plan',
      'Implement learning management system',
      'Track skill development progress',
    ],
    lastAssessed: new Date('2024-10-28'),
  },
  {
    id: 'oe-004',
    name: 'KPI Monitoring',
    description: 'Track and analyze key performance indicators',
    currentMaturityLevel: 4,
    targetMaturityLevel: 5,
    impactWeights: createImpactWeights(7, 7, 6, 8),
    recommendations: [
      'Expand KPI dashboard coverage',
      'Implement predictive analytics',
    ],
    lastAssessed: new Date('2024-10-28'),
  },
];

// 4. Talent Acquisition & Development
const talentManagementActivities: Activity[] = [
  {
    id: 'tm-001',
    name: 'Strategic Hiring',
    description: 'Recruit skilled and adaptable team members',
    currentMaturityLevel: 3,
    targetMaturityLevel: 4,
    impactWeights: createImpactWeights(6, 9, 5, 10),
    recommendations: [
      'Develop hiring playbook',
      'Implement structured interview process',
      'Build employer brand',
    ],
    lastAssessed: new Date('2024-10-30'),
  },
  {
    id: 'tm-002',
    name: 'Training & Mentorship',
    description: 'Provide ongoing development opportunities',
    currentMaturityLevel: 2,
    targetMaturityLevel: 4,
    impactWeights: createImpactWeights(5, 8, 7, 9),
    recommendations: [
      'Launch mentorship program',
      'Create career development paths',
      'Budget for external training',
    ],
    lastAssessed: new Date('2024-10-30'),
  },
  {
    id: 'tm-003',
    name: 'Work Environment',
    description: 'Foster positive and productive work culture',
    currentMaturityLevel: 4,
    targetMaturityLevel: 5,
    impactWeights: createImpactWeights(5, 7, 8, 8),
    recommendations: [
      'Conduct regular culture surveys',
      'Enhance remote work policies',
    ],
    lastAssessed: new Date('2024-10-30'),
  },
  {
    id: 'tm-004',
    name: 'Recognition & Retention',
    description: 'Reward and retain top talent',
    currentMaturityLevel: 3,
    targetMaturityLevel: 4,
    impactWeights: createImpactWeights(6, 8, 7, 9),
    recommendations: [
      'Implement peer recognition system',
      'Review compensation regularly',
      'Create retention bonus structure',
    ],
    lastAssessed: new Date('2024-10-30'),
  },
];

// 5. Risk Management & Compliance
const riskComplianceActivities: Activity[] = [
  {
    id: 'rc-001',
    name: 'Risk Identification',
    description: 'Systematically identify and assess business risks',
    currentMaturityLevel: 2,
    targetMaturityLevel: 4,
    impactWeights: createImpactWeights(7, 6, 8, 8),
    recommendations: [
      'Create comprehensive risk register',
      'Conduct quarterly risk assessments',
      'Assign risk owners',
    ],
    lastAssessed: new Date('2024-10-25'),
  },
  {
    id: 'rc-002',
    name: 'Compliance Management',
    description: 'Ensure legal and regulatory compliance',
    currentMaturityLevel: 3,
    targetMaturityLevel: 4,
    impactWeights: createImpactWeights(5, 7, 9, 7),
    recommendations: [
      'Conduct compliance audit',
      'Implement compliance tracking system',
      'Train team on compliance requirements',
    ],
    lastAssessed: new Date('2024-10-25'),
  },
  {
    id: 'rc-003',
    name: 'Insurance Coverage',
    description: 'Maintain adequate insurance protection',
    currentMaturityLevel: 3,
    targetMaturityLevel: 4,
    impactWeights: createImpactWeights(4, 5, 7, 6),
    recommendations: [
      'Review coverage annually',
      'Consider cyber insurance',
      'Document all policies centrally',
    ],
    lastAssessed: new Date('2024-10-25'),
  },
  {
    id: 'rc-004',
    name: 'Compliance Auditing',
    description: 'Regular internal compliance audits',
    currentMaturityLevel: 2,
    targetMaturityLevel: 3,
    impactWeights: createImpactWeights(4, 6, 8, 6),
    recommendations: [
      'Schedule quarterly internal audits',
      'Create audit checklist',
      'Track and remediate findings',
    ],
    lastAssessed: new Date('2024-10-25'),
  },
];

// 6. Strategic Planning & Business Development
const strategicPlanningActivities: Activity[] = [
  {
    id: 'sp-001',
    name: 'Vision & Mission Definition',
    description: 'Clear articulation of company vision and mission',
    currentMaturityLevel: 4,
    targetMaturityLevel: 5,
    impactWeights: createImpactWeights(6, 5, 6, 10),
    recommendations: [
      'Communicate vision regularly to team',
      'Align all initiatives with mission',
    ],
    lastAssessed: new Date('2024-11-03'),
  },
  {
    id: 'sp-002',
    name: 'Goal Setting',
    description: 'Set and track achievable business goals',
    currentMaturityLevel: 4,
    targetMaturityLevel: 5,
    impactWeights: createImpactWeights(8, 7, 6, 9),
    recommendations: [
      'Implement OKR framework',
      'Track progress weekly',
    ],
    lastAssessed: new Date('2024-11-03'),
  },
  {
    id: 'sp-003',
    name: 'Growth Opportunity Exploration',
    description: 'Identify and evaluate new market opportunities',
    currentMaturityLevel: 3,
    targetMaturityLevel: 4,
    impactWeights: createImpactWeights(9, 5, 5, 10),
    recommendations: [
      'Conduct market research quarterly',
      'Create opportunity pipeline',
      'Develop market entry frameworks',
    ],
    lastAssessed: new Date('2024-11-03'),
  },
  {
    id: 'sp-004',
    name: 'Partnership Development',
    description: 'Build strategic partnerships for growth',
    currentMaturityLevel: 2,
    targetMaturityLevel: 4,
    impactWeights: createImpactWeights(8, 6, 6, 9),
    recommendations: [
      'Identify potential strategic partners',
      'Create partnership criteria',
      'Develop partnership playbook',
    ],
    lastAssessed: new Date('2024-11-03'),
  },
];

// 7. Financial Reporting & Transparency
const financialReportingActivities: Activity[] = [
  {
    id: 'fr-001',
    name: 'Financial Record Maintenance',
    description: 'Accurate and up-to-date financial records',
    currentMaturityLevel: 4,
    targetMaturityLevel: 5,
    impactWeights: createImpactWeights(7, 7, 6, 8),
    recommendations: [
      'Implement real-time accounting',
      'Automate bank reconciliation',
    ],
    lastAssessed: new Date('2024-11-04'),
  },
  {
    id: 'fr-002',
    name: 'Stakeholder Reporting',
    description: 'Regular performance updates to stakeholders',
    currentMaturityLevel: 3,
    targetMaturityLevel: 4,
    impactWeights: createImpactWeights(6, 5, 7, 8),
    recommendations: [
      'Create monthly investor update template',
      'Automate report generation',
      'Schedule regular board meetings',
    ],
    lastAssessed: new Date('2024-11-04'),
  },
  {
    id: 'fr-003',
    name: 'Financial Communication',
    description: 'Clear and transparent financial communication',
    currentMaturityLevel: 3,
    targetMaturityLevel: 4,
    impactWeights: createImpactWeights(6, 5, 8, 7),
    recommendations: [
      'Develop financial communication guidelines',
      'Train team on financial literacy',
      'Create stakeholder communication calendar',
    ],
    lastAssessed: new Date('2024-11-04'),
  },
  {
    id: 'fr-004',
    name: 'Stakeholder Response',
    description: 'Rapid and effective response to stakeholder concerns',
    currentMaturityLevel: 4,
    targetMaturityLevel: 5,
    impactWeights: createImpactWeights(5, 6, 9, 7),
    recommendations: [
      'Set up stakeholder Q&A system',
      'Establish response time SLAs',
    ],
    lastAssessed: new Date('2024-11-04'),
  },
];

// Calculate scores for a pillar
const calculatePillarScores = (activities: Activity[]): { overallScore: number; dimensionScores: ImpactWeights } => {
  const maxPossibleScore = activities.length * 5 * 10; // 5 max maturity * 10 max weight

  const dimensionScores: ImpactWeights = {
    [ImpactDimension.REVENUE_GENERATION]: 0,
    [ImpactDimension.TECHNICAL_EXECUTION]: 0,
    [ImpactDimension.CUSTOMER_RETENTION]: 0,
    [ImpactDimension.GROWTH_CAPACITY]: 0,
  };

  activities.forEach((activity) => {
    Object.entries(activity.impactWeights).forEach(([dimension, weight]) => {
      dimensionScores[dimension as ImpactDimension] += activity.currentMaturityLevel * weight;
    });
  });

  // Normalize dimension scores to 0-100
  Object.keys(dimensionScores).forEach((dimension) => {
    dimensionScores[dimension as ImpactDimension] =
      (dimensionScores[dimension as ImpactDimension] / maxPossibleScore) * 100;
  });

  const overallScore = Object.values(dimensionScores).reduce((a, b) => a + b, 0) / 4;

  return { overallScore, dimensionScores };
};

// Mock Pillars
export const mockPillars: Pillar[] = [
  {
    id: OperationalPillar.FINANCIAL_PLANNING,
    name: 'Financial Planning & Budget Management',
    description: 'Budget development, cash flow monitoring, and financial performance management',
    activities: financialPlanningActivities,
    ...calculatePillarScores(financialPlanningActivities),
  },
  {
    id: OperationalPillar.CUSTOMER_ACQUISITION,
    name: 'Customer Acquisition & Retention',
    description: 'Market identification, marketing strategy, customer service, and loyalty programs',
    activities: customerAcquisitionActivities,
    ...calculatePillarScores(customerAcquisitionActivities),
  },
  {
    id: OperationalPillar.OPERATIONAL_EFFICIENCY,
    name: 'Operational Efficiency & Process Optimization',
    description: 'Workflow optimization, automation, training, and KPI monitoring',
    activities: operationalEfficiencyActivities,
    ...calculatePillarScores(operationalEfficiencyActivities),
  },
  {
    id: OperationalPillar.TALENT_MANAGEMENT,
    name: 'Talent Acquisition & Development',
    description: 'Hiring, training, work environment, and employee retention',
    activities: talentManagementActivities,
    ...calculatePillarScores(talentManagementActivities),
  },
  {
    id: OperationalPillar.RISK_COMPLIANCE,
    name: 'Risk Management & Compliance',
    description: 'Risk identification, compliance management, insurance, and auditing',
    activities: riskComplianceActivities,
    ...calculatePillarScores(riskComplianceActivities),
  },
  {
    id: OperationalPillar.STRATEGIC_PLANNING,
    name: 'Strategic Planning & Business Development',
    description: 'Vision, goal setting, growth opportunities, and partnerships',
    activities: strategicPlanningActivities,
    ...calculatePillarScores(strategicPlanningActivities),
  },
  {
    id: OperationalPillar.FINANCIAL_REPORTING,
    name: 'Financial Reporting & Transparency',
    description: 'Financial records, stakeholder reporting, and communication',
    activities: financialReportingActivities,
    ...calculatePillarScores(financialReportingActivities),
  },
];

// Calculate overall assessment scores
const calculateOverallScores = (pillars: Pillar[]): { overallHealthScore: number; dimensionScores: ImpactWeights } => {
  const dimensionScores: ImpactWeights = {
    [ImpactDimension.REVENUE_GENERATION]: 0,
    [ImpactDimension.TECHNICAL_EXECUTION]: 0,
    [ImpactDimension.CUSTOMER_RETENTION]: 0,
    [ImpactDimension.GROWTH_CAPACITY]: 0,
  };

  pillars.forEach((pillar) => {
    Object.entries(pillar.dimensionScores).forEach(([dimension, score]) => {
      dimensionScores[dimension as ImpactDimension] += score;
    });
  });

  // Average across pillars
  Object.keys(dimensionScores).forEach((dimension) => {
    dimensionScores[dimension as ImpactDimension] /= pillars.length;
  });

  const overallHealthScore = Object.values(dimensionScores).reduce((a, b) => a + b, 0) / 4;

  return { overallHealthScore, dimensionScores };
};

// Mock Assessment
export const mockAssessment: Assessment = {
  id: 'assess-001',
  companyId: 'comp-001',
  createdAt: new Date('2024-10-15'),
  updatedAt: new Date('2024-11-05'),
  completionPercentage: 100,
  pillars: mockPillars,
  ...calculateOverallScores(mockPillars),
};

// Mock KPI Metrics
export const mockKPIMetrics: KPIMetric[] = [
  {
    id: 'kpi-001',
    name: 'Cash Runway',
    value: 18,
    unit: 'months',
    trend: 'stable',
    changePercentage: 0,
    category: 'Financial',
  },
  {
    id: 'kpi-002',
    name: 'Monthly Burn Rate',
    value: '$45,000',
    unit: 'USD',
    trend: 'down',
    changePercentage: -8,
    category: 'Financial',
  },
  {
    id: 'kpi-003',
    name: 'MRR',
    value: '$25,000',
    unit: 'USD',
    trend: 'up',
    changePercentage: 15,
    category: 'Revenue',
  },
  {
    id: 'kpi-004',
    name: 'Customer Acquisition Cost',
    value: '$850',
    unit: 'USD',
    trend: 'down',
    changePercentage: -12,
    category: 'Customer',
  },
  {
    id: 'kpi-005',
    name: 'Customer Lifetime Value',
    value: '$12,500',
    unit: 'USD',
    trend: 'up',
    changePercentage: 20,
    category: 'Customer',
  },
  {
    id: 'kpi-006',
    name: 'Churn Rate',
    value: 3.2,
    unit: '%',
    trend: 'down',
    changePercentage: -15,
    category: 'Customer',
  },
  {
    id: 'kpi-007',
    name: 'Net Promoter Score',
    value: 65,
    unit: 'points',
    trend: 'up',
    changePercentage: 8,
    category: 'Customer',
  },
  {
    id: 'kpi-008',
    name: 'Employee Retention',
    value: 94,
    unit: '%',
    trend: 'stable',
    changePercentage: 2,
    category: 'Talent',
  },
];

// Mock Dashboard Data
export const mockDashboardData: DashboardData = {
  company: mockCompany,
  user: mockUser,
  currentAssessment: mockAssessment,
  kpiMetrics: mockKPIMetrics,
  recentActivities: [
    {
      id: 'act-001',
      type: 'assessment_update',
      description: 'Updated Financial Planning maturity assessment',
      timestamp: new Date('2024-11-05T10:30:00'),
    },
    {
      id: 'act-002',
      type: 'goal_completed',
      description: 'Completed Q4 OKR: Launch new customer referral program',
      timestamp: new Date('2024-11-04T15:45:00'),
    },
    {
      id: 'act-003',
      type: 'new_hire',
      description: 'Sarah Johnson joined as Senior Product Manager',
      timestamp: new Date('2024-11-03T09:00:00'),
    },
    {
      id: 'act-004',
      type: 'metric_alert',
      description: 'MRR grew 15% month-over-month',
      timestamp: new Date('2024-11-01T08:00:00'),
    },
  ],
  alerts: [
    {
      id: 'alert-001',
      severity: 'medium',
      message: 'Emergency fund below recommended 6-month target',
      pillarId: OperationalPillar.FINANCIAL_PLANNING,
    },
    {
      id: 'alert-002',
      severity: 'low',
      message: 'Training & mentorship program needs attention',
      pillarId: OperationalPillar.TALENT_MANAGEMENT,
    },
    {
      id: 'alert-003',
      severity: 'high',
      message: 'Risk register not updated in 90 days',
      pillarId: OperationalPillar.RISK_COMPLIANCE,
    },
  ],
};

// Mock Benchmark Data
export const mockBenchmarkData: BenchmarkData = {
  industry: {
    averageScore: 58.3,
    percentile: 72,
  },
  stage: {
    averageScore: 61.5,
    percentile: 68,
  },
  topPerformers: {
    averageScore: 82.7,
  },
};
