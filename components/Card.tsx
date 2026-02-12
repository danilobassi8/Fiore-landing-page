import React from 'react';

interface CardProps {
  title: string;
  period?: string;
  subtitle?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, period, subtitle, children }) => {
  return (
    <div className="py-8 md:py-10 border-b border-gray-200">
      {/* Period indicator */}
      {period && (
        <div className="flex items-center justify-between mb-6">
          <span className="text-[10px] uppercase tracking-[0.4em] font-semibold text-[#FF8A8A] mb-2 block">{period}</span>
        </div>
      )}

      {/* Content */}
      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl elegant-font font-medium leading-tight">{title}</h3>

        {subtitle && (
          <div className="flex items-center space-x-3">
            <p className="text-sm font-medium uppercase tracking-wider text-gray-400">{subtitle}</p>
          </div>
        )}

        <div className="text-gray-500 font-light leading-relaxed text-sm md:text-base">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Card;
