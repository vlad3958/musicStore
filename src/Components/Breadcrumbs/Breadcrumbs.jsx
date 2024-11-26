import React from 'react'
import './Breadcrumbs.css'
import { Link } from 'react-router-dom';

const Breadcrumbs = (props) => {
    const {product}=props;
  return (
    <div className='breadcrumbs'>
<Link style={{textDecoration:'none'}} to='/'>Home</Link>{'>'}<Link style={{textDecoration:'none'}} to='/shop/guitars'>Shop</Link> {'>'}     {product.category} {'>'}    {product.name}
    </div>
  )
}

export default Breadcrumbs