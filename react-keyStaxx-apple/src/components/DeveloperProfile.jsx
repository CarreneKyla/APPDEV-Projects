import React, { useState } from 'react';

const DeveloperProfile = () => {
  const [vouches, setVouches] = useState(0);

  return (
    <div className="developer-profile">
      <h1>Developer Profile</h1>
      <p><strong>Name:</strong> Carrene Kyla M. Lacson</p>
      <p><strong>Role:</strong> Front-End Developer</p>
      <p><strong>About:</strong> Passionate about creating user-friendly and aesthetic web applications.</p>
      <button onClick={() => setVouches(vouches + 1)}>Vouch</button>
      <p>Vouches: {vouches}</p>
      <p><strong>Name:</strong> Carrene Kyla M. Lacson</p>
      <p><strong>Role:</strong> Back-End Developer</p>
      <p><strong>About:</strong> Passionate about creating user-friendly and aesthetic web applications.</p>
      <button onClick={() => setVouches(vouches + 1)}>Vouch</button>
      <p>Vouches: {vouches}</p>
      <p><strong>Name:</strong> Carrene Kyla M. Lacson</p>
      <p><strong>Role:</strong> Front-End Developer</p>
      <p><strong>About:</strong> Passionate about creating user-friendly and aesthetic web applications.</p>
      <button onClick={() => setVouches(vouches + 1)}>Vouch</button>
      <p>Vouches: {vouches}</p>
      <p><strong>Name:</strong> Carrene Kyla M. Lacson</p>
      <p><strong>Role:</strong> Front-End Developer</p>
      <p><strong>About:</strong> Passionate about creating user-friendly and aesthetic web applications.</p>
      <button onClick={() => setVouches(vouches + 1)}>Vouch</button>
      <p>Vouches: {vouches}</p>
  </div>    
  );
};

export default DeveloperProfile;
