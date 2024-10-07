import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL } from "./Api/BeApi";
const DashBoard = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(API_URL + "/api/form/submit");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  const handleClear = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(API_URL + "/api/form/submit", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to clear users");
      }

      setUser([]);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleHome = () => {
    navigate("/");
  };

  if (loading) {
    return <div className="text-center"> Loading...</div>;
  }
  if (error) {
    return <div className="text-red-500"> Error: {error}</div>;
  }
  return (
    <div className="text-gray-700 p-4">
      <div className="flex">
        <h1 className="flex-grow pl-16 font-Madimi text-2xl mb-6">DashBoard</h1>
        <button
          className="flex-none ml-4 text-white bg-blue-600 h-12 font-Madimi text-center"
          onClick={handleHome}
        >
          Home
        </button>
        <button
          className="flex-none ml-6 text-white bg-blue-600 h-12 font-Madimi text-center"
          onClick={handleClear}
        >
          clear
        </button>
      </div>
      <br />
      {user.length === 0 ? (
        <h1 className="mt-32 font-Madimi"> User Detail is Not available</h1>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr>
                <th className="font-Madimi py-2 px-4 bg-gray-200">UserName</th>
                <th className="font-Madimi py-2 px-4 bg-gray-200">
                  PhoneNumber
                </th>
                <th className="font-Madimi py-2 px-4 bg-gray-200">Address</th>
                <th className="font-Madimi py-2 px-4 bg-gray-200">Location</th>
              </tr>
            </thead>
            <tbody>
              {user.map((u) => (
                <tr key={u._id} className="border-b">
                  <td className="py-2 px-4 border">{u.username}</td>
                  <td className="py-2 px-4 border">{u.phoneNumber}</td>
                  <td className="py-2 px-4 border">{u.address}</td>
                  <td className="py-2 px-4 border">{u.location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default DashBoard;
