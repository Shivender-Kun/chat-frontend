import React, { useState } from "react";
import socket from "../connectSocket";
import { useDispatch } from "react-redux";
import { messageSent } from "../SubComponents";

function SendMessage({ currentUserName }) {
  const [message, setmessage] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (message === "") return;

    const data = {
      currentUserName,
      message,
    };

    socket.emit("newMessage", data);

    setmessage("");

    dispatch(messageSent(data));
  };

  return (
    <div className="send" style={styles.send}>
      <textarea
        required
        className="form-control"
        style={styles.textarea}
        placeholder="Enter message..."
        value={message}
        onChange={(e) => setmessage(e.target.value)}
      ></textarea>
      <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
        Send
      </button>
    </div>
  );
}

export default SendMessage;

const styles = {
  send: {
    marginTop: "10px",
    padding: "0px 20px",
    display: "flex",
    justifyContent: "center",
  },
};
