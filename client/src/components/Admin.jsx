import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { username, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3535/api/admin/login",
        formData
      );
      localStorage.setItem("token", res.data.token);
      navigate("/dashBoard");
    } catch (err) {
      setError(err.response?.data.msg || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={onSubmit}
        className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md"
      >
        <h2 className="text-2xl font-Madimi text-center text-gray-800 mb-6">
          Admin Login
        </h2>

        <div className="mb-5">
          <label
            className="block text-left text-gray-700 font-Madimi"
            htmlFor="username"
          >
            Email
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={onChange}
            className="w-full mt-2 p-3 text-gray-700 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-100"
            placeholder="Enter your Email"
            required
          />
        </div>

        <div className="mb-5">
          <label
            className="block text-left text-gray-700 font-Madimi"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            className="w-full mt-2 p-3 text-gray-700 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-100"
            placeholder="Enter your password"
            required
          />
        </div>

        {error && <p className="text-red-500 mb-5">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-blue-500 text-white font-Madimi rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
