import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ errorCode }) => {
  const navigate = useNavigate()
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 smooth-entry">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">Error {errorCode}</h1>
        <p className="text-lg text-gray-800 mb-8">PANIC!! Something went wrong...</p>
        <p className="text-lg text-gray-800 mb-8">Contact tarun...</p>
        <button
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:bg-red-700"
          onClick={() => 
            navigate("/")
            // window.location.reload()
          }
        >
          Go to main Page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
