import React from 'react';
import './Button.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  onClick,
  type = 'button',
}) => {
  const classes = [
    'ui-button',
    `variant-${variant}`,
    `size-${size}`,
    fullWidth ? 'full-width' : '',
    disabled || loading ? 'disabled' : '',
    loading ? 'loading' : '',
  ].filter(Boolean).join(' ');

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      type={type}
    >
      {loading && <span className="button-spinner" />}
      {!loading && icon && iconPosition === 'left' && (
        <span className="button-icon">{icon}</span>
      )}
      <span className="button-text">{children}</span>
      {!loading && icon && iconPosition === 'right' && (
        <span className="button-icon">{icon}</span>
      )}
    </button>
  );
};

interface ButtonGroupProps {
  children: React.ReactNode;
  spacing?: 'tight' | 'normal' | 'loose';
  align?: 'left' | 'center' | 'right';
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  spacing = 'normal',
  align = 'left',
}) => {
  return (
    <div className={`button-group spacing-${spacing} align-${align}`}>
      {children}
    </div>
  );
};
