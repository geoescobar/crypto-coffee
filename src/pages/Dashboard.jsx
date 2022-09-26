import React from "react";
import { UserAuth } from "../context/authContext";

function Dashboard() {
  const { logout, user } = UserAuth();

  const handleSignout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="dashboard">
        <h1>Welcome {user?.displayName}</h1>
        <p>Search Your Favorite Cryptos</p>
        <button onClick={handleSignout}>Log Out</button>
      </div>
    </div>
  );
}

export default Dashboard;
