import connectDb from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/model/user.model";
import { getServerSession } from "next-auth";

import authOptions from "@/lib/auth";

export async function GET(req: NextRequest) {
  try {
    await connectDb();
    const session = await getServerSession(authOptions);

    if (!session || !session.user.email || !session.user.id) {
      return NextResponse.json(
        { message: "user session not found" },
        { status: 400 },
      );
    }

    const user = await User.findById(session.user.id).select("-password");

    console.log("api/auth/user/route.js: user", user);

    if (!user) {
      return NextResponse.json({ message: "invalid user id" }, { status: 400 });
    }
    return NextResponse.json(user, { status: 200 });
  } catch (erorr) {
      return NextResponse.json(
                { message: `user get error ${erorr}` },
                { status: 500 }
            )
    
  }
}
