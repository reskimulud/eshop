import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { getBaseUrl } from '../utils';

function Profile({ isLogedIn, setIsLogedIn }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const token = localStorage.getItem('eshop_jwt');

  useEffect(() => {
    axios.get(`${getBaseUrl()}/user`, {
      headers: {
        'Authorization': `Bearer ${token}`
      },
    }).then(res => {
      const { name, email } = res.data.data;
      setName(name);
      setEmail(email);
    }).catch(err => alert(err.response.data.message))
  }, [token])

  if (!isLogedIn) {
    return <Navigate to='/auth/login' replace />
  }


  const logout = () => {
    localStorage.clear();
    setIsLogedIn(false);
    navigate('/auth/login');
  };

  return (
    <Container>
      <h1>Profile</h1>
      <Card className='p-3'>
        <Card.Title className='my-2'>{name}</Card.Title>
        <Card.Subtitle className='my-2'>{email}</Card.Subtitle>
        <Button className='btn btn-danger my-2' onClick={logout}>Logout</Button>
      </Card>
    </Container>
  );
}

export default Profile;
