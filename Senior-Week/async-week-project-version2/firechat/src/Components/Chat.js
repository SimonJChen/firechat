import React, { useState, useEffect } from "react";
import SignOut from "./SignOut";
import { db, auth } from "../index";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import SendMessage from "./SendMessage";

function Chat() {
  const [messages, setMessages] = useState([]);

  const messagesCollectionRef = query(
    collection(db, "messages"),
    orderBy("createdAt", "asc")
  );

  useEffect(() => {
    const getMessage = async () => {
      const data = await getDocs(messagesCollectionRef);

      setMessages(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getMessage();
  }, [messages]);

  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, displayName, uid }) => (
          <div key={id}>
            <div
              className={`msg ${
                uid === auth.currentUser.uid ? "sent" : "received"
              }`}
            >
              <p>{displayName}</p>
              <p>{text}</p>
            </div>
          </div>
        ))}

        <SendMessage />
      </div>
    </div>
  );
}

export default Chat;
