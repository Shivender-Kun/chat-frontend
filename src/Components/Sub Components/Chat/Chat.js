import React, { useEffect, useState } from "react";
import { Joined, Messages, SendMessage } from "../SubComponents";
import { useDispatch } from "react-redux";
import socket from "../connectSocket";

function Chat({ currentUserName }) {
  const [user, setuser] = useState(currentUserName);

  const dispatch = useDispatch();

  useEffect(() => {
    socket.emit("joined", currentUserName);
  }, [currentUserName]);

  useEffect(() => {
    socket.on("joined", (name) => {
      setuser(name);
    });
    dispatch(Joined(user));
  }, [user, dispatch]);

  return (
    <div className="container" style={styles.container}>
      <h2 className="text-center">
        Welcome to the broadcast {currentUserName}
      </h2>
      <div className="chat bg-black text-light" style={styles.chat}>
        <Messages currentUserName={currentUserName} />
      </div>
      <SendMessage currentUserName={currentUserName} />
    </div>
  );
}

export default Chat;

const styles = {
  container: {
    height: "100%",
    paddingTop: "15px",
  },
  chat: {
    // width: "100%",
    height: "80%",
    paddingTop: "25px",
    borderRadius: "20px",
  },
  typing: {},
  textarea: {
    flex: "1",
    height: "5vh",
    padding: "5px 10px",
  },
};
