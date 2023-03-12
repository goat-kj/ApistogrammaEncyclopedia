import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import axios from 'axios';

interface Fish {
  name: string;
  origin: string;
  size: string;
  pH: string;
}

const Read = () => {
  const [fish, setFish] = useState<Fish[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchFish = async () => {
      const res = await axios.get<Fish[]>('http://localhost:4000/all');
      setFish(res.data);
    };
    fetchFish();
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-center">
        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded" type="button" onClick={openModal}>View All Apistogrammas</button>
      </div>
      
      <Modal isOpen={modalIsOpen} className="fixed inset-0 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-6 w-1/2 h-1/2 relative flex flex-col">
          <h2>Apistogramma Fish</h2>
          <div className="flex-1 mb-4">
            {fish.map((fish) => (
              <tr key={fish.name}>
                <td>{fish.name}</td>
                <td>{fish.origin}</td>
                <td>{fish.size}</td>
                <td>{fish.pH}</td>
              </tr>
            ))}
          </div>
          <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4" onClick={closeModal}>Close</button>
        </div>
      </Modal>
    </>
  );
};

export default Read;
