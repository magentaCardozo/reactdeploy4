import React, { useEffect } from 'react'
import Section1 from '../components/section-1-ProductPage/Section1'
import { useLocation } from 'react-router-dom';
const ProductsPage = () => {

    const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  return (
    <div>
      <Section1></Section1>
    </div>
  )
}

export default ProductsPage
