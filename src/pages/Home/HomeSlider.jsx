import { Splide, SplideSlide } from '@splidejs/react-splide'
import React from 'react'

import titansTeaBg from '../../assets/img/slides/titans-web-banner.jpg'
import titansTeaLogo from '../../assets/img/titans-tea-logo.png'

import kulhadChaiBg from '../../assets/img/slides/kulhad-chai-web.jpg'
import kulhadChaiLogo from '../../assets/img/kulhad-chai-logo.png'

import silverSpurConsultancy from '../../assets/img/slides/silver-spur-consultancy.jpeg'
import silverSpurLogo from '../../assets/img/silverspur.png'

// Default theme
import '@splidejs/react-splide/css';

import './homeSlider.css'
import { Box, Button, Stack, Typography } from '@mui/material'

const HomeSlider = () => {
    const options = {
        arrows: true,
        fixedHeight: '100vh',
        gap: 10,
        pagination: false,
        isNavigation: true,
        // autoplay: true,
        interval: 3000,
        rewind: true
    }

    return (
        <>
            <Splide options={options}>

                {/* Titans Tea */}
                <SplideSlide>
                    <Stack direction={'row'}>
                        <Stack className='grid items-center justify-center p-10' sx={{ bgcolor: '#f5f5f5' }} width={'50%'}>
                            <img width={'250px'} className='mb-10' src={titansTeaLogo} alt="" />
                            <Typography variant='h4' sx={{ mb: 2.5 }} align='center'>Titans Tea: Unveiling the World of Exquisite Flavors</Typography>
                            <Button variant='contained'>Read More</Button>
                        </Stack>
                        <Box width={'50%'}><img style={{ height: '100vh', objectFit: 'cover' }} src={titansTeaBg} alt="" /></Box>
                    </Stack>
                </SplideSlide>

                {/* Kulhad Chai */}
                <SplideSlide>
                    <Stack direction={'row'}>
                        <Box width={'50%'}><img style={{ height: '100vh', objectFit: 'cover' }} src={kulhadChaiBg} alt="" /></Box>
                        <Stack className='grid items-center justify-center p-10' sx={{ bgcolor: '#f5f5f5' }} width={'50%'}>
                            <img width={'250px'} className='mb-10' src={kulhadChaiLogo} alt="" />
                            <Typography variant='h4' sx={{ mb: 2.5 }} align='center'>Kulhad Chai: A Unique Indian Tea Experience</Typography>
                            <Button variant='contained'>Read More</Button>
                        </Stack>
                    </Stack>
                </SplideSlide>

                {/* SilverSpur Consultancy */}
                <SplideSlide>
                    <Stack direction={'row'}>
                        <Stack className='grid items-center justify-center p-10' sx={{ bgcolor: '#f5f5f5' }} width={'50%'}>
                            <img width={'500px'} className='mb-10' src={silverSpurLogo} alt="" />
                            <Typography variant='h4' sx={{ mb: 2.5 }} align='center'>Silver Spur Consultancy, a leading consulting firm specializing in delivering strategic, financial, marketing, and human resources consulting services.</Typography>
                            <Button variant='contained'>Read More</Button>
                        </Stack>
                        <Box width={'50%'}><img style={{ height: '100vh', objectFit: 'cover' }} src={silverSpurConsultancy} alt="" /></Box>
                    </Stack>
                </SplideSlide>
            </Splide>
        </>
    )
}

export default HomeSlider