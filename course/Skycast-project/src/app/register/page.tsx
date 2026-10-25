"use client";

import { FcGoogle } from "react-icons/fc";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const router = useRouter()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  //
  async function handleRegister(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formData);

    //send the datat o
    // api/auth/regsiter
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      console.log("response", response);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went Wrong!");
      }
      setFormData({
        username: "",
        email: "",
        password: "",
      });
      console.log("sucess:", data);
      router.push('/login')
    } catch (error) {
      console.log("Registration failed:", error);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-md border-2 border-white rounded-2xl p-8 shadow-lg bg-gray-900">
        <h1 className="text-2xl font-semibold text-center mb-6">Register</h1>
        <form className="space-y-6" onSubmit={handleRegister}>
          <div>
            <label htmlFor="name" className="block mb-1 font-medium"></label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="Emal" className="block mb-1 font-medium"></label>
            <input
              type="text"
              placeholder="Enter Email"
              className="w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400"
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="name" className="block mb-1 font-medium"></label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full border-b border-white py-2 px-1 bg-gray-900 text-white outline-none placeholder-gray-400"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <p className="text-sm text-center mt-1" onClick={()=>router.push('/login')}>
            Already have an account ?
            <span className="text-blue-400 hover:underline px-1">Login</span>
          </p>

          <button className="w-full py-2 px-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors">
            Register
          </button>
        </form>

        <div className="flex items-center gap-1.25 justify-center my-5">
          <hr className="grow border-gray-500" />
          <span>or</span>
          <hr className="grow border-gray-500" />
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-2 px-4 border border-gray-400 rounded-lg bg-white text-black hover:bg-gray-100 transition-colors" onClick={async()=>await signIn('google',{callbackUrl:'/'})}>
          <FcGoogle />
          <span>Sign Up with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Register;
