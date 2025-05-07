import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  isLoading?: boolean; 
  label: string;
}

const Button: React.FC<ButtonProps> = ({ type = 'button', onClick, className, isLoading = false, label }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(
        'h-[50px] cursor-pointer px-4 py-2 text-lg border border-white text-black hover:bg-[#00BFFF] rounded-full transition-all w-full sm:w-1/3 bg-white',
        className,
        { 'opacity-50 cursor-wait': isLoading } 
      )}
      disabled={isLoading} 
    >
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        label
      )}
    </button>
  );
};

export default Button;
