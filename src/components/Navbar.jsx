import React from "react";
import { FaCoffee } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/authContext";

function Navbar() {
  const { user, logout } = UserAuth();

  const handleSignout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <header>
        <div className="navbar">
          <Link to="/">
            <FaCoffee className="logo" />
          </Link>

          {user?.displayName ? (
            <button onClick={handleSignout}>Logout</button>
          ) : (
            <Link to="/login">Sign in</Link>
          )}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
