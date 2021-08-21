import { io } from "../server/http";

io.on("connect", (socket) => {
  console.log(socket);
});
