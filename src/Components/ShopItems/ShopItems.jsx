import React from 'react'
import './ShopItems.css'
import data_product from '../Assets/data'
import Item from '../Item/Item'
const ShopItems = () => {
  return (
    <div className='shopItems'>

        <div className="shopItems-item">
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}></Item>
            })}
            </div>
    </div>
  )
}

export default ShopItems