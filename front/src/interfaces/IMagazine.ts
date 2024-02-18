import { IPrintedChapter } from "./IPrintedChapter";

export interface IMagazine extends IPrintedChapter {
  magazineTitle: string;
  magazineVolume: string;
  magazineNumber: string;
}
