import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isLoggedInState } from "./Atom";

const Login = () => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);
  const navigate = useNavigate();

  const handleAccountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccount(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ account, password }),
    })
      .then((response) => {
        if (response.ok) {
          setIsLoggedIn(true);
          console.log("Login successful");
          window.alert("You have logged in.");
          navigate("/");
        } else {
          console.log("Invalid account or password");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <div className="flex flex-col items-center border p-4 rounded-lg">
        <div className="mb-2">
          <label htmlFor="account" className="font-sans">
            Account
          </label>
          <input
            type="text"
            id="account"
            className="border rounded px-2 py-1 ml-2"
            value={account}
            onChange={handleAccountChange}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password" className="font-sans">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="border rounded px-2 py-1 ml-2"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
