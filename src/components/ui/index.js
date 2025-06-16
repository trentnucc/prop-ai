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
      className={`bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-md transition-colors ${className}`}
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