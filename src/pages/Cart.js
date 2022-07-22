import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';
import { getBaseUrl, price } from '../utils';
import CartItem from '../components/CartItem';

function Cart({ isLogedIn }) {
  const [carts, setCarts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  const [hasFetched, setHasFetched] = useState(false);

  const token = localStorage.getItem('eshop_jwt');

  useEffect(() => {
    if (!hasFetched) {
      axios.get(`${getBaseUrl()}/carts`, {
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

  return (
    <Container>
      <h1>Keranjang</h1>
      <h5>Subtotal : {price(subTotal)}</h5>
      {carts.map((cart) => (
        <CartItem setHasFetched={setHasFetched} item={cart} />
      ))}
    </Container>
  );
}

export default Cart;
