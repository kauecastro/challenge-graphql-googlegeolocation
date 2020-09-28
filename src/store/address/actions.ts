import { action } from "typesafe-actions";
import { AddressTypes, Address } from "./types";

export const setLongitudeLatitude = (data: Address[]) =>
  action(AddressTypes.SET_LONG_LAT, data);
export const setSearch = (data: string) =>
  action(AddressTypes.SET_SEARCH_VALUE, data);
