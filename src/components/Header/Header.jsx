import { AppBar, Box, Drawer, IconButton, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import MenuBar from './MenuBar'
import { Menu } from '@mui/icons-material'
import theme from '../../theme'

import './header.css'

const Header = () => {
    const [drawerStatus, setDrawerStatus] = useState(false)

    const tabletMedia = useMediaQuery(theme.breakpoints.down('md'))

    const handleDrawer = ()=> setDrawerStatus(!drawerStatus)


    return (
        <AppBar className='header' sx={{py: 2, background: 'transparent', boxShadow: 0}}>
            <Toolbar>
                <Stack width={'100%'} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                    <Logo />
                    {tabletMedia ? (
                        <IconButton onClick={handleDrawer}>
                            <Menu />
                        </IconButton>
                    ) : (
                        <MenuBar itemsColor='#e6e6e6' />
                    )}

                    <Drawer onClose={handleDrawer} anchor="bottom" open={drawerStatus}>
                        <Box bgcolor={theme.palette.primary.main} sx={{ height: '90vh' }}>
                            <MenuBar itemsColor='red' column handleDrawer={handleDrawer} />
                        </Box>
                    </Drawer>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Header