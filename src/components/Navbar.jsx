import React from "react";
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
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link to="/">{user?.displayName}</Link>
        </div>

        <div className="navbar-end">
          <p onClick={handleSignout} className="btn btn-primary">
            Logout
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
