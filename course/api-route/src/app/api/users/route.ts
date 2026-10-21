'/api/users'

import { NextRequest, NextResponse } from "next/server"


export async function GET(){
    return NextResponse.json({
        name: 'chaitanya',
        age:24
    })
}

export async function POST(request:NextRequest){
    const {name, age}= await request.json()
    return NextResponse.json(

        name,age
    )
    
}