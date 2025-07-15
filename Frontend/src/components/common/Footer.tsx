'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EditText from '../ui/EditText';

const Footer = () => {
  return (
    <div className="w-full h-[328px] bg-footer-1 flex flex-row">
      <div className="w-full px-4 sm:px-[165px] py-16">
        <div className="flex flex-col h-full">
          <div className="flex flex-row justify-between h-[172px]">
            <div className="flex flex-col w-[350px] h-[172px]">
              <h2 className="text-4xl font-semibold leading-11 text-global-7 font-inter mb-4">
                EduQuest
              </h2>
              <p className="text-sm font-normal leading-[17px] text-footer-1 font-inter mb-2">
                Copyright © 2020 EduQuest.
              </p>
              <p className="text-sm font-normal leading-[17px] text-footer-1 font-inter mb-6">
                All rights reserved
              </p>
              <div className="flex flex-row space-x-3">
                <Image
                  src="/images/img_social_icons.svg"
                  alt="Social Icon"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <Image
                  src="/images/img_social_icons_white_a700.svg"
                  alt="Social Icon"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <Image
                  src="/images/img_social_icons_white_a700_32x32.svg"
                  alt="Social Icon"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <Image
                  src="/images/img_social_icons_32x32.svg"
                  alt="Social Icon"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
            </div>

            <div className="flex flex-col w-[190px] h-[167px]">
              <h3 className="text-xl font-semibold leading-6 text-global-7 font-inter mb-6">
                Company
              </h3>
              <div className="flex flex-col space-y-4">
                <Link href="/about" className="text-sm font-normal leading-[17px] text-footer-1 font-inter">
                  About us
                </Link>
                <p className="text-sm font-normal leading-[17px] text-footer-1 font-inter">
                  Service
                </p>
                <p className="text-sm font-normal leading-[17px] text-footer-1 font-inter">
                  Feature
                </p>
                <Link href="/contact" className="text-sm font-normal leading-[17px] text-footer-1 font-inter">
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="flex flex-col w-[110px] h-[168px]">
              <h3 className="text-xl font-semibold leading-6 text-global-7 font-inter mb-6">
                Support
              </h3>
              <div className="flex flex-col space-y-4">
                <Link href="/help" className="text-sm font-normal leading-[17px] text-footer-1 font-inter">
                  Help center
                </Link>
                <p className="text-sm font-normal leading-[17px] text-footer-1 font-inter">
                  Terms of service
                </p>
                <p className="text-sm font-normal leading-[17px] text-footer-1 font-inter">
                  Legal
                </p>
                <Link href="/privacy" className="text-sm font-normal leading-[17px] text-footer-1 font-inter">
                  Privacy policy
                </Link>
              </div>
            </div>

            <div className="flex flex-col w-[255px] h-[92px]">
              <h3 className="text-xl font-semibold leading-6 text-global-7 font-inter mb-6">
                Stay up to date
              </h3>
              <EditText
                placeholder="Your email address"
                className="h-[40px] w-[255px]"
              />
            </div>
          </div>
          
          <div className="mt-4">
            <p className="text-sm font-normal leading-[17px] text-footer-1 font-inter">
              Status
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;