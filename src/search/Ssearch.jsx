import React from 'react';

const Ssearch = () => {
  return (
    <div className="w-full lg:px-28 md:px-16 xm:px-7 px-4 my-[8ch]">
      <div className="w-full bg-neutral-100 rounded-md dark:bg-neutral-900/40 p-8">
        <div className="grid grid-cols-3 gap-x-10 gap-y-12 items-end">

          <div>
            <label htmlFor="from" className="block mb-2 font-semibold">
              From
            </label>
            <select
              name="from"
              id="from"
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-gray-200 dark:border-neutral-900 rounded-md focus:outline-none"
            >
              <option value="">Select Location</option>
              <option value="location1">Dhaka - Sayedabad</option>
              <option value="location1">Dhaka - Gulistan</option>
              <option value="location1">Dhaka - Mohakhali</option>
              <option value="location2">Chattogram</option>
              <option value="location3">Rajshahi</option>
              <option value="location4">Sylhet</option>
              <option value="location4">Khunla</option>
              <option value="location4">Dinajpur</option>
              <option value="location4">Rangpur</option>
            </select>
          </div>

          <div>
            <label htmlFor="to" className="block mb-2 font-semibold">
              To
            </label>
            <select
              name="to"
              id="to"
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-gray-200 dark:border-neutral-900 rounded-md focus:outline-none"
            >
              <option value="">Select Location</option>
              <option value="location1">Dhaka - Sayedabad</option>
              <option value="location1">Dhaka - Gulistan</option>
              <option value="location1">Dhaka - Mohakhali</option>
              <option value="location2">Chattogram</option>
              <option value="location3">Rajshahi</option>
              <option value="location4">Sylhet</option>
              <option value="location4">Khunla</option>
              <option value="location4">Dinajpur</option>
              <option value="location4">Rangpur</option>
            </select>
          </div>

          <div>
            <label htmlFor="date" className="block mb-2 font-semibold">
              Choose Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-gray-200 dark:border-neutral-900 rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="time" className="block mb-2 font-semibold">
              Choose Time
            </label>
            <input
              type="time"
              id="time"
              name="time"
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-gray-200 dark:border-neutral-900 rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="seat" className="block mb-2 font-semibold">
              Total Seats
            </label>
            <input
              type="number"
              id="seat"
              placeholder="Enter Seat"
              name="seat"
              className="w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-gray-200 dark:border-neutral-900 rounded-md focus:outline-none"
            />
          </div>

          <div>
            <button className="w-full px-4 h-12 bg-violet-600 text-neutral-50 text-base font-normal rounded-md">
              Check Availability
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Ssearch;
