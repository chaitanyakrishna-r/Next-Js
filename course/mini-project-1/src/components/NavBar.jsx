'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'

const NavBar = () => {
 

  const pathName = usePathname();
  console.log(pathName);

 
  return (
    <div className='bg-slate-100 h-16 flex justify-between items-center text-black px-10'>
      <div>
        <Link href={'/'}>
          <h1 className=' text-2xl font-bold'>🌎Travel Guide</h1>
        </Link>
      </div>
      <div>
        <ul className='flex gap-8 text-xl'>
          <Link href={'/'} className={`${pathName === '/' ? 'text-teal-700' : 'text-black' }`} ><li>Home</li></Link>
          <Link href={'/about'}  className={`${pathName === '/about' ? 'text-teal-700' : 'text-black' }`} ><li>About</li></Link>
          <Link href={'/destinations'}  className={`${pathName.startsWith('/destinations') ? 'text-teal-700' : 'text-black' }`} ><li>Destinations</li></Link>
          <Link href={'/contact'}  className={`${pathName === '/contact' ? 'text-teal-700' : 'text-black' }`} ><li>Contact Us</li></Link>
       
        </ul>
      </div>

    </div>
  )
}

export default NavBar