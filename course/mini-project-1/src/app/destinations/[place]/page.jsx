'use client'
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React from 'react'
import parisImg  from '@/assets/paris.jpg'
import tokyoImg from '@/assets/tokyo.jpg'
import delhiImg from '@/assets/delhi.jpg'

const Place = () => {
   const {place} = useParams();
  return (
    <div>
        Welcome! to {place}, have a great tour in this city

        {
            place == 'paris' && <Image src={parisImg} width={500} height={400} alt='paris image' priority/>
        }

        {
            place == 'tokyo' && <Image src={tokyoImg} width={500} height={400} alt='paris image' priority/>
        }

        {
            place == 'dehli' && <Image src={delhiImg} width={500} height={400} alt='paris image' priority/>
        }
    </div>
  )
}

export default Place