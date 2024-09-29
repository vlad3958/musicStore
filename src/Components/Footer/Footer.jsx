import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
<div>
<div className="footer">
  <p className='muza'>Muza</p>
  <div className="footer-row-first">
    <div className="footer-row-first-item">
      <ul>
        <li>Register Live or Push</li>
        <li>Register Live or Push</li>
        <li>Register Live or Push</li>
      </ul>
    </div>
    <div className="footer-row-first-item">
      <h2>Education</h2>
      <ul>
        <li>Ableton for Colleges and Universities</li>
        <li>Ableton for Colleges and Universitiesh</li>
        <li>Ableton for Colleges and Universities</li>
      </ul>
    </div>
    <div className="footer-row-first-item">
      <h2>Sign up to our newsletter</h2>
      <p>Enter your email address to stay up
         to date with the latest offers, tutorials,
          downloads, surveys and more.</p>
          <form class="signup-form">
        <input type="email" id="email" name="email" placeholder="Email Address" required/>
        <button type="submit">Sign Up</button>
    </form>
    </div>
  </div>
  <div className="footer-row-second">
     <div className="footer-row-second-item">
      <h2>Community</h2>
<ul>
  <li>Find Ableton User Groups</li>
  <li>Find Ableton User Groups</li>
  <li>Find Ableton User Groups</li>
</ul>

     </div>
     <div className="footer-row-second-item"></div>
  </div>
  <div className="footer-row-third">
    <ul>
      <li>Info</li>
      <li>Info</li>
      <li>Info</li>
      <li>Info</li>
      <li>Info</li>
    </ul>
  </div>
</div>

</div>
  )
}

export default Footer;
