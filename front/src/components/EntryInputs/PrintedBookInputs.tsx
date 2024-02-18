import { Dispatch, SetStateAction } from "react";
import { IEntry } from "../../interfaces/IEntry";
import { Grid, TextField } from "@mui/material";

type PrintedBookInputsProps = {
  entry: IEntry;
  setEntry: Dispatch<SetStateAction<IEntry>>;
};

function PrintedBookInputs({ entry, setEntry }: PrintedBookInputsProps) {
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
          label="Titre"
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
          label="Lieu d'édition"
          type="text"
          value={entry.placeOfEdition}
          onChange={(e) => {
            setEntry({ ...entry, placeOfEdition: e.target.value });
          }}
        />
      </Grid>
      <Grid item>
        <TextField
          size="small"
          label="Éditeur"
          type="text"
          value={entry.editor}
          onChange={(e) => {
            setEntry({ ...entry, editor: e.target.value });
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
          label="Collection"
          type="text"
          value={entry.collection}
          onChange={(e) => {
            setEntry({ ...entry, collection: e.target.value });
          }}
        />
      </Grid>
    </Grid>
  );
}

export default PrintedBookInputs;
