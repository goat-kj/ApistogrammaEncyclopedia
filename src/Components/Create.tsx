import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Fish {
  name: string;
  origin: string;
  size: string;
  pH: string;
  image: string;
}

const Create: React.FC = () => {
  const [fish, setFish] = useState<Fish>({
    name: '',
    origin: '',
    size: '',
    pH: '',
    image: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFish({ ...fish, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post('http://localhost:4000/create', fish)
      .then((response) => {
        console.log(response.data);
        alert('Fish created successfully!');
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to create fish');
      });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Create Fish</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <label className="flex flex-col">
          <span className="font-bold">Name:</span>
          <input
            type="text"
            name="name"
            value={fish.name}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-bold">Origin:</span>
          <input
            type="text"
            name="origin"
            value={fish.origin}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-bold">Size:</span>
          <input
            type="text"
            name="size"
            value={fish.size}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-bold">pH:</span>
          <input
            type="text"
            name="pH"
            value={fish.pH}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
        <label className="flex flex-col">
          <span className="font-bold">Image URL:</span>
          <input
            type="text"
            name="image"
            value={fish.image}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
        <button
          type="submit"
          className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
        >
          Create
        </button>
        <button
          className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate('/')}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Create;
