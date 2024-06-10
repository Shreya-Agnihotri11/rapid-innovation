import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'; 
const Home = () => {
  const isDarkMode = useSelector(state => state.theme.isDarkMode);

  return (
    <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>

      <div className="home-content">
        <div className={`intro ${isDarkMode ? 'dark-theme-text' : 'light-theme-text'}`}>
          <h1>Your Idea Matters!</h1>
          <p>Pulvinar enim ac tortor nulla facilisi tristique facilisi elementum sollicitudin eget lorem.</p>
          <Link to="/contact" className={`make-website-link ${isDarkMode ? 'dark-theme-button' : 'light-theme-button'}`}>Make a Website</Link>
        </div>
        
        <div className="services">
          <h2>Our Services</h2>
          <div className="services-icons">
            <div className={`service ${isDarkMode ? 'dark-theme-text' : 'light-theme-text'}`}>
              <img src="/assets/local-business-icon.png" alt="Local Business" />
              <h3>Local Business</h3>
              <p>Lorem ipsum dolor consectetur adipiscing elit eiusmod.</p>
            </div>
            <div className={`service ${isDarkMode ? 'dark-theme-text' : 'light-theme-text'}`}>
              <img src="/assets/online-store-icon.png" alt="Online Store" />
              <h3>Online Store</h3>
              <p>Lorem ipsum dolor consectetur adipiscing elit eiusmod.</p>
            </div>
            <div className={`service ${isDarkMode ? 'dark-theme-text' : 'light-theme-text'}`}>
              <img src="/assets/blogging-icon.png" alt="Blogging" />
              <h3>Blogging</h3>
              <p>Lorem ipsum dolor consectetur adipiscing elit eiusmod.</p>
            </div>
            <div className={`service ${isDarkMode ? 'dark-theme-text' : 'light-theme-text'}`}>
              <img src="/assets/portfolio-icon.png" alt="Portfolio" />
              <h3>Portfolio</h3>
              <p>Lorem ipsum dolor consectetur adipiscing elit eiusmod.</p>
            </div>
          </div>
          <div className="services-details">
            <div className="service-detail">
              <img src="/assets/shopping-cart.png" alt="Shopping Cart" />
            </div>
            <div className="service-detail">
              <img src="/assets/thumbs-up.png" alt="Thumbs Up" />
            </div>
            <div className="service-detail">
              <img src="/assets/lightning.png" alt="Lightning" />
            </div>
          </div>
        </div>
        <footer className={`footer ${isDarkMode ? 'dark-theme-text' : 'light-theme-text'}`}>
          <div className="footer-container">
            <div className="footer-column">
              <a href="#">About</a>
              <a href="#">News</a>
              <a href="#">Hosting</a>
              <a href="#">Privacy</a>
            </div>
            <div className="footer-column">
              <a href="#">Showcase</a>
              <a href="#">Themes</a>
              <a href="#">Plugins</a>
              <a href="#">Patterns</a>
            </div>
            <div className="footer-column">
              <a href="#">Learn</a>
              <a href="#">Documentation</a>
              <a href="#">Developers</a>
              <a href="#">WordPress.tv</a>
            </div>
            <div className="footer-column">
              <a href="#">Get Involved</a>
              <a href="#">Events</a>
              <a href="#">Donate</a>
              <a href="#">Swag Store</a>
            </div>
            <div className="footer-column">
              <a href="#">WordPress.com</a>
              <a href="#">Matt</a>
              <a href="#">bbPress</a>
              <a href="#">BuddyPress</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
