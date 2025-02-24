import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";

const FacultyAuth = () => {
  const webcamRef = useRef(null);
  const [authResult, setAuthResult] = useState(null);

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const blob = await fetch(imageSrc).then((res) => res.blob());
    const formData = new FormData();
    formData.append("image", blob, "capture.jpg");

    try {
      const response = await axios.post(
        "http://localhost:8000/api/verify-face/",
        formData
      );
      setAuthResult(response.data);
    } catch (error) {
      setAuthResult({ error: "Authentication failed" });
    }
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center">
        <h2 className="mb-6 text-2xl font-bold">Faculty Authentication</h2>
        <Link to="/admin">
          <button
            // onClick={Navigate to=''}
            className="rounded-md bg-gray-500 px-3 py-2 text-sm font-medium text-white hover:bg-red-600"
          >
            Admin Login
          </button>
        </Link>
      </div>
      <div className="max-w-md mx-auto">

        <div className="mb-4">
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="w-full rounded-lg"
          />
        </div>
        <button
          onClick={capture}
          className="w-full rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-500"
        >
          Verify Face
        </button>

        {authResult && (
          <div className="mt-4 rounded-md border p-4">
            {authResult.match ? (
              <div className="text-green-600">
                <h3 className="text-xl font-bold">Authentication Successful</h3>
                <p>Name: {authResult.faculty.name}</p>
                <p>Department: {authResult.faculty.department}</p>
              </div>
            ) : (
              <div className="text-red-600">
                <h3 className="text-xl font-bold">Authentication Failed</h3>
                <p>No matching faculty found</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyAuth;
