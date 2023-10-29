// pages/index.js
import Head from 'next/head';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Smart Traffic Management</title>
        <meta name="description" content="Revolutionizing road safety with Smart Traffic Management and Accident Prevention Platform." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">Smart Traffic Management and Accident Prevention Platform</h1>
        <p className="text-lg mb-8">Revolutionizing road safety with state-of-the-art IoT and AI technologies.</p>

        <div className="flex space-x-4">
          <a href="#features" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Learn More
          </a>
          <a href="#contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </a>
        </div>
      </main>

      <footer className="mt-8">
        <p>&copy; 2023 Smart Traffic Management. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
