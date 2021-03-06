import React from 'react';
import '../styles/landing.css'

const Landing = () => (
  <section className="landing">
    <header id="hero-banner">
      <h1 className="hero-title">Turn it up!</h1>
    </header>

    <section className="selling-points">
      <div className="container">
        <div className="point">
          <h2 className="point-title">Choose your music</h2>
          <img src="/assets/images/icons/music-icon.png" width="150px" alt="music icon" />
          <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
        </div>
        <div className="point">
          <h2 className="point-title">Unlimited streaming, ad-free</h2>
          <img src="/assets/images/icons/stream-icon.png" width="150px" alt="streaming icon" />
          <p className="point-description">No arbitrary limits. No distractions</p>
        </div>
        <div className="point">
          <h2 className="point-title">Mobile Enabled</h2>
          <img src="/assets/images/icons/mobile-icon.png" width="150px" alt="mobile icon"/>
          <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
        </div>
      </div>
    </section>
  </section>
);

export default Landing;