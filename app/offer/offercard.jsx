"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const OfferCard = ({ offer }) => {
  const [status, setStatus] = useState(offer?.status);
  return (
    <Link href={`/offer/${offer?._id}`}>
      {" "}
      <div className="border shadow-md p-3 w-full md:w-fit h-full bg-gray-100 rounded-md">
        <div className="overflow-hidden ">
          <Image
            height={100}
            width={100}
            sizes="100vw"
            src={offer?.image}
            alt="card"
            className="w-full object-cover rounded-md hover:scale-105 transition duration-500 ease-in-out"
          />
        </div>
        <div className="pt-2 flex justify-between items-center">
          <span className="font-semibold text-md text-gray-600">
            {offer?.title}{" "}
          </span>
          {status === "true" ? (
            <span className="ml-auto bg-[#50DBB4] p-1 rounded-md text-white btn">
              In Stock
            </span>
          ) : (
            <span className="ml-auto bg-[#f35353c7] p-1 rounded-md text-white btn">
              Sold Out
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default OfferCard;
