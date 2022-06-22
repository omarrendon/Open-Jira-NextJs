import mongoose from "mongoose";
import { db } from "../../../database";
import { Entry } from "../../../models";

export default function (req, res) {
  const { id } = req.query;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({
      message: 'ID is not valid ' + id,
    });
  }

  switch (req.method) {
    case 'PUT':
      return updateEntry(req, res);
    case 'GET':
      return getEntryById(req, res);
    default:
      return res.status(400).json({
        message: 'Method not exist',
      });
  }
}

const getEntryById = async (req, res) => {
  const { id } = req.query;
  
  await db.connect();
  const entryById = await Entry.findById(id);
  await db.disconnect();

  if (!entryById) {
    await db.disconnect();
    return res.status(400).json({ message: 'ID is not valid ' + id });
  }

  return res.status(200).json({
    entryById
  });
};

const updateEntry = async (req, res) => {
  const { id } = req.query;
  await db.connect();
  const entryToUpdate = await Entry.findById(id);

  if (!entryToUpdate) {
    await db.disconnect();
    return res.status(400).json({ message: 'ID is not valid ' + id });
  }

  const {
    description = entryToUpdate.description,
    status = entryToUpdate.status
  } = req.body;


  try {
    const updatedEntry = await Entry.findByIdAndUpdate(id, {
      description,
      status,
    }, {
      runValidators: true,
      new: true
    });
    await db.disconnect();

    res.status(200).json({
      updatedEntry
    });
  } catch (error) {

    console.log({ error });
    await db.disconnect();

    return res.status(400).json({
      message: error.errors.status.message
    });
  }
};