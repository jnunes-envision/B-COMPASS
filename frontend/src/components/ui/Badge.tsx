import React from 'react';
import './Badge.css';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'small' | 'medium' | 'large';
  pill?: boolean;
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  pill = false,
  dot = false,
}) => {
  const classes = [
    'ui-badge',
    `variant-${variant}`,
    `size-${size}`,
    pill ? 'pill' : '',
    dot ? 'with-dot' : '',
  ].filter(Boolean).join(' ');

  return (
    <span className={classes}>
      {dot && <span className="badge-dot" />}
      {children}
    </span>
  );
};

interface PillarBadgeProps {
  name: string;
  primary?: boolean;
}

export const PillarBadge: React.FC<PillarBadgeProps> = ({ name, primary = false }) => {
  return (
    <Badge variant={primary ? 'primary' : 'default'} pill size="small">
      {name}
    </Badge>
  );
};

interface StatusBadgeProps {
  status: 'active' | 'pending' | 'completed' | 'failed';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const variantMap = {
    active: 'success' as const,
    pending: 'warning' as const,
    completed: 'info' as const,
    failed: 'danger' as const,
  };

  const labelMap = {
    active: 'Active',
    pending: 'Pending',
    completed: 'Completed',
    failed: 'Failed',
  };

  return (
    <Badge variant={variantMap[status]} dot>
      {labelMap[status]}
    </Badge>
  );
};
