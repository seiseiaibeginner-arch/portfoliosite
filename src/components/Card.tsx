import React from 'react';
import './Card.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'subtle';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ variant = 'default', children, className = '', ...props }) => {
  return (
    <div className={`card card-${variant} ${className}`} {...props}>
      {children}
    </div>
  );
};
