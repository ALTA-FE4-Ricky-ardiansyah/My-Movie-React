import React, { Component, useState, useContext } from "react";
import { Container, Form, Navbar, FormControl, Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ThemeContext } from "../utils/context";

const NavbarComponent = () => {
  const [theme] = useContext(ThemeContext);
  const changeTheme = () => {
    if (theme === "l") {
      localStorage.setItem("theme", "dark");
    } else if (theme === "d") {
      localStorage.setItem("theme", "light");
    }
    window.location.reload();
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg={theme === "d" ? "dark" : "light"}
        variant={theme === "d" ? "dark" : "light"}
      >
        <Container>
          <Navbar.Brand href="/">Film Q</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/favorite">Favorite</Nav.Link>
              <Nav.Link href="/HeroSlide">Terbaru</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button
              onClick={changeTheme}
              style={{ marginLeft: "1rem" }}
              variant={`outline-${theme === "d" ? "light" : "dark"}`}
            >
              {theme === "d" ? "Light Mode" : "Dark Mode"}
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;

// export { NavbarComponent };
