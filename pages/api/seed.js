import { db } from "../../database";
import { seedData } from "../../database/seed-data";
import { Entry } from "../../models";

export default async function (req, res) {
  if( process.env.NODE_ENV === 'production'){
    return res.status(401).json({
      message: 'No tiene acceso a este servicio',
    });
  };

  await db.connect();
  console.log('CONNECT WITH THE DATA BASE ----');

  console.log('RESET ALL DATA ----');
  await Entry.deleteMany();
  
  console.log('SET ENTRY DATA ----');
  await Entry.insertMany(seedData.entries);

  console.log('DISCONNECT WITH THE DATA BASE ----');
  await db.disconnect();

  res.status(200).json({ message: 'CONECTADO EXISTOSAMENte' })
}