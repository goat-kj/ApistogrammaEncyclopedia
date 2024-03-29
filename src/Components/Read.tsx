import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { isLoggedInState } from "./Atom";
import "../App.css";

interface ReadProps {
  origin: string;
  closeModal: () => void;
}

interface Fish {
  id: number;
  name: string;
  origin: string;
  size: string;
  pH: string;
  image: string;
}

const Read: React.FC<ReadProps> = ({ origin, closeModal }) => {
  const [fish, setFish] = useState<Fish[]>([]);
  const [selectedFishId, setSelectedFishId] = useState<number | null>(null);
  const navigate = useNavigate();
  const isLoggedIn = useRecoilValue(isLoggedInState);

  const fetchFish = async () => {
    const res = await axios.get<Fish[]>("http://localhost:4000/all");
    setFish(
      res.data.filter((fish) => origin === "all" || fish.origin === origin)
    );
  };

  useEffect(() => {
    fetchFish();
  }, [origin]);

  const handleFishClick = (id: number) => {
    if (id === selectedFishId) {
      setSelectedFishId(null);
    } else {
      setSelectedFishId(id);
    }
  };

  const handleUpdateClick = () => {
    if (selectedFishId !== null) {
      navigate(`/update/${selectedFishId}`);
    }
  };

  const handleDeleteClick = () => {
    if (selectedFishId !== null) {
      navigate(`/delete/${selectedFishId}`);
    }
  };

  const modalHeight = 100 + fish.length * 180;

  return (
    <>
      <Modal
        isOpen={true}
        contentLabel="Apistogramma Fish"
        className="fixed inset-0 flex items-center justify-center"
        onRequestClose={closeModal}
      >
        <div className="bg-white rounded-lg shadow-lg modal-container relative flex flex-col">
          <div className="modal-header text-center sticky top-0 py-8 bg-white">
            <h2 className="text-lg font-serif font-bold">
              {origin === "all"
                ? "Showing Apistogrammas from All Rivers"
                : `Showing Apistogrammas from ${origin} River`}
            </h2>
          </div>
          <div className="flex flex-col items-center">
            {fish
              .filter((fish) => origin === "all" || fish.origin === origin)
              .map((fish) => (
                <button
                  key={fish.id}
                  className={`fish-card justify-center items-center mt-2 mb-2 shadow-md bg-gray-100 hover:bg-gray-200 ${
                    selectedFishId === fish.id ? "bg-gray-200" : ""
                  }`}
                  style={{ minWidth: "80%", maxWidth: "90%" }}
                  onClick={() => handleFishClick(fish.id)}
                >
                  <div className="p-3">
                    <img
                      src={fish.image}
                      alt="Fish"
                      className="fish-image rounded-lg"
                    />
                  </div>
                  <div className="p-3">
                    <h2 className="text-xl font-bold mb-2">{fish.name}</h2>
                    <p className="text-gray-700 text-base">
                      Origin: {fish.origin} River
                    </p>
                    <p className="text-gray-700 text-base">
                      Size: {fish.size}cm
                    </p>
                    <p className="text-gray-700 text-base">pH: {fish.pH}</p>
                  </div>
                </button>
              ))}
          </div>
          <div className="modal-footer flex justify-center mt-2 sticky bottom-0 py-8 bg-white">
            {isLoggedIn ? (
              <>
                <button
                  className={`${
                    selectedFishId === null ? "bg-gray-200" : "bg-black"
                  } hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mr-4`}
                  onClick={handleUpdateClick}
                >
                  Update
                </button>
                <button
                  className={`${
                    selectedFishId === null ? "bg-gray-200" : "bg-black"
                  } hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mr-4`}
                  onClick={handleDeleteClick}
                >
                  Delete
                </button>
              </>
            ) : null}

            <button
              className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Read;
