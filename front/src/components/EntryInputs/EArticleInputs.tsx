import { Dispatch, SetStateAction } from "react";
import { IEntry } from "../../interfaces/IEntry";
import { Grid, TextField } from "@mui/material";

type Props = {
  entry: IEntry;
  setEntry: Dispatch<SetStateAction<IEntry>>;
};

function EArticlesInputs({ entry, setEntry }: Props) {
  return (
    <Grid container flexDirection="row" spacing={1} alignItems="center">
      <Grid item>
        <TextField
          size="small"
          label="Nom de l'auteur"
          type="text"
          value={entry.authorFamilyName}
          onChange={(e) => {
            setEntry({ ...entry, authorFamilyName: e.target.value });
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          size="small"
          label="Prénom de l'auteur"
          type="text"
          value={entry.authorFirstName}
          onChange={(e) => {
            setEntry({ ...entry, authorFirstName: e.target.value });
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          size="small"
          label="Titre de l'article"
          type="text"
          value={entry.title}
          onChange={(e) => {
            setEntry({ ...entry, title: e.target.value });
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          size="small"
          label="Titre du périodique"
          type="text"
          value={entry.magazineTitle}
          onChange={(e) => {
            setEntry({ ...entry, magazineTitle: e.target.value });
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          size="small"
          label="Année d'édition"
          type="text"
          value={entry.yearOfEdition}
          onChange={(e) => {
            setEntry({ ...entry, yearOfEdition: e.target.value });
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          size="small"
          label="Volume du périodique"
          type="text"
          value={entry.magazineVolume}
          onChange={(e) => {
            setEntry({ ...entry, magazineVolume: e.target.value });
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          size="small"
          label="Numéro du périodique"
          type="text"
          value={entry.magazineNumber}
          onChange={(e) => {
            setEntry({ ...entry, magazineNumber: e.target.value });
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          size="small"
          label="Pagination"
          type="text"
          value={entry.pagination}
          onChange={(e) => {
            setEntry({ ...entry, pagination: e.target.value });
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          size="small"
          label="Consulté le"
          type="date"
          value={entry.consultedOn}
          onChange={(e) => {
            setEntry({ ...entry, consultedOn: e.target.value });
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          size="small"
          label="URL"
          type="text"
          value={entry.url}
          onChange={(e) => {
            setEntry({ ...entry, url: e.target.value });
          }}
        />
      </Grid>
    </Grid>
  );
}

export default EArticlesInputs;
