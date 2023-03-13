import React from 'react'
import logo from '/Users/kjhan/Desktop/api_enc/apisto_enc/src/example.png'

const Card = () => {
  return (
    <div className="flex flex-row justify-center items-center mt-6 shadow-md bg-gray-100">
    <div className="w-1/2 p-6">
        <img src={logo} alt="Your image description" className="w-300 h-300 rounded-full" />
    </div>
    <div className="w-1/2 p-6">
        <h2 className="text-xl font-bold mb-2">Title</h2>
        <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    </div>
  )
}

export default Card