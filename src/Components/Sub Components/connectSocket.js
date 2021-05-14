import { io } from "socket.io-client";

const uri = "https://chat-backend-shiv.herokuapp.com/";

const socket = io(uri);

export default socket;
