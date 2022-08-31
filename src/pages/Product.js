import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getBaseUrl } from '../utils';

function Product() {
  const { id: productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`${getBaseUrl()}/products/${productId}`)
      .then(res => setProduct(res.data.data))
  }, [productId]);

  console.log(product);

  return (
    <div>Product: {productId}</div>
  );
}

export default Product;
