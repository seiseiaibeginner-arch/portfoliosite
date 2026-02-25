import React from 'react';
import './Hero.css';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-bg"></div>
      <div className="container hero-container">
        <div className="hero-content animate-fade-up" style={{ animationDelay: '200ms' }}>
          <h1 className="hero-title">
            Creative<br />
            <span>AI Solutions</span>
          </h1>
          <p className="hero-description">
            AI開発の先進性とモダンなウェブ技術を融合させ、ユーザーに新しい体験をもたらすプロダクトを創出しています。
          </p>
          <div className="hero-actions">
            <Button variant="primary" onClick={() => document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })}>
              View Works
            </Button>
            <Button variant="secondary" onClick={() => window.open('https://github.com', '_blank')}>
              GitHub
            </Button>
          </div>
        </div>
        <div className="hero-image-wrapper animate-fade-up" style={{ animationDelay: '400ms' }}>
          <img 
            src="/image/hero-image.png" 
            alt="AI Solutions and Code" 
            className="hero-image"
            onError={(e) => {
              // Fallback if hero-image is missing or cannot load
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>
    </section>
  );
};
