import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { MdHighlightOff } from 'react-icons/md';
import getBaseUrl from '../utils';

function Cart({ isLogedIn }) {
  const [carts, setCarts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  const [hasFetched, setHasFetched] = useState(false);

  const token = localStorage.getItem('eshop_jwt');

  useEffect(() => {
    if (!hasFetched) {
      axios.get('http://localhost:5000/carts', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      }).then(res => {
        console.log('fetched');
        setCarts(res.data.data.cart);
        setSubTotal(res.data.data.subTotal);
      })
      setHasFetched(true);
    }
  }, [token, hasFetched]);

  if (!isLogedIn) {
    return <Navigate to='/auth/login' replace />
  }

  const price = (item) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item);
  const imageStyle = { width: '100%', objectFit: 'contain', maxHeight: 80 };

  const deleteCartItem = (itemId) => {
    axios.delete(`${getBaseUrl()}/carts/${itemId}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }).then(res => alert(res.data.message))
      .catch(err => err.response.data.message)
      .finally(() => setHasFetched(false))
  };

  return (
    <Container>
      <h1>Keranjang</h1>
      <h5>Subtotal : {price(subTotal)}</h5>
      {carts.map((cart) => (
        <Card key={cart.id} className='mt-0 p-3 m-3 p-md-4'>
          <Row>
            <Col className='col-1'>
              <Card.Img style={imageStyle} src={`http://localhost:5000/products/image/${cart.image}`} />
            </Col>
            <Col className='col-10'>
              <Card.Title>{cart.title}</Card.Title>
              <Card.Subtitle>{price(cart.price)}</Card.Subtitle>
              <Card.Text>qty : {cart.quantity}</Card.Text>
            </Col>
            <Col className='col-1 d-flex justify-content-center align-items-center'>
              <Button onClick={() => deleteCartItem(cart.id)}>
                <MdHighlightOff />
              </Button>
            </Col>
          </Row>
        </Card>
      ))}
    </Container>
  );
}

export default Cart;
