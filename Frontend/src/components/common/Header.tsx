'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Button from '../ui/Button';

const Header = () => {
  const router = useRouter();

  return (
    <div className="w-full h-[84px] bg-global-3 flex flex-row">
      <div className="w-full h-full bg-global-3 flex flex-row items-center justify-between px-4 sm:px-[146px]">
        {/* Logo / Brand */}
        <div className="flex items-center justify-center">
          <h2 className="text-4xl text-center font-semibold text-global-3 font-inter">
            EduQuest
          </h2>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex flex-row items-center space-x-8">
          <Link href="/" className="text-base font-normal text-global-1 font-inter hover:text-red-600">
            Home
          </Link>
          <Link href="/service" className="text-base font-normal leading-5 text-global-1 font-inter hover:text-red-600">
            Service
          </Link>
          <Link href="/feature" className="text-base font-normal leading-5 text-global-1 font-inter hover:text-red-600">
            Feature
          </Link>
          <Link href="/pricing" className="text-base font-normal leading-5 text-global-1 font-inter hover:text-red-600">
            Pricing
          </Link>
          <Link href="/contact" className="text-base font-normal leading-5 text-global-1 font-inter hover:text-red-600">
            Contact
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex flex-row items-center space-x-2">
          <Button
            variant="secondary"
            className="h-[40px] w-[77px] bg-global-3 text-header-1 text-sm font-medium leading-[17px] rounded-md border-0"
            onClick={() => router.push('/login')}
          >
            Login
          </Button>
          <Button
            variant="primary"
            className="h-[40px] w-[91px] bg-global-2 text-global-7 text-sm font-medium leading-[17px] rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-global-2 hover:bg-button-1 cursor-pointer font-inter"
            onClick={() => router.push('/register')} // You can create this page later
          >
            Sign up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
