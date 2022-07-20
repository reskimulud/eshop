import React from 'react';
import { Container } from 'react-bootstrap';
import CardList from '../components/CardList';

function Home({isLogedIn}) {
  return (
    <Container>
      <h1>Home</h1>
      <CardList isLogedIn={isLogedIn} />
    </Container>
  );
}

export default Home;
