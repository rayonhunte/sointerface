import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="px-4 py-2 font-semibold text-white bg-blue-500 rounded hover:bg-blue-700"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;