import * as React from "react";
import { LogoImage } from "./logo.styles";
import image from "@Common/medias/whitelogo.png";

const Logo = () => (
  <LogoImage
    onClick={() => {
      window.location.href = "/";
    }}
    src={image}
  />
);

export default Logo;
