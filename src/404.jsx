import React from "react";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="max-w-2xl mx-auto min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-gray-900 font-black text-5xl uppercase text-center">
          404 Not Found
        </h1>
        <a
          href="/"
          className="font-medium text-indigo-600 hover:text-indigo-500 my-3"
        >
          Back to Home
        </a>
      </div>
    </div>
  );
}
