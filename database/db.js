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
    return;
  };

  if(mongoose.connections.length > 0) {
    mongooConection.isConecting = mongoose.connections[0].readyState;

    if(mongooConection.isConecting === 1 ){
      return;
    }

    await mongoose.disconnect();
  };

  await mongoose.connect(process.env.MONGO_URL || '');
  mongooConection.isConecting = 1;
};

export const disconnect = async () => {

  if(process.env.NODE_ENV === 'development') return;

  if(mongooConection.isConecting === 0 ) return;

  await mongoose.disconnect();

  mongooConection.isConecting = 0;
}