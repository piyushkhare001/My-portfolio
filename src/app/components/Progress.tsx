'use client'
import React , {useState}from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { MdOutlineCastForEducation } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";


const Timeline: React.FC = () => {

    const [education , setEducation] = useState(false)
     
     const handler = () => {
            if (education == true){
               setEducation(false)
            } else {
                setEducation(true)
            }
     }

   
  return (
< div className='md:mt-24 md:mb-16 mt-4 mb-4 p-1'>
<Stack direction="row" spacing={2} className='flex justify-center'>
      <Button  variant={ education ? `contained` : `outlined`} startIcon={<MdOutlineCastForEducation />} onClick= {handler}>
        Education
      </Button>
      <Button variant={ education ? `outlined` : `contained`} endIcon={<MdOutlineWorkOutline />} onClick = {handler}>
        Work Experince
      </Button>
    </Stack>
    {education ? ( <ol className=" mt-16 relative md:ml-[25rem] ml-5 md:mr-20 mr-5 border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-purple-900">
            <svg
              className="w-2.5 h-2.5 text-purple-800 dark:text-purple-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
           Bachelors of Computer Application
            <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 ms-3">
           latest
            </span>
            </h3>
            <h3 className="flex items-center mb-1 text-md font-semibold text-gray-600 dark:text-gray-200">
           Jiwaji University Gwalior M.P
           
       
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            july 2021 to july 2024
          </time>
         
        </li>
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-purple-900">
            <svg
              className="w-2.5 h-2.5 text-purple-800 dark:text-purple-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
           Intermidiate
          </h3>
          <h3 className="flex items-center mb-1 text-md font-semibold text-gray-600 dark:text-gray-200">
          Saraswati vidhya mandir Jhansi U.P
           
       
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            july 2020 to july 2021
          </time>
       
        </li>
        <li className="ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-purple-900">
            <svg
              className="w-2.5 h-2.5 text-purple-800 dark:text-purple-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
           High School
          </h3>
          <h3 className="flex items-center mb-1 text-md font-semibold text-gray-600 dark:text-gray-200">
          Saraswati vidhya mandir Jhansi U.P
           
       
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
           july 2018 to july 2019
          </time>
       
        </li>
      </ol>) : ( <ol className="md:ml-[37rem] ml-5  md:mr-20 mr-4 mt-16 relative border-s border-gray-200 dark:border-gray-700">
        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-purple-900">
            <svg
              className="w-2.5 h-2.5 text-purple-800 dark:text-purple-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
          Frontend Developer Intern
            <span className="bg-blue-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-purple-900 dark:text-purple-300 ms-3">
              Latest
            </span>
          </h3>
          <h3 className="flex items-center mb-1 text-md font-semibold text-gray-600 dark:text-gray-200">
         Jobbie 
           
       
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
           September 2024 to Present (remote)
          </time>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
           Working in Jobbie as a frontend developer, having fixed media queries and UI bugs, also working on new upcoming features and have worked on to convert html to pdf. 
          </p>
          <a
            href="https://jobbie.io/"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-50 bg-purple-600 border border-gray-200 rounded-lg hover:bg-purple-800  focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-purple-700 "
          >
          
          Go Live
          </a>
        </li>
        </ol>) }
      </div>
   
  );
};

export default Timeline;
