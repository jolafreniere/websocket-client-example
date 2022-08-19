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
        await new Promise(resolve => setTimeout(resolve, 2000));
        ws.send("CLIENT MESSAGE: "+new Date().toISOString());
    }
}

doStuff();