import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="max-w-lg w-full">
        <div className="mb-8">
          <svg
            aria-hidden="true"
            className="mx-auto h-24 w-24 text-gray-400 dark:text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M18.364 5.636l-12.728 12.728m12.728 0L5.636 5.636"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-gray-800 dark:text-dark mb-4">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-dark-700 dark:text-dark-200 mb-4">
          Oops! Page not found.
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          It looks like you've taken a wrong turn. The page you are looking for
          doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto text-center"
            >
            Go to Homepage
        </Link>

        </div>
      </div>
    </div>
  );
};

export default NotFound;
