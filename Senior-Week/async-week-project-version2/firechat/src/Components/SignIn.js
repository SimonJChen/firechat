import React from "react";
import { Button } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../index";

function SignIn() {
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider).then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
    });
  }
  return (
    <div>
      <Button onClick={signInWithGoogle}>Sign In With Google</Button>
    </div>
  );
}

export default SignIn;
