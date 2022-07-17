import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import CardProduct from './CardProduct';

function CardList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products').then(res => setProducts(res.data.data.products));
  }, []);

  return (
    <div>
      <Row xs={1} xl={4} sm={2} lg={3} md={3}>
        {products.map((product) => (
          <Col key={product.id} className='mb-4'>
            <CardProduct item={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardList;
