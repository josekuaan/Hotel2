import React from 'react'
import { useLocation, Link } from 'react-router-dom'

import Banner from '../components/Banner'
import Hero from '../components/Hero'

export default function Error() {
    const location = useLocation()
    return (
        <Hero>
            <Banner title="404" subtitle="page not found">
                <Link to="/" className="btn-primary">home</Link>
            </Banner>
        </Hero>
    )  
}
