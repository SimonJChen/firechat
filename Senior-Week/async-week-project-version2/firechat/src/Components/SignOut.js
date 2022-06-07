import React from "react";
import { Button } from "@mui/material";
import { auth } from "../index";

function SignOut() {
  return (
    <div>
      <Button onClick={() => auth.signOut()}>Sign Out</Button>
    </div>
  );
}

export default SignOut;
