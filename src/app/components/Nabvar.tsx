// "use client";

// import { useTheme } from "next-themes";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";



// export default function Navbar() {
//   const { theme, setTheme } = useTheme();
//   const [mounted, setMounted] = useState(false);

//   // Ensure the theme is mounted before rendering (to avoid hydration mismatch issues)
//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null; // Prevent rendering until theme is mounted

//   return (
//     <header className="bg-darkBg fixed top-0 left-0 w-full z-50 dark:bg-black dark:text-white bg-gray-100 ">
//       <div className="container mx-auto flex items-center justify-evenly py-4 px-6 ">
//         {/* Logo */}
//         <Link href="/" className=" text-lg font-mono hover:text-gray-400 transition-all">
//           Piyush 
//         </Link>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex space-x-6">
//           <Link href="/" className="hover:text-gray-400 transition-all">
//             Home
//           </Link>
//           <Link href="#about" className="hover:text-gray-400 transition-all">
//             About
//           </Link>
//           <Link href="#skills" className="hover:text-gray-400 transition-all">
//             Skills
//           </Link>
//           <Link href="#projects" className="hover:text-gray-400 transition-all">
//             Projects
//           </Link>
          
//           <Link href="#contact" className="hover:text-gray-400 transition-all">
//             Contact Me
//           </Link>
//         </nav>

//         {/* Theme Toggle */}
//         <button
//   onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//   className="ml-4 p-2"
// >
//   {theme === "light" ? (
//     <MoonIcon className="h-6 w-6" />
//   ) : (
//     <SunIcon className="h-6 w-6" />
//   )}
// </button>

//       </div>
//     </header>
//   );
// }


"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Link from "next/link";
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-darkBg fixed top-0 left-0 w-full z-50 dark:bg-black dark:text-white bg-gray-100">
      <div className="container mx-auto flex items-center max-sm:p-5 max-sm:justify-between md:justify-evenly lg:py-4 lg:px-6 ">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide text-gray-900 dark:text-white">
          Piyush
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "About", "Skills", "Projects", "Contact Me"].map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="text-black dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="hidden md:block p-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          {theme === "light" ? <MoonIcon className="h-6 w-6" /> : <SunIcon className="h-6 w-6" />}
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 right-0 w-2/3 max-w-xs h-full bg-gray-50 dark:bg-zinc-900 shadow-lg transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full py-6 px-6">
          {/* Close Button */}
          <button
            className="mb-8 self-end text-gray-700 dark:text-gray-300"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <XMarkIcon className="h-6 w-6" />
          </button>

          {/* Links */}
          {["Home", "About", "Skills", "Projects", "Contact Me"].map((item, index) => (
            <Link
              key={index}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 mb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}

          {/* Theme Toggle in Mobile */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="mt-auto flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            {theme === "light" ? (
              <>
                <MoonIcon className="h-5 w-5" />
                <span>Dark Mode</span>
              </>
            ) : (
              <>
                <SunIcon className="h-5 w-5" />
                <span>Light Mode</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
