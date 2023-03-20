import React from 'react';

const SideBar = () => {
  return (
    <div className="flex flex-col w-200 h-full bg-black">
      <header className="py-4 px-8 shadow-md">
        <button className="block px-4 text-white font-sans mb-4">Staff Log In</button>
        <button className="block px-4 text-white font-sans">Send Message</button>
      </header>
    </div>
  );
};

export default SideBar;
