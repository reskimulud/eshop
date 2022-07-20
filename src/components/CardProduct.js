import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import Links from './Links';
import { MdShoppingCart } from 'react-icons/md';
import axios from 'axios';
import getBaseUrl from '../utils';

function CardProduct({ item, isLogedIn }) {
  const cardStyle = { width: 250, minHeight: 200, margin: 'auto', padding: 10 };
  const imageStyle = { width: '100%', objectFit: 'contain', padding: 5, maxHeight: 200 };

  const token = localStorage.getItem('eshop_jwt');

  const price = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price);

  const addToCart = () => {
    if (!isLogedIn) {
      alert('Login terlebih dahulu');
    } else {
      axios.post(`${getBaseUrl()}/carts`, {productId: item.id, quantity: 1}, {
        headers: {
          'Authorization': `Bearer ${token}`
        },
      }).then(res => alert(res.data.message))
        .catch(err => alert(err.response.data.message))
    }
  };

  return (
    <Card style={cardStyle}>
      <Card.Img style={imageStyle} variant="top" src={`${getBaseUrl()}/products/image${item.image}`} />
      <Card.Body>
        <Card.Title>
          <Links to='/product'>
            {item.title}
          </Links>
        </Card.Title>
        <Card.Text>{item.description}</Card.Text>
        <div className='d-flex justify-content-between align-items-center'>
          <h6>
            <Badge bg='secondary'>{price}</Badge>
          </h6>
          <Button onClick={addToCart} className='btn btn-primary'>
            <MdShoppingCart />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;