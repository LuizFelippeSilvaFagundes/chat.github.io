var apiKey = "uUah2xEIGGkgxCsggK0VxorNKV6djSP70nXBoRxSBnywMNcWJrtwdtnnQNSp";
var channel = 1;
var url = "wss://connect.websocket.in/v3/" + channel + "?apiKey=" + apiKey;
var socket;

function conectar(){
  socket = new WebSocket(url);
  document.getElementById("btnConectar").disabled = true;
  socket.onopen = conectou;
  socket.onmessage = recebeu;
}

function conectou(){
  document.getElementById("btnEnviar").disabled = false;
}

function recebeu(event){
  var chatRomm =  document.getElementById("msgs");
  chatRomm.innerHTML += "<br>" + event.data;
}

function enviar(){
  var msg = document.getElementById("entrada").value;
  document.getElementById("entrada").value = "";
  socket.send(msg);
}
