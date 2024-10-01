import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);

    try {
      const response = await fetch("http://localhost:3535/api/form/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      console.log("Success:", result);

      setFormData({
        username: "",
        phoneNumber: "",
        location: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-Madimi text-center text-gray-800 mb-6">
          Enter Your Details
        </h2>
        <div className="mb-5">
          <label
            className="block text-left text-gray-700 font-Madimi"
            htmlFor="username"
          >
            Name
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full mt-2 p-3 text-gray-700 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-100"
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="mb-5">
          <label
            className="text-left block text-gray-700 font-Madimi"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full mt-2 p-3 text-gray-700 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-100"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-left text-gray-700 font-Madimi"
            htmlFor="location"
          >
            Pincode
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full mt-2 p-3 text-gray-700 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-100"
            placeholder="Enter your location"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-Madimi rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
