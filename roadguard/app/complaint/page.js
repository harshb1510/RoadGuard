
"use client"


import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    complaint: "",
  });

  const [errors, setErrors] = useState({});
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation logic
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Required";
    }
    if (!formData.email) {
      newErrors.email = "Required";
    }
    if (!formData.location) {
      newErrors.location = "Required";
    }
    if (!formData.complaint) {
      newErrors.complaint = "Required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: "akshatgtc@gmail.com",
        message: `Location: ${formData.location}\n\nComplaint: ${formData.complaint}`,
      };

      emailjs
        .send("service_m5wpqnq", "template_1kw8qm5", templateParams, "bKs4oP1IZMlG27n--")
        .then((response) => {
          console.log("Email sent successfully:", response);
          setFormData({ name: "", email: "", location: "", complaint: "" }); // Clear form fields
          setAlertVisible(true);
          setTimeout(() => {
            setAlertVisible(false);
          }, 3000);
        })
        .catch((error) => {
          console.error("Error sending email:", error);
        });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow-lg">
      {alertVisible && (
        <div className="bg-green-500 text-white p-2 rounded-md mb-4">
          Email sent successfully!
        </div>
      )}
      <h2 className="text-2xl font-semibold mb-6">Road Safety Complaint Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-600">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-medium text-gray-600">
            Location
          </label>
          <input
            id="location"
            name="location"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.location}
            onChange={handleInputChange}
          />
          {errors.location && <div className="text-red-500 text-sm mt-1">{errors.location}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="complaint" className="block text-sm font-medium text-gray-600">
            Complaint
          </label>
          <textarea
            id="complaint"
            name="complaint"
            rows="4"
            className="mt-1 p-2 w-full border rounded-md"
            value={formData.complaint}
            onChange={handleInputChange}
          ></textarea>
          {errors.complaint && <div className="text-red-500 text-sm mt-1">{errors.complaint}</div>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Submit Complaint
        </button>
      </form>
    </div>
  );
};

export default ComplaintForm;
