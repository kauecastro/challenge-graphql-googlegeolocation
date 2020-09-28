export enum AddressTypes {
  SET_LONG_LAT = "address/SET_LONG_LAT",
  SET_SEARCH_VALUE = "address/SET_SEARCH_VALUE",
}

export interface Address {
  searchValue: string;
  longitude: string;
  latitude: string;
}

export interface AddressState {
  readonly data: Address;
}
