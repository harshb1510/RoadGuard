import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../Models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    if (!request.body) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }
    
    const reqBody = await request.json();
    const { profileImage, vehicle, phoneNumber } = reqBody;
    console.log(reqBody)
    
    const token = request.cookies.get('token')?.value || '';
    const decoded = jwt.verify(token, "hackathon");
    
    if (!decoded || !decoded.id) {
      return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
    }
    
    const userId = decoded.id;
    const user = await User.findById(userId);
    
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    
    if (profileImage) {
      user.profileImage = profileImage;
    }

    if (vehicle) {
      user.vehicle = vehicle;
    }

    if (phoneNumber) {
      user.phoneNumber = phoneNumber;
    }
    
    await user.save();
    
    return NextResponse.json({
      message: "Profile updated successfully",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}