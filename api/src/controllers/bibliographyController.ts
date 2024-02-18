import { Response, NextFunction } from "express";
import { IAuthRequest } from "../interfaces/IAuthRequest";
const bibliographyDatabase = require("./../services/database/bibliographyDatabase");
const {
  bibliographyDatabaseMapper,
  entryDatabaseMapper,
} = require("./../services/database/DatabaseMappers/bibliographyDatabaseMapper");

exports.getBibliography = async (
  req: IAuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.auth;
    const bibliography = await bibliographyDatabase.getBibliography(userId);
    const viewModel = bibliographyDatabaseMapper(bibliography);
    res.status(200).json(viewModel);
  } catch (e) {
    res.status(500);
  }
};

exports.createEntry = async (
  req: IAuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.auth;
    const { entry } = req.body;
    const createdEntry = await bibliographyDatabase.createEntry(entry, userId);
    const viewModel = entryDatabaseMapper(createdEntry);
    res.status(201).json(viewModel);
  } catch (e) {
    res.status(500);
  }
};

exports.updateEntry = async (
  req: IAuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { entry } = req.body;
    const updatedEntry = await bibliographyDatabase.updateEntry(id, entry);
    const viewModel = entryDatabaseMapper(updatedEntry);
    res.status(201).json(viewModel);
  } catch (e) {
    res.status(500);
  }
};

exports.deleteEntry = async (
  req: IAuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await bibliographyDatabase.deleteEntry(id);
    res.status(202).json("Entry deleted");
  } catch (e) {
    res.status(500);
  }
};
