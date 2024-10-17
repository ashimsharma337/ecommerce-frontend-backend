import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import "./login.css";
import { useState } from 'react';
import axios from 'axios';

const LoginComponent = ({ show, handleClose, onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/users/login", {
        username, 
        password
      });
      console.log(response.data);
      localStorage.setItem("token", response.data);
      onLoginSuccess(); // Notify MainNav of login success
    } catch (error) {
      console.error("Error login in: ", error);
    }
    handleClose();
    
  };

  return (
    <Modal show={show} onHide={handleClose} centered className="custom-modal">
      <Modal.Header closeButton>
        <Modal.Title>WELCOME</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleLogin}>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="username" 
              placeholder="Please enter your Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
              required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Please enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required />
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