import React from "react";
import Offer from "./offer";

const Offers = () => {
  return (
    <section className="container mx-auto mb-10">
      <div className="one">
        <h3 className="text-4xl font-serif mt-20 mb-10">Popular Services !</h3>
      </div>
      <Offer />
    </section>
  );
};

export default Offers;
