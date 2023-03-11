import React, { useState } from 'react';
import axios from 'axios';

interface Fish {
  name: string;
  origin: string;
  size: string;
  pH: string;
};

const Create: React.FC = () => {
  const [fish, setFish] = useState<Fish>({
    name: '',
    origin:'',
    size: '',
    pH: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFish({ ...fish, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .post('http://localhost:4000/create', fish)
      .then((response) => {
        console.log(response.data);
        alert('Fish created successfully!');
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to create fish');
      });
  };

  return (
    <div>
      <h1>Create Fish</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={fish.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Origin:
          <input
            type="text"
            name="origin"
            value={fish.origin}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Size:
          <input
            type="text"
            name="size"
            value={fish.size}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          pH:
          <input
            type="text"
            name="pH"
            value={fish.pH}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
