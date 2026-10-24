import { NextRequest, NextResponse } from "next/server";
import User from '@/model/user.model'
import connectDb from "@/config/db";
import bcrypt from "bcryptjs";

export async function POST(request:NextRequest){
    console.log('got request')
    try{

    
    const{username,email,password} = await request.json();
    await connectDb();
    //validation
    // user exisitance
    //imcome data santization
    const exisitUser = await User.findOne({email});

    if(exisitUser){
       return NextResponse.json(
            {message:'user already exists'},
            {status: 409}
        )
    }
    // password lenght check
    if(password.lenght <= 3){
        return NextResponse.json(
            {message:'Password should be atleast 6 character or above'},
            {status: 400}
        )
    }

    const hasedPassword = await bcrypt.hash(password,10);
    
    const user = await User.create({

        email,
        username,
        password : hasedPassword
    })

    return NextResponse.json(
        {
            email:user.email,
            username: user.username,
        },
        {status: 201}
    )


    }catch(error){
        console.log(error);
         return NextResponse.json(
          { error: `Internal Server Error ${error}`}, 
          { status: 500 }
      );
    }
}