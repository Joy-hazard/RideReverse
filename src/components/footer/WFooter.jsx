import React from 'react';
import { FaMapPin, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../assets/buslogo.png";

const WFooter = () => {
  return (
    <footer className="w-full lg:px-28 md:px-16 sm:px-7 px-4 py-8 bg-neutral-200/60 dark:bg-neutral-900/70">
      <div className="grid grid-cols-5 gap-5">
        <div className="space-y-5 col-span-2">
          <Link to="/" className='text-xl text-neutral-800 dark:text-neutral-200 font-bold'>
            <img src={Logo} alt="logo" className="w-44 h-30 object-contain" />
          </Link>
          <p className="text-neutral-600 dark:text-neutral-500 text-base font-normal pr-10">
            RideReserve is your trusted platform for booking bus <br />tickets effortlessly across Bangladesh.
            We offer a <br />seamless experience with easy seat selection, secure <br />payments, and real-time trip updates.
            Travel smarter<br /> and safer with RideReserve!
          </p>
          <p className="mb-0 ">
            <span className="me-2">© 2024 RideReserve || All Rights Reserved.</span>
            <p className='mx-3'><span>Design & Developed by Joy Pal.</span></p>
          </p>
          <div className="flex justify-start space-x-4 mx-4">
            <a
              href="https://github.com/Joy-hazard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://joypal-hazard-2418.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              <BsFillPersonFill size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/joy-pal-hazard/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://www.instagram.com/joy__hazard/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-800 dark:text-red-200 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
          </div>

        </div>

        <div className="space-y-7">
          <h1 className="text-lg font-medium">About Us</h1>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-500 text-base font-normal">
            <li>
              <Link to="#" className='hover:text-violet-600 ease-in-out duration-300'>About Us</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-violet-600 ease-in-out duration-300'>Contact Us</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-violet-600 ease-in-out duration-300'>Privacy Policy</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-violet-600 ease-in-out duration-300'>Terms and Conditions</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-7">
          <h1 className="text-lg font-medium">Services</h1>
          <ul className="space-y-2 text-neutral-600 dark:text-neutral-500 text-base font-normal">
            <li>
              <Link to="#" className='hover:text-violet-600 ease-in-out duration-300'>Safety Guarantee</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-violet-600 ease-in-out duration-300'>FAQ & Support</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-violet-600 ease-in-out duration-300'>Luxury Buses</Link>
            </li>
            <li>
              <Link to="#" className='hover:text-violet-600 ease-in-out duration-300'>Enough Facilities</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-7">
          <h1 className="text-lg font-medium">Get In Touch</h1>
          <div className="space-y-4">
            <div className="flex gap-x-2">
              <FaMapPin className='text-2xl text-neutral-600 dark:text-neutral-500' />
              <div className="flex flex-col">

                <p className="text-sm text-neutral-700 dark:text-neutral-400">
                  Sayedabad Bus Terminal, Sayedabad, Dhaka-1204, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex gap-x-2">
              <FaMapPin className='text-2xl text-neutral-600 dark:text-neutral-500' />
              <div className="flex flex-col">

                <p className="text-sm text-neutral-700 dark:text-neutral-400">
                  Gulisthan Bus Terminal, Gulisthan, Dhaka-1212, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex gap-x-2">
              <FaMapPin className='text-2xl text-neutral-600 dark:text-neutral-500' />
              <div className="flex flex-col">

                <p className="text-sm text-neutral-700 dark:text-neutral-400">
                  Dhaka Mohakhali Bus Terminal, Mohakhali, Dhaka-1212, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default WFooter;
