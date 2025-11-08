import React from 'react';
import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
  hover?: boolean;
  gradient?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'medium',
  hover = false,
  gradient = false,
  onClick
}) => {
  const classes = [
    'ui-card',
    `padding-${padding}`,
    hover ? 'hoverable' : '',
    gradient ? 'gradient' : '',
    onClick ? 'clickable' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};

interface StatCardProps {
  label: string;
  value: string | number;
  change?: number;
  icon?: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
  color?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  change,
  icon,
  trend,
  color = '#667eea',
}) => {
  const getTrendColor = () => {
    if (!trend) return '#6b7280';
    return trend === 'up' ? '#10b981' : trend === 'down' ? '#ef4444' : '#6b7280';
  };

  return (
    <Card className="stat-card" hover>
      <div className="stat-card-header">
        <span className="stat-label">{label}</span>
        {icon && <span className="stat-icon" style={{ color }}>{icon}</span>}
      </div>
      <div className="stat-value" style={{ color }}>{value}</div>
      {change !== undefined && (
        <div className="stat-change" style={{ color: getTrendColor() }}>
          {change > 0 ? '+' : ''}{change}%
          {trend && <span className="trend-arrow">
            {trend === 'up' ? ' ↗' : trend === 'down' ? ' ↘' : ' →'}
          </span>}
        </div>
      )}
    </Card>
  );
};

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  progress?: number;
  children?: React.ReactNode;
}

export const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  subtitle,
  progress,
  children,
}) => {
  return (
    <Card className="metric-card" hover>
      <h4 className="metric-title">{title}</h4>
      <div className="metric-value">{value}</div>
      {subtitle && <div className="metric-subtitle">{subtitle}</div>}
      {progress !== undefined && (
        <div className="metric-progress">
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="progress-text">{progress}%</span>
        </div>
      )}
      {children}
    </Card>
  );
};
