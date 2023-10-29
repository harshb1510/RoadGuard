// pages/signup/citizen.js
import Head from 'next/head';

const CitizenSignup = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Citizen Signup</title>
        <meta name="description" content="Sign up as a citizen for Smart Traffic Management." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-4">Citizen Signup</h1>
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 rounded"
            // Add state and event handlers for form fields
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            // Add state and event handlers for form fields
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
            // Add state and event handlers for form fields
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded">
            Sign Up
          </button>
        </form>
      </main>
    </div>
  );
};

export default CitizenSignup;
