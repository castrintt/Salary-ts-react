import { IListText } from "./listCategory";
export interface ICategory {
  date: string;
  category: string;
  title: string;
  value: string;
  listOfValues: IListText[];
}
