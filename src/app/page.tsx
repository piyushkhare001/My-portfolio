'use client'
import ContactForm from "@/app/components/ContactUs"
import Nabvar  from '@/app/components/Nabvar'
import React from 'react';
import Footer from "@/app/components/Footer"
import {AnimatedTestimonialsDemo} from "@/app/components/Projects"
import Link from "next/link";

//import { TypewriterEffectSmooth } from "../app/components/ui/typewriter-effect";
import { BackgroundBeamsWithCollision } from "@/app/components/ui/background-beams-with-collision"
import { AiOutlineFileText } from "react-icons/ai";
import withFace from "../../assests/withFace.png"
import { CardContainer, CardItem } from "@/app/components/ui/3d-card"
import Image from "next/image";
import withoutFace from "../../assests/withoutFace.png"
import { SiInstagram } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineSend } from "react-icons/ai";
import Skills from "../app/components/My-Skills"
import Timeline from "@/app/components/Progress"
import { FlipWords } from "../app/components/ui/flip-words";


export default function Home() {

  const words =  ['Full stack Developer', 'Software Developer', 'Mern Stack Developer' , 'Next.js Developer']

  return (
    <div className='dark:bg-zinc-900 max-sm:mt-24 dark:text-white w-full rounded-md  relative flex flex-col items-center justify-center antialiased' >
              
                <BackgroundBeamsWithCollision className="max-sm:hidden">
                    <Nabvar/>
         
                    <CardContainer  className="lg:hidden">
    
      
    <CardItem translateZ="100" className="mt-6 ml-24">
      <Image
        src={withoutFace}
        height="1000"
        width="1000"
        className="h-60 w-full object-cover rounded-full group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem>
  

</CardContainer>
        <div className="flex flex-col gap-6 mr-16 max-sm:hidden">
  <a href="https://github.com/piyushkhare001" className=" text-xl hover:text-gray-300">
  <FaGithub />
  </a>
  <a href="https://x.com/Piyushkhare001" className=" text-xl hover:text-gray-300">
  <FaTwitter />
  </a>
  <a href="https://www.instagram.com/im.piyushkhare/" className=" text-xl hover:text-gray-300">
   <SiInstagram />
  </a>
  <a href="www.linkedin.com/in/piyush-khare-7a351623b" className=" text-xl hover:text-gray-300">
  <FaLinkedin />
  </a>
</div>
        <section className=" w-[22rem] mr-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h1 className="lg:text-[3rem] text-2xl   
 font-bold mb-4">Hi, I am Piyush</h1>
       <div className="lg:text-2xl text-xl font-semibold text-gray-500 dark:text-gray-50 mb-3">
            I am a   <FlipWords words={words} />
            </div>
        
            <p className="lg:text-lg text-md text-gray-500 dark:text-gray-50 mb-8">
            Building Dynamic Web Applications with Next.js and the MERN Stack
          </p>
          <div className="flex  gap-2 lg:hidden">
  <a href="https://github.com/piyushkhare001" className=" text-xl hover:text-gray-300">
  <FaGithub />
  </a>
  <a href="https://x.com/Piyushkhare001" className=" text-xl hover:text-gray-300">
  <FaTwitter />
  </a>
  <a href="https://www.instagram.com/im.piyushkhare/" className=" text-xl hover:text-gray-300">
   <SiInstagram />
  </a>
  <a href="www.linkedin.com/in/piyush-khare-7a351623b" className=" text-xl hover:text-gray-300">
  <FaLinkedin />
  </a>
</div>
          <Link href={"#contact"}>
          <button className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg flex items-center gap-3 transform transition-transform duration-300 hover:scale-105">
  <span className="text-lg">Contact Me</span>
  
  <AiOutlineSend className="text-xl animate-bounce text-white" />
</button>
</Link>
        </div>
     
      </div>
    </section>
     <CardContainer  className="max-sm:hidden">
    
      
        <CardItem translateZ="100" className="mt-6 ml-24">
          <Image
            src={withoutFace}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-full group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      

    </CardContainer>
      
                                                                          
                                       </BackgroundBeamsWithCollision>
                                       <BackgroundBeamsWithCollision className="lg:hidden min-h-screen ">
  <Nabvar />
  <div className="container flex flex-col items-center  min-h-screen">
    {/* Image Section */}
    <div className="w-full flex justify-center ">
      <CardContainer>
        <CardItem translateZ="100" className="w-80 h-44">
          <Image
            src={withoutFace}

            className="h-52 w-52 ml-14 mb-8 object-cover rounded-full group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardContainer>
    </div>

    {/* Content Section */}
    <div className="w-full  px-4 pt-4 pb-8 mb-16 lg:w-1/2 text-center lg:text-left">
      <h1 className="lg:text-[3rem] text-2xl font-bold mb-4">Hi, I am Piyush</h1>
      <div className="lg:text-2xl text-xl font-semibold text-gray-500 dark:text-gray-50 mb-3">
        I am a <FlipWords words={words} />
      </div>
      <p className="lg:text-lg text-md text-gray-500 dark:text-gray-50 mb-6">
        Building Dynamic Web Applications with Next.js and the MERN Stack
      </p>
      <div className="flex justify-center lg:justify-start gap-4 mb-6">
        <a href="https://github.com/piyushkhare001" className="text-xl hover:text-gray-300">
          <FaGithub />
        </a>
        <a href="https://x.com/Piyushkhare001" className="text-xl hover:text-gray-300">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com/im.piyushkhare/" className="text-xl hover:text-gray-300">
          <SiInstagram />
        </a>
        <a href="www.linkedin.com/in/piyush-khare-7a351623b" className="text-xl hover:text-gray-300">
          <FaLinkedin />
        </a>
      </div>
      <Link href="#contact">
        <button className="bg-gradient-to-r ml-12 from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg flex items-center gap-3 transform transition-transform duration-300 hover:scale-105">
          <span className="text-lg">Contact Me</span>
          <AiOutlineSend className="text-xl animate-bounce text-white" />
        </button>
      </Link>
    </div>
  </div>
</BackgroundBeamsWithCollision>

                                       <div id="about" className=" flex items-center justify-center">
    <div className="container mx-auto px-4 lg:px-20 py-12 flex flex-col lg:flex-row items-center gap-12">
      {/* Left Section (Image) */}
       <CardContainer className="inter-var">
      
      
        
        <CardItem
          translateZ="20"
          rotateX={10}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={withFace}
           
            className=" w-80 h-80 lg:w-96 lg:h-96 rounded-lg group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      
    </CardContainer>

      {/* Right Section (Text) */}
      <div className="max-w-lg md:space-y-6 ">
        <h1 className="text-4xl font-bold">About Me</h1>
        <h2 className="dark:text-gray-400 text-lg">My introduction</h2>
        <p className="dark:text-gray-300 text-black" >
          Hey there, 👋 I am Piyush a 20-year-old Computer Science graduate, who is passionate about Software Development, UI/UX Developement, and Full stack apps. Currently, I am pursuing my career as a Full Stack Web Developer 💻 with 3+ months of professional and freelance experience. I share my learnings through speaking engagements and write-ups. ✍️
        </p>
        {/* Resume Button */}
         <a href="/Resume.pdf" download>
        <button className="bg-gradient-to-r mt-8 max-sm:ml-14 from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-2 px-6 rounded-lg flex items-center gap-2 shadow-lg transition-transform transform hover:scale-105">
          <span>Resume</span>
          <AiOutlineFileText className="text-xl" />
        </button>
        </a>
      </div>
    </div>
 
  </div>
  <Skills/>
  <Timeline/>
  <div id="projects" className='dark:bg-zinc-950 bg-zinc-100 w-full'> 
     <h1 className='text-center font-bold text-4xl mt-4 pt-7'> Projects </h1>
    <AnimatedTestimonialsDemo/></div>
 <ContactForm/>
  <Footer/>
    </div>
  );
}
