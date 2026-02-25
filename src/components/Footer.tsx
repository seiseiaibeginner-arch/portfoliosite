import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ 
      padding: '40px 0', 
      textAlign: 'center',
      borderTop: '1px solid var(--border-light)',
      backgroundColor: 'var(--bg-primary)'
    }}>
      <div className="container">
        <p style={{ 
          color: 'var(--text-muted)', 
          fontSize: '13px',
          fontWeight: 500
        }}>
          &copy; {new Date().getFullYear()} AI Developer Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
