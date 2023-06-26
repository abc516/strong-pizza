import { ITopping } from "./ITopping";

export interface IPizza {
  Name: string;
  Toppings: Array<ITopping>;
  Id?: number;
}
