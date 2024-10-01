import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const { username, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error on input change
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("Login button clicked"); // Add this line
    setLoading(true);

    try {
      const res = await axios.post(
        "http://localhost:3535/api/admin/login",
        formData
      );
      localStorage.setItem("token", res.data.token);
      navigate("/dashBoard"); // Use navigate for redirection
    } catch (err) {
      setError(err.response?.data.msg || "Login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          onChange={onChange}
          placeholder="Username"
          required
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={onChange}
          placeholder="Password"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
