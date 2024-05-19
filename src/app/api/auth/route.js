import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/lib/db";
import bcrypt from "bcrypt";
import User from "@/models/User";

// Signup New Users(Clients):
export async function POST(request) {
  try {
    await dbConnect();
    const { name, email, password, companyName } = await request.json();
    
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new NextResponse("Email already exists", { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user to the database with hashed password
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      companyName,
    });

    return new NextResponse("User created successfully", { status: 201 });
  } catch (error) {
    return new NextResponse(`Webhook error: ${error.message}`, { status: 400 });
  }
}