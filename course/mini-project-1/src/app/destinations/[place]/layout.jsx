import React from 'react'

const DestinationLayout = ({children, info}) => {
  return (
    <div className=' flex  text-black h-screen'>
       <div className='w-1/2 bg-slate-200 p-10'>

        {children}
       </div>

        <div className='w-1/2 bg-slate-300 p-10' >
            {info }
        </div>
    </div>
  )
}

export default DestinationLayout