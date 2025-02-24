import React, { useState } from 'react';
import axios from 'axios';

const AddFaculty = () => {
  const [facultyData, setFacultyData] = useState({
    name: '',
    department: '',
    image: null
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', facultyData.name);
    formData.append('department', facultyData.department);
    formData.append('image', facultyData.image);

    try {
      await axios.post('http://localhost:8000/api/faculty/', formData);
      alert('Faculty added successfully');
      setFacultyData({ name: '', department: '', image: null });
    } catch (error) {
      alert('Error adding faculty');
    }
  };

  return (
    <div className="container mx-auto max-w-md p-6">
      <h2 className="mb-6 text-2xl font-bold">Add New Faculty</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border p-2"
            value={facultyData.name}
            onChange={(e) => setFacultyData({ ...facultyData, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Department</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border p-2"
            value={facultyData.department}
            onChange={(e) => setFacultyData({ ...facultyData, department: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Image</label>
          <input
            type="file"
            className="mt-1 block w-full"
            onChange={(e) => setFacultyData({ ...facultyData, image: e.target.files[0] })}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
        >
          Add Faculty
        </button>
      </form>
    </div>
  );
};

export default AddFaculty;