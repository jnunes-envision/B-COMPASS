/**
 * Type definitions for cross-functional interconnections
 */

import { OperationalPillar } from './index';

// Cross-functional dependency types
export interface Dependency {
  id: string;
  sourcePillar: OperationalPillar;
  targetPillar: OperationalPillar;
  description: string;
  impactLevel: 'low' | 'medium' | 'high' | 'critical';
  examples: string[];
}

// Role types in the organization
export enum Role {
  CEO = 'CEO',
  CFO = 'CFO',
  CTO = 'CTO',
  VP_SALES = 'VP_SALES',
  VP_MARKETING = 'VP_MARKETING',
  VP_CUSTOMER_SUCCESS = 'VP_CUSTOMER_SUCCESS',
  VP_PEOPLE = 'VP_PEOPLE',
  VP_OPERATIONS = 'VP_OPERATIONS',
}

// Role-specific metrics and responsibilities
export interface RoleProfile {
  role: Role;
  name: string;
  description: string;
  primaryPillars: OperationalPillar[];
  crossFunctionalPillars: OperationalPillar[];
  keyMetrics: string[];
  responsibilities: string[];
}

// Maturity level for cross-functional collaboration
export enum CrossFunctionalMaturityLevel {
  FRAGMENTED = 1,
  AWARE = 2,
  COORDINATED = 3,
  INTEGRATED = 4,
  OPTIMIZED = 5,
}

export interface CrossFunctionalMaturity {
  level: CrossFunctionalMaturityLevel;
  description: string;
  characteristics: string[];
  improvements: string[];
}

// Use case scenario
export interface UseCase {
  id: string;
  title: string;
  description: string;
  functionsInvolved: OperationalPillar[];
  steps: UseCaseStep[];
  expectedOutcome: string;
  metrics: string[];
}

export interface UseCaseStep {
  order: number;
  pillar: OperationalPillar;
  action: string;
  dependencies: string[];
  timeline: string;
  budget?: string;
}

// Anti-pattern detection
export interface AntiPattern {
  id: string;
  name: string;
  description: string;
  affectedPillars: OperationalPillar[];
  symptoms: string[];
  consequences: string[];
  solution: string;
  detected: boolean;
  severity: 'low' | 'medium' | 'high';
}

// Impact analysis
export interface ImpactAnalysis {
  action: string;
  sourcePillar: OperationalPillar;
  impacts: PillarImpact[];
  overallRisk: 'low' | 'medium' | 'high';
  recommendations: string[];
}

export interface PillarImpact {
  pillar: OperationalPillar;
  impactType: 'positive' | 'negative' | 'neutral';
  magnitude: number; // 0-100
  description: string;
  timeframe: string;
}

// Scenario planning
export interface Scenario {
  id: string;
  name: string;
  description: string;
  changes: ScenarioChange[];
  projectedImpacts: {
    revenue: number;
    costs: number;
    timeToMarket: number;
    customerSatisfaction: number;
  };
  risks: string[];
  opportunities: string[];
}

export interface ScenarioChange {
  pillar: OperationalPillar;
  metric: string;
  currentValue: number | string;
  proposedValue: number | string;
  cost?: number;
}
