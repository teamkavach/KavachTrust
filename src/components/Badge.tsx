import React from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'secondary' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variantStyles = {
  primary: 'bg-primary-100 text-primary-700 border-primary-200',
  accent: 'bg-accent-100 text-accent-700 border-accent-200',
  secondary: 'bg-secondary-100 text-secondary-700 border-secondary-200',
  success: 'bg-green-100 text-green-700 border-green-200',
  warning: 'bg-orange-100 text-orange-700 border-orange-200',
};

const sizeStyles = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-1',
  lg: 'text-base px-4 py-1.5',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  return (
    <span
      className={`
        inline-flex items-center rounded-full font-medium border
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

interface TagProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onRemove?: () => void;
  variant?: 'primary' | 'accent' | 'secondary';
  className?: string;
}

export const Tag: React.FC<TagProps> = ({
  children,
  icon,
  onRemove,
  variant = 'primary',
  className = '',
}) => {
  const bgColors = {
    primary: 'bg-primary-50 text-primary-700 hover:bg-primary-100',
    accent: 'bg-accent-50 text-accent-700 hover:bg-accent-100',
    secondary: 'bg-secondary-50 text-secondary-700 hover:bg-secondary-100',
  };

  return (
    <motion.span
      className={`
        inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium
        transition-colors duration-200
        ${bgColors[variant]}
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {icon}
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 hover:opacity-70 transition-opacity"
          aria-label="Remove tag"
        >
          ×
        </button>
      )}
    </motion.span>
  );
};
