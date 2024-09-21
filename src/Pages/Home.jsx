import React from 'react'
import sampleVideo from '../Components/Assets/Home_tape_video.mp4';
import '../Components/HomeStyles/HomeStyles.css'
const Home = () => {
  return (
    <div>
<video src={sampleVideo} autoPlay loop muted playsInline 
style={{width:"100%", height:"auto"}}></video>

<h1>Music store</h1>
    </div>
  )
}

export default Home
