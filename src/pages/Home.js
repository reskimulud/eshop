import React from 'react';
import { Container } from 'react-bootstrap';
import CardList from '../components/CardList';
import CardProduct from '../components/CardProduct';

function Home() {
  return (
    <Container>
      <h1>Home</h1>
      <CardList />
    </Container>
  );
}

export default Home;
