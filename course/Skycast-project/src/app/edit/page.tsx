"use client";
import React, { useEffect, useRef, useState } from "react";
// import { useSession } from "next-auth/react";
import { CgProfile } from "react-icons/cg";
import Image from "next/image";
import axios from "axios";
import { useUser } from "@/context/UserContext";

const EditPage = () => {
  // const { data } = useSession();
  const data = useUser();
  const [name, setName] = useState("");
  const [frontendImage, setFrontendImage] = useState("")
  const [backendImage, setBackendImage] = useState<File>()


  const imageInput = useRef<HTMLInputElement>(null);

  const handleImage = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const files = e.target.files
    if(!files || files.length == 0){
        return 
    }
    const file = files[0]
    setBackendImage(file)
    setFrontendImage(URL.createObjectURL(file))
  }

  useEffect(()=>{
    if(data){
        setName(data?.user?.username as string);
        setFrontendImage(data?.user?.image as string);
    }
  },[data])

  async function handleSubmit(e:React.SyntheticEvent<HTMLFormElement>){
    e.preventDefault();
    try{

      const formData = new FormData();
      formData.append('name',name);
      
      //
      if(backendImage){
        formData.append('file',backendImage);
      }
      const response = await axios.put('/api/auth/edit',formData);
      
      data?.setUser(response.data)
      console.log(response.data)
    }catch(error){
  if (axios.isAxiosError(error)) {
    console.log("Status:", error.response?.status);
    console.log("Backend Error:", error.response?.data);
  } else {
    console.log(error);
  }
    }
  } 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 ">
      <div className="w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-2xl font-semibold text-center mb-2">
          Edit Profile
        </h1>
        <form className="space-y-2 flex flex-col w-full items-center" onSubmit={handleSubmit}>
          <div className="w-25 h-25 rounded-full border-2 flex justify-center items-center border-white transition-all hover:border-blue-500 text-white hover:text-blue-500 cursor-pointer overflow-hidden relative" onClick={()=>imageInput.current?.click()}>
            <input type="file" accept="image/*" hidden ref={imageInput} onChange={handleImage} />
            {frontendImage ? (
              <Image src={frontendImage} alt="profile" fill />
            ) : (
              <CgProfile size={40} color="white" />
            )}
          </div>

          <div className="w-full">
            <label htmlFor="Emal" className="block mb-1 font-medium"></label>
            <input
              type="text"
              placeholder="Enter name"
              className="w-full border-b border-white py-2 px-1 bg-black text-white outline-none placeholder-gray-400"
              value={name}
              name="name"
              onChange={(e)=>setName(e.target.value)}
            />
          </div>
          <button className='w-full py-2 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors'>
            save
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditPage;
