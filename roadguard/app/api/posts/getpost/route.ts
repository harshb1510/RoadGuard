import { connect } from "../../../../dbConfig/dbConfig";
import Post from "../../../../Models/postModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function GET(request: NextRequest) {
  try {
    const posts = await Post.find();
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    // Handle errors and return appropriate response
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
