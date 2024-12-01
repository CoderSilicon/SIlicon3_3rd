import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 flex justify-center items-center">
      <div className="max-w-screen-xl mx-auto text-center flex justify-center items-center josefin-sans">
        <p className="text-sm  opacity-75">
          &copy; {new Date().getFullYear()} Silicon. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
