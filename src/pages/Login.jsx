import React from "react";
import { GoogleButton } from "react-google-button";

function Login() {
  return (
    <div>
      <div className="login">
        <h1>Sign In:</h1>
        <GoogleButton className="login" />
      </div>
    </div>
  );
}

export default Login;
