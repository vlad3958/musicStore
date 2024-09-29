import React from 'react'
import {Link} from 'react-router-dom';
import sampleVideo from '../Components/Assets/vinyl.mp4';
import '../Components/HomeStyles/HomeStyles.css'
import arrival_1 from '../Components/Assets/arrival_1.jpg';
import arrival_2 from '../Components/Assets/arrival_2.jpg';
import arrival_3 from '../Components/Assets/arrival_3.jpg';
import home_studio from '../Components/Assets/home_studio.jpg'
import girl_guitar from '../Components/Assets/girl_guitar.jpg'
const Home = () => {
  return (
    <div>
<video  src={sampleVideo} autoPlay loop muted playsInline 
style={{width:"100%", height:"auto"}}></video>

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

<div className="fixed-photos">
<h2 className='burning-text'>Burning ideas...</h2>
  <div className='fixed-photo-item-first'></div>
  <div className='fixed-photo-item-second'></div>
</div>



    </div>
  )
}

export default Home
