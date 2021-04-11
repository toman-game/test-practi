const path = require( 'path');
const express = require( 'express');
const http = require( 'http');
const IO = require( 'socket.io');
const onSocketConnection = require( './onSocketConnection');
console.log('Hello server');

const app = express();
const pathToBuild = path.join(__dirname, '..', 'build');
app.use(express.static(pathToBuild));

const server = http.createServer(app);
const port = Number(process.env.PORT || 4000);
server.listen(port, () => {
   console.log(`listening on port ${port}!`);
});

const io = IO(server, {
   cors: {
      origin: '*',
   },
});
io.on('connection', onSocketConnection);

