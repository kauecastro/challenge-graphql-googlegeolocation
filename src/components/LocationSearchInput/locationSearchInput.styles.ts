import styled from "styled-components";

export interface DropdownAddressOptionProps {
  active?: boolean;
}

export const SearchInput = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 8px;
  font-weight: lighter;
  box-sizing: border-box;
  color: rgb(51, 51, 51);
  background-color: rgb(255, 255, 255);
  font-size: 16px;
  line-height: 20px;
  font-family: ${(props) => props.theme.font};
  border: 1px solid rgb(204, 204, 204);
  margin: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 28px;
  padding-right: 28px;
  outline: none;
`;

export const LocationDropdownContainer = styled.div`
  width: 100%;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  margin-top: 8px;
  overflow: auto;
`;

export const SearchContainer = styled.div`
  width: 60%;
`;

export const DropdownAddressOption = styled.div<DropdownAddressOptionProps>`
  height: 40px;
  width: 100%;
  margin: 4px 0px;
  padding-left: 20px;
  border-radius: 8px;
  box-sizing: border-box;
  background-color: ${(props) => props.active ? '#fafafa' : '#ffffff'};
  border: 1px solid rgb(204, 204, 204);
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const DropdownAddressTextOption = styled.span`
  font-size: 16px;
  font-family: ${(props) => props.theme.font};
  font-weight: lighter;
  color: rgb(51, 51, 51);
`;
