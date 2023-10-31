import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../Models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    // Check if the request has a body
    if (!request.body) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    
    const reqBody = await request.json();
    const { profileImage } = reqBody;
    
    
    const token = request.cookies.get('token')?.value || '';
    
    const decoded = jwt.verify(token, "hackathon");
    
    
    
    if (!decoded || !decoded.id) {
      return NextResponse.json(
        { error: "User not authenticated" },
        { status: 401 }
        );
      }
      
      const userId = decoded.id; // Corrected to 'decoded.id'
      
      // Find the user by their ID
      const user = await User.findById(userId);
      
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }
      
      user.profileImage = profileImage;
      
      console.log("request.body");
      // Save the updated user data to the database
      await user.save();
      
      return NextResponse.json({
        message: "Profile updated successfully",
        success: true,
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json(
        { error: "Internal Server Error" },
        { status: 500 }
    );
  }
}

