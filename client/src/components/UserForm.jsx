import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    location: "",
    address: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    username: "",
    phoneNumber: "",
    location: "",
    address: "",
  });

  const validate = () => {
    let formIsValid = true;
    let newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
      formIsValid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phoneNumber.match(phoneRegex)) {
      newErrors.phoneNumber = "Please enter a valid 10-digit phone number";
      formIsValid = false;
    }

    const locationRegex = /^[0-9]{6}$/;
    if (!formData.location.match(locationRegex)) {
      newErrors.location = "Location must be a 6-digit pincode";
      formIsValid = false;
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
      formIsValid = false;
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Submitting form data:", formData);

      try {
        const response = await fetch(
          import.meta.env.VITE_API_URL + "/api/form/submit",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        const result = await response.json();
        console.log("Success:", result);

        setFormData({
          username: "",
          phoneNumber: "",
          location: "",
          address: "",
        });

        setErrors({
          username: "",
          phoneNumber: "",
          location: "",
          address: "",
        });

        navigate("/");
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      console.log("Form validation failed. Please correct the errors.");
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
          {errors.username && (
            <p className="text-red-500 mt-1">{errors.username}</p>
          )}
        </div>

        <div className="mb-5">
          <label
            className="block text-left text-gray-700 font-Madimi"
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
          {errors.phoneNumber && (
            <p className="text-red-500 mt-1">{errors.phoneNumber}</p>
          )}
        </div>

        <div className="mb-6">
          <label
            className="block text-left text-gray-700 font-Madimi"
            htmlFor="address"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full mt-2 p-3 text-gray-700 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-100"
            placeholder="Enter your address"
            required
          />
          {errors.address && (
            <p className="text-red-500 mt-1">{errors.address}</p>
          )}
        </div>

        <div className="mb-5">
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
          {errors.location && (
            <p className="text-red-500 mt-1">{errors.location}</p>
          )}
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
