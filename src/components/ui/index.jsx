import React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export function DemoButton({ children, className = "", product, ...props }) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (product) {
      navigate(`/demo?product=${product}`);
    } else {
      navigate('/demo');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`btn-modern text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function Link({ to, children, className = "", ...props }) {
  return (
    <RouterLink to={to} className={className} {...props}>
      {children}
    </RouterLink>
  );
}

export { Mail } from 'lucide-react';