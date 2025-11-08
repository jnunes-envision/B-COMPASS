import React from 'react';
import './LoadingSkeleton.css';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '20px',
  borderRadius = '4px',
  className = '',
}) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        width,
        height,
        borderRadius,
      }}
    />
  );
};

export const CardSkeleton: React.FC = () => {
  return (
    <div className="skeleton-card">
      <Skeleton height="24px" width="60%" />
      <Skeleton height="48px" width="40%" />
      <Skeleton height="16px" width="80%" />
      <Skeleton height="16px" width="70%" />
    </div>
  );
};

export const ListSkeleton: React.FC<{ count?: number }> = ({ count = 3 }) => {
  return (
    <div className="skeleton-list">
      {Array.from({ length: count }).map((_, idx) => (
        <div key={idx} className="skeleton-list-item">
          <Skeleton height="60px" borderRadius="8px" />
        </div>
      ))}
    </div>
  );
};

export const DashboardSkeleton: React.FC = () => {
  return (
    <div className="dashboard-skeleton">
      <div className="skeleton-header">
        <Skeleton height="40px" width="200px" />
        <Skeleton height="20px" width="300px" />
      </div>
      <div className="skeleton-stats">
        {[1, 2, 3, 4].map((i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
      <div className="skeleton-chart">
        <Skeleton height="300px" borderRadius="16px" />
      </div>
    </div>
  );
};
