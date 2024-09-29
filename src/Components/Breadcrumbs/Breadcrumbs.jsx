import React from 'react'
import './Breadcrumbs.css'
const Breadcrumbs = (props) => {
    const {product}=props;
  return (
    <div className='breadcrumbs'>
Home {'>'}     Shop {'>'}     {product.category} {'>'}    {product.name}
    </div>
  )
}

export default Breadcrumbs