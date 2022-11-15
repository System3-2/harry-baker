import React from 'react'
import { SocialIcon} from 'react-social-icons';
import { IoIosCall } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import { MdLocationPin } from "react-icons/md";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitterSquare } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";


function Footer() {
  return (
    // rgb(0%,11%,22%)
    <div className="bg-nblue w-full flex  flex-col justify-center items-center bottom-0 fixed pt-5">
          
            {/* {shades of blue} */} 
            <div className='flex gap-6 justify-between flex-col md:flex-row w-9/12 p-10'>
                
            <div className='p-5 flex items-start min-w-1/3  gap-3 flex-col'>
                <p className='text-white font-bold text-xl pb-4 '>Stay in touch</p>
                <div className='contact flex gap-4 text-gray-300'>
                <IoIosCall size={20} />
                <p> 
                    +234 (0) 802 839 1360
                </p> 
                </div>

                <div className='contact flex gap-4 text-gray-300'>
                <HiMail size={20} />
                <p> 
                sales[at]harrybakertraining.com 

                </p> 
                </div>

                <div className='contact flex gap-4 text-gray-300'>
                <MdLocationPin size={20} />
                <p className='text-left'> 
                    
Providence Hub Plot 8, Providence<br></br> Street (The Venia Place), Lekki Phase1 ,<br></br> Lagos Nigeria
                </p> 
                </div>

                <div className=''>
                <ul className='flex flex-row gap-3 justify-between w-1/2 text-white '>
            <li className="list-none selection text-gray-300">
            <ImLinkedin size={25} />
            </li>
            <li className="list-none text-gray-300 ">
            <ImFacebook2 size={25} />
            </li>
            <li className="list-none  text-gray-300 ">
            <FaTwitterSquare size={25} />
            </li>
            <li className="list-none text-gray-300 ">
            <ImFacebook2 size={25} />
            </li>
            <li className="list-none text-gray-300 ">
            <ImFacebook2 size={25} />
            </li>
                
                </ul>
            </div>

            </div>
            <div className='flex min-w-1/3'>
            <div className='p-5 text-left'>
                <ul>
                    <p className='text-white  font-bold text-xl  pb-4'>Courses</p>
                    <li className='text-white text-sm pb-2 list-none font-light hover:text-gray-300  cursor-pointer'>
                    PRINCE2
                </li>
                <li className='text-white text-sm pb-2 list-none font-light hover:text-gray-300  cursor-pointer'>
                PMP
                </li>
                <li className='text-white text-sm pb-2 list-none font-light hover:text-gray-300  cursor-pointer'>
                Scrum
                </li>
                <li className='text-white text-sm pb-2 list-none font-light hover:text-gray-300  cursor-pointer'>
                Lean Six Sigma
                </li>
                <li className='text-white text-sm pb-2 list-none font-light hover:text-gray-300  cursor-pointer'>
                Change Management
                </li>
                <li className='text-white text-sm pb-2 list-none font-light hover:text-gray-300  cursor-pointer'>
                ITIL
                </li>
                <li className='text-white text-sm pb-2 list-none font-light hover:text-gray-300  cursor-pointer'>
                AgilePM
                </li>
                
                </ul>
            </div>
            <div className='p-5 text-left'>
                <ul>
                    <p className='text-white  font-bold  text-xl  pb-4'>About</p>
                    <li className='text-white text-sm pb-2 list-none font-light hover:text-gray-300  cursor-pointer'>
                    Home
                </li>
                <li className='text-white text-sm pb-2 list-none font-light hover:text-gray-300  cursor-pointer'>
                    About
                </li>
                <li className='text-white text-sm pb-2 list-none font-light hover:text-gray-300  cursor-pointer'>
                    Contact
                </li>
                <li className='text-white text-sm pb-2 list-none font-light hover:text-gray-300  cursor-pointer'>
                    Testimonials
                </li>
                <li className='text-white text-sm pb-2 list-none font-light hover:text-gray-300  cursor-pointer'>
                Training schedule
                </li>
                <li className='text-white text-sm pb-2 list-none font-light hover:text-gray-300  cursor-pointer'>
                Terms and conditions
                </li>
                <li className='text-white text-sm pb-2 list-none font-light hover:text-gray-300  cursor-pointer'>
                Cookie policy
                </li>
                <li className='text-white text-sm pb-2 list-none font-light hover:text-gray-300  cursor-pointer'>
                privacy policy
                </li>
                
                </ul>
            </div>
            </div>
            <div className='p-5 text-left min-w-1/3'>
                <ul>
                    <p className='text-white  font-bold text-xl  pb-4'>Resources</p>
                    <li className='text-white text-sm pb-2 list-none font-light hover:text-gray-300  cursor-pointer'>
                    Blog
                </li>
                <li className='text-white text-sm pb-2 list-none font-light hover:text-gray-300  cursor-pointer'>
                    Webinar
                </li>            
                </ul>
                <div className='signup mt-6'>
                <p className='text-white  font-bold text-sm my-6'>Sign up for newsletters</p>
                <form className=''>
                    <input className='h-8 rounded-sm my-2 border-none w-11/12 px-1 font-regular text-gray-600' type="text" value="Email" name="email"/>
                    <input className='h-8 my-2 rounded-sm border-none w-11/12 px-1 font-redular text-gray-600' type="text"  value="First Name" name="First Name"/>
                    <button className='h-12  text-white text-sm md:text-md font-bold  bg-blue-500 min-w-4/12 w-4/12'>
                        Subscribe
                    </button>
                </form>
                    

                </div>


            </div>
            
            
        </div>

        {/* { copyright section} */}
        <div className='copyright w-full flex flex-col mt-6 justify-center items-center gap-5 text-gray-400 text-sm pt-3 border-t border-t-slate-600'>
            <p>
             Copyright © 2022 Harrybaker Training Institute. All Rights Reserved.
             </p>
             <p className='text-justify w-8/12'>
             PRINCE2®, ITIL®, MSP® , M_o_R®, P3O®, MoV®, P3M3® , MoP®, AXELOS®, PRINCE2 Agile® etc. are registered trade marks of AXELOS Limited,
              used under permission of AXELOS Limited. All rights reserved. The Swirl logo™ is a trade mark of AXELOS Limited, used under permission
               of AXELOS Limited. All rights reserved. The APMG-International Agile Project Management and Swirl Device logo is a trade mark of 
               The APM Group Limited. The APMG-International Change Management and Swirl Device logo is a trade mark of The APM Group Limited. 
               The APMG-International Lean Six Sigma and Swirl Device logo is a trade mark of The APM Group Limited. PMBOK, CAPM, PMI and PMP are
                registered trademarks of the Project Management Institute, Inc.
             </p>

        </div>
    
    </div>
  )
}

export default Footer;