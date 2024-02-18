import { IPrintedBook } from "./IPrintedBook";

export interface IEBook extends IPrintedBook {
  directorFirstName: string;
  directorFamilyName: string;
  edition: string;
  pageNumber: string;
  consultedOn: string;
  url: string;
}
