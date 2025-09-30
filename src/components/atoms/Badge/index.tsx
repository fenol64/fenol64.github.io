import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  color?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, color = 'bg-blue-600' }) => (
  <span className={`inline-block px-3 py-1 text-xs font-semibold text-white rounded-full shadow ${color}`}>
    {children}
  </span>
);

export default Badge;
