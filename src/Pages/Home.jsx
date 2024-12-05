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
        src="https://vinylmp4adswgtjaoawo51.s3.us-east-1.amazonaws.com/vinyl.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXWHDLQITUDHRNWOP%2F20241205%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241205T095204Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLWVhc3QtMSJIMEYCIQDlySSWLVAKSSBvAksyWjOPOgK5VXSHv61oRts0lDP8BwIhAPmyydQ4qR0u393ZmjJOH76%2FAtAKDEwyBmPnWV%2FYn8WZKugCCBMQABoMNTI4NzU3Nzg1MTI3IgyqteIFoCI6tFteO2sqxQLabHc7J0miS3p49y7agPKwHGI%2F1f8glq4AER5i5v63D0DpemxYaR2ntOMDkrl1s5J%2FOOeQvitDb2qfMBnpjYoFGY7Llp42g0OZadJE2CyPaR6%2B1dTthAtkYpWH7DsWNFt5excsOJw0QpVi%2BrZ0IBLvnKlMAsJf7%2FJ0zVtj7ciUpnQNGRwqzbLG0Qy8KbufRYqhXrT8x25lXb%2BcxDuHZw7TTVr6C%2FRpaUFf731leVvSShYN8%2FiWyepUbClwj8Ot0SA4sN0hUce6oWS782DckqN8yr9Haod%2BEqQNB1rN9v2L7iWjacn8TWxg7AD7dra%2FVt9RqvAzLCgpo4sRzbByvFezazpEUbaakaYK1I0l54vD1Xkp5Jpy4Ap5Iv3R3LEh1kqrAQBTOyeUHBOcd%2BtDQovLIcAThq2Bj7S6uMY0O24z2I%2BFXdRvMO3txboGOrICUqjhUsuvBR8xe2%2BjIeRXaDucr82UO%2B9lyAOMtd8CwP%2BBzGZRSmCY0IS38fv1ia9gWpUSZ4o8QJZ3wXjCkvXvIAs9FAytzFRYG1l2YFgJbTOL3fwN2GzIG3pKr%2Bee9IpnT2mp9Kx478GRMPjEEIzpPmCgCzLUdovB%2FywV5VY2SIj7jbcGBgEqtQIUDk%2F5pJr%2BUSxkbn092znlTfQK1O9zcLh%2Bs5pBQY55IvbmYkZ%2F%2BmnXZwOEQ1Rckz0d4ZU3i7KFZrraHA%2Fm4JO5yeiAyFLdRzC5SxV94GVIfEhb3BAncmA34MRvgAJc%2BrP3jp7Jda2Y5Cl7UbX%2FYCNjNqgZzR6hGYlryLTl6lXjQR7bB%2BTwqMqto9z2%2BbmByDrX13Lvu1xUzbthcSScI3lQnGYYxovOYWGp&X-Amz-Signature=db7575540d1a2e7877b14e241bcb9fa6ee74045fd105c58326eacba92af280b1&X-Amz-SignedHeaders=host&response-content-disposition=inline"
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
