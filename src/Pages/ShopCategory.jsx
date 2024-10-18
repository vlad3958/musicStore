import React, { useContext, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import NavbarShopItems from '../Components/NavbarShopItems/NavbarShopItems';
import './css/ShopCategory.css';

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  const [sortType, setSortType] = useState(''); // Состояние для сортировки
  const [searchQuery, setSearchQuery] = useState(''); // Состояние для поискового запроса

  // Функция сортировки товаров
  const sortProducts = (products) => {
    const sortedProducts = [...products];

    if (sortType === 'price_asc') {
      return sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === 'price_desc') {
      return sortedProducts.sort((a, b) => b.price - a.price);
    } else if (sortType === 'alphabetical') {
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      return sortedProducts;
    }
  };

  // Функция фильтрации по поисковому запросу
  const filterProductsBySearch = (products) => {
    return products.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  };

  // Фильтрация по категории
  const filteredProducts = all_products.filter(item => item.category === props.category);

  // Применение сортировки и фильтрации
  const sortedProducts = sortProducts(filteredProducts);
  const visibleProducts = filterProductsBySearch(sortedProducts);

  return (
    <div>
      <NavbarShopItems />
      <div className="controls">
        <div className="search-bar">
          <label>Find:</label>
          <input
            type="text"
            placeholder="Type product name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} // Обновляем поисковый запрос
          />
        </div>
        <div className="sort-options">
          <label>Sort:</label>
          <select onChange={(e) => setSortType(e.target.value)} value={sortType}>
            <option value="">Choose sorting</option>
            <option value="price_asc">Price (ascending)</option>
            <option value="price_desc">Price (descending)</option>
            <option value="alphabetical">alphabetically</option>
          </select>
        </div>
      </div>
      <div className='shopItems'>
        <div className="shopItems-item">
          {visibleProducts.length > 0 ? (
            visibleProducts.map((item, i) => (
              <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
            ))
          ) : (
            <p>Товары не найдены</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopCategory;
