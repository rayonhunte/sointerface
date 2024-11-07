"use client";
import React from 'react';
import { Button } from '@nextui-org/react';

interface MyButtonProps {
  label: string;
  onClick: () => void;
}

const MyButton: React.FC<MyButtonProps> = ({ label, onClick }) => {
  return (
    <Button onClick={onClick} className="bg-blue-500 text-white">
      {label}
    </Button>
  );
};

export default MyButton;
