"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

const EChallanPage = () => {
  const [paid, setPaid] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/users/getuser");
        setPaid(res.data.paid);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const user = {
    paid: "false",
  };

  const handlePayment = async(e) => {
try {
  e.preventDefault();
  const response = await axios.post("/api/users/profile", user);
  console.log("Profile Updated", response.data);
  window.location.reload();
} catch (error) {
  console.log("Not updated", error.message);
}

    };

  console.log(paid)

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">E-Challan</h1>
        {paid ? (
          <div className="bg-white p-6 rounded-md shadow-md mb-4">
            <h2 className="text-xl font-bold mb-2">Traffic Violation Report</h2>
            <p>
              <span className="font-semibold">Vehicle Number:</span> ABC 1234
              <br />
              <span className="font-semibold">Date & Time:</span> October 29,
              2023, 09:45 AM
              <br />
              <span className="font-semibold">Violation:</span> Overspeeding
              (exceeded limit by 20 km/h)
              <br />
              <span className="font-semibold">Location:</span> Main Street, City
              Name
              <br />
              <span className="font-semibold">Fine Amount:</span> $100
              <br />
            </p>
          </div>
        ) : (
          <div>Nothing to display</div>
        )}
        {paid && (
          <button
            onClick={handlePayment}
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Pay
          </button>
        )}
      </div>
    </div>
  );
};

export default EChallanPage;
