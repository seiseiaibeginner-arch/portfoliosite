import React from 'react';
import './Navigation.css';

interface NavigationProps {
  brandName?: string;
  links?: { label: string; href: string }[];
}

export const Navigation: React.FC<NavigationProps> = ({ 
  brandName = "Portfolio",
  links = [
    { label: 'Works', href: '#works' },
    { label: 'About', href: '#about' }
  ]
}) => {
  return (
    <div className="nav-container animate-fade-up" style={{ animationDelay: '100ms' }}>
      <nav className="nav-bar">
        <a href="#" className="nav-brand">
          {brandName}<span>.</span>
        </a>
        <ul className="nav-links">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.href} className="nav-link">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
