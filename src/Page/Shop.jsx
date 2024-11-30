import React from 'react'
import Hero from '../Compenents/Hero/Hero'
import Populer from '../Compenents/Populer/Populer'
import Offers from '../Compenents/Offers/Offers'
import NewCollection from '../Compenents/NewCollections/NewCollection'
import NewsLetter from '../Compenents/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Populer/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  )
}

export default Shop