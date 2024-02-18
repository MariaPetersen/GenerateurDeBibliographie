import { IMagazine } from "./IMagazine";

export interface IEntry extends IMagazine {
  type: string;
  htmlEntry: string;
  id: string;
}
