'use client';

import React from 'react';
import Image from 'next/image';

interface EditTextProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  type?: 'text' | 'email' | 'password';
}

const EditText: React.FC<EditTextProps> = ({
  placeholder = "Your email address",
  value,
  onChange,
  className = "",
  type = "email"
}) => {
  return (
    <div className={`
      bg-edittext-1 rounded-lg flex flex-row items-center justify-between px-3 py-2
      ${className}
    `}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="
          flex-1 bg-transparent text-sm font-normal leading-[17px] 
          text-edittext-1 font-inter placeholder-edittext-1 
          focus:outline-none border-0
        "
      />
      <Image
        src="/images/img_essential_icons_send.svg"
        alt="Send"
        width={18}
        height={18}
        className="w-[18px] h-[18px] cursor-pointer"
      />
    </div>
  );
};

export default EditText;