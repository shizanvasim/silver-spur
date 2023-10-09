import { ListItem, MenuList, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const menuItems = [
    { id: 1, label: 'About', path: '/about' },
    { id: 2, label: 'Our Brands', path: '/our-brands' },
    { id: 3, label: 'Contact', path: '/contact' },
]

const MenuBar = ({ column, handleDrawer, itemsColor }) => {
    return (
        <Stack height={'100%'}>
            <MenuList className={`flex justify-center ${column && 'flex-col'}`} sx={{ columnGap: 8, rowGap: 10, height: '100%' }}>
                {menuItems.map(item => (
                    <ListItem onClick={handleDrawer} key={item.id} disablePadding>
                        <Typography className='w-full'>
                            <Link to={item.path} align='center' className='block whitespace-nowrap w-full' style={{color: itemsColor}}>{item.label}</Link>

                        </Typography>
                    </ListItem>
                ))}
            </MenuList>
        </Stack>
    )
}

export default MenuBar