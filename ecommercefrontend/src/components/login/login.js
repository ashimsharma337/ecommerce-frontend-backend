import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import "./login.css";

const LoginComponent = ({ show, handleClose }) => {
  const handleLogin = (event) => {
    event.preventDefault();
    // TO DO :::: Handle login logic here (e.g., API call)
    console.log("Login form submitted");
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>WELCOME</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Please enter your Email" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Please enter your Password" required />
          </Form.Group>
          <Button variant="secondary" type="submit" className="login-button">
            LOG IN
          </Button>
          <Form.Label className="signup-lable">
            Don't have an account? <a href="/signup" className="signup-link">Sign up</a>
          </Form.Label>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginComponent;