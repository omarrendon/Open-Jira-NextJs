import { db } from "../../../database";
import { Entry } from "../../../models";

export default function handler(req, res) {

  switch (req.method) {
    case 'GET':
      return getEntries(res);
    case 'POST':
      return postEntry(res, req);
    default:
      return res.status(400).json({ massage: 'Entries not found' });
  }
}

const getEntries = async (res, req) => {
  await db.connect();
  const entries = await Entry.find().sort({ createdAt: 'ascending' });

  await db.disconnect();
  res.status(200).json({
    entries
  });
};

const postEntry = async (res, req) => {
  const { description } = req.body;

  const entryCreated = new Entry({
    description,
    createdAt: Date.now(),
  });

  try {
    await db.connect();
    await entryCreated.save();
    await db.disconnect();

    return res.status(201).json({
      entryCreated
    });
  } catch (error) {
    console.log('ERROR IN CREATE NEW ENTRY ==', error);
    await db.disconnect();

    return res.status(500).json({
      message: 'Something goes wrong.'
    });
  }
};