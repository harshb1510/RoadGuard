// pages/index.js\\

"use client"
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast,{Toaster} from 'react-hot-toast';


const Home = () => {

  const router=useRouter();
  const [user,setUser]  = React.useState({
    email:"",
    password:"",
  })

  const onLogin=async(e)=>{
    try{
      e.preventDefault()
      const response=await axios.post('/api/users/login_hospital',user);
      console.log("Login Success",response.data)
      toast.success("Login Success")

      router.push('/');
    }
    catch(error){
      console.log("Login Failed",error.message);
      toast.error("Invalid Credentials")

    }
  }
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Smart Traffic Management</title>
        <meta name="description" content="Revolutionizing road safety with Smart Traffic Management and Accident Prevention Platform." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">RoadGuard</h1>
        <p className="text-lg mb-8">Revolutionizing road safety with state-of-the-art IoT and AI technologies.</p>

        <div className="flex space-x-4 justify-center pt-10 ">
          
          {/* <a href="#features" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Hospital Login
          </a>
          <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ">
            Police Login
          </a>
          <a href="#features" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ">
            Citizen Login
          </a> */}

<Link className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded' href="/login_hospital">Hospital Login</Link>
          <Link className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded' href="/login_police">Police Login</Link>
          <Link className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" href="/login_citizen">Citizen Login</Link>
        </div>
        <div className="bg-gray-100 pt-10 pb-12 flex flex-col items-center justify-center">
     
      <main className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Hospital Login</h1>
        <form className="flex flex-col space-y-4" onSubmit={onLogin}>
          {/* <input
            type="text"
            placeholder="Full Name"
            className="border p-2 rounded"
            // Add state and event handlers for form fields
          /> */}
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            id="email"
            value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})}
            // Add state and event handlers for form fields
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
            id="password"
            value={user.password}
            onChange={(e)=>setUser({...user,password:e.target.value})}
            // Add state and event handlers for form fields
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded">
            Login
          </button>
          <Toaster
  position="top-center"
  reverseOrder={false}
  gutter={8}
  containerClassName=""
  containerStyle={{}}
  toastOptions={{
    // Define default options
    className: '',
    duration: 2000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
        </form>
        <h1 className='pt-2'>Dont have account? <Link className='text-blue-700 hover:text-blue-500' href="/signup_hospital">Sign Up</Link> </h1>

      </main>
    </div>
      </main>

      <footer className="">
        <p>&copy; 2023 Smart Traffic Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;