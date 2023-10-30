import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../Models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

connect();

export async function GET(request : NextRequest) {
  try {
    // Retrieve the JWT token from the request headers
    const token = request.cookies.get("token")?.value || "";

    // if (!token) {
    //   return NextResponse.json(
    //     { error: "Token not provided" },
    //     { status: 401 }
    //   );
    // }

    // Verify the token
    const decodedToken:any = jwt.verify(token, process.env.TOKEN_SECRET!);
    console.log(decodedToken);
    const user = await User.findById(decodedToken.id);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    console.log(user.id);
     
    return NextResponse.json(
     {
        id: user.id,
        username: user.username,
        email: user.email,
      },
    );
  } catch (error) {
    // Handle errors and return appropriate response
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
