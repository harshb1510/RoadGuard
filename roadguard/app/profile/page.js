"use client"
import { useState ,useEffect } from 'react';
import Topbar from '../components/Topbar';
import { useRouter } from 'next/navigation';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import axios from 'axios';

const Profile = () => {
  const router = useRouter();
  const [showOptions, setShowOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showCameraIcon, setShowCameraIcon] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/users/getuser");
        setName(res.data.username);
        setEmail(res.data.email);
        setId(res.data.id);
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
              email: email,
              profileImage: url,
            }
            if (url) {
                const response= axios.post(`/api/users/userUpdate/${id}`, url);
                console.log(response);
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

  return (
    <>
      <Topbar />
      <div className='flex items-center justify-around m-auto pt-[150px]'>
        <div className='relative'>
          {showCameraIcon && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded-full bg-gray-800 bg-opacity-50">
              <CameraAltIcon sx={{ fontSize: 72, color: 'white' }} />
            </div>
          )}
          {selectedImage ? (
            <img
              className='h-[250px] w-[250px] object-contain rounded-full cursor-pointer'
              src={selectedImage}
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
        <div className='mr-10'>
          <h1 className='text-3xl font-bold'>Profile</h1>
          <div className='flex items-center justify-evenly'>
            <h2 className='pt-[100px] pr-[100px] pb-[100px]'>Username</h2>
            <h2>Info</h2>
          </div>
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