import { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/authContext";
import { useNavigate, Link } from "react-router-dom";
import { FaCoffee } from "react-icons/fa";

function Login() {
  const { googleSignIn, user } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <div>
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/7135037/pexels-photo-7135037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>

          <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                className=" w-96"
                src="https://images.pexels.com/photos/6770845/pexels-photo-6770845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="login"
              />
            </figure>
            <div className="card-body w-96 items-center  text-center">
              <h2 className="card-title">Login</h2>
              <p>Start exploring today</p>
              <GoogleButton onClick={handleGoogleSignIn} />
              <Link to="/">
                <button className="btn gap-2 btn-ghost">
                  <FaCoffee />
                  Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
