import WebSocket from 'ws';
const ws:any = new WebSocket('ws://localhost:3000');

ws.on('open', function open() {
  ws.send('Client has opened a connection');
});

ws.on('message', function message(data) {
  console.log('received: %s', data);
});

async function doStuff(){
    while(true){
        await new Promise(resolve => setTimeout(resolve, 2345));
        let msg = `CLIENT MESSAGE: ${new Date().toISOString()}`;
        console.log("sending: %s", msg);
        ws.send(msg);
    }
}

doStuff();