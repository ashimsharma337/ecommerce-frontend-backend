import React from 'react';
import { Navbar, Nav, Form, Button, FormControl, InputGroup } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import "./mainNav.css";
import { useState } from 'react';
import LoginComponent from '../../login/login';

function MainNav() {
  const [showLogin, setShowLogin] = useState(false);

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  return (
    <>
     <Navbar className = "navbar-custom" expand="lg">
        <Nav className="me-auto">
          <Nav.Link href="/sale">SALE</Nav.Link>
          <Nav.Link href="/products">PRODUCTS</Nav.Link>
          <Nav.Link href="/help">HELP</Nav.Link>
        </Nav>
    
        <Form style={{ width: "60%" }} >
            <InputGroup>
            <FormControl
              type="search"
              placeholder="Search"
              aria-label="Search"
              id="input-field"
            />
            <Button variant="outline-secondary" id="button-search">
              <FaSearch />
            </Button>
            </InputGroup>
        </Form>
        
        <Nav className="ms-auto">
          <Nav.Link href="/profile">PROFILE</Nav.Link>
          <Nav.Link href="/cart">CART</Nav.Link>
          <Nav.Link onClick={handleShowLogin}>LOGIN</Nav.Link>
          <Nav.Link href="/signup">SIGN UP</Nav.Link>
        </Nav>
     </Navbar>

     {/* Login Modal */}
     <LoginComponent show = {showLogin} handleClose={handleCloseLogin} />
    </>
  )
}

export default MainNav