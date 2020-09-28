import * as React from "react";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import { Container, Content } from "./MainLayout.styles";

export interface Props {
  children: React.ReactNode;
}

const MainLayout = (props: Props) => {
  return (
    <div>
      <Navbar />
      <Container>
        <Content>{props.children}</Content>
      </Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
