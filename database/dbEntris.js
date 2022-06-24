import { isValidObjectId } from 'mongoose';
import { db } from '.';
import { Entry } from '../models';

export const getEntryById = async (id) => {

  if( !isValidObjectId(id) ) return null;

  await db.connect();

  const entry = await Entry.findById(id);

  await  db.disconnect();

  return JSON.parse(JSON.stringify(entry));
};