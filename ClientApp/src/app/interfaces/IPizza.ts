import { ITopping } from "./ITopping";

export interface IPizza {
  name: string;
  toppings: Array<ITopping>;
  id?: number;
}
