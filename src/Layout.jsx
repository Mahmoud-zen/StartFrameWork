import React from 'react'
import Navbar from './Navbar'
import Home from './component/Home'
import Footer1 from './component/Footer1'
import Footer2 from './component/Footer2'
import About from './component/About'
import Port from './component/Port'
import Contact from './component/Contact'
import { Outlet } from 'react-router-dom'


export default function () {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer1 />
            <Footer2 />


        </>



    )
}
