import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [faculties, setFaculties] = useState([]);
  console.log(faculties);
  

  useEffect(() => {
    const fetchFaculties = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/faculty/");
        setFaculties(response.data);
      } catch (error) {
        console.error("Error fetching faculties:", error);
      }
    };
    fetchFaculties();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        <Link
          to="/add-faculty"
          className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
        >
          Add New Faculty
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {faculties.map((faculty) => (
          <div key={faculty.id} className="rounded-lg bg-white p-4 shadow flex items-center justify-center flex-col">
            <img
              // src={`http://localhost:8000${faculty.image}`}
              src={faculty.image}
              alt={faculty.name}
              className="mb-4 h-48 w-48 rounded-full object-fit"
            />
            <h3 className="text-xl font-semibold">{faculty.name}</h3>
            <p className="text-gray-600">{faculty.department}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
