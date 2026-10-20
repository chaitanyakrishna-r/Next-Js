'use client'
import Image from "next/image";
import {useState} from 'react'


import Btn1 from "@/components/Btn1";

export default function Home() {
  // const [count,setCount] = useState(0);

  const handleBtn =()=>{
    console.log('submited')
  }
  const [count,setCount] = useState<number>(0);
  return (
    <div>
      <Btn1 lable={'copy'} data='hello' action={handleBtn}/>
    </div>
  );
}
