import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import Links from './Links';
import { MdShoppingCart } from 'react-icons/md';

function CardProduct({ item }) {
  const cardStyle = { width: 250, minHeight: 200, margin: 'auto', padding: 10 };
  const imageStyle = { width: '100%', objectFit: 'contain', padding: 5, maxHeight: 200 };

  const price = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price);

  return (
    <Card style={cardStyle}>
      <Card.Img style={imageStyle} variant="top" src={item.image} />
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
          <Links to='#' btnPrimary>
            <MdShoppingCart />
          </Links>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardProduct;