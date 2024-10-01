import React, { useState, useEffect } from "react";

const DashBoard = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:3535/api/form/submit");
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

  if (loading) {
    return <div className="text-center"> Loading...</div>;
  }
  if (error) {
    return <div className="text-red-500"> Error:{error}</div>;
  }
  return (
    <div className="text-gray-700 p-4">
      <h1 className="font-bold text-2xl mb-4">DashBoard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="py-2 px-4 bg-gray-200">UserName</th>
              <th className="py-2 px-4 bg-gray-200">PhoneNumber</th>
              <th className="py-2 px-4 bg-gray-200">Location</th>
            </tr>
          </thead>
          <tbody>
            {user.map((u) => (
              <tr key={u._id} className="border-b">
                <td className="py-2 px-4 border">{u.username}</td>
                <td className="py-2 px-4 border">{u.phoneNumber}</td>
                <td className="py-2 px-4 border">{u.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoard;
