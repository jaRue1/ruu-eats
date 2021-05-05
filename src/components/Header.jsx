import React from 'react'
import {Navbar, Button, Form, Nav, FormControl } from 'react-bootstrap'

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Ruu Eats Lists </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
  )
  
}
export default Header