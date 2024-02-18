const { query } = require("./database");
import { IBibliographyEntry } from "./../../interfaces/IBibliographyEntry";

exports.getBibliography = async (userId: string) => {
  const sqlQuery = "SELECT * FROM bibliographyEntries WHERE user_id = $1";
  try {
    const result = await query(sqlQuery, [userId]);
    const bibliography: Array<IBibliographyEntry> = result.rows;
    return bibliography;
  } catch (e) {
    return console.error(e + "Could not retrieve the bibliography");
  }
};

exports.createEntry = async (entry: IBibliographyEntry, userId: string) => {
  const values = [
    userId,
    entry.authorFirstName,
    entry.authorFamilyName,
    entry.title,
    entry.placeOfEdition,
    entry.editor,
    entry.yearOfEdition,
    entry.collection,
    entry.directorFirstName,
    entry.directorFamilyName,
    entry.edition,
    entry.pageNumber,
    entry.consultedOn,
    entry.url,
    entry.magazineTitle,
    entry.magazineVolume,
    entry.magazineNumber,
    entry.chapterNumber,
    entry.chapterTitle,
    entry.pagination,
    entry.type,
    entry.htmlEntry,
  ];

  const sqlQuery = `
    INSERT INTO bibliographyEntries (
        user_id,
        authorFirstName,
        authorFamilyName,
        title,
        placeOfEdition,
        editor,
        yearOfEdition,
        collection,
        directorFirstName,
        directorFamilyName,
        edition,
        pageNumber,
        consultedOn,
        url,
        magazineTitle,
        magazineVolume,
        magazineNumber,
        chapterNumber,
        chapterTitle,
        pagination,
        type,
        htmlEntry
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)
        RETURNING *;
        `;

  try {
    const result = await query(sqlQuery, values);
    const entry: Array<IBibliographyEntry> = result.rows;
    return entry[0];
  } catch (e) {
    return console.error(e + "Could not save entry");
  }
};

exports.updateEntry = async (
  entryId: string,
  updatedEntry: IBibliographyEntry
) => {
  const sqlQuery = `
  UPDATE bibliographyEntries
  SET
    authorFirstName = $1,
    authorFamilyName = $2,
    title = $3,
    placeOfEdition = $4,
    editor = $5,
    yearOfEdition = $6,
    collection = $7,
    directorFirstName = $8,
    directorFamilyName = $9,
    edition = $10,
    pageNumber = $11,
    consultedOn = $12,
    url = $13,
    magazineTitle = $14,
    magazineVolume = $15,
    magazineNumber = $16,
    chapterNumber = $17,
    chapterTitle = $18,
    pagination = $19,
    type = $20,
    htmlEntry = $21
  WHERE id = $22
  RETURNING *;
`;

  const values = [
    updatedEntry.authorFirstName,
    updatedEntry.authorFamilyName,
    updatedEntry.title,
    updatedEntry.placeOfEdition,
    updatedEntry.editor,
    updatedEntry.yearOfEdition,
    updatedEntry.collection,
    updatedEntry.directorFirstName,
    updatedEntry.directorFamilyName,
    updatedEntry.edition,
    updatedEntry.pageNumber,
    updatedEntry.consultedOn,
    updatedEntry.url,
    updatedEntry.magazineTitle,
    updatedEntry.magazineVolume,
    updatedEntry.magazineNumber,
    updatedEntry.chapterNumber,
    updatedEntry.chapterTitle,
    updatedEntry.pagination,
    updatedEntry.type,
    updatedEntry.htmlEntry,
    entryId,
  ];

  try {
    const result = await query(sqlQuery, values);
    const updatedEntry: Array<IBibliographyEntry> = result.rows;
    return updatedEntry[0];
  } catch (e) {
    console.error(e + "Could not update entry");
  }
};

exports.deleteEntry = async (entryId: string) => {
  const sqlQuery = `
    DELETE FROM bibliographyEntries
    WHERE id = $1
    RETURNING *;
  `;
  try {
    const result = await query(sqlQuery, [entryId]);
    const deletedEntry: Array<IBibliographyEntry> = result.rows;
    return deletedEntry[0];
  } catch (e) {
    console.error(e + "Could not delete entry");
  }
};
