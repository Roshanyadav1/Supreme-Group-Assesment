import React from 'react';

interface InputProps {
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder: string;
  required?: boolean;
  className?: string;
  textarea?: boolean;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  required = false,
  className = '',
  textarea = false, 
}) => {
  return textarea ? (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className={`w-full text-lg bg-transparent text-white border-b-2 border-white/30 py-2 px-1 focus:outline-none focus:border-white placeholder-white ${className}`}
    />
  ) : (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className={`w-full text-lg bg-transparent text-white border-b-2 border-white/30 py-2 px-1 focus:outline-none focus:border-white placeholder-white ${className}`}
    />
  );
};

export default Input;
