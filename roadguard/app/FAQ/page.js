// pages/FAQ.js

import React from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';

const Question = () => {
  return (
      <>
      <div className='flex'>
        <div className='w-[400px]'>
      <Sidebar/>
        </div>
    <div className=" w-full bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h1>

      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">General Road Safety Information</h2>
          <p>
            Basic safety rules are fundamental to road safety. It is important for drivers, pedestrians, and cyclists to be aware of their roles on the road and understand common road signs and symbols.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Vehicle Safety</h2>
          <p>
            Routine vehicle maintenance, including regular safety checks, is crucial for ensuring safety on the road. Additionally, using and installing child safety seats and wearing seatbelts are integral parts of vehicle safety.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Driving Tips</h2>
          <p>
            Defensive driving techniques play a significant role in preventing accidents. It's also important to know what to do in emergencies or breakdowns on the road and to avoid distracted driving behaviors.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Laws and Regulations</h2>
          <p>
            Adhering to speed limits and traffic regulations is crucial. It is important to understand the legal and safety implications of driving under the influence of alcohol or drugs.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">FAQs Specific to Your Initiative</h2>
          <p>
            Here, you can provide information specific to your efforts in reducing road accidents and improving road safety. This could include details about your programs, campaigns, and how people can get involved.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Community Engagement</h2>
          <p>
            Engaging the community is vital in spreading awareness and educating individuals about road safety. Consider providing information about volunteering opportunities, safety programs, and events.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
          <p>
            Links to additional educational materials, websites, and statistics related to road safety can be provided here for users to access more information.
          </p>
        </div>
      </div>
    </div>
    </div>
</>
  );
};

export default Question;
