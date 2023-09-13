"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const OfferDetails = ({ params }) => {
  const [item, setItem] = useState();

  // console.log("this is my params id", params.id);
  const id = params.id;
  const fetchSingleOffer = async (id) => {
    const response = await fetch(`http://localhost:3000/api/offers/` + id);
    const data = await response.json();
    setItem(data);
  };

  useEffect(() => {
    fetchSingleOffer(id);
  }, []);

  return (
    <section className="container mx-auto px-5 my-20">
      <div>
        <div className="border rounded-md shadow-md bg-gray-100 p-2">
        <Image
            height={100}
            width={100}
            sizes="100vw"
            src={item?.image}
            alt="card"
            className="w-44 object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default OfferDetails;
