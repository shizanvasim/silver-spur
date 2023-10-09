import React from 'react'

import { Stack } from '@mui/material'

import SilverSpurLogo from '../../assets/img/silverspur.png'
import { Link } from 'react-router-dom'

const LogoStyles = {
  background: 'rgb(230 230 230 / 75%)',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5px)',
  WebkitBackdropFilter: 'blur(5px)',
  border: '1px solid rgba(255, 255, 255, 0.3)'
}

const Logo = () => {
  return (
    <Stack style={LogoStyles}>
      <Link to='/2'><img width={'250px'} src={SilverSpurLogo} alt="Silver Spur Enterprises Pvt Ltd" /></Link>
    </Stack>
  )
}

export default Logo