import React from 'react';



const Header = () => {
  return (
    <header className="flex justify-end py-4 px-8 bg-black shadow-md">
      <button className="px-4 text-white">Log In</button>
      <button className="px-4 text-white">Send Message</button>
    </header>
  );
};

export default Header;
