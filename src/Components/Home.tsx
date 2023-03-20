import React, { useState } from 'react';
import Read from './Read';
import AmazonMap from '../Images/AmazonMap.svg.svg';
import '../Styles.css';


const Home = () => {
  const [accordionIsOpen, setAccordionIsOpen] = useState(false);
  const [transform, setTransform] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrigin, setSelectedOrigin] = useState('all');
  

  const openModal = (origin: string) => {
    setSelectedOrigin(origin);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleAccordion = () => {
    setAccordionIsOpen(!accordionIsOpen);
  };

  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <>
    <div className="bg-gray-100">
      <div className="flex flex-col items-center justify-center py-6" >
        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded transition-all duration-500" type="button" onClick={toggleAccordion}>
          {accordionIsOpen ? 'Hide' : 'Click for Info'}
        </button>
      </div>

      <div style={{ maxHeight: accordionIsOpen ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.5s ease-in-out' }}>
        <div className="bg-gray-100 p-6 w-full items-center justify-center relative flex flex-col mt-4 shadow-lg rounded-lg">
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
      </div>
      <div className="flex flex-col items-center justify-center">
      <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded" onClick={() => openModal('all')}>View All Apistogrammas</button>
      {isModalOpen && (
        <Read origin={selectedOrigin} closeModal={closeModal} />
      )}
      
      <svg viewBox="0 0 1400 800" width="100%" height="100%">
        <image
          width="1400"
          height="800"
          xlinkHref={AmazonMap}  
        />
        <circle cx="640" cy="260" r="20" onClick={() => openModal('Negro')} style={{ cursor: 'pointer', opacity: 0 }} />
        <circle cx="710" cy="370" r="20" fill="red" onClick={() => openModal('Madeira')} style={{ cursor: 'pointer', opacity: 0 }} />
        <circle cx="790" cy="370" r="20" fill="red" onClick={() => openModal('Tapajos')} style={{ cursor: 'pointer', opacity: 0 }} />
        <circle cx="880" cy="480" r="20" fill="red" onClick={() => openModal('Xingu')} style={{ cursor: 'pointer', opacity: 0 }} />
        <circle cx="640" cy="400" r="20" fill="red" onClick={() => openModal('Purus')} style={{ cursor: 'pointer', opacity: 0 }} />
        <circle cx="560" cy="400" r="20" fill="red" onClick={() => openModal('Jurua')} style={{ cursor: 'pointer', opacity: 0 }} />
        <circle cx="970" cy="470" r="20" fill="red" onClick={() => openModal('Tocantins')} style={{ cursor: 'pointer', opacity: 0 }} />
        <circle cx="920" cy="530" r="20" fill="red" onClick={() => openModal('Araguaia')} style={{ cursor: 'pointer', opacity: 0 }} />
        <circle cx="910" cy="260" r="20" fill="red" onClick={() => openModal('Jari')} style={{ cursor: 'pointer', opacity: 0 }} />
        <circle cx="820" cy="260" r="20" fill="red" onClick={() => openModal('Trombetas')} style={{ cursor: 'pointer', opacity: 0 }} />
        <circle cx="700" cy="520" r="20" fill="red" onClick={() => openModal('Guapore')} style={{ cursor: 'pointer', opacity: 0 }} />
        <circle cx="870" cy="250" r="20" fill="red" onClick={() => openModal('Paru')} style={{ cursor: 'pointer', opacity: 0 }} />
        <circle cx="455" cy="430" r="20" fill="red" onClick={() => openModal('Ucayali')} style={{ cursor: 'pointer', opacity: 0 }} />
      </svg>
      </div>
    </div>
    </>
  );

}

export default Home;
