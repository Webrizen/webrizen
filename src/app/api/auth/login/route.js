import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import bcrypt from "bcrypt";
import User from "@/models/User";

export async function POST(request) {
    try {
      await dbConnect();
      
      const { email, password } = await request.json();
      
      // Find the user by email
      const user = await User.findOne({ email });
      
      // If user not found
      if (!user) {
        return new NextResponse("User not found", { status: 404 });
      }
      
      // Compare the provided password with the stored hashed password
      const match = await bcrypt.compare(password, user.password);
      
      // If passwords don't match
      if (!match) {
        return new NextResponse("Invalid password", { status: 401 });
      }
      
      // If everything is correct, return success
      return new NextResponse("User login successful", { status: 200 });
    } catch (error) {
      return new NextResponse(`Webhook error: ${error.message}`, { status: 500 });
    }
  }