import React from 'react';
import { Container } from 'react-bootstrap';

function Auth({ login, register }) {
  if (login) {
    return (
      <Container>
        <h1>Login</h1>
      </Container>
    );
  }

  if (register) {
    return (
      <Container>
        <h1>Register</h1>
      </Container>
    );
  }
}

export default Auth;
