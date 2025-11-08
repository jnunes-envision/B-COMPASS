/**
 * Core type definitions for Busula App
 */

// Maturity levels (1-5)
export type MaturityLevel = 1 | 2 | 3 | 4 | 5;

// Impact dimensions
export enum ImpactDimension {
  REVENUE_GENERATION = 'REVENUE_GENERATION',
  TECHNICAL_EXECUTION = 'TECHNICAL_EXECUTION',
  CUSTOMER_RETENTION = 'CUSTOMER_RETENTION',
  GROWTH_CAPACITY = 'GROWTH_CAPACITY',
}

// Impact weights for each dimension
export interface ImpactWeights {
  [ImpactDimension.REVENUE_GENERATION]: number;
  [ImpactDimension.TECHNICAL_EXECUTION]: number;
  [ImpactDimension.CUSTOMER_RETENTION]: number;
  [ImpactDimension.GROWTH_CAPACITY]: number;
}

// Activity within an operational pillar
export interface Activity {
  id: string;
  name: string;
  description: string;
  currentMaturityLevel: MaturityLevel;
  targetMaturityLevel: MaturityLevel;
  impactWeights: ImpactWeights;
  recommendations?: string[];
  lastAssessed?: Date;
}

// Operational pillars
export enum OperationalPillar {
  FINANCIAL_PLANNING = 'FINANCIAL_PLANNING',
  CUSTOMER_ACQUISITION = 'CUSTOMER_ACQUISITION',
  OPERATIONAL_EFFICIENCY = 'OPERATIONAL_EFFICIENCY',
  TALENT_MANAGEMENT = 'TALENT_MANAGEMENT',
  RISK_COMPLIANCE = 'RISK_COMPLIANCE',
  STRATEGIC_PLANNING = 'STRATEGIC_PLANNING',
  FINANCIAL_REPORTING = 'FINANCIAL_REPORTING',
}

export interface Pillar {
  id: OperationalPillar;
  name: string;
  description: string;
  activities: Activity[];
  overallScore: number;
  dimensionScores: ImpactWeights;
}

// Assessment
export interface Assessment {
  id: string;
  companyId: string;
  createdAt: Date;
  updatedAt: Date;
  completionPercentage: number;
  pillars: Pillar[];
  overallHealthScore: number;
  dimensionScores: ImpactWeights;
}

// Company information
export enum CompanyStage {
  PRE_SEED = 'PRE_SEED',
  SEED = 'SEED',
  SERIES_A = 'SERIES_A',
  SERIES_B_PLUS = 'SERIES_B_PLUS',
}

export interface Company {
  id: string;
  name: string;
  industry: string;
  stage: CompanyStage;
  foundedDate: Date;
  employeeCount: number;
  monthlyRecurringRevenue?: number;
  cashRunway?: number; // in months
}

// User
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  companyId: string;
}

// KPI Metrics
export interface KPIMetric {
  id: string;
  name: string;
  value: number | string;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  changePercentage?: number;
  category: string;
}

// Dashboard data
export interface DashboardData {
  company: Company;
  user: User;
  currentAssessment: Assessment;
  kpiMetrics: KPIMetric[];
  recentActivities: Array<{
    id: string;
    type: string;
    description: string;
    timestamp: Date;
  }>;
  alerts: Array<{
    id: string;
    severity: 'low' | 'medium' | 'high';
    message: string;
    pillarId?: OperationalPillar;
  }>;
}

// Benchmark data
export interface BenchmarkData {
  industry: {
    averageScore: number;
    percentile: number;
  };
  stage: {
    averageScore: number;
    percentile: number;
  };
  topPerformers: {
    averageScore: number;
  };
}
