import React, { useState } from 'react';
import Modal from 'react-modal';
import Read from './Read';

const Home = () => {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const toggleAccordion = () => {
    setAccordionIsOpen(!accordionIsOpen);
  };

  return (
    <>
      <div className="flex items-center justify-center py-6">
        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded" type="button" onClick={toggleAccordion}>
          {accordionIsOpen ? 'Hide' : 'Click for Info'}
        </button>
      </div>

      {accordionIsOpen &&
        <div className="bg-white p-6 w-full items-center justify-center relative flex flex-col mt-4">
          <div className="text-lg font-serif flex-1 mb-4">
            <p>
              Apistogramma is a genus of freshwater fish in the cichlid family, native to South America. These fish are popular in the aquarium hobby due to their beautiful colors and interesting behavior.
            </p>
            <p>
              Apistogramma fish are generally small in size, with most species growing to around 2-3 inches in length. They come in a variety of colors and patterns, depending on the species and their origin. Apistogramma are known for their bright, bold colors, which can range from deep blues and reds to bright yellows and greens.
            </p>
            <p>
              In the wild, Apistogramma fish are found in slow-moving streams and rivers, typically in areas with lots of vegetation and hiding spots. They are known for their complex social behavior, with males often displaying intricate courtship behaviors and females actively selecting mates.
            </p>
            <p>
              In the aquarium, Apistogramma fish require clean, well-oxygenated water with a pH between 6.0 and 7.5. They are generally peaceful fish, but can be territorial during breeding and may become aggressive towards other fish if they feel their territory is being threatened. A well-planted aquarium with lots of hiding spots is recommended to provide these fish with a comfortable and secure environment.
            </p>
          </div>
        </div>
      }
      <div className=" bg-white shadow-md rounded pb-4 mb-4" />
      <Read />

    </>
  );

}

export default Home;
