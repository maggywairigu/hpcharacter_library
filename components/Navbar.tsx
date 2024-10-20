'use client';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


function Navbar() {
    
  return (
    <nav className='sm:px-16 px-6 w-full flex items-center py-5 fixed top-0 z-20 bg-primary'>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link href='/'>
            <Image 
                src='/hpLogo.png'
                width={80}
                height={35}
                alt='HP Library'
            />
        </Link>

        
        
        <p className='text-white text-[24px] font-bold cursor-pointer flex'> Welcome !&nbsp;<span className='sm:block hidden'> | &nbsp;Harry Potter's character library</span></p>
      </div>
      
    </nav>
  )
}

export default Navbar
