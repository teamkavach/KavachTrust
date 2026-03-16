import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  onClick,
}) => {
  const Component = hover ? motion.div : 'div';
  const hoverProps = hover
    ? {
        whileHover: { y: -8, scale: 1.02 },
        transition: { duration: 0.3 },
      }
    : {};

  return (
    <Component
      className={`
        bg-white rounded-2xl shadow-md p-6
        ${hover ? 'cursor-pointer hover:shadow-lift' : ''}
        ${className}
      `}
      onClick={onClick}
      {...(hover ? hoverProps : {})}
    >
      {children}
    </Component>
  );
};

interface StatCardProps {
  label: string;
  value: number | string;
  unit?: string;
  icon?: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  label,
  value,
  unit,
  icon,
  trend,
  className = '',
}) => {
  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-md p-6 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm text-secondary-600 font-medium mb-2">{label}</p>
          <div className="flex items-baseline gap-1">
            <p className="text-3xl md:text-4xl font-bold text-secondary">
              {typeof value === 'number' ? value.toLocaleString() : value}
            </p>
            {unit && <span className="text-lg text-secondary-600">{unit}</span>}
          </div>
          {trend && (
            <p
              className={`text-sm mt-2 ${
                trend.isPositive ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {trend.isPositive ? '↑' : '↓'} {Math.abs(trend.value)}%
            </p>
          )}
        </div>
        {icon && (
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center">
            {icon}
          </div>
        )}
      </div>
    </motion.div>
  );
};

interface TestimonialCardProps {
  name: string;
  role: string;
  city: string;
  quote: string;
  image: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  city,
  quote,
  image,
  className = '',
}) => {
  return (
    <motion.div
      className={`bg-white rounded-2xl shadow-md p-6 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-secondary">{name}</h4>
          <p className="text-sm text-secondary-600">{role}</p>
          <p className="text-xs text-secondary-500">{city}</p>
        </div>
      </div>
      <p className="text-secondary-700 italic leading-relaxed">"{quote}"</p>
    </motion.div>
  );
};
