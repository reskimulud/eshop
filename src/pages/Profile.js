import React from 'react';
import { Container } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

function Profile({ isLogedIn }) {
  if (!isLogedIn) {
    return <Navigate to='/auth/login' replace />
  }

  return (
    <Container>
      <h1>Profile</h1>
    </Container>
  );
}

export default Profile;
