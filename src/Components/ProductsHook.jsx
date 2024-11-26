import React, { useEffect, useState } from 'react';

import guitars_1 from '../Components/Assets/guitars_1.png';
import guitars_2 from '../Components/Assets/guitars_2.png';
import guitars_3 from '../Components/Assets/guitars_3.png';
import guitars_4 from '../Components/Assets/guitars_4.png';

import amp_1 from '../Components/Assets/amp_1.png';
import amp_2 from '../Components/Assets/amp_2.png';
import amp_3 from '../Components/Assets/amp_3.png';
import amp_4 from '../Components/Assets/amp_4.jpg';

import audio_interfaces1 from '../Components/Assets/audio_interfaces1.jpg';
import audio_interfaces2 from '../Components/Assets/audio_interfaces2.jpg';
import audio_interfaces3 from '../Components/Assets/audio_interfaces3.jpg';
import audio_interfaces4 from '../Components/Assets/audio_interfaces4.jpg';

import synthesizers_1 from '../Components/Assets/synthesizers_1.jpg';
import synthesizers_2 from '../Components/Assets/synthesizers_2.jpg';
import synthesizers_3 from '../Components/Assets/synthesizers_3.jpg';
import synthesizers_4 from '../Components/Assets/synthesizers_4.jpg';

import accessories1 from '../Components/Assets/accessories1.jpg';
import accessories2 from '../Components/Assets/accessories2.jpg';
import accessories3 from '../Components/Assets/accessories3.jpg';
import accessories4 from '../Components/Assets/accessories4.jpg';
import accessories5 from '../Components/Assets/accessories5.jpg';
import accessories6 from '../Components/Assets/accessories6.jpg';
import accessories7 from '../Components/Assets/accessories7.jpg';


// Создаем хук для получения продуктов
export const ProductsHook = () => {
    const [allProducts, setAllProducts] = useState([]);
    const imageMapping = {
        'guitars_1': guitars_1,
        'guitars_2': guitars_2,
        'guitars_3': guitars_3,
        'guitars_4': guitars_4,
        'amp_1': amp_1,
        'amp_2': amp_2,
        'amp_3': amp_3,
        'amp_4': amp_4,
        'audio_interfaces1': audio_interfaces1,
        'audio_interfaces2': audio_interfaces2,
        'audio_interfaces3': audio_interfaces3,
        'audio_interfaces4': audio_interfaces4,
        'synthesizers_1': synthesizers_1,
        'synthesizers_2': synthesizers_2,
        'synthesizers_3': synthesizers_3,
        'synthesizers_4': synthesizers_4,
        'accessories1': accessories1,
        'accessories2': accessories2,
        'accessories3': accessories3,
        'accessories4': accessories4,
        'accessories5': accessories5,
        'accessories6': accessories6,
        'accessories7': accessories7
      };
      
    
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://musicshop-api-vlad-ebfc895e4cd4.herokuapp.com/api/Products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                // Форматируем данные
                const formattedProducts = data.map((product) => ({
                    id: product.id,
                    name: product.name,
                    image: product.image, // Убедитесь, что у вас есть соответствующие изображения
                    price: product.price,
                    category: product.category,
                }));
                const productsWithImages = formattedProducts.map(product => ({
                    ...product,
                    image: imageMapping[product.image], // Сопоставление imageName с импортированным изображением
                  }));
                  


                console.log(productsWithImages)
                setAllProducts(productsWithImages);
            } catch (error) {
                console.error('Ошибка при получении данных:', error);
            }
        };

        fetchProducts();
    }, []);

    return allProducts; // Возвращаем массив продуктов
};
