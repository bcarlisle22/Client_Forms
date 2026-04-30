
// User Story:
// As a business owner, I want to create clients.

// Acceptance Criteria:
// Required fields validated
// Address fields separated
// Submit calls API
// Success toast notification

window.onload = function() {
    document.title = "CRM | New client";
  };
  

import React from 'react'

const client = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-300 py-10">
        <div className="w-full max-w-3xl bg-white p-10 shadow-xl pb-16">
            <h1 className="text-lg font-light pb-12"> New Client </h1>
            
            <form className="space-y-5">
                {/* Business owner info */}
                
                <div className="flex flex-col gap-1">
                <label className="text-sm font-light text-gray-500  after:content-['*'] after:ml-0.5 after:text-red-500 block"> First name 
                </label>
                <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none "
                />

                <label className="text-sm font-light text-gray-500  after:content-['*'] after:ml-0.5 after:text-red-500 block"> Last name 
                </label>
                <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none "
                />
                </div>


                <div className="flex gap-2">
                {/* phone number */}
                <div className="flex flex-col gap-1 w-full">
                    <label className="text-sm font-light text-gray-500  after:content-['*'] after:ml-0.5 after:text-red-500 block"> Phone number 
                    </label>
                    <input
                    type="tel"
                    required
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="XXX-XXX-XXXX"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none "
                    />
                </div>

                {/* email */}
                <div className="flex flex-col gap-1 w-full">
                    <label className="text-sm font-light text-gray-500  after:content-['*'] after:ml-0.5 after:text-red-500 block"> Email address 
                    </label>
                    <input
                    type="email"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none "
                    />
                </div>
                </div>
            
        
       
                {/* Company info */}

                {/* div??? */}

                <label className="text-sm font-light text-gray-500  after:content-['*'] after:ml-0.5 after:text-red-500 block"> Company name 
                </label>
                <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none "
                />
                {/* address line 1 */}
                <label className="text-sm font-light text-gray-500  after:content-['*'] after:ml-0.5 after:text-red-500 block"> Address Line 1
                </label>
                <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none "
                />
                
                {/* address line 2 */}
                <div className="flex flex-col gap-1">
                <label className="text-sm font-light text-gray-500"> Address Line 2
                </label>
                <input
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none "
                />
                </div>


                <div className="flex flex-col md:flex-row gap-4">

                    {/* city */}
                    <div className="flex flex-col gap-1 w-full">
                    <label className="text-sm font-light text-gray-500  after:content-['*'] after:ml-0.5 after:text-red-500 block"> City 
                    </label>
                    <input
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                    />
                    </div>

                    {/* state */}
                    <div className="flex flex-col gap-1 w-full">
                    <label className="text-sm font-light text-gray-500  after:content-['*'] after:ml-0.5 after:text-red-500 block">
                    State
                    </label>
                    <select 
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white focus:outline-none">
                    <option value="Select">Select state</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                    </select>
                    </div>

                    {/* zip code */}
                    <div className="flex flex-col gap-1 w-full">
                    <label className="text-sm font-light text-gray-500  after:content-['*'] after:ml-0.5 after:text-red-500 block"> Zip code 
                    </label>
                    <input
                    required
                    inputMode="numeric"
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none"
                    />
                    </div>


                </div>


                {/* service requested */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-light text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 block">
                    Service requested
                    </label>
                    <input
                    type="text"
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none  focus:placeholder-transparent"
                    />
                </div>

                {/* client notes */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-light text-gray-500 after:content-['*'] after:ml-0.5 after:text-red-500 block">
                    Client notes
                    </label>
                    <textarea
                    rows={8}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none resize-none"
                    />
                </div>

                {/* submit button */}
                <div className="flex justify-center">
                    <button
                    type="submit"
                    required
                    className="w-1/3 bg-neutral-700 text-white py-3 rounded-xl hover:bg-neutral-600 hover:outline hover:text-white transition">
                    Submit
                    </button>
                </div>

        </form>
    </div>

  </div>
  )
}

export default client