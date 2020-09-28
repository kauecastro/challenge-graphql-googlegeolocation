/* eslint-disable @typescript-eslint/no-use-before-define */
import React from "react";
import { formatPrice } from '../../common/utils/formatter';
import { Product } from "@Services/graphql/types";
import {
  Container,
  MainImage,
  Title,
  Price,
  OptionsContainer,
  AddButton,
  RemoveButton,
} from "./ProductCard.styles";

export interface Props {
  product: Product;
}

const ProductCard = (props: Props) => {
  const price = props.product.productVariants[0].price;

  return (
    <Container>
      <OptionsContainer>
        <AddButton>Adicionar</AddButton>
        <RemoveButton>Remover</RemoveButton>
      </OptionsContainer>
      <MainImage className="productCard__card-image" src={props.product.images[0].url} />
      <Title className="productCard__card-title">{props.product.title}</Title>
      <Price className="productCard__card-price">
        {price ? formatPrice(price) : "Indisponível"}
      </Price>
    </Container>
  );
};

export default ProductCard;
