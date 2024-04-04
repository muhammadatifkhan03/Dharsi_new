import React from 'react';

const Input = ({
  min,
  icon,
  label,
  height,
  width,
  disabled,
  onChange,
  placeholder,
  type = 'text',
  styleVariation,
  ...rest
}) => {
  return (
    <div className='w-full md:w-auto flex flex-col gap-1 items-start'>
      <label className='text-[14px] leading-[15px] font-normal text-[#292222]'>
        {label}
      </label>
      <div className='relative flex items-center w-full md:w-auto'>
        <input
          disabled={disabled}
          type={type}
          placeholder={placeholder}
          className={`text-[#292222] placeholder-opacity-75 ${
            width ? width : 'w-full'
          } ${height ? height : 'h-full'} ${
            styleVariation === 'secondary'
              ? 'p-3 border border-black'
              : 'py-2 px-4 font-normal text-[14px] leading-[16px]'
          } bg-[#F7F7F7] rounded-md border focus:outline-none`}
          onChange={onChange}
          {...rest}
        />
        {icon && <div className='absolute right-3'>{icon}</div>}
      </div>
    </div>
  );
};

export { Input };
