import React from "react";
import { Container, Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
// import Logo from '../assets/logo.png';

export default function MyNavbar() {
  return (
    <>
    <Container>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">
            <img src="images/logo.png" height="60" width="60" alt="Shyahi Ki Awaj" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "200px"}}
          >
            <Nav.Link href="#action1">Inida</Nav.Link>
            <Nav.Link href="#action2">World</Nav.Link>
            <Nav.Link href="#action2">Business</Nav.Link>
            <Nav.Link href="#action2">Sports</Nav.Link>
            <Nav.Link href="#action2">Cricket</Nav.Link>
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      </Container>
    </>
  );
}
