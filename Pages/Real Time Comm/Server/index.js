const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8000 });

console.log("Server Started at port 8000");
wss.on("connection", (ws) => {
  console.log("New Client Connected..!!");

  ws.on("message", (data) => {
    console.log(`Message recieved form user: ${data}`);
    ws.send("Hi User..!! How are you..?")
  });

  ws.on("close", () => {
    console.log("Client Disconnected");
  });
});
