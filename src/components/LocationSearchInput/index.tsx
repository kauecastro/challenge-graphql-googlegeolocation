import React from "react";
import { withRouter } from "react-router-dom";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import {
  SearchInput,
  LocationDropdownContainer,
  SearchContainer,
  DropdownAddressOption,
  DropdownAddressTextOption,
} from "./locationSearchInput.styles";
import { Address } from "@Store/address/types";

export interface StateProps {
  address: Address;
}

export interface DispatchProps {
  setLongitudeLatitude(address: Address): void;
  setSearch(value: string): void;
}

export interface OwnProps {
  history: any;
}

type Props = StateProps & DispatchProps & OwnProps;

class LocationSearchInput extends React.Component<Props, any> {
  constructor(props: any) {
    super(props);
    this.state = { address: "" };
  }

  handleChange = (address: any) => {
    this.props.setSearch(address);
  };

  handleSelect = (address: any) => {
    const { setSearch, setLongitudeLatitude } = this.props;

    setSearch(address);
    geocodeByAddress(address)
      .then((results: any) => getLatLng(results[0]))
      .then((latLng: any) => {
        const { lat, lng } = latLng;

        const address: Address = {
          latitude: lat,
          longitude: lng,
          searchValue: "",
        };

        setLongitudeLatitude(address);
        if (window.location.pathname === "/") {
          this.props.history.push("/produtos");
        }
      })
      .catch((error: any) => console.error("Error", error));
  };

  render() {
    return (
      <PlacesAutocomplete
        value={this.props.address.searchValue}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({
          getInputProps,
          suggestions,
          getSuggestionItemProps,
          loading,
        }: any) => (
          <SearchContainer>
            <SearchInput
              {...getInputProps({
                placeholder: "Insira um endereço",
                className: "location-search-input",
              })}
            />
            <LocationDropdownContainer>
              {loading && (
                <DropdownAddressOption>
                  <DropdownAddressTextOption>
                    Loading...
                  </DropdownAddressTextOption>
                </DropdownAddressOption>
              )}

              {suggestions.map((suggestion: any) => {
                return (
                  <DropdownAddressOption
                    role="option"
                    active={suggestion.active}
                    {...getSuggestionItemProps(suggestion)}
                  >
                    <DropdownAddressTextOption>
                      {suggestion.description}
                    </DropdownAddressTextOption>
                  </DropdownAddressOption>
                );
              })}
            </LocationDropdownContainer>
          </SearchContainer>
        )}
      </PlacesAutocomplete>
    );
  }
}

export default withRouter(LocationSearchInput);
