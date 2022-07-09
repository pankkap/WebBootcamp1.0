// Reference

var btndis = document.getElementById("disconnect");
var reconnectBtn = document.getElementById("reconnect");
var input = document.querySelector("input");
var sendBtn = document.querySelector("button");

if (window.WebSocket) {
  console.log("Browser support Web Sockets");

  const ws = new WebSocket("ws://localhost:8000");

  ws.addEventListener("open", () => {
    console.log("We are connected with server");
  });

  sendBtn.onclick = function () {
    let msg = input.value;
    ws.send(msg);
    input.value = "";
  };

  ws.addEventListener("message", (e) => {
    console.log("Server Reply: ", e.data);
  });
  btndis.onclick = () => {
    ws.close();
    console.log("We are discoonected from server");
  };

  reconnectBtn.onclick = () => {
    location.reload();
  };
} else {
  console.log("Browser not supporting Web Sockets");
}
