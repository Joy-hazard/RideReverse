import React from 'react'
import Hero from './hero/Hero'
import Ssearch from '../../search/Ssearch'
import Category from './category/Category'
import Offer from './offer/Offer'

const HomeContainer = () => {
    return (
        <>
            <Hero />
            <Ssearch />
            <Category />
            <Offer />
        </>
    )
}

export default HomeContainer