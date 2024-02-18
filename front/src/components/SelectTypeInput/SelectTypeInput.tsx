import React from "react";
import { Select, FormControl, MenuItem, InputLabel } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

type SelectTypeInputProp = {
  selectedType: string;
  setSelectedType: React.Dispatch<React.SetStateAction<string>>;
};

function SelectTypeInput({
  selectedType,
  setSelectedType,
}: SelectTypeInputProp) {
  const handleChange = (event: SelectChangeEvent) => {
    setSelectedType(event.target.value as string);
  };

  const types = [
    {
      id: 1,
      type: "printedBook",
      label: "Ouvrage imprimé",
    },
    {
      id: 2,
      type: "eBook",
      label: "Ouvrage électronique",
    },
    {
      id: 3,
      type: "printedChapter",
      label: "Chapitre d'ouvrage",
    },
    {
      id: 4,
      type: "printedMagazine",
      label: "Article de periodique imprimé",
    },
    {
      id: 5,
      type: "eMagazine",
      label: "Article de periodique électronique",
    },
  ];

  return (
    <FormControl fullWidth>
      <InputLabel id="typeInput">Type de document</InputLabel>
      <Select
        id="typeInput"
        value={selectedType}
        label="Type de document"
        onChange={handleChange}
      >
        {types.map((type) => (
          <MenuItem value={type.type} key={type.id}>
            {type.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default SelectTypeInput;
