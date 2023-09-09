import React from 'react'
import OfferCard from './offercard'

const Offer = () => {
  return (
    <section className="card-container grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-y-5 md:gap-10 mx-5 md:mx-0">
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
    </section>
  )
}

export default Offer