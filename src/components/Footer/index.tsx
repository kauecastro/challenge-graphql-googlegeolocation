import * as React from "react";
import { Container, Content, Copyright } from "./Footer.styles";

const Footer = () => (
  <Container>
    <Content>
      <Copyright>
        {" "}
        © 2020 Zé Delivery - Todos os direitos reservados.{" "}
      </Copyright>
    </Content>
  </Container>
);

export default Footer;
