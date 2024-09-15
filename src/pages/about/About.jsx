import React from 'react';

import { FaBus, FaUsers, FaStar } from 'react-icons/fa';

const About = () => {
    return (
        <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] space-y-14'>
            {/* Introduction Section */}
            <div className='w-full bg-neutral-200/60 dark:bg-neutral-900/40 rounded-md px-6 py-5'>
                <h1 className='text-3xl font-semibold text-neutral-800 dark:text-neutral-50'>
                    About Us
                </h1>
                <p className='text-lg text-neutral-800 dark:text-neutral-200 mt-4'>
                    Welcome to our bus booking service! We are committed to providing you with the best travel experience. Our fleet of modern buses and dedicated team ensures that your journey is comfortable, safe, and enjoyable.
                </p>
            </div>

            {/* Our Services */}
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className='bg-neutral-200/60 dark:bg-neutral-900/40 rounded-md p-6'>
                    <FaBus className='text-4xl text-violate-600' />
                    <h2 className='text-xl font-semibold text-neutral-800 dark:text-neutral-50 mt-4'>
                        Modern Fleet
                    </h2>
                    <p className='text-neutral-800 dark:text-neutral-200 mt-2'>
                        Our fleet includes a variety of buses, from luxury to economy, ensuring that we have the perfect option for every journey.
                    </p>
                </div>
                <div className='bg-neutral-200/60 dark:bg-neutral-900/40 rounded-md p-6'>
                    <FaUsers className='text-4xl text-violate-600' />
                    <h2 className='text-xl font-semibold text-neutral-800 dark:text-neutral-50 mt-4'>
                        Experienced Team
                    </h2>
                    <p className='text-neutral-800 dark:text-neutral-200 mt-2'>
                        Our team of experienced drivers and staff are dedicated to making your travel experience as smooth and pleasant as possible.
                    </p>
                </div>
                <div className='bg-neutral-200/60 dark:bg-neutral-900/40 rounded-md p-6'>
                    <FaStar className='text-4xl text-violate-600' />
                    <h2 className='text-xl font-semibold text-neutral-800 dark:text-neutral-50 mt-4'>
                        Top-Rated Service
                    </h2>
                    <p className='text-neutral-800 dark:text-neutral-200 mt-2'>
                        We pride ourselves on our high customer satisfaction ratings and strive to exceed your expectations with every trip.
                    </p>
                </div>
            </div>

          
        </div>
    );
};

export default About;
