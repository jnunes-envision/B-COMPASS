/**
 * Mock data for cross-functional interconnections
 */

import {
  Dependency,
  RoleProfile,
  Role,
  CrossFunctionalMaturity,
  CrossFunctionalMaturityLevel,
  UseCase,
  AntiPattern,
  ImpactAnalysis,
  Scenario,
} from '../types/interconnections';
import { OperationalPillar } from '../types';

// Cross-functional dependencies
export const mockDependencies: Dependency[] = [
  // Financial Planning dependencies
  {
    id: 'dep-001',
    sourcePillar: OperationalPillar.FINANCIAL_PLANNING,
    targetPillar: OperationalPillar.OPERATIONAL_EFFICIENCY,
    description: 'Budget allocation determines engineering headcount and tooling investment',
    impactLevel: 'critical',
    examples: [
      'Insufficient R&D budget limits product development velocity',
      'Lack of automation budget increases manual processes',
      'Under-resourced infrastructure affects scaling capacity',
    ],
  },
  {
    id: 'dep-002',
    sourcePillar: OperationalPillar.FINANCIAL_PLANNING,
    targetPillar: OperationalPillar.CUSTOMER_ACQUISITION,
    description: 'Marketing budget directly impacts CAC and customer acquisition capacity',
    impactLevel: 'critical',
    examples: [
      'Low marketing budget reduces lead volume',
      'Insufficient sales budget affects team motivation',
      'Pricing strategy influences market positioning',
    ],
  },
  {
    id: 'dep-003',
    sourcePillar: OperationalPillar.FINANCIAL_PLANNING,
    targetPillar: OperationalPillar.TALENT_MANAGEMENT,
    description: 'Compensation budget determines hiring capacity and talent quality',
    impactLevel: 'high',
    examples: [
      'Below-market compensation hinders talent acquisition',
      'Limited training budget slows skill development',
      'Equity pool impacts long-term motivation',
    ],
  },

  // Customer Acquisition dependencies
  {
    id: 'dep-004',
    sourcePillar: OperationalPillar.CUSTOMER_ACQUISITION,
    targetPillar: OperationalPillar.FINANCIAL_PLANNING,
    description: 'Sales performance drives revenue forecasting and cash flow',
    impactLevel: 'critical',
    examples: [
      'Inconsistent sales create unpredictable cash flow',
      'Long sales cycles delay revenue realization',
      'Deal structure impacts revenue recognition',
    ],
  },
  {
    id: 'dep-005',
    sourcePillar: OperationalPillar.CUSTOMER_ACQUISITION,
    targetPillar: OperationalPillar.OPERATIONAL_EFFICIENCY,
    description: 'Customer feedback informs product roadmap and feature priorities',
    impactLevel: 'high',
    examples: [
      'Win/loss analysis reveals product gaps',
      'Feature requests signal market needs',
      'Competitive intelligence guides development',
    ],
  },

  // Operational Efficiency dependencies
  {
    id: 'dep-006',
    sourcePillar: OperationalPillar.OPERATIONAL_EFFICIENCY,
    targetPillar: OperationalPillar.CUSTOMER_ACQUISITION,
    description: 'Product quality and features affect sales effectiveness and customer retention',
    impactLevel: 'critical',
    examples: [
      'Slow feature development weakens competitive position',
      'Product quality issues increase churn',
      'Poor usability creates sales friction',
    ],
  },
  {
    id: 'dep-007',
    sourcePillar: OperationalPillar.OPERATIONAL_EFFICIENCY,
    targetPillar: OperationalPillar.FINANCIAL_PLANNING,
    description: 'Development speed and technical decisions impact infrastructure costs',
    impactLevel: 'high',
    examples: [
      'Expensive architecture increases cost to serve',
      'Slow development delays revenue',
      'Technical debt reduces feature velocity',
    ],
  },

  // Talent Management dependencies
  {
    id: 'dep-008',
    sourcePillar: OperationalPillar.TALENT_MANAGEMENT,
    targetPillar: OperationalPillar.OPERATIONAL_EFFICIENCY,
    description: 'Hiring velocity and talent quality determine execution capacity',
    impactLevel: 'high',
    examples: [
      'Slow hiring creates understaffed teams',
      'Poor culture reduces productivity',
      'Inadequate training creates skill gaps',
    ],
  },
  {
    id: 'dep-009',
    sourcePillar: OperationalPillar.TALENT_MANAGEMENT,
    targetPillar: OperationalPillar.CUSTOMER_ACQUISITION,
    description: 'Sales team quality and training affect revenue generation',
    impactLevel: 'high',
    examples: [
      'Untrained sales team struggles to close deals',
      'High turnover disrupts customer relationships',
      'Poor culture affects customer interactions',
    ],
  },

  // Strategic Planning dependencies
  {
    id: 'dep-010',
    sourcePillar: OperationalPillar.STRATEGIC_PLANNING,
    targetPillar: OperationalPillar.OPERATIONAL_EFFICIENCY,
    description: 'Vision and roadmap guide product development priorities',
    impactLevel: 'critical',
    examples: [
      'Unclear vision leads to scattered development',
      'Misaligned goals waste engineering resources',
      'Poor strategy results in wrong product features',
    ],
  },
  {
    id: 'dep-011',
    sourcePillar: OperationalPillar.STRATEGIC_PLANNING,
    targetPillar: OperationalPillar.FINANCIAL_PLANNING,
    description: 'Strategic goals determine resource allocation and investment priorities',
    impactLevel: 'critical',
    examples: [
      'Growth strategy influences hiring plan',
      'Market expansion requires capital allocation',
      'Partnership strategy affects budget',
    ],
  },
];

// Role profiles
export const mockRoleProfiles: RoleProfile[] = [
  {
    role: Role.CEO,
    name: 'CEO / Founder',
    description: 'Ultimate integrator responsible for vision, resource allocation, and strategic decisions',
    primaryPillars: [OperationalPillar.STRATEGIC_PLANNING, OperationalPillar.FINANCIAL_PLANNING],
    crossFunctionalPillars: [
      OperationalPillar.CUSTOMER_ACQUISITION,
      OperationalPillar.OPERATIONAL_EFFICIENCY,
      OperationalPillar.TALENT_MANAGEMENT,
    ],
    keyMetrics: [
      'Overall Health Score',
      'Revenue Growth',
      'Cash Runway',
      'Employee Retention',
      'Customer Satisfaction',
    ],
    responsibilities: [
      'Set company vision and strategy',
      'Allocate resources across functions',
      'Manage investor and board relations',
      'Build and maintain company culture',
      'Make key hiring decisions',
    ],
  },
  {
    role: Role.CFO,
    name: 'CFO / Finance Lead',
    description: 'Manages financial planning, reporting, and cross-functional resource allocation',
    primaryPillars: [OperationalPillar.FINANCIAL_PLANNING, OperationalPillar.FINANCIAL_REPORTING],
    crossFunctionalPillars: [
      OperationalPillar.CUSTOMER_ACQUISITION,
      OperationalPillar.OPERATIONAL_EFFICIENCY,
      OperationalPillar.RISK_COMPLIANCE,
    ],
    keyMetrics: [
      'Cash Runway',
      'Burn Rate',
      'Revenue Growth',
      'Gross Margin',
      'CAC:LTV Ratio',
    ],
    responsibilities: [
      'Financial planning and analysis',
      'Budget allocation across departments',
      'Revenue forecasting and modeling',
      'Investment ROI analysis',
      'Financial reporting to stakeholders',
    ],
  },
  {
    role: Role.CTO,
    name: 'CTO / Engineering Lead',
    description: 'Leads product development, technical infrastructure, and engineering team',
    primaryPillars: [OperationalPillar.OPERATIONAL_EFFICIENCY],
    crossFunctionalPillars: [
      OperationalPillar.FINANCIAL_PLANNING,
      OperationalPillar.CUSTOMER_ACQUISITION,
      OperationalPillar.TALENT_MANAGEMENT,
    ],
    keyMetrics: [
      'Feature Velocity',
      'Product Quality (Uptime, Bugs)',
      'Technical Debt Ratio',
      'Engineering Efficiency',
      'Infrastructure Costs',
    ],
    responsibilities: [
      'Define technical strategy and architecture',
      'Manage product development roadmap',
      'Build and lead engineering team',
      'Ensure product quality and scalability',
      'Manage technical infrastructure costs',
    ],
  },
  {
    role: Role.VP_SALES,
    name: 'VP Sales',
    description: 'Drives revenue generation and manages sales team',
    primaryPillars: [OperationalPillar.CUSTOMER_ACQUISITION],
    crossFunctionalPillars: [
      OperationalPillar.FINANCIAL_PLANNING,
      OperationalPillar.OPERATIONAL_EFFICIENCY,
      OperationalPillar.STRATEGIC_PLANNING,
    ],
    keyMetrics: [
      'Monthly Recurring Revenue',
      'Sales Pipeline Coverage',
      'Win Rate',
      'Average Deal Size',
      'Sales Cycle Length',
    ],
    responsibilities: [
      'Generate revenue and close deals',
      'Build and manage sales team',
      'Provide market and competitive intelligence',
      'Forecast revenue accurately',
      'Collaborate with product on features',
    ],
  },
  {
    role: Role.VP_MARKETING,
    name: 'VP Marketing',
    description: 'Drives demand generation and brand positioning',
    primaryPillars: [OperationalPillar.CUSTOMER_ACQUISITION],
    crossFunctionalPillars: [
      OperationalPillar.OPERATIONAL_EFFICIENCY,
      OperationalPillar.FINANCIAL_PLANNING,
    ],
    keyMetrics: [
      'Lead Generation Volume',
      'Marketing Qualified Leads (MQL)',
      'Customer Acquisition Cost',
      'Marketing ROI',
      'Brand Awareness',
    ],
    responsibilities: [
      'Generate qualified leads for sales',
      'Develop product positioning and messaging',
      'Manage marketing campaigns and budget',
      'Create content and thought leadership',
      'Analyze campaign performance',
    ],
  },
  {
    role: Role.VP_CUSTOMER_SUCCESS,
    name: 'VP Customer Success',
    description: 'Ensures customer retention, satisfaction, and expansion',
    primaryPillars: [OperationalPillar.CUSTOMER_ACQUISITION],
    crossFunctionalPillars: [
      OperationalPillar.OPERATIONAL_EFFICIENCY,
      OperationalPillar.FINANCIAL_PLANNING,
    ],
    keyMetrics: [
      'Net Revenue Retention',
      'Customer Churn Rate',
      'Net Promoter Score',
      'Customer Health Score',
      'Expansion Revenue',
    ],
    responsibilities: [
      'Drive customer retention and renewals',
      'Manage customer onboarding',
      'Identify expansion opportunities',
      'Provide product feedback from customers',
      'Manage support operations',
    ],
  },
  {
    role: Role.VP_PEOPLE,
    name: 'VP People / HR',
    description: 'Manages talent acquisition, development, and culture',
    primaryPillars: [OperationalPillar.TALENT_MANAGEMENT],
    crossFunctionalPillars: [
      OperationalPillar.FINANCIAL_PLANNING,
      OperationalPillar.STRATEGIC_PLANNING,
    ],
    keyMetrics: [
      'Time to Hire',
      'Employee Retention Rate',
      'Employee Satisfaction (eNPS)',
      'Quality of Hire',
      'Training Completion Rate',
    ],
    responsibilities: [
      'Recruit and hire top talent',
      'Develop training and development programs',
      'Maintain positive company culture',
      'Manage performance review process',
      'Ensure employee engagement',
    ],
  },
];

// Cross-functional maturity
export const mockCrossFunctionalMaturity: CrossFunctionalMaturity = {
  level: CrossFunctionalMaturityLevel.COORDINATED,
  description: 'Regular cross-functional coordination with defined processes',
  characteristics: [
    'Regular cross-functional meetings established',
    'Defined handoff processes between teams',
    'Some shared goals and metrics',
    'Structured communication channels',
    'Project-based collaboration',
  ],
  improvements: [
    'Implement unified planning process across all functions',
    'Create shared OKRs aligned to company goals',
    'Invest in integrated tools and dashboards',
    'Establish proactive coordination mechanisms',
    'Build real-time data sharing capabilities',
  ],
};

// Use cases
export const mockUseCases: UseCase[] = [
  {
    id: 'uc-001',
    title: 'Product Launch',
    description: 'Coordinating a major product feature launch across all functions',
    functionsInvolved: [
      OperationalPillar.OPERATIONAL_EFFICIENCY,
      OperationalPillar.CUSTOMER_ACQUISITION,
      OperationalPillar.FINANCIAL_PLANNING,
    ],
    steps: [
      {
        order: 1,
        pillar: OperationalPillar.OPERATIONAL_EFFICIENCY,
        action: 'Develop new feature',
        dependencies: [],
        timeline: '3 months',
        budget: '$150,000',
      },
      {
        order: 2,
        pillar: OperationalPillar.FINANCIAL_PLANNING,
        action: 'Evaluate ROI and approve investment',
        dependencies: ['Revenue projections from Sales'],
        timeline: '1 week',
      },
      {
        order: 3,
        pillar: OperationalPillar.CUSTOMER_ACQUISITION,
        action: 'Create launch marketing campaign',
        dependencies: ['Product messaging and features'],
        timeline: '1 month',
        budget: '$50,000',
      },
      {
        order: 4,
        pillar: OperationalPillar.CUSTOMER_ACQUISITION,
        action: 'Train sales team on new feature',
        dependencies: ['Demo environment from Engineering'],
        timeline: '2 weeks',
      },
    ],
    expectedOutcome: 'Successful feature launch with strong market adoption',
    metrics: [
      'Revenue impact: +$200K MRR in 6 months',
      'Feature adoption: 60% of customers',
      'Sales win rate improvement: +15%',
    ],
  },
  {
    id: 'uc-002',
    title: 'Scaling Customer Acquisition',
    description: 'Scaling marketing and sales to 3x lead volume',
    functionsInvolved: [
      OperationalPillar.CUSTOMER_ACQUISITION,
      OperationalPillar.FINANCIAL_PLANNING,
      OperationalPillar.TALENT_MANAGEMENT,
    ],
    steps: [
      {
        order: 1,
        pillar: OperationalPillar.CUSTOMER_ACQUISITION,
        action: 'Scale paid advertising',
        dependencies: [],
        timeline: '2 months',
        budget: '$100,000/month',
      },
      {
        order: 2,
        pillar: OperationalPillar.FINANCIAL_PLANNING,
        action: 'Evaluate CAC and LTV economics',
        dependencies: ['Historical data'],
        timeline: '1 week',
      },
      {
        order: 3,
        pillar: OperationalPillar.TALENT_MANAGEMENT,
        action: 'Hire 5 additional SDRs and 1 sales manager',
        dependencies: ['Budget approval'],
        timeline: '3 months',
        budget: '$500,000/year',
      },
    ],
    expectedOutcome: 'Sustainable 3x growth in qualified leads and pipeline',
    metrics: [
      'Lead volume: 3x increase',
      'MRR growth: +$150K in 6 months',
      'CAC payback period: <12 months',
    ],
  },
  {
    id: 'uc-003',
    title: 'Addressing High Churn',
    description: 'Cross-functional initiative to reduce customer churn',
    functionsInvolved: [
      OperationalPillar.CUSTOMER_ACQUISITION,
      OperationalPillar.OPERATIONAL_EFFICIENCY,
      OperationalPillar.FINANCIAL_PLANNING,
    ],
    steps: [
      {
        order: 1,
        pillar: OperationalPillar.CUSTOMER_ACQUISITION,
        action: 'Identify churn patterns and root causes',
        dependencies: [],
        timeline: '2 weeks',
      },
      {
        order: 2,
        pillar: OperationalPillar.OPERATIONAL_EFFICIENCY,
        action: 'Redesign problematic feature with poor UX',
        dependencies: ['Churn analysis'],
        timeline: '2 months',
        budget: '$100,000',
      },
      {
        order: 3,
        pillar: OperationalPillar.FINANCIAL_PLANNING,
        action: 'Evaluate churn impact vs fix cost',
        dependencies: ['Churn data', 'Development estimate'],
        timeline: '1 week',
      },
      {
        order: 4,
        pillar: OperationalPillar.CUSTOMER_ACQUISITION,
        action: 'Launch feature adoption campaign',
        dependencies: ['Feature redesign complete'],
        timeline: '1 month',
      },
    ],
    expectedOutcome: 'Churn reduced from 25% to 10% for affected segment',
    metrics: [
      'Churn reduction: -15 percentage points',
      'Revenue saved: $500K annually',
      'Feature adoption: +40%',
    ],
  },
];

// Anti-patterns
export const mockAntiPatterns: AntiPattern[] = [
  {
    id: 'ap-001',
    name: 'Siloed Decision-Making',
    description: 'Teams making decisions without considering cross-functional impacts',
    affectedPillars: [
      OperationalPillar.CUSTOMER_ACQUISITION,
      OperationalPillar.OPERATIONAL_EFFICIENCY,
    ],
    symptoms: [
      'Sales making promises product cannot deliver',
      'Product building features sales cannot sell',
      'Marketing campaigns not aligned with product capabilities',
    ],
    consequences: [
      'Missed customer expectations',
      'Wasted development resources',
      'Damaged customer relationships',
    ],
    solution: 'Implement shared product roadmap visibility in sales tools and regular cross-functional planning',
    detected: true,
    severity: 'high',
  },
  {
    id: 'ap-002',
    name: 'Misaligned Incentives',
    description: 'Different teams optimizing for conflicting goals',
    affectedPillars: [
      OperationalPillar.OPERATIONAL_EFFICIENCY,
      OperationalPillar.CUSTOMER_ACQUISITION,
      OperationalPillar.FINANCIAL_PLANNING,
    ],
    symptoms: [
      'Engineering optimizing for technical elegance vs sales needing speed',
      'Sales focused on deal count vs finance focused on profitability',
      'Marketing driving volume vs CS struggling with quality',
    ],
    consequences: [
      'Internal conflict and frustration',
      'Suboptimal company outcomes',
      'Wasted resources',
    ],
    solution: 'Create shared OKRs across functions with balanced scorecard approach',
    detected: false,
    severity: 'medium',
  },
  {
    id: 'ap-003',
    name: 'Information Asymmetry',
    description: 'Critical information not flowing between functions',
    affectedPillars: [
      OperationalPillar.FINANCIAL_PLANNING,
      OperationalPillar.OPERATIONAL_EFFICIENCY,
    ],
    symptoms: [
      'Finance unaware of product delays affecting revenue timeline',
      'Product team unaware of customer churn reasons',
      'Sales unaware of upcoming price changes',
    ],
    consequences: [
      'Inaccurate forecasting',
      'Missed opportunities',
      'Reactive crisis management',
    ],
    solution: 'Implement integrated dashboards and automated notification systems',
    detected: true,
    severity: 'high',
  },
  {
    id: 'ap-004',
    name: 'Reactive Fire-Fighting',
    description: 'Operating in constant crisis mode instead of proactive management',
    affectedPillars: [
      OperationalPillar.CUSTOMER_ACQUISITION,
      OperationalPillar.OPERATIONAL_EFFICIENCY,
    ],
    symptoms: [
      'Customer churn spikes before anyone notices',
      'Product issues discovered by customers instead of QA',
      'Always responding to problems instead of preventing them',
    ],
    consequences: [
      'Customer dissatisfaction',
      'Team burnout',
      'Reduced productivity',
    ],
    solution: 'Implement predictive analytics and early warning systems',
    detected: false,
    severity: 'medium',
  },
];

// Impact analysis example
export const mockImpactAnalysis: ImpactAnalysis = {
  action: 'Increase marketing budget by $100K/month',
  sourcePillar: OperationalPillar.CUSTOMER_ACQUISITION,
  impacts: [
    {
      pillar: OperationalPillar.CUSTOMER_ACQUISITION,
      impactType: 'positive',
      magnitude: 85,
      description: 'Significant increase in lead volume (est. 3x)',
      timeframe: 'Immediate (1-2 months)',
    },
    {
      pillar: OperationalPillar.TALENT_MANAGEMENT,
      impactType: 'negative',
      magnitude: 60,
      description: 'Need to hire additional sales team to handle leads',
      timeframe: 'Short-term (2-3 months)',
    },
    {
      pillar: OperationalPillar.FINANCIAL_PLANNING,
      impactType: 'negative',
      magnitude: 70,
      description: 'Increased cash burn ($100K marketing + $500K hiring)',
      timeframe: 'Immediate',
    },
    {
      pillar: OperationalPillar.OPERATIONAL_EFFICIENCY,
      impactType: 'negative',
      magnitude: 40,
      description: 'May need CRM and sales enablement tool upgrades',
      timeframe: 'Medium-term (3-6 months)',
    },
    {
      pillar: OperationalPillar.FINANCIAL_REPORTING,
      impactType: 'positive',
      magnitude: 75,
      description: 'Projected MRR increase of $150K in 6 months',
      timeframe: 'Medium-term (6-12 months)',
    },
  ],
  overallRisk: 'medium',
  recommendations: [
    'Ensure sufficient cash runway (18+ months recommended)',
    'Start hiring process immediately to avoid sales bottleneck',
    'Implement lead scoring to optimize conversion',
    'Monitor CAC closely to ensure unit economics remain healthy',
    'Plan for operational tooling investments',
  ],
};

// Scenario planning
export const mockScenarios: Scenario[] = [
  {
    id: 'scenario-001',
    name: 'Aggressive Growth',
    description: 'Scale marketing and sales aggressively to capture market share',
    changes: [
      {
        pillar: OperationalPillar.CUSTOMER_ACQUISITION,
        metric: 'Marketing Budget',
        currentValue: '$50,000/month',
        proposedValue: '$150,000/month',
        cost: 100000,
      },
      {
        pillar: OperationalPillar.TALENT_MANAGEMENT,
        metric: 'Sales Team Size',
        currentValue: '5 SDRs',
        proposedValue: '15 SDRs',
        cost: 1000000,
      },
    ],
    projectedImpacts: {
      revenue: 3.5,
      costs: 2.2,
      timeToMarket: 0,
      customerSatisfaction: -5,
    },
    risks: [
      'Cash runway reduced to 12 months',
      'Operational strain from rapid growth',
      'Quality of hires may suffer',
    ],
    opportunities: [
      'Capture significant market share',
      'Achieve economies of scale faster',
      'Stronger competitive position',
    ],
  },
  {
    id: 'scenario-002',
    name: 'Profitability Focus',
    description: 'Optimize for profitability and extend runway',
    changes: [
      {
        pillar: OperationalPillar.OPERATIONAL_EFFICIENCY,
        metric: 'Automation Investment',
        currentValue: '$20,000',
        proposedValue: '$100,000',
        cost: 80000,
      },
      {
        pillar: OperationalPillar.FINANCIAL_PLANNING,
        metric: 'Operational Efficiency',
        currentValue: '65%',
        proposedValue: '85%',
      },
    ],
    projectedImpacts: {
      revenue: 1.2,
      costs: 0.7,
      timeToMarket: 1.1,
      customerSatisfaction: 10,
    },
    risks: [
      'Slower growth than competitors',
      'May miss market window',
    ],
    opportunities: [
      'Extended runway to 36+ months',
      'Better unit economics',
      'Sustainable growth foundation',
    ],
  },
  {
    id: 'scenario-003',
    name: 'Product Excellence',
    description: 'Invest heavily in product to create competitive moat',
    changes: [
      {
        pillar: OperationalPillar.OPERATIONAL_EFFICIENCY,
        metric: 'Engineering Team',
        currentValue: '8 engineers',
        proposedValue: '15 engineers',
        cost: 1400000,
      },
      {
        pillar: OperationalPillar.FINANCIAL_PLANNING,
        metric: 'R&D Budget',
        currentValue: '$150,000',
        proposedValue: '$300,000',
        cost: 150000,
      },
    ],
    projectedImpacts: {
      revenue: 1.5,
      costs: 1.8,
      timeToMarket: -0.4,
      customerSatisfaction: 20,
    },
    risks: [
      'Increased burn rate',
      'Delayed revenue growth',
      'Unproven market demand',
    ],
    opportunities: [
      'Superior product differentiation',
      'Higher pricing power',
      'Better customer retention',
      'Stronger competitive moat',
    ],
  },
];
