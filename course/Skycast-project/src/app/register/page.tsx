import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg bg-gray-900">
        <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>
        <form className="space-y-6">

          <div>
            <label htmlFor="name" className="block mb-1 font-medium"></label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400"
            />

          </div>

          <div>
            <label htmlFor="Emal" className="block mb-1 font-medium"></label>
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400"
            />

          </div>

          <div>
            <label htmlFor="name" className="block mb-1 font-medium"></label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400"
            />

          </div>

        </form>
      </div>
    </div>
  );
};

export default Register;
