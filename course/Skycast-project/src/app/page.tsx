"use client";
import { useUser } from "@/context/UserContext";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaPencil } from "react-icons/fa6";


export default function Home() {

  const data = useUser();
  console.log("page.tsx: home: ",data)
  // const { data } = useSession();
  const [loading, setLoading] =useState(false);

  const router = useRouter();

  async function handleSignout(){
    setLoading(true);
    try{
      await signOut();
      setLoading(false);
    }catch(error){
      console.log(error)
    }
  }

  console.log("home page", data);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 ">
      {data && <div className='w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg text-center relative flex flex-col items-center'>
        <FaPencil size={22} color='white' className='absolute right-5 top-5 cursor-pointer' onClick={()=>router.push('/edit')} />
          {
            data.user?.image && <div  className='relative w-50 h-50 rounded-full border-2 border-white overflow-hidden'>
              <Image src={data.user?.image} alt="profile-img" fill/>
            </div>
          }
          <h1 className='text-2xl font-semibold my-4'>Welcome, {data.user?.username}</h1>
          <button className='w-full py-2 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors' onClick={handleSignout}>Sign Out</button>
        </div>}
      {!data && <div className="text-white text-2xl">loading...</div>}
    </div>
  );
}
