import React from 'react'
import Header from '../Header'
import Home from '../../pages/Home/Home'
import { Home2 } from '../../pages'
import { Route, Routes } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/2' element={<Home2/>} />
            </Routes>
        </>
    )
}

export default Layout