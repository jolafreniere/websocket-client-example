import WebSocket from 'ws';
let socketCount = 1;

if(process.argv.length > 2){
  socketCount = parseInt(process.argv[2]);
}

let closedConnectionCount = 0;
let sockets: WebSocket[] = [];

for(let i = 0; i < socketCount; i++){
  const ws:any = new WebSocket('ws://localhost:3000');
  sockets.push(ws);
  ws.on('open', function open() {
    ws.send(`Client has opened connection #${i}`);
    sendData(ws, i)
  });

  ws.on('message', function message(data) {
    console.log('received: %s', data);
  });

  ws.on("close", ()=>{

      console.log(`Connection #${i} closed by server`);

      if(++closedConnectionCount === socketCount){
        console.log("All connections closed, exiting");
        process.exit(0);
      }
  })

}

async function sendData(ws: WebSocket, connectionNumber: number){
  let messagesSent = 0;
  while(true){
      //Send data at different rates... first connection fast rate, every subsequent connection slower
      await new Promise(resolve => setTimeout(resolve, 1111 * (connectionNumber + 1)));
      let msg = `[CLIENT] CONNECTION #${connectionNumber}: Client Message #${messagesSent++}`;
      console.log("sending: %s", msg);
      ws.send(msg);
  }
}



process.stdin.on("data", data => {
  let input = data.toString()
  sockets[0].send(input);
})

