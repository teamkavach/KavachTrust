import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumb?: Array<{ name: string; path?: string }>;
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  breadcrumb,
  className = '',
}) => {
  return (
    <motion.div
      className={`bg-gradient-to-r from-primary-50 to-accent-50 py-12 md:py-16 ${className}`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav className="mb-4 text-sm">
            <ol className="flex items-center gap-2 text-secondary-600">
              {breadcrumb.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  {index > 0 && <span>/</span>}
                  {item.path ? (
                    <a href={item.path} className="hover:text-primary transition-colors">
                      {item.name}
                    </a>
                  ) : (
                    <span className="text-secondary-800 font-medium">{item.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-secondary-700 max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
};
