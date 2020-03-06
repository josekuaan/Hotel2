import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import OurRoomPlan from '../components/OurRoomPlan'
import Testimonies from '../components/Testimonies'
import Footer from '../components/Footer'
import Location from '../components/Location'


export default function Home() {
    return (   

        <div>
            <Hero>
                <Banner title="luxurious rooms" subtitle="deluxe starting at $299">
                    <Link to='/rooms' className="btn-primary">to rooms</Link>
                </Banner>
            </Hero>     
            <Services />
           <FeaturedRooms />
           <OurRoomPlan />
           <Testimonies />
           {/* <Location /> */}
           <Footer />
        </div>

    )
}
