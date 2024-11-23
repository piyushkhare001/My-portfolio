import React from 'react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r w-full from-gray-900 to-black text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold mb-4">Piyush Khare</p>
        <p className="text-sm">Full Stack Developer</p>
        <div className="flex space-x-4 mt-4">
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <i className="fab 1  fa-github"></i>
          </a>
        </div>
        <p className="text-sm mt-4">&copy; {new Date().getFullYear()} Piyush Khare. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;