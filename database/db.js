import mongoose from 'mongoose';

// Mongoose state conections
// 0 = disconnected
// 1 = connected
// 2 = connecting
// 3 = disconnecting

const mongooConection = {
  isConecting: 0,
};

export const connect =  async () => {
  if(mongooConection.isConecting) {
    console.log('YA ESTA CONECTADO');
    return;
  };

  if(mongoose.connections.length > 0) {
    mongooConection.isConecting = mongoose.connections[0].readyState;

    if(mongooConection.isConecting === 1 ){
      console.log('USANDO CONEXION ANTERIOR === ');
      return;
    }

    await mongoose.disconnect();
  };

  await mongoose.connect('');
  mongooConection.isConecting = 1;
  console.log('CONECTADO A MONGO DB ====');
};

export const disconnect = async () => {
  if(mongooConection.isConecting !== 0 ) return;

  await mongoose.disconnect();
  console.log('DESCONECTADO DE MONGOOSE ====');
}