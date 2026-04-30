import { MdOutlineArrowLeft } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import React from 'react'



// User Story:
// As a business owner, I want to record communications with clients.

// Acceptance Criteria:

// Add contact note

// Select contact type (Call, Email, SMS, In-Person)

// Linked to client

// View contact history per client


window.onload = function() {
    document.title = "CRM | Client Interaction Log";
  };
  

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">

        {/* page header */}
        <div className="px-20 pt-10 pb-6 border-b border-gray-300"> 
            <h1 className="flex font-light text-2xl">  Client interaction log</h1>

            {/* client profile header */}
            <div className="flex">
                <a href="#" className="flex items-center text-blue-600 hover hover:underline"> 
                <MdOutlineArrowLeft /> back to client profile </a>
                <p> &nbsp; &bull; &nbsp;</p>
                <p className="font-light"> Client name</p>
            </div>

        </div>

        {/* post interaction form */}
        <div className="w-full max-w-2xl mx-auto px-6 py-40 ">

            <div className="border border-gray-300 rounded-xl p-6 pt-20 space-y-6 bg-white shadow-sm">

                {/* date and time container  */}

                <div className="flex gap-4">
                        {/* date  */}
                        <div className="flex flex-col gap-1 w-full">
                            {/* calendar icon - <CiCalendar /> */}

                            <label className="text-sm font-light text-gray-900"> Date </label> 

                            <div className="relative flex items-center w-full"> {/* calendar icon */} 
                                {/* <CiCalendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 "/> */}
                                <input type="text" 
                                    inputMode="numeric" 
                                    required pattern="\d{2}/\d{2}/\d{4}" 
                                    placeholder="MM/DD/YYY" 
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none" 
                                /> 
                            </div>

                            
                            
                        </div>
                        {/* time */}
                        <div className="flex flex-col gap-1 w-full">
                            {/* clock icon - <CiClock2 /> */}
                            <label className="text-sm font-light text-gray-900"> Time </label> 

                            <div className="relative flex items-center w-full"> {/* calendar icon */} 
                                {/* <CiClock2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600"/>  */}
                                <input 
                                    type="text"
                                    placeholder="00:00"
                                    inputMode="numeric"
                                    pattern="^([01]\d|2[0-3]):([0-5]\d)$"
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none" 
                                    /> 
                            </div>

                        </div>
                </div>

                {/* contact method */}
                <div className="flex flex-col gap-1 w-full">
                    <label className="text-sm font-light text-gray-900"> Contact Method </label> 
                    <select 
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none">
                        <option value="select">Select</option>
                        <option value="Phone">Phone</option>
                        <option value="In person">In Person</option>
                        <option value="Text">SMS</option>
                        <option value="Email">Email</option>
                        <option value="Other">Other</option>
                    </select>

                </div>

                {/* interaction notes */}
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-light text-gray-900">
                        Interaction notes
                        </label>
                        <textarea
                        rows={10}
                        required
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none resize-none"
                        />
                </div>
                

                {/* form submit button */} 
                 <div className="flex justify-center">
                    <button
                    type="submit"
                    required
                    className="w-3/4 bg-neutral-700 text-white py-3 rounded-xl hover:bg-neutral-600 hover:outline hover:text-white transition"
                    >
                        Log Interaction
                    </button>
                 </div>
            </div>

        </div>
       
        
    </div>
  )
}

export default Contact