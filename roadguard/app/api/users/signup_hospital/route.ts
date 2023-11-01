import {connect} from "../../../../dbConfig/dbConfig";
import User from "../../../../Models/userModel";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

connect();

export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json();

        const {username,email,password,type}=reqBody; 
        console.log(reqBody);

        const user= await User.findOne({email});

        if(user){
            return NextResponse.json({error:"User already exists"},
            {status:400})
        }

        const hashedPassword=await bcryptjs.hash(password,10);

        const newUser=await new User({
            username,
            email,
            password:hashedPassword,
            type
        })
        const savedUser=await newUser.save();
        console.log(savedUser);

        return NextResponse.json({
        message:"User created successfully",
        success:true,
        savedUser
    })
        
    } catch (error) {
        return NextResponse.json({error:error.message},
            {status:500})
        
    }
}