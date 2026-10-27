'use client'
import axios from "axios";
import { useSession } from "next-auth/react";
import { createContext, useContext, useEffect, useState } from "react"

type userContextType={
    user:userType | undefined | null,
    setUser: (user:userType)=>void
}
type userType = {
    email: string,
    id: string,
    image?: string,
    username: string
}

const UserContext = createContext<userContextType|undefined>(undefined)

export const UserContextProvider =({children}:{children:React.ReactNode})=>{

    const [user,setUser]= useState<userType>();
    const session =  useSession();

    const data={
        user,
        setUser
    }
    
    useEffect(()=>{
        const getUser = async()=>{
            try{

                const result = await axios.get('/api/auth/user')   
                setUser(result.data)
                  
            
            }catch(error){
                console.log(error)
            }
        }
        getUser();
    },[session])

    return(
        <UserContext value={data}>
            {children}
        </UserContext>
    )
}

export  const useUser = ()=>{
    return useContext(UserContext);
}