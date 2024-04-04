'use client';

import React from 'react';

const Button = ({ className, text, handler, type = 'secondary', icon }) => {
  const handleClick = (event) => {
    handler && handler(event);
  };
  return (
    <button
      className={`h-fit w-fit px-4 py-2 hover:opacity-80 duration-300 ease-in-out flex items-center${
        type === 'secondary'
          ? 'text-primary bg-secondary'
          : 'text-default bg-primary'
      } ${className}`}
      onClick={handleClick}
    >
      {text}
      {icon && <div className='pl-2'>{icon}</div>}
    </button>
  );
};

export default Button;
