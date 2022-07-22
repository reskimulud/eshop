import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { Button, Card, Container, Form } from 'react-bootstrap';
import axios from 'axios';
import { getBaseUrl } from '../utils';

function Auth({ login, register, isLogedIn, setIsLogedIn }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onNameChangeHandler = (e) => setName(e.currentTarget.value);
  const onEmailChangeHandler = (e) => setEmail(e.currentTarget.value);
  const onPasswordChangeHandler = (e) => setPassword(e.currentTarget.value);

  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (login) {
      axios.post(`${getBaseUrl()}/login`, { email, password })
        .then(res => {
          localStorage.setItem('eshop_jwt', res.data.data.token);
          setIsLogedIn(true);
        })
        .catch(err => alert(err.response.data.message))
    }

    if (register) {
      axios.post(`${getBaseUrl()}/register`, { name, email, password })
        .then(res => {
          alert(res.data.message + '. Silahkan Login');
          navigate('/auth/login');
        })
        .catch(err => alert(err.response.data.message))
    }
  };

  useEffect(() => {
    return () => {
      setName('');
      setEmail('');
      setPassword('');
    };
  }, [login, register]);

  if (isLogedIn) {
    return <Navigate to='/' replace />
  }

  return (
    <Container>
      <Card className='p-3 p-md-5 m-3 m-md-5'>
        <Form onSubmit={onSubmitHandler}>
          {login ?
            <>
              <Card.Title>Login</Card.Title>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  value={email}
                  onChange={onEmailChangeHandler}
                  type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password}
                  onChange={onPasswordChangeHandler}
                  type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Login
              </Button>
            </>
            : register ?
              <>
                <Card.Title>Register</Card.Title>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    value={name}
                    onChange={onNameChangeHandler}
                    type="text" placeholder="Enter name" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    value={email}
                    onChange={onEmailChangeHandler}
                    type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    value={password}
                    onChange={onPasswordChangeHandler}
                    type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Register
                </Button>
              </> : null}
        </Form>
      </Card>
    </Container>
  );
}

export default Auth;
