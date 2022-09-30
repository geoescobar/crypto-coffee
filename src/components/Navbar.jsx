import React from "react";
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
          <p className="text-white  underline decoration-solid decoration-primary">
            {user?.displayName}
          </p>
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
