const carsNames = ['Dror', 'Sara', 'David', 'Ben', 'Sophia', 'Yossi', 'Dana', 'Roy', 'Dodo'];

function sendCars (socket, shouldSkip = () => false) {
   const cars = {};
   carsNames.forEach((name)=> {
      if (shouldSkip()) return;
      const posX = Math.random();
      const posY = Math.random();
      cars[name] = {posX, posY};
   })
   socket.emit('cars', cars);
}

function onSocketConnection(socket) {
   console.log('new connection!');
   sendCars(socket);

   setTimeout(() => {
      sendCars(socket)
   }, 1000);

   setInterval(() => {
         sendCars(socket, () => Math.random() < 0.4)
   }, 6000);
}

module.exports = onSocketConnection;