import {connect} from "../../../../dbConfig/dbConfig";
import Post from "../../../../Models/postModel";
import { NextRequest,NextResponse } from "next/server";

connect();

export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json();
        const {username,profileImage,caption,photo}=reqBody; 
        console.log(reqBody);


        const newPost=await new Post({
            username,
            profileImage,
            caption,
            photo
        })

    
        const savedPost=await newPost.save();
        console.log(savedPost);

        return NextResponse.json({
        message:"User created successfully",
        success:true,
        savedPost
    })
        
    } catch (error) {
        return NextResponse.json({error:error.message},
            {status:500})
        
    }
}