import { ListCard } from "./list-card";

export interface List {
  id: string;
  name: string;
  cards: ListCard[];
}
