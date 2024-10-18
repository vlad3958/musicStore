import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import NavbarShopItems from '../Components/NavbarShopItems/NavbarShopItems';
import './css/ShopCategory.css';

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  const [sortType, setSortType] = useState(''); // Состояние для выбранного типа сортировки

  const sortProducts = (products) => {
    // Копируем массив перед сортировкой, чтобы не мутировать исходный массив
    const sortedProducts = [...products];

    if (sortType === 'price_asc') {
      // Сортировка по возрастанию цены
      return sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === 'price_desc') {
      // Сортировка по убыванию цены
      return sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortType === 'alphabetical') {
      // Сортировка по алфавиту
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      // Если сортировка не выбрана, возвращаем исходный массив
      return sortedProducts;
    }
  };

  const filteredProducts = all_products.filter(item => item.category === props.category);
  const sortedProducts = sortProducts(filteredProducts);

  return (
    <div>
      <NavbarShopItems />
      <div className="sort-options">
        <label>Sorting: </label>
        <select onChange={(e) => setSortType(e.target.value)} value={sortType}>
          <option value="">Choose sorting</option>
          <option value="price_asc">Price (ascending)</option>
          <option value="price_desc">Price (descending)</option>
          <option value="alphabetical">alphabetically</option>
        </select>
      </div>
      <div className='shopItems'>
        <div className="shopItems-item">
          {sortedProducts.map((item, i) => (
            <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
