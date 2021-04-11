const carsNames = ['Aba', 'Batya', 'Beni', 'Bibi', 'Coco', 'Dana', 'Dror', 'Roy', 'Sophia'];

function sendCars (socket, skipProbability) {
   const cars = {};
   carsNames.forEach((name)=> {
      const shouldSkip = Math.random() < skipProbability
      if (shouldSkip) return;
      const posX = Math.random();
      const posY = Math.random();
      cars[name] = {posX, posY};
   })
   socket.emit('cars', cars);
}

function onSocketConnection(socket) {
   console.log('new connection!');
   sendCars(socket, 0);

   setTimeout(() => {
      sendCars(socket, 0.5)
   }, 1000);

   setInterval(() => {
         sendCars(socket, 0.85)
   }, 3500);
}

module.exports = onSocketConnection;

