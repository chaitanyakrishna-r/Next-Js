import React from 'react'

 const  page = async({params}) => {
    const username =await params.username
  
    console.log(username)
  return (
    <div>
        Username - {username}
    </div>
  )
}

export default page