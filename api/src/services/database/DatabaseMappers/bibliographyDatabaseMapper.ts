import { IBibliographyEntry } from "./../../../interfaces/IBibliographyEntry";
import { IDatabaseBibliographyEntry } from "./../../../interfaces/IDatabaseBibliographyEntry";

exports.bibliographyDatabaseMapper = (
  bibliography: IDatabaseBibliographyEntry[]
): IBibliographyEntry[] => {
  return bibliography.map((entry: IDatabaseBibliographyEntry) => ({
    id: entry.id,
    user_id: entry.user_id,
    authorFirstName: entry.authorfirstname,
    authorFamilyName: entry.authorfamilyname,
    title: entry.title,
    placeOfEdition: entry.placeofedition,
    editor: entry.editor,
    yearOfEdition: entry.yearofedition,
    collection: entry.collection,
    directorFirstName: entry.directorfirstname,
    directorFamilyName: entry.directorfamilyname,
    edition: entry.edition,
    pageNumber: entry.pagenumber,
    consultedOn: entry.consultedon,
    url: entry.url,
    magazineTitle: entry.magazinetitle,
    magazineVolume: entry.magazinevolume,
    magazineNumber: entry.magazinenumber,
    chapterNumber: entry.chapternumber,
    chapterTitle: entry.chaptertitle,
    pagination: entry.pagination,
    type: entry.type,
    htmlEntry: entry.htmlentry,
  }));
};

exports.entryDatabaseMapper = (
  entry: IDatabaseBibliographyEntry
): IBibliographyEntry => {
  return {
    id: entry.id,
    user_id: entry.user_id,
    authorFirstName: entry.authorfirstname,
    authorFamilyName: entry.authorfamilyname,
    title: entry.title,
    placeOfEdition: entry.placeofedition,
    editor: entry.editor,
    yearOfEdition: entry.yearofedition,
    collection: entry.collection,
    directorFirstName: entry.directorfirstname,
    directorFamilyName: entry.directorfamilyname,
    edition: entry.edition,
    pageNumber: entry.pagenumber,
    consultedOn: entry.consultedon,
    url: entry.url,
    magazineTitle: entry.magazinetitle,
    magazineVolume: entry.magazinevolume,
    magazineNumber: entry.magazinenumber,
    chapterNumber: entry.chapternumber,
    chapterTitle: entry.chaptertitle,
    pagination: entry.pagination,
    type: entry.type,
    htmlEntry: entry.htmlentry,
  };
};
