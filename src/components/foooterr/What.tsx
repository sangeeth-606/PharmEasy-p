import React from 'react';

function What() {
  return (
    <div className='w-3/4 max-w-3/4vw ' style={{ padding: '40px', backgroundColor: '#f8f9ff',margin: "0 auto" }}>
      <h1  className='text text-3xl font-semibold' style={{   marginBottom: '20px' }}>
        What Our Customers Have to Say
      </h1>
      <div
        style={{
          display: 'flex',
          overflowX: 'auto',
          gap: '50px',
          paddingBottom: '10px',
          scrollbarWidth: 'none', // Hide scrollbar for Firefox
        }}
        className="hide-scrollbar" // Add a class to hide scrollbar for Webkit browsers
      >
        {/* Dummy Box 1 */}
        <div
          style={{
            flex: '0 0 300px',
            backgroundColor: '#e8f9e8',
            borderRadius: '8px',
            padding: '16px',
            // boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>Nisha Tomar</h2>
          <p style={{ fontSize: '14px', color: '#555' }}>March 22, 2023</p>
          <p>
            I love using the PharmEasy app! They have everything related to health,
            like medicines, lab tests, and other healthcare essentials, at GREAT
            prices. Their service is amazing and quick, and the app is also easy to
            use.
          </p>
        </div>
        {/* Dummy Box 2 */}
        <div
          style={{
            flex: '0 0 300px',
            backgroundColor: '#e8f9e8',
            borderRadius: '8px',
            padding: '16px',
            // boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>Arvind Dingwani</h2>
          <p style={{ fontSize: '14px', color: '#555' }}>February 26, 2023</p>
          <p>
            I was a bit doubtful about using an online pharmacy, but PharmEasy
            exceeded my expectations. The discount coupons were great, prices were
            very reasonable, and the delivery was quick and smooth. I would
            definitely use it again.
          </p>
        </div>
        {/* Dummy Box 3 */}
        <div
          style={{
            flex: '0 0 300px',
            backgroundColor: '#e8f9e8',
            borderRadius: '8px',
            padding: '16px',
            // boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>Shreya Sharma</h2>
          <p style={{ fontSize: '14px', color: '#555' }}>April 15, 2023</p>
          <p>
            I can't recommend the PharmEasy app enough! It's the perfect one-stop
            shop for my whole family's healthcare needs. The offers you can get
            here are beyond what other platforms offer.
          </p>
        </div>
        {/* Add More Boxes as Needed */}
        <div
          style={{
            flex: '0 0 300px',
            backgroundColor: '#e8f9e8',
            borderRadius: '8px',
            padding: '16px',
            // boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h2 style={{ fontSize: '18px', fontWeight: 'bold' }}>Nisha Tomar</h2>
          <p style={{ fontSize: '14px', color: '#555' }}>March 22, 2023</p>
          <p>
            I love using the PharmEasy app! They have everything related to health,
            like medicines, lab tests, and other healthcare essentials, at GREAT
            prices. Their service is amazing and quick, and the app is also easy to
            use.
          </p>
        </div>
      </div>
    </div>
  );
}

export default What;