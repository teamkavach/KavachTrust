import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface BaseButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
}

type ButtonProps = BaseButtonProps & Omit<HTMLMotionProps<'button'>, keyof BaseButtonProps>;

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
  ...motionProps
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 
        px-6 py-3 rounded-lg font-semibold text-white
        bg-primary hover:bg-primary-600 
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-colors duration-200
        shadow-md hover:shadow-lg
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...motionProps}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </motion.button>
  );
};

export const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
  ...motionProps
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 
        px-6 py-3 rounded-lg font-semibold 
        text-primary border-2 border-primary 
        hover:bg-primary hover:text-white
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...motionProps}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </motion.button>
  );
};

export const GhostButton: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
  ...motionProps
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 
        px-4 py-2 rounded-lg font-medium 
        text-secondary-700 hover:text-primary hover:bg-primary-50
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-all duration-200
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...motionProps}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </motion.button>
  );
};

export const AccentButton: React.FC<ButtonProps> = ({
  children,
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
  ...motionProps
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 
        px-6 py-3 rounded-lg font-semibold text-white
        bg-accent hover:bg-accent-600 
        disabled:opacity-50 disabled:cursor-not-allowed
        transition-colors duration-200
        shadow-md hover:shadow-lg
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      {...motionProps}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </motion.button>
  );
};
