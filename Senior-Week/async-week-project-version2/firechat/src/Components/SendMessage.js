import React, { useState } from "react";
import { Button, Input } from "@mui/material";
import { db, auth } from "../index";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function SendMessage() {
  const [message, setMessage] = useState("");
  const messagesCollectionRef = collection(db, "messages");

  async function sendMessage(event) {
    event.preventDefault();
    const { uid } = auth.currentUser;

    await addDoc(messagesCollectionRef, {
      uid,
      text: message,
      createdAt: serverTimestamp(),
    });
  }

  return (
    <div>
      <form onSubmit={sendMessage}>
        <Input
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Your Message Here"
        />
        <Button type="submit">Send</Button>
      </form>
    </div>
  );
}

export default SendMessage;
