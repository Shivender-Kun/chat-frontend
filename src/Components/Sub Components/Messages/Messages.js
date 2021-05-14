import "./Messages.css";
import message from "./message";
import socket from "../connectSocket";
import React, { useEffect } from "react";
import { messageReceived } from "../SubComponents";
import { useSelector, useDispatch } from "react-redux";
import ScrollToBottom from "react-scroll-to-bottom";

function Messages({ currentUserName }) {
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.messageReducer.all);

  useEffect(() => {
    socket.on("newMessage", (data) => {
      dispatch(messageReceived(data));
    });
  }, [dispatch]);

  const messageList =
    messages &&
    messages.map((i, index) => {
      return message(i, index, currentUserName);
    });

  return (
    <ScrollToBottom className="messagesContainer bg-dark">
      {messageList}
    </ScrollToBottom>
  );
}

export default Messages;
