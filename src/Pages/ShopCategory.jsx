import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Item from '../Components/Item/Item';
import NavbarShopItems from '../Components/NavbarShopItems/NavbarShopItems';
import './css/ShopCategory.css'

const ShopCategory = (props) => {
    const {all_products} = useContext(ShopContext);
  return (
    <div>
        <NavbarShopItems></NavbarShopItems>
    <div className='shopItems'>

        <div className="shopItems-item">
            {all_products.map((item,i)=>{
                if (props.category===item.category) {
                    return <Item   key={i} id={item.id} name={item.name} image={item.image} price={item.price}/>
              
                }
                else{
                    return null;
                }
            })}
        </div>
    </div>
    </div>
  )
}

export default ShopCategory