import React, { useState, useEffect } from 'react';
import HomeItem from './HomeItem';
import brandsData from '../../data/brandsData.json';
// import './home.css'; // Create a CSS file for your home component

const Home = () => {
  const [brandBgImg, setBrandBgImg] = useState(brandsData[0].background_image);
  const [fade, setFade] = useState(false); // State to control the fade effect

  const handleClick = (newBg) => {
    setFade(true); // Activate the fade effect
    setTimeout(() => {
      setBrandBgImg(newBg);
      setFade(false); // Deactivate the fade effect after a delay
    }, 500); // Adjust the delay (in milliseconds) as needed for your desired transition speed
  };

  return (
    <div className={`home-container ${fade ? 'fade' : ''}`}> {/* Use a container div for the fade effect */}
      {brandsData.map((brand, index) => (
        <HomeItem index={index} handleClick={handleClick} key={index} translate={brand.translate} bgImg={brand.background_image} />
      ))}
      <div className="background-image" style={{ backgroundImage: `url(${brandBgImg})` }}></div>
    </div>
  );
};

export default Home;