import { io } from "socket.io-client";

const uri = "localhost:4000";

const socket = io(uri);

export default socket;
