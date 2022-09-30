import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/7135037/pexels-photo-7135037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-white font-bold">
              Crypto Coffee
            </h1>
            <h3 className="mb-5">Start your mornings right</h3>
            <p className="mb-5">
              A quick and easy way to check on your favorite coins!
            </p>
            <Link to="/login">
              <button className="btn btn-primary">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
