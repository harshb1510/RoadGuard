import React from 'react';

const EChallanPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">E-Challan</h1>

        <div className="bg-white p-6 rounded-md shadow-md mb-4">
          <h2 className="text-xl font-bold mb-2">Traffic Violation Report</h2>
          <p>
            <span className="font-semibold">Vehicle Number:</span> ABC 1234<br />
            <span className="font-semibold">Date & Time:</span> October 29, 2023, 09:45 AM<br />
            <span className="font-semibold">Violation:</span> Overspeeding (exceeded limit by 20 km/h)<br />
            <span className="font-semibold">Location:</span> Main Street, City Name<br />
            <span className="font-semibold">Fine Amount:</span> $100<br />
          </p>
        </div>

        {/* Include sections for payment options, instructions, or other relevant information */}
      </div>
    </div>
  );
};

export default EChallanPage;
