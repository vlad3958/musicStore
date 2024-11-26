import React from 'react'

const About = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
      <h2 style={{ marginBottom: '20px' }}>About Muza</h2>
      <p style={{ marginBottom: '30px' }}>
        Muza is a powerful music production and performance platform that empowers artists and creators of all levels. Our mission is to revolutionize the way music is made and shared with the world.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gridGap: '30px' }}>
        <div>
          <h2 style={{ marginBottom: '10px' }}>Our Team</h2>
          <p>
            Muza was founded by a passionate team of musicians, engineers, and visionaries who are dedicated to pushing the boundaries of what's possible in music technology.
          </p>
        </div>
        <div>
          <h2 style={{ marginBottom: '10px' }}>Contact Us</h2>
          <p>
            Have a question or feedback? Please don't hesitate to reach out to us at support@muza.com. We're here to help!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About