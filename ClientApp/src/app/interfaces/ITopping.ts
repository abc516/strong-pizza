export interface ITopping {
  name?: string;
  flavor?: Flavor;
  id?: number;
}

export enum Flavor {
  Sweet = "Sweet",
  Spicy = "Spicy",
  Bitter = "Bitter",
  Salty = "Salty"
}
