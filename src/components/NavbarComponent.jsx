import React, { Component } from 'react'
import { Container, Form, Navbar, FormControl, Button } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav'

 class NavbarComponent extends Component {
    constructor(props) {
            super(props);    
            this.state = {      
                theme: "dark",    
            };  
        }
  render() {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Film Q</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="#features">Favorite</Nav.Link>
            <Nav.Link href="#pricing">Terbaru</Nav.Link>
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
        </Navbar.Collapse>
        </Container>
        </Navbar>
            </>   
      )
  }
}
export {NavbarComponent}
