# Websocket Client

This project contains a very basic example of how to use websockets as a client to a remote server to send and receive messages.
The server-side code associated with this project can be found [here](https://github.com/jolafreniere/websocket-server-example/)

## Usage

To build and run the application, run the following commands:

```sh
npm install
npm run start:build
```

This will launch the client and open *a single connection*.

Once the application has been started, the client and server will automatically send each other messages. The output will look like the following:

```txt
received: [SERVER] Connection #0 established.
sending: [CLIENT] CONNECTION #0: Client Message #0
sending: [CLIENT] CONNECTION #0: Client Message #1
sending: [CLIENT] CONNECTION #0: Client Message #2
received: [SERVER] Sending to connection #0: Server Message #1
sending: [CLIENT] CONNECTION #0: Client Message #3
sending: [CLIENT] CONNECTION #0: Client Message #4
sending: [CLIENT] CONNECTION #0: Client Message #5
sending: [CLIENT] CONNECTION #0: Client Message #6
received: [SERVER] Sending to connection #0: Server Message #2
sending: [CLIENT] CONNECTION #0: Client Message #7
sending: [CLIENT] CONNECTION #0: Client Message #8
sending: [CLIENT] CONNECTION #0: Client Message #9
received: [SERVER] Sending to connection #0: Server Message #3
```

To open *multiple connections simultaneously*, run the following command instead:

```sh
# Opens five connections simultaneously
npm run start:build --socketCount 5
```
## Implementation details

The server will send a predetermined amount of messages to each open connections at a random interval, and then it will close that connection. As this happens, the clients will keep sending messages for as long as the connection remains open. Once all connections have been closed, the application will exit.

> **n.b.** The connection number on the client and the server will not necessarily match, the server keeps track of the total amount of connections it has received since startup, the client assigns connection numbers as it creates it. **This number is irrelevant and only serves for demonstration purposes**. If the client application is started multiple times after the server has been started, the numbers won't match.

> **n.b.** The decision to close the connection from the server side is arbitrary, the connection can be closed from either side, at any point.

It is possible to send messages to the server using the standard input. If the message `exit` is sent, the server will close.

