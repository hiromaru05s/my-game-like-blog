// components/Header.tsx
import React from 'react';
import Link from 'next/link';
import { ModeToggle } from './toggle';

const Header = () => {
  return (
    

<header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
<div className="flex items-center space-x-4">
            <Link href="/">
                <div className="cursor-customHover cursor-customHoverClick">
                    <img src="/home.png" alt="Logo" className="w-24 h-8.5" />
                </div>
            </Link>
        </div>
<div className='flex items-center space-x-8'>
            <Link href="/blog" passHref>
                
                    <div className='cursor-customHover cursor-customHoverClick'>Blog</div>
                
            </Link>
            <Link href="/about" passHref>
                
                    <div className='cursor-customHover cursor-customHoverClick '>About</div>
                
            </Link>
            </div>
<Link
  className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
  href="#"
>
  Sign In
</Link>
</header>



  );
};

export default Header;