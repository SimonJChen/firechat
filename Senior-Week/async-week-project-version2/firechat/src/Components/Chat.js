import React, { useState, useEffect } from "react";
import SignOut from "./SignOut";
import { db } from "../index";
import { collection, getDocs } from "firebase/firestore";
import SendMessage from "./SendMessage";

function Chat() {
  const [messages, setMessages] = useState([]);

  const messagesCollectionRef = collection(db, "messages");

  useEffect(() => {
    const getMessage = async () => {
      const data = await getDocs(messagesCollectionRef);
      setMessages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getMessage();
  }, []);

  /* <img src={photoURL} alt="" /> */

  return (
    <div>
      <SignOut />
      {messages.map(({ id, text }) => (
        <div key={id}>
          <p>{text}</p>
        </div>
      ))}
      <SendMessage />
    </div>
  );
}

export default Chat;
