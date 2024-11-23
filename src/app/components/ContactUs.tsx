


'use client';

import { useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { SiGooglemeet } from "react-icons/si";
import { CiLinkedin } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log("data is ", data);
    setLoading(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setLoading(false);
      if (response.ok) {
        toast.success(`Your message has been sent!`);
        reset();
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div id="contact" className="dark:bg-zinc-900 dark:text-white bg-zinc-50 w-full min-h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl p-6 mt-4">
        <h1 className="text-4xl font-bold mb-2 text-center">Contact Me</h1>
        <p className="text-center text-gray-400 mb-8">Want to connect? My inbox is always open!</p>
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-6  ">
          {/* Contact Info Section */}
          <div className="w-full md:w-1/2 md:p-4 p-2 md:ml-24 md:mt-8">
            <ul className="space-y-12">
              <li className="flex items-center space-x-4">
                <span className="text-purple-400">
                  <i className="fas fa-envelope"></i>
                </span>
                <div className="flex gap-3">
                <MdOutlineMailOutline  className="text-5xl text-purple-400"/>
                <div>
                  <p className="font-bold">Email</p>
                  <p>piyushkhare671@gmail.com</p>
                  </div>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <span className="text-purple-400">
                  <i className="fas fa-calendar"></i>
                </span>
                <div className = "flex gap-3">
<SiGooglemeet  className="text-5xl text-purple-400"/>
<div>
                  <p className="font-bold">Online Meet</p>
                  <p>Schedule an Online Meet</p>
                  </div>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <span className="text-purple-400">
                  <i className="fab fa-twitter"></i>
                </span>
                <div className="flex gap-3">
                    <CiLinkedin  className="text-5xl text-purple-400"/>
                    <div >
                  <p className="font-bold">Linkedin</p>
                  <p>@PiyushKhare</p>
                  </div>
                </div>
              </li>
              <li className="flex items-center space-x-4">
                <span className="text-purple-400">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div className="flex gap-3" >
                    <CiLocationOn className="text-5xl text-purple-400"/>
                    <div>
                  <p className="font-bold">Location</p>
                  <p>Jhansi UP, India</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <div className="w-full md:w-1/2 p-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8 p-4 md:p-6 rounded-lg shadow-md "
            >
              <div>
                <input
                  id="name"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Name"
                  className="w-full p-2 dark:bg-gray-700 border border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              <div>
                <input
                  id="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  placeholder="Email"
                  className="w-full p-2 dark:bg-gray-700 border border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div>
                <input
                  id="subject"
                  {...register("subject", { required: "Subject is required" })}
                  placeholder="Subject"
                  className="w-full p-2 dark:bg-gray-700 border border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div>
                <textarea
                  id="message"
                  {...register("message", { required: "Message is required" })}
                  placeholder="Message"
                  className="w-full p-2 dark:bg-gray-700 border border-purple-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 h-24"
                />
                {errors.message && (
                  <p className="text-red-500 text-sm">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
