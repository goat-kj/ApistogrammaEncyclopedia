import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Fish {
  id: number;
  name: string;
  origin: string;
  size: string;
  pH: string;
  image: string;
};

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
};

const Delete: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const fishId = id ?? '';
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      const response = await fetch(`/delete/${fishId}`, {
        method: "DELETE",
      });
      if (response.ok) {
        navigate("/");
      } else {
        console.error(`Failed to delete fish with id: ${fishId}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-lg mt-4 mb-4 font-serif">
        Are you sure you want to delete fish with id: {fishId}?
      </p>
      <div className="flex flex-row justify-center space-x-4">
        <button
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleDelete}
        >
          Yes
        </button>
        <button
          className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/")}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Delete;
