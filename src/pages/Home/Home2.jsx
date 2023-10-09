import React, { useState, useEffect } from 'react';
import HomeItem2 from './HomeItem2';
import brandsData from '../../data/brandsData.json';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// import './home.css'; // Create a CSS file for your home component

const Home2 = () => {
  const [brandBgImg, setBrandBgImg] = useState(brandsData[0].background_image);
  const [brandTitle, setBrandTitle] = useState(brandsData[0].name);
  const [brandLink, setBrandLink] = useState(brandsData[0].permalink);
  console.log(brandLink)
  const [fade, setFade] = useState(false); // State to control the fade effect

  const handleClick = (newBg, brandTitle) => {
    setFade(true); // Activate the fade effect
    setTimeout(() => {
      setBrandBgImg(newBg);
      setBrandTitle(brandTitle);
      setFade(false);
    }, 500);
  };

  return (
    <div className={`home-container-2 ${fade ? 'fade' : ''}`}> {/* Use a container div for the fade effect */}
      {brandsData.map((brand, index) => (
        <HomeItem2 brand={brand} index={index} handleClick={handleClick} key={index} />
      ))}
      <Stack pl={16} className="background-image items-start justify-center" style={{ backgroundImage: `url(${brandBgImg})` }}>
        <Typography variant='h4' color={'primary'} className='uppercase'>{brandTitle}</Typography>
        <Link to={brandLink}><Button elev variant='contained' sx={{mt: 4}}>Learn More</Button></Link>
      </Stack>
    </div>
  );
};

export default Home2;