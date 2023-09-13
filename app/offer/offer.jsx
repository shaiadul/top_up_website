"use client";

import React, { useEffect, useState } from "react";
import OfferCard from "./offercard";

const Offer = () => {
  const [offers, setOffers] = useState([]);

  const fetchOffers = async () => {
    const response = await fetch("http://localhost:3000/api/offers");
    const data = await response.json();
    setOffers(data);
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <section className="card-container grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-y-5 md:gap-10 mx-5 md:mx-0">
      {offers.map((offer) => (
        <OfferCard offer={offer} key={offer?.id} />
      ))}
    </section>
  );
};

export default Offer;
