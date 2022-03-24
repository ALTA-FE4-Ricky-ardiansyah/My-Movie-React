import React from "react";
import NavbarComponent from "../NavbarComponent";
import { Container } from "react-bootstrap";

export function Layouts(props) {
  return (
    <>
      <NavbarComponent />
      <Container>{props.children}</Container>
    </>
  );
}
