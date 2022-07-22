import axios from 'axios';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { MdHighlightOff } from 'react-icons/md';
import { getBaseUrl, price } from '../utils';

function CartItem({ item, setHasFetched }) {

  const token = localStorage.getItem('eshop_jwt');

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
    <Card key={item.id} className='mt-0 p-3 m-3 p-md-4'>
      <Row>
        <Col className='col-1'>
          <Card.Img style={imageStyle} src={`${getBaseUrl()}/products/image/${item.image}`} />
        </Col>
        <Col className='col-10'>
          <Card.Title>{item.title}</Card.Title>
          <Card.Subtitle>{price(item.price)}</Card.Subtitle>
          <Card.Text>qty : {item.quantity}</Card.Text>
        </Col>
        <Col className='col-1 d-flex justify-content-center align-items-center'>
          <Button onClick={() => deleteCartItem(item.id)}>
            <MdHighlightOff />
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default CartItem;