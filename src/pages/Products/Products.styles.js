import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  width: 100%;
  height: 100%;
`;

export const Message = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: bold;
  font-size: 22px;
  font-family: ${(props) => props.theme.font};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  width: 100%;
  height: 100%;
`;
