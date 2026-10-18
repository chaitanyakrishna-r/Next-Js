'use client'
import React from 'react'

import {useRouter} from 'next/navigation'

const Destinations = () => {
  const router = useRouter();


  function handleClick(pathName){
    router.push(`/destinations/${pathName}`)
  }
  return (
    <div className='flex flex-col h-screen justify-center items-center gap-8 '>
      <h1 className='text-2xl font-bold '>Choose Your Destination</h1>

      
        <button onClick={()=>handleClick('paris')} className=' w-1/4 h-32 bg-slate-50  rounded text-center text-black'>
              Paris
        </button>
        <button onClick={()=>handleClick('tokyo')} className=' w-1/4 h-32 bg-slate-50  rounded text-center text-black' >
              Tokyo
        </button>
        <button onClick={()=>handleClick('dehli')} className=' w-1/4 h-32 bg-slate-50  rounded text-center text-black'>
              Dehli
        </button>
      

    </div>
  )
}

export default Destinations