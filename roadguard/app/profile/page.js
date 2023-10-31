"use client"
import { useState ,useEffect } from 'react';
import Topbar from '../components/Topbar';
import { useRouter } from 'next/navigation';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import axios from 'axios';

const Profile = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  const [vehicle, setVehicle] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/users/getuser");
        setName(res.data.username);
        setEmail(res.data.email);
        setId(res.data.id);
        setImage(res.data.profileImage);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData(); 
  }, []); 


    const handleFileUpload = async(e) => {
        const image = e.target.files[0];
    
        const formData = new FormData();
        formData.set('image', image)
    
        axios.post("https://api.imgbb.com/1/upload?key=c1e87660595242c0175f82bb850d3e15", formData)
          .then(res => {
            const url = res.data.data.display_url;
           
            const userProfileImage = {
              profileImage: url,
            }

            if (url) {
                try {
                    const response= axios.post("/api/users/profile", userProfileImage);
                    console.log(response);
                    window.location.reload();
                } catch (error) {
                    console.log(error.message);
                }
            }
    
          })
          .catch((error) => {
            console.log(error);
            window.alert(error);
            setIsLoading(false);
          })
      }
    


  

  const logout = async () => {
    try {
      await axios.get("/api/users/login_citizen");
      router.push('/login_citizen');
    } catch (error) {
      console.log(error.message);
    }
  };

  console.log(image);
  console.log(email);
  
  return (
    <>
      <Topbar />
      <div className='flex items-center justify-around m-auto pt-[100px]'>
        <div className='relative'>
         
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-full bg-gray-800 bg-opacity-50">
              <CameraAltIcon sx={{ fontSize: 72, color: 'white' }} />
            </div>
        
           {(image) ? (
            <img
              className='h-[250px] w-[250px] object-contain rounded-full cursor-pointer'
              src={image}
              alt=""
            />
            ) : (
            <img
              className='h-[250px] w-[250px] object-contain rounded-full cursor-pointer'
              src="https://conservation-innovations.org/wp-content/uploads/2019/09/Dummy-Person.png" 
              alt=""
            />
            )}
            
          
         
            <div className='absolute bg-white border border-gray-200 shadow-md mt-2 rounded p-2'>
              <label className='cursor-pointer block text-blue-600'>
                Add Profile Photo
                <input
                  type='file'
                  accept="image/*"
                  className='hidden'
                  onChange={handleFileUpload}
                />
              </label>
             
             
            </div>
          
        </div>
       <div className='mr-10 border-8 border-red-400 grid items-center p-10'>
          <h1 className='text-4xl font-bold text-center'>Profile Info</h1>
          <div className='flex items-center justify-evenly gap-10'>
            <div className='grid pt-[50px] items-center text-center'>
            <h1 className='text-2xl font-extrabold '>Username</h1>
            <h2 className='  pb-[50px] '>{name}</h2>
            </div>
            <div className='grid pt-[50px] text-center'>
            <h1 className='text-2xl font-extrabold'>Email</h1>
            <h2 className='  pb-[50px] '>{email}</h2>
            </div>
          </div>
          <form action="" onSubmit={handleFileUpload}>
            <div className='flex  text-center'>
            <h1 className='text-2xl font-extrabold pr-2'>Vehicle:</h1>
              <input
                type='text'
                placeholder='Vehicle Registration No.'
                value={vehicle}
                id="vehicle"
                onChange={(e) => setVehicle(e.target.value)}
              />
            </div>
            <div className='flex text-center pb-5'>
              <h1 className='text-2xl font-extrabold pr-2'>Phone:</h1>
              <input
                type='text'
                placeholder='Phone Number'
                value={phoneNumber}
                id='phoneNumber'
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <button
            type='submit'
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded"
            >
            Save Profile
          </button>
            </form>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;