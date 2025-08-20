import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-[#e0f11f]">Archit Shankar</h3>
            <p className="text-gray-300 mt-1">
              Full Stack Developer & AI/ML Enthusiast
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-300">&copy; {year} Archit Shankar. All rights reserved.</p>
            {/* <p className="text-gray-400 mt-1">
              Made with ❤️ using React & Tailwind CSS
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
