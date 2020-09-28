import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 195px;
  width: 180px;
  height: 270px;
  padding-top: 15px;
  padding: 15px;
  cursor: pointer;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 165px;
  object-fit: contain;
`;

export const Title = styled.p`
  font-size: 13px;
  color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.font};
  line-height: 1.15;
  text-align: left;
  margin: 10px 0px;
`;

export const Price = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.font};
  font-weight: bold;
  line-height: 1.19;
  text-align: left;
  margin: 0;
`;

export const OptionsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 25px;
  margin-bottom: 8px;
  border: 1px solid;
`;

export const AddButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  flex-grow: 1;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const RemoveButton = styled.button`
  background-color: white;
  flex-grow: 1;
  border: none;
  outline: none;
  cursor: pointer;
`;
