import React from 'react'
import {Link} from "react-router-dom";

const New_account = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="w-80 bg-white p-10 rounded-lg shadow-xl pb-16 ">
            <h1 className="text-xl font-light text-center my-10">
              Sign up
            </h1>
    
            <form className="space-y-5">
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-0 focus:ring-blue-500"
              />
              
              <input
                type="text"
                placeholder="Username"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-0 focus:ring-blue-500"
              />
    
              <input
                type="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-0 focus:ring-blue-500"
              />

            <input
                type="password"
                placeholder="Confirm Password"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-0 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-800 hover:outline hover:text-white transition">
                Create Account
              </button>
            </form>

            <div className="mt-20 text-center text-sm font-light">Already have an account? 
            <Link to="/" className="underline text-gray-400 hover:text-gray-600"> Login </Link>
            </div>
          </div>
        </div>
  )
}

export default New_account