import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import RoomContainer from '../components/RoomContainer'
import Footer from '../components/Footer'

export default function Rooms(props) {
    
    return (
        <> 
            <Hero hero="roomsHero">
                <Banner title="our rooms" subtitle="">
                    <Link to='/' className="btn-primary">to home</Link>
                </Banner>
            </Hero>
            <RoomContainer />
            <Footer />
        </ >
    )
}
