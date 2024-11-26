import React from 'react'

const Contact = () => {
    return (
        <div style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
          <h2 style={{ marginBottom: '20px' }}>Contact Us</h2>
          <p style={{ marginBottom: '30px' }}>
            Have a question or feedback? Please don't hesitate to reach out to us. We're here to help!
          </p>
    
          <form style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '20px' }}>
            <div>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>
            <div>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
              />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows={5}
                style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
              ></textarea>
            </div>
            <button
              type="submit"
              style={{
                gridColumn: '1 / -1',
                backgroundColor: '#000',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Submit
            </button>
          </form>
        </div>
      );
    };
export default Contact