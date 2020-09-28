import * as React from "react";
import { Container, Content } from "./Navbar.styles";
import Logo from "@Components/Logo/index";

const Navbar = () => (
  <Container>
    <Content>
      <Logo />
    </Content>
  </Container>
);

export default Navbar;
