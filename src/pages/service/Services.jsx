import React from 'react';
import { Link } from 'react-router-dom';
import Service1 from '../../assets/service1.png';
import Service2 from '../../assets/service2.jfif';
import Service3 from '../../assets/service3.jfif';
import Service4 from '../../assets/service4.jfif';
import Service5 from '../../assets/service5.jpg';
import Service6 from '../../assets/service6.jfif';
import { FaSearch } from 'react-icons/fa';

const Services = () => {
    return (
        <div className='w-full lg:px-28 md:px-16 sm:px-7 px-4 mt-[13ch] mb-[8ch] space-y-14'>
            <h1 className='text-3xl font-semibold text-neutral-800 dark:text-neutral-50 text-center'>
                Our Services Over The Country
            </h1>
            {/* Search and Filter */}
            <div className='w-full grid grid-cols-6 gap-14 bg-neutral-200/60 dark:bg-neutral-900/40 rounded-md px-6 py-5 items-center justify-between'>
                <div className='flex items-center gap-x-2.5 col-span-2'>
                    <input
                        type='text'
                        id='search'
                        placeholder='Search Services ...'
                        name='search'
                        className='w-full appearance-none text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-900 dark:focus:bg-neutral-900'
                    />
                    <button className='bg-violet-600 h-12 px-4 rounded-md text-base text-neutral-50 font-normal'>
                        <FaSearch />
                    </button>
                </div>
                <div className='col-span-2'></div>

                <div className='col-span-2'>
                    <select className='w-full appearance-none text-neutral-800 dark:text-neutral-100 bg-neutral-200/60 dark:bg-neutral-900/60 px-3 h-12 border border-neutral-200 dark:border-neutral-900 rounded-md focus:outline-none focus:bg-neutral-900 dark:focus:bg-neutral-900'>
                        <option value=''>Select Service Type</option>
                        <option value='shuttle'>Shuttle Service</option>
                        <option value='corporate'>Corporate Service</option>
                        <option value='airport'>Airport Transfer</option>
                        <option value='tour'>Tour Package</option>
                    </select>
                </div>
            </div>

            {/* Service Cards */}
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
                <Link to={'/services/service-details'} className='w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4'>
                    <img src={Service1} alt='Shuttle Service Image' className='w-full aspect-video object-contain object-center' />
                    <div className='px-3 py-4 space-y-2'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-xl font-semibold text-neutral-800 dark:text-neutral-50'>Shuttle Service</h1>
                            <p className='text-sm font-normal text-neutral-800 dark:text-neutral-50'>Affordable and Reliable</p>
                        </div>
                    </div>
                </Link>
                <Link to={'/services/service-details'} className='w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4'>
                    <img src={Service2} alt='Corporate Service Image' className='w-full aspect-video object-contain object-center' />
                    <div className='px-3 py-4 space-y-2'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-xl font-semibold text-neutral-800 dark:text-neutral-50'>Corporate Service</h1>
                            <p className='text-sm font-normal text-neutral-800 dark:text-neutral-50'>Premium Comfort</p>
                        </div>
                    </div>
                </Link>
                <Link to={'/services/service-details'} className='w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4'>
                    <img src={Service3} alt='Airport Transfer Image' className='w-full aspect-video object-contain object-center' />
                    <div className='px-3 py-4 space-y-2'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-xl font-semibold text-neutral-800 dark:text-neutral-50'>Airport Transfer</h1>
                            <p className='text-sm font-normal text-neutral-800 dark:text-neutral-50'>On-Time Pickup</p>
                        </div>
                    </div>
                </Link>
                <Link to={'/services/service-details'} className='w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4'>
                    <img src={Service4} alt='Tour Package Image' className='w-full aspect-video object-contain object-center' />
                    <div className='px-3 py-4 space-y-2'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-xl font-semibold text-neutral-800 dark:text-neutral-50'>Tour Package</h1>
                            <p className='text-sm font-normal text-neutral-800 dark:text-neutral-50'>Explore New Destinations</p>
                        </div>
                    </div>
                </Link>
                <Link to={'/services/service-details'} className='w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4'>
                    <img src={Service5} alt='Luxury Service Image' className='w-full aspect-video object-contain object-center' />
                    <div className='px-3 py-4 space-y-2'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-xl font-semibold text-neutral-800 dark:text-neutral-50'>Luxury Service</h1>
                            <p className='text-sm font-normal text-neutral-800 dark:text-neutral-50'>Top-notch Experience</p>
                        </div>
                    </div>
                </Link>
                <Link to={'/services/service-details'} className='w-full bg-neutral-200/60 block dark:bg-neutral-900/40 rounded-xl p-4'>
                    <img src={Service6} alt='Customized Service Image' className='w-full aspect-video object-contain object-center' />
                    <div className='px-3 py-4 space-y-2'>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-xl font-semibold text-neutral-800 dark:text-neutral-50'>Customized Service</h1>
                            <p className='text-sm font-normal text-neutral-800 dark:text-neutral-50'>Tailored to Your Needs</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Services;
