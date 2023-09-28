import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/Firebase.init";

const Login = () => {
  const auth = getAuth(app);
  //   console.log(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  return (
    <div>
      <h6>Google login</h6>
      <button onClick={handleGoogleSignIn}>Authentication</button>
    </div>
  );
};

export default Login;
