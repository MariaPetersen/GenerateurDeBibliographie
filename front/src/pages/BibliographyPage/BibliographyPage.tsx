import { useEffect, useState } from "react";
import { Grid, Button, IconButton } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import Api from "../../services/Api";
import SelectTypeInput from "./../../components/SelectTypeInput/SelectTypeInput";
import PrintedBookInputs from "./../../components/EntryInputs/PrintedBookInputs";
import ChapterInputs from "./../../components/EntryInputs/ChapterInputs";
import { entryFormatter } from "../../utils/entryFormatter";
import { IEntry } from "../../interfaces/IEntry";
import { IHtmlObject } from "../../interfaces/IHtmlObject";
import EBookInputs from "../../components/EntryInputs/EBookInputs";
import PrintedArticlesInputs from "../../components/EntryInputs/PrintedArticleInputs";
import EArticlesInputs from "../../components/EntryInputs/EArticleInputs";

const entryInitialState = {
  authorFirstName: "",
  authorFamilyName: "",
  title: "",
  placeOfEdition: "",
  editor: "",
  yearOfEdition: "",
  collection: "",
  directorFirstName: "",
  directorFamilyName: "",
  edition: "",
  pageNumber: "",
  consultedOn: "",
  url: "",
  magazineTitle: "",
  magazineVolume: "",
  magazineNumber: "",
  chapterNumber: "",
  chapterTitle: "",
  pagination: "",
  type: "",
  htmlEntry: "",
  id: "",
};

function BibliographyPage() {
  const [entry, setEntry] = useState<IEntry>(entryInitialState);
  const [allEntries, setAllEntries] = useState<IEntry[]>([]);
  const [allHtmlEntries, setAllHtmlEntries] = useState<IHtmlObject[]>([]);
  const [selectedType, setSelectedType] = useState<string>("");
  const api = new Api();

  useEffect(() => {
    api
      .getBibliography()
      .then((response) => response.json())
      .then((bibliography) => {
        setAllEntries([...bibliography]);
        const htmlEntries = bibliography.map((entry: IEntry) => ({
          html: entry.htmlEntry,
          id: entry.id,
        }));
        setAllHtmlEntries([...htmlEntries]);
      });
  }, []);

  useEffect(() => {
    setEntry({ ...entry, type: selectedType });
  }, [selectedType]);

  const handleAddEntry = () => {
    const html = {
      html: "",
      id: "",
    };
    html.html = entryFormatter(entry);
    const entryWithHtml = entry;
    entryWithHtml.htmlEntry = html.html;
    if (!entryWithHtml.id) {
      api
        .createEntry(entryWithHtml)
        .then((response) => response.json())
        .then((entry) => {
          html.id = entry.id;
          setAllEntries([...allEntries, entry]);
          setAllHtmlEntries([...allHtmlEntries, html]);
        });
    } else {
      api
        .updateEntry(entryWithHtml.id, entryWithHtml)
        .then((response) => response.json())
        .then((entry) => {
          html.id = entry.id;
          setAllEntries([...allEntries, entry]);
          setAllHtmlEntries([...allHtmlEntries, html]);
        });
    }
  };

  const handleDeleteEntry = (entryId: string) => {
    api.deleteEntry(entryId).then(() => {
      const filteredAllEntries = allEntries.filter(
        (entry) => entry.id !== entryId
      );
      const filteredAllHtmlEntries = allHtmlEntries.filter(
        (entry) => entry.id !== entryId
      );
      setAllEntries(filteredAllEntries);
      setAllHtmlEntries(filteredAllHtmlEntries);
    });
  };

  const handleUpdate = (entryId: string) => {
    const entryToUpdate = allEntries.find((entry) => entry.id === entryId);
    entryToUpdate && setSelectedType(entryToUpdate.type);
    entryToUpdate && setEntry({ ...entryToUpdate });
    const filteredAllEntries = allEntries.filter(
      (entry) => entry.id !== entryId
    );
    const filteredAllHtmlEntries = allHtmlEntries.filter(
      (entry) => entry.id !== entryId
    );
    setAllEntries(filteredAllEntries);
    setAllHtmlEntries(filteredAllHtmlEntries);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={4}>
        <SelectTypeInput
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      </Grid>
      {selectedType === "printedBook" && (
        <Grid item xs={10}>
          <PrintedBookInputs entry={entry} setEntry={setEntry} />
        </Grid>
      )}
      {selectedType === "eBook" && (
        <Grid item xs={10}>
          <EBookInputs entry={entry} setEntry={setEntry} />
        </Grid>
      )}
      {selectedType === "printedChapter" && (
        <Grid item xs={10}>
          <ChapterInputs entry={entry} setEntry={setEntry} />
        </Grid>
      )}
      {selectedType === "printedMagazine" && (
        <Grid item xs={10}>
          <PrintedArticlesInputs entry={entry} setEntry={setEntry} />
        </Grid>
      )}
      {selectedType === "eMagazine" && (
        <Grid item xs={10}>
          <EArticlesInputs entry={entry} setEntry={setEntry} />
        </Grid>
      )}
      <Grid item xs={1}>
        <IconButton
          onClick={() => setEntry({ ...entryInitialState, type: selectedType })}
        >
          <ClearIcon />
        </IconButton>
      </Grid>
      {selectedType && (
        <Grid item xs={2}>
          <Button variant="outlined" onClick={handleAddEntry}>
            Ajouter le document
          </Button>
        </Grid>
      )}
      <Grid container mt={2} ml={2} flexDirection="column">
        {allHtmlEntries &&
          allHtmlEntries.sort().map((html) => (
            <Grid item key={html.id}>
              <Grid container spacing={2} alignItems="center">
                <Grid item>
                  <span dangerouslySetInnerHTML={{ __html: html.html }}></span>
                </Grid>
                <Grid item>
                  <IconButton onClick={() => handleDeleteEntry(html.id)}>
                    <ClearIcon />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton onClick={() => handleUpdate(html.id)}>
                    <EditIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
}

export default BibliographyPage;
