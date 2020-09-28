import React from "react";
import { Container, Content } from "./Products.styles";
import LocationSearchInput from "@Containers/LocationSearchInput/index";
import ListOfProducts from "@Containers/ListOfProducts";

const Products = () => {

  return (
    <Container>
      <LocationSearchInput />
      <Content>
        <ListOfProducts />
      </Content>
    </Container>
  );
};

export default Products;
