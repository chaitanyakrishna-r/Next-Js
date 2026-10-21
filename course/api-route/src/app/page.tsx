


// export default async function Home() {
//   //ssr 
//   // const response = await fetch('http://localhost:3000/api/users',{
//   //   cache: 'no-cache'
//   // })

//   //ssg - default even if we miss cache ssg is create 
//   // const response = await fetch('http://localhost:3000/api/users',{
//   //   cache: 'force-cache'
//   // })

//   //isr 

//   const response = await fetch('http://localhost:3000/api/users',{
//    next: {revalidate:20}
//   })

//   console.log(response);
//   const data = await response.json()
//   console.log(data);
//   return (
//     <div>
//       page
//     </div>
//   );
// }

'use client'

import { useEffect } from "react"

export default function Home(){

  useEffect(()=>{
    const  handleFetch = async( )=>{
      const response = await fetch('api/users');
      const data = await response.json();
      console.log(data);

    } 
    handleFetch();
  },[])


  return(
    <div>
      page
    </div>
  )
}