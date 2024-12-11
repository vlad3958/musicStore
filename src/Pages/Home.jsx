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
        src="https://vinylmp4adswgtjaoawo51.s3.us-east-1.amazonaws.com/vinyl.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXWHDLQITS73PZV6D%2F20241211%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241211T122058Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIEYsvoJ23PgXIXKkoNfWCCIx0RWmfhMsVqn4tlILwyDdAiEA4ZTBrvJwpGxqpVFh%2BteGLCDKp5llYLLsm7QRVuY5NHYq8QIIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw1Mjg3NTc3ODUxMjciDI%2B9Nc%2BCIjhq37afXirFAseQQpn%2Fn65Lescd79b1%2Br67u%2Fid%2Fe0t9KcbBm1b0RfrukcvXKqLAv4rIKgYACWdiuAqRfWPQTlo%2B%2F%2FgotttImaWYpHhNqJN89JDgVqABicp%2B3ehF5iLjHXzNAsvW%2BAaB4%2B%2FIZQ%2BFVuh0EWBnYi64qQRjZUF0iV4RHpsEyqXYfdP0N3t0xOPt%2BmCLwZay%2FrdhDiAgenAOSR1GOmTxNBcPFi77F9xD7N3vklefbQrZ%2B8yDgHS79t1ASEA1LOUzxP6VEgK%2BjYv2zY6ecU1wuiqMU5igVfK2HPKa0kJk9TBFVoSkoEGCfZJvUWlI%2BRbPT20NLW95zMcCgIFoAHsUsWnft7wdcbVrYqAhqW%2FWOcluNjEAm6obqdXYQ0wXm7GWc9nb91dJrL1AL78fmW10I8L8UjVcPgSzsePmgEKgGhwgtdUguXezUgwiobmugY6swJ%2F6JJh2Q%2FEHrV2PilhcMGPsjvpAsdC%2FdZM%2BsyoxQEklKKQxjW%2F4sppmHlr744qCoVbiGi%2FSdCbZLC2DlN0GVj6fFwdpMZDdMrhLCIn3%2BTnXrmaTdYk1eW3SnSNYqmsS8umRcnKiL5Yvt878C6%2BUO%2BhveC9bKeWesFSnHkC2s52bN9RcZV0ikO5zy5SR0wPs9FbApFh5qdTMFHH2rvBwKz5npHk0G%2FwncpbQIb53eOBjTU59JaXQfWn8GbMHEZJnRrrTH%2FgOCwOZpxZ%2FToMeHZ3tdMIroud3nhtlXChGYsBCS%2BqWwgmW2nMg3MzEtfctfmcA1dSFNBx%2FH2d1XQk8RompZFiFWu0LpK23OmKGiEpLWNcS1icQ5YCHFUUJffZO3qaRr8Wo6oqNdDhLOQ7Vd7AXjK4&X-Amz-Signature=bfb0886f09514660036f3fdf8b35447e8de04ea3abf9edb4d1538f65d247f4cc&X-Amz-SignedHeaders=host&response-content-disposition=inline"
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
