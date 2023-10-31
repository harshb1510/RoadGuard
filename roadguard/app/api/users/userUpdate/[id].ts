// api/user/userUpdate/[id].js

import {connect} from '../../../../dbConfig/dbConfig';
import User from '../../../../Models/userModel';


connect();
export async function POST(request: NextRequest) {
    try{
        console.log("hi");
        const reqBody=await request.json();
        const {url}=reqBody;
        console.log(reqBody);

        const user=await User.findOne({email});
        if(!user){
            return NextResponse.json({error:"User not found"},  {status:400})
        }

        const validPassword=await bcryptjs.compare(password,user.password);
        if(!validPassword){
            return NextResponse.json({error:"Invalid password"},  {status:400})
        }


  switch (method) {
    case 'PUT':
      try {
        const { email, profileImage } = req.body;

        const updatedUser = await User.findByIdAndUpdate(id, { email, profileImage }, { new: true });

        if (!updatedUser) {
          return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(200).json({ success: true, data: updatedUser });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server Error' });
      }
      break;

    default:
      res.status(405).json({ success: false, message: `Method ${method} Not Allowed` });
      break;
  }
}
