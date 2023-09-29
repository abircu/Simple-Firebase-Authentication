import React, { useState } from "react";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/Firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  //   console.log(app);
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
  const handleSignOut = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h6>Google login</h6>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <button onClick={handleGoogleSignIn}>Google Sign in</button>
      )}
      {user && (
        <div>
          <h3>User: {user?.displayName}</h3>
          <p>Email:{user?.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
