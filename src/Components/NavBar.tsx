import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoggedInState } from "./Atom";
import Logo from "../Images/apisto_logo-min.svg";

function NavBar() {
  const isLoggedIn = useRecoilValue(isLoggedInState);
  const setIsLoggedIn = useSetRecoilState(isLoggedInState);

  const handleLogout = () => {
    setIsLoggedIn(false);
    window.alert("You have been logged out.");
  };

  return (
    <nav className="nav">
      <svg viewBox="0 0 180 180">
        <filter id="invert">
          <feColorMatrix
            in="SourceGraphic"
            type="matrix"
            values="-1 0 0 0 1
                  0 -1 0 0 1
                  0 0 -1 0 1
                  0 0 0 1 0"
          />
        </filter>
        <image
          width="180"
          height="180"
          xlinkHref={Logo}
          filter="url(#invert)"
        />
      </svg>
      {isLoggedIn ? (
        <>
          <div className="flex justify-center items-center p-2">
            <Link to="/create" className="text-white">
              Create
            </Link>
          </div>
          <div className="flex justify-center items-center p-2">
            <button
              className="text-white whitespace-nowrap"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-center items-center">
          <Link to="/login" className="text-white">
            Staff Log In
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
