import connectDb from "@/config/db";
import { NextRequest, NextResponse } from "next/server";
import User from "@/model/user.model";
import { getServerSession } from "next-auth";
import { uploadOnCloudinary } from "@/config/cloudinary";
import authOptions from "@/lib/auth";

export async function PUT(req: NextRequest) {
  try {
    await connectDb();

    const session = await getServerSession(authOptions);

    console.log("Backend session:", session);
    console.log("Email:", session?.user?.email);
    console.log("ID:", session?.user?.id);

    if (!session || !session.user.email || !session.user.id) {
      return NextResponse.json(
        { message: "user doen't have session" },
        { status: 400 },
      );
    }

    const formData = await req.formData();

    const name = formData.get("name") as string;
    const file = formData.get("file") as Blob | null;

    let imageUlr = session?.user?.image || null;

    if (file) {
      imageUlr = await uploadOnCloudinary(file);
    }

    const user = await User.findByIdAndUpdate(
      session.user.id,
      {
        name,
        image: imageUlr,
      },
      { new: true },
    );

    if (!user) {
      return NextResponse.json({ message: "user not found" }, { status: 400 });
    }

    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error("Update Error:", error);

    // Properly extract error message instead of [object Object]
    const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);

    return NextResponse.json(
      { message: `Update Error: ${errorMessage}` },
      { status: 500 },
    );
  }
}
