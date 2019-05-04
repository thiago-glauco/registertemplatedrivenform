import { Address } from './address';
export class User {
  name: string;
  email: string;
  gender?: string; 
  password: string;
  address: Address;
}