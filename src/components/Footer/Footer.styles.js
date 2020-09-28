import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  height: 75px;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Copyright = styled.p`
  color: #ffffff;
  font-weight: bold;
  font-size: 12px;
  font-family: ${(props) => props.theme.font};
`;
