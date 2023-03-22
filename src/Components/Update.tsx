import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Fish {
  id: number;
  name: string;
  origin: string;
  size: string;
  pH: string;
  image: string;
}

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

const Update: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const fishId = id ?? "";

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [size, setSize] = useState("");
  const [pH, setpH] = useState("");
  const [image, setImage] = useState("");

  const [fishList, setFishList] = useState<Fish[]>([]);

  useEffect(() => {
    // Fetch the fish list and set the state
    const fetchFishList = async () => {
      try {
        const response = await fetch("/all");
        const data = await response.json();
        setFishList(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFishList();
  }, []);

  useEffect(() => {
    // Find the fish by id and set the state of the form inputs
    const selectedFish = fishList.find((fish) => fish.id === parseInt(fishId));
    if (selectedFish) {
      setName(selectedFish.name);
      setOrigin(selectedFish.origin);
      setSize(selectedFish.size);
      setpH(selectedFish.pH);
      setImage(selectedFish.image);
    }
  }, [fishList, id]);

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:4000/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, origin, size, pH, image }),
      });
      if (response.ok) {
        const updatedFishList = fishList.map((fish) =>
          fish.id === parseInt(fishId)
            ? { id: fish.id, name, origin, size, pH, image }
            : fish
        );
        setFishList(updatedFishList);
        window.alert("Fish has been successfully updated.");
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Update This Fish</h1>
      <form onSubmit={handleUpdate} className="flex flex-col space-y-2">
        <label className="flex flex-col" htmlFor="name">
          <span className="font-bold">Name:</span>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
        <label className="flex flex-col" htmlFor="origin">
          <span className="font-bold">Origin:</span>
          <input
            type="text"
            id="origin"
            value={origin}
            onChange={(event) => setOrigin(event.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
        <label className="flex flex-col" htmlFor="size">
          <span className="font-bold">Size:</span>
          <input
            type="text"
            id="size"
            value={size}
            onChange={(event) => setSize(event.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
        <label className="flex flex-col" htmlFor="pH">
          <span className="font-bold">pH:</span>
          <input
            type="text"
            id="pH"
            value={pH}
            onChange={(event) => setpH(event.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
        <label className="flex flex-col" htmlFor="image">
          <span className="font-bold">Image URL:</span>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            className="border border-gray-300 rounded-md p-2"
          />
        </label>
        <button
          type="submit"
          className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
