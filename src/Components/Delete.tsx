import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Fish {
  id: number;
  name: string;
  origin: string;
  size: string;
  pH: string;
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
    <div>
      <p>Are you sure you want to delete fish with id: {fishId}?</p>
      <button onClick={handleDelete}>Delete Fish</button>
    </div>
  );
};

export default Delete;
