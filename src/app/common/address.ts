//It will act like an interface.
export class Address {
  street: string;
  houseNum: string; //Sometimes there are letters, not only numbers
  complement?: string;
  postalCode?: string;
  city: string;
  state: string;
  country: string;
}