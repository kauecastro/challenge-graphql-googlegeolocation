import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.secondary};
  width: 100%;
  height: 75px;
  position: fixed;
  top: 0px;
  left: 0px;
`;

export const Content = styled.div`
  max-width: 1200px;
  width: 1200px;
  display: flex;
  align-items: center;
`;
