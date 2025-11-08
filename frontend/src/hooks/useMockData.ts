/**
 * Custom hook for loading mock data
 * Simulates async API calls for realistic behavior
 */

import { useState, useEffect } from 'react';
import {
  mockDashboardData,
  mockBenchmarkData,
  mockAssessment,
  mockCompany,
  mockUser,
  mockPillars,
  mockKPIMetrics,
} from '../data/mockData';
import { DashboardData, BenchmarkData, Assessment, Company, User, Pillar, KPIMetric } from '../types';

// Simulated delay for API calls
const simulateApiDelay = (ms: number = 500): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Hook to load complete dashboard data
 */
export const useDashboardData = () => {
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        await simulateApiDelay(300);
        setData(mockDashboardData);
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};

/**
 * Hook to load assessment data
 */
export const useAssessment = () => {
  const [data, setData] = useState<Assessment | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        await simulateApiDelay(300);
        setData(mockAssessment);
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};

/**
 * Hook to load company data
 */
export const useCompany = () => {
  const [data, setData] = useState<Company | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        await simulateApiDelay(200);
        setData(mockCompany);
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};

/**
 * Hook to load user data
 */
export const useUser = () => {
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        await simulateApiDelay(200);
        setData(mockUser);
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};

/**
 * Hook to load pillars data
 */
export const usePillars = () => {
  const [data, setData] = useState<Pillar[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        await simulateApiDelay(400);
        setData(mockPillars);
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};

/**
 * Hook to load KPI metrics
 */
export const useKPIMetrics = () => {
  const [data, setData] = useState<KPIMetric[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        await simulateApiDelay(300);
        setData(mockKPIMetrics);
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};

/**
 * Hook to load benchmark data
 */
export const useBenchmarkData = () => {
  const [data, setData] = useState<BenchmarkData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        await simulateApiDelay(400);
        setData(mockBenchmarkData);
        setError(null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error };
};
