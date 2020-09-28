import styled from "styled-components";

export interface ProductCardContainerProps {
  qtdToShow: Number;
}

export const Message = styled.p`
  color: ${(props) => props.theme.colors.secondary};
  font-weight: bold;
  font-size: 22px;
  font-family: ${(props) => props.theme.font};
  padding: 0 150px;
  text-align: center;
`;

export const ProductCardContainer = styled.div<ProductCardContainerProps>`
  width: ${(props) => `calc(100% / ${props.qtdToShow})`};
  display: flex;
  justify-content: center;
  margin-top: 5px;
`;

export const ProductListontainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;
