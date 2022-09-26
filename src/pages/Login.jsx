import { useEffect } from "react";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";

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
  }, [user]);

  return (
    <div>
      <div className="login">
        <h1>Sign In:</h1>
        <GoogleButton className="login" onClick={handleGoogleSignIn} />
      </div>
    </div>
  );
}

export default Login;
