'use client'
import { useParams } from 'next/navigation'
import React from 'react'

const infoPage = () => {
  const {place} = useParams()
  return (
    <div>
      {place} is the best city for travellers
    </div>
  )
}

export default infoPage