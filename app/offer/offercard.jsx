"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const OfferCard = ({ offer }) => {
  const [status, setStatus] = useState(offer?.status);
  return (
    <>
      {offer?.length !== 0 ? (
        <Link href={`/offer/${offer?._id}`}>
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
      ) : (
        <div className="py-4 rounded shadow-md w-60 sm:w-80 animate-pulse bg-gray-400">
          <div className="flex p-4 space-x-4 sm:px-8">
            <div className="flex-shrink-0 w-16 h-16 rounded-full dark:bg-gray-700"></div>
            <div className="flex-1 py-2 space-y-4">
              <div className="w-full h-3 rounded dark:bg-gray-700"></div>
              <div className="w-5/6 h-3 rounded dark:bg-gray-700"></div>
            </div>
          </div>
          <div className="p-4 space-y-4 sm:px-8">
            <div className="w-full h-4 rounded dark:bg-gray-700"></div>
            <div className="w-full h-4 rounded dark:bg-gray-700"></div>
            <div className="w-3/4 h-4 rounded dark:bg-gray-700"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default OfferCard;
