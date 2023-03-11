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
      <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded" type="button" onClick={openModal}>View All Apistogrammas</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h2>Apistogramma Fish</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Origin</th>
              <th>Size</th>
              <th>pH</th>
            </tr>
          </thead>
          <tbody>
            {fish.map((fish) => (
              <tr key={fish.name}>
                <td>{fish.name}</td>
                <td>{fish.origin}</td>
                <td>{fish.size}</td>
                <td>{fish.pH}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </>
  );
};

export default Read;
