import { IEntry } from "../interfaces/IEntry";

const entryFormatter = (entry: IEntry) => {
  console.log(entry);
  const authorFamilyName = entry.authorFamilyName.toUpperCase();
  const authorFirstName = capitalize(entry.authorFirstName);
  const title = capitalize(entry.title);
  const placeOfEdition = capitalize(entry.placeOfEdition);
  const editor = capitalize(entry.editor);
  const edition = capitalize(entry.edition);
  const yearOfEdition = entry.yearOfEdition;
  const collection = capitalize(entry.collection);
  const date = new Date(entry.consultedOn).toLocaleDateString("fr-FR");
  const url = entry.url;
  const chapterNumber = entry.chapterNumber;
  const chapterTitle = capitalize(entry.chapterTitle);
  const pagination = entry.pagination;
  const magazineTitle = capitalize(entry.magazineTitle);
  const magazineVolume = entry.magazineVolume;
  const magazineNumber = entry.magazineNumber;
  switch (entry.type) {
    case "printedBook":
      return `${authorFamilyName},
      &nbsp;${authorFirstName}.
      &nbsp;<i><b>${title}</b></i>.
      &nbsp;${placeOfEdition}
      &nbsp;: ${editor}, ${yearOfEdition}. ${collection}.`;
    case "eBook":
      return `${authorFamilyName},
      &nbsp;${authorFirstName}.
      &nbsp;<i><b>${title}</b></i> [en ligne].
      &nbsp;${edition} éd.
      &nbsp;${placeOfEdition}
      &nbsp;: ${editor}, ${yearOfEdition}. ${collection} [consulté le ${date}].
      &nbsp; Disponible à l'adresse : ${url}`;
    case "printedChapter":
      return `${authorFamilyName},
        &nbsp;${authorFirstName}.
        &nbsp;<i><b>${title}</b></i>.
        &nbsp;${edition} éd.
        &nbsp;${placeOfEdition}
        &nbsp;: ${editor}, ${yearOfEdition}. 
        &nbsp;Chap. ${chapterNumber}, ${chapterTitle}, pp. ${pagination}.`;
    case "printedMagazine":
      return `${authorFamilyName},
        &nbsp;${authorFirstName}.
        &nbsp;${title}.
        &nbsp;<i><b>${magazineTitle}</b></i>.
        &nbsp; ${yearOfEdition}, vol. ${magazineVolume}, n° ${magazineNumber}, pp. ${pagination}.`;
    case "eMagazine":
      return `${authorFamilyName},
        &nbsp;${authorFirstName}.
        &nbsp;${title}.
        &nbsp;<i><b>${magazineTitle}</b></i> [en ligne].
        &nbsp; ${yearOfEdition}, vol. ${magazineVolume}, n° ${magazineNumber}, pp. ${pagination}
        &nbsp; [consulté le ${date}].
        &nbsp; Disponible à l'adresse : ${url}`;
    default:
      return "";
  }
};

const capitalize = (entry: string) => {
  if (entry[0]) {
    return entry[0].toUpperCase() + entry.slice(1).toLowerCase();
  }
};

// authorFirstName: "",
// authorFamilyName: "",
// title: "",
// placeOfEdition: "",
// editor: "",
// yearOfEdition: "",
// collection: "",
// directorFirstName: "",
// directorFamilyName: "",
// edition: "",
// pageNumber: "",
// consultedOn: new Date(),
// url: "",
// magazineTitle: "",
// magazineVolume: "",
// magazineNumber: "",
// chapterNumber: "",
// chapterTitle: "",
// pagination: "",
// type: "",
// htmlEntry

export { entryFormatter };
