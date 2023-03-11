import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Fish {
  id: number;
  name: string;
  origin: string;
  size: string;
  pH: string;
}

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}


const Update: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const fishId = id ?? '';

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [origin, setOrigin] = useState("");
  const [size, setSize] = useState("");
  const [pH, setpH] = useState("");

  const [fishList, setFishList] = useState<Fish[]>([]);

  useEffect(() => {
    // Fetch the fish list and set the state
    const fetchFishList = async () => {
      try {
        const response = await fetch("/fish");
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
    }
  }, [fishList, id]);

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:4000/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, origin, size, pH }),
      });
      if (response.ok) {
        const updatedFishList = fishList.map((fish) =>
          fish.id === parseInt(fishId)
            ? { id: fish.id, name, origin, size, pH }
            : fish
        );
        setFishList(updatedFishList);
        navigate("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="origin">Origin:</label>
          <input
            type="text"
            id="origin"
            value={origin}
            onChange={(event) => setOrigin(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="size">Size:</label>
          <input
            type="text"
            id="size"
            value={size}
            onChange={(event) => setSize(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="pH">pH:</label>
          <input
            type="text"
            id="pH"
            value={pH}
            onChange={(event) => setpH(event.target.value)}
          />
        </div>
        <button type="submit">Update Fish</button>
      </form>
    </div>
  );
};

export default Update;
