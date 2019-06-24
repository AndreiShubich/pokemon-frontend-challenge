/* eslint-disable import/prefer-default-export */
import { INamedAPIResource } from './commonTypes';

// @TODO: Not full interface
export interface IType {
  id: number;
  name: string;
  pokemon: {
    pokemon: INamedAPIResource;
    slot: number;
  }[];
}
