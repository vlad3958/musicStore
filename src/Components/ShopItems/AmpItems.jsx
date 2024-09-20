import React from 'react'
import './ShopItems.css'
import amplifiers from '../Assets/data_amps'
import Item from '../Item/Item'
const AmpItems = () => {
  return (
    <div className='shopItems'>

        <div className="shopItems-item">
            {amplifiers.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price}></Item>
            })}
            </div>
    </div>
  )
}

export default AmpItems