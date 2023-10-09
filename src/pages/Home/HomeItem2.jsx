import React, { useEffect, useRef, useState } from 'react'
import { Button, Stack } from '@mui/material'
import './homeSlider.css'


const HomeItem2 = ({ bgImg, styles, handleClick, index, logoImg, brand }) => {
    const [hoverState, setHoverState] = useState(false)
    const [translateValue, setTranslateValue] = useState(brand.translate)

    const [openedState, setOpenedState] = useState(false)
    const [active, setActive] = useState(null)

    const homeItemOverlayRef = useRef(null)


    // const handleClick = (e) => {
    //     setOpenedState(true)
    //     console.log(e.target)
    // }

    const handleHover = (e) => {
        const elementsToAffect = document.querySelectorAll('.element-to-affect');
        elementsToAffect.forEach(element => {
            if (element !== e.target) {
                element.classList.add('scale-90');
            }
        });

        setHoverState(!hoverState)
    }

    const handleMouseOut = () => {
        // Remove the 'opacity-50' class from all elements to reset the opacity
        const elementsToAffect = document.querySelectorAll('.element-to-affect');
        elementsToAffect.forEach(element => {
            element.classList.remove('scale-90');
            element.style.opacity = '';
        });

        setHoverState(!hoverState)
    }

    useEffect(() => {
        document.querySelectorAll('.home-item-overlay')[0].style.opacity = '0'
    }, [])

    return (
        <Stack
            onMouseOver={() => handleHover(brand.background_image)}
            onMouseOut={handleMouseOut}
            className='hover:cursor-pointer transition-all element-to-affect'
            sx={[
                { alignItems: 'center', display: 'grid' },
                styles,
                !openedState
                    ? {
                        '&:hover': {
                            scale: '1.075',
                            '&::before': {
                                opacity: 0, // Remove overlay on hover
                            },
                        },
                        position: 'relative',
                        backgroundSize: 'contain !important',
                        backgroundPosition: 'center !important',
                        backgroundRepeat: 'no-repeat !important',
                        // backgroundImage: `url(${logoImg})`,
                        // boxShadow: '-10px 10px 15px -15px',
                        height: '20vh',
                        width: '15% !important',
                        zIndex: 1
                    }
                    : {
                        // background: `url(${bgImg})`,
                        position: 'absolute',
                        width: '95%',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        height: '95vh',
                        zIndex: 9999,
                    },
            ]}
            width={'100%'}
            onClick={(e) => {
                handleClick(brand.background_image, brand.name)
                setActive(index)
                document.querySelectorAll('.home-item-overlay').forEach(item => {
                    item.style.opacity = '1'
                })
                homeItemOverlayRef.current.style.opacity = '0'
            }}
        >
            {/* Add an overlay using ::before */}
            <div
                ref={homeItemOverlayRef}
                className='home-item-overlay'
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    content: '""',
                    background: hoverState ? 'rgba(0, 0, 0, 0)' : 'rgba(0, 0, 0, 0.5)'
                }}
            ></div>
            <img src={brand.logo} alt="Brand Logo" width={'100%'} style={{objectFit: 'contain', aspectRatio: '16/9'}} />
        </Stack >
    )
}

// const openedCSS = {
//     position: 'absolute',
//     top: '50%',
//     left: '100%',
//     transform: 'translate(-50%, -50%)',
//     height: '100vh'
// }

// const closedCSS = {
//     '&:hover': {
//         scale: '1.1',
//     },
//     position: 'relative',
//     transform: 'skewY(-15deg)',
//     backgroundSize: 'cover !important',
//     backgroundPosition: 'center !important',
//     background: `url(${bgImg})`,
//     boxShadow: '-10px 10px 15px -15px',
//     translate: `${translateValue}%`,
//     height: '50vh'
// }
export default HomeItem2


