import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';
import ShopPageItem from '../components/ShopPageItem';

export default function ShopPage() {
  const [productData, setProductData] = useState(null);

  // fetch product data here
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((json) => {
        setProductData(json);
        console.log(json);
      });
  }, []);

  return (
    <div>
      <Navbar />
      {productData != null ? (
        productData.map((product) => {
          return <ShopPageItem key={product.id} product={product} />;
        })
      ) : (
        <Loading />
      )}{' '}
      <Outlet />
    </div>
  );
}
