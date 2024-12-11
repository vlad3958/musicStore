import React from 'react'
import {Link} from 'react-router-dom';
import './css/HomeStyles.css'
import arrival_1 from '../Components/Assets/arrival_1.jpg';
import arrival_2 from '../Components/Assets/arrival_2.jpg';
import arrival_3 from '../Components/Assets/arrival_3.jpg';
import home_studio from '../Components/Assets/home_studio.jpg'
import girl_guitar from '../Components/Assets/girl_guitar.jpg'
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import amp_1 from '../Components/Assets/amp_1.png'
import amp_2 from '../Components/Assets/amp_2.png'
import amp_3 from '../Components/Assets/amp_3.png'
import amp_4 from '../Components/Assets/amp_4.jpg'
const ProductCarousel = ({ products }) => {
  const settings = {
    dots: true,            // Enable dots for pagination
    infinite: true,        // Infinite loop sliding
    speed: 500,            // Transition speed
    slidesToShow: 3,       // Show 3 items at once
    slidesToScroll: 1,     // Scroll 1 item at a time
    responsive: [          // Responsive breakpoints
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="product-carousel">
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="carousel-item">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Example usage with a sample product array
const products = [
  { id: 1, name: 'Marshall DSL40CR', image: amp_1, price: 749, category: 'amplifiers' },
  { id: 2, name: 'Fender Hot Rod Deluxe IV', image: amp_2, price: 999, category: 'amplifiers' },
  { id: 3, name: 'Vox AC30C2', image: amp_3, price: 1199, category: 'amplifiers' },
  { id: 4, name: 'Orange Rocker 32', image: amp_4, price: 999, category: 'amplifiers' },
 
];

const Home = () => {
 
  return (
    <div>
 <video
        src="https://vinylmp4adswgtjaoawo51.s3.us-east-1.amazonaws.com/vinyl.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ width: "100%", height: "auto" }}
      />

<h1>Music store</h1>

<h2 className='text-arrivals'>New arrivals</h2>
<hr />
<div className="arrivals">
  <div className="arrival-item">
    <img src={arrival_1} alt="" />
    <p className='arrival-item-category'>Audio interfaces</p>
    <p className='arrival-item-name'>SubZero AI1 2-Channel USB Audio Interface</p>
  </div>
  <div className="arrival-item">
    <img src={arrival_2} alt="" />
    <p className='arrival-item-category'>Audio interfaces</p>
    <p className='arrival-item-name'>Universal Audio Volt 1 USB Audio Interface</p>
    </div>
  <div className="arrival-item">
    <img src={arrival_3} alt="" />
    <p className='arrival-item-category'>Audio interfaces</p>
    <p className='arrival-item-name'>Focusrite Scarlett Solo 4th Gen Audio Interface</p>
  </div>
</div>

<div className="home-studio">
  <div className="home-studio-text">
    <h3>Try new interfaces in your projects</h3>
    <p>People make music using 
    a range of instruments, so Link helps 
    you play together using a range of devices. 
    A growing number of music applications have 
    Link built in, which means anyone on the 
    same network can play them in time with Live. 
    You can even use Link without Live in your setup:
     play Link-enabled software in time using multiple 
     devices, or multiple applications on the same device.</p>
     </div>
     <div className="home-studio-photo"><img src={home_studio} alt="" /></div>
</div>

<div className="strings">

<div className="strings-photo"><img src={girl_guitar} alt="" /></div>
<div className="strings-text">
  <h3>Get the new colors to your ideas
     with a new pack of strings</h3>

<p> A growing number of music applications have 
    Link built in, which means anyone on the 
    same network can play them in time with Live. 
    You can even use Link without Live in your setup:
     play Link-enabled software in time using multiple 
     devices, or multiple applications on the same device</p>
     <Link style={{textDecoration:'none'}} to='/shop/accessories'>Go to Accessories {'>'}</Link>
     </div>
</div>

<h2 className='text-amps'>Our amps</h2>
<hr />

<ProductCarousel products={products} />

<div className="fixed-photos">
<h2 className='burning-text'>Burning ideas...</h2>
  <div className='fixed-photo-item-first'></div>
</div>


    </div>
  )
}

export default Home
