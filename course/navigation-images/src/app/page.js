'use client'
import Image from "next/image";
import Link from 'next/link'
import{ useRouter } from 'next/navigation'
export default function Home() {
  const router = useRouter()
  return (
      <div>
        <ul>
          <Link href={'/'}> <li>Home</li></Link>
          <Link href={'/about'}> <li>about</li></Link>
          <Link href={'/contact'}> <li>contact</li></Link>
        
         
        
        </ul>
        <button onClick={()=>router.push('/support')}>
          go to support
        </button>
        <button onClick={()=>router.push('https://www.google.com')}>
          go to support
        </button>
      </div>
  );
}

