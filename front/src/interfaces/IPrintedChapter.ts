import { IEBook } from "./IEBook";

export interface IPrintedChapter extends IEBook {
  chapterNumber: string;
  chapterTitle: string;
  pagination: string;
}
