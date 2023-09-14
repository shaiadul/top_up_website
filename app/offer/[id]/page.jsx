"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const OfferDetails = ({ params }) => {
  const [item, setItem] = useState();

  const [status, setStatus] = useState(item?.status);

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
      {/* top identification card */}
      <div className="flex justify-start gap-5 border rounded-md shadow-md bg-gray-100 p-2">
        <div className="">
          <Image
            height={100}
            width={100}
            sizes="100vw"
            src={item?.image}
            alt="card"
            className="w-44 object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center items-start text-left">
          <div>
            <h2 className="text-2xl font-semibold text-[#50DBB4]">
              {item?.title}
            </h2>
            <span className="text-sm text-[#50DBB4]">General manager</span>
          </div>
          <div className=" my-5">
            <span className="text-sm text-gray-50 font-bold font-serif shadow-md p-2 bg-yellow-400 rounded-md">
              Fast Delivery
            </span>
          </div>
        </div>
      </div>
      {/* range selector and input */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-start gap-y-5 md:gap-5 my-5 ">
        <div className="col-span-2 shadow-md bg-gray-100 border">
          <h1 className="text-[#50DBB4] p-5 border-b-2 ">Select Recharge</h1>
          <div className="m-5 grid grid-cols-1 md:grid-cols-2 gap-y-3 md:gap-3 ">
            {item?.offers?.map((i) => {
              return (
                <div
                  disabled={i.sold}
                  key={i}
                  className="flex justify-between items-center my-2 p-2 bg-white hover:bg-[#50dbb42f] border hover:border-[#50dbb42f] text-gray-400  font-semibold rounded-md duration-700"
                >
                  <div className="flex flex-col items-start">
                    <span className="text-xl">{i?.quantity} Diamond</span>
                    <span className="text-sm mt-2">BDT {i?.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className=" shadow-md bg-gray-100 border">
            <h1 className="text-[#50DBB4] p-5 border-b-2 ">
              Give Your Account Info
            </h1>
            <div className="m-5 grid grid-cols-1 gap-3 justify-center items-center">
              <label htmlFor="player_id">Player ID</label>
              <input
                type="text"
                name="player_id"
                id="player_id"
                placeholder="Enter your player ID"
                className="border p-2 rounded-md w-full focus:outline-none"
              />
            </div>
          </div>
          <div className=" shadow-md bg-gray-100 border">
            <h1 className="text-[#50DBB4] p-5 border-b-2 ">Payment</h1>
            <div className="m-5 flex justify-between items-center">
              <span>Total Amount Is : </span>
              <span> 000 BDT </span>
            </div>
            <div className="flex justify-center">
              <button className=" text-sm text-gray-50 font-bold font-serif shadow-md m-5 p-2 bg-yellow-400 rounded-md w-full">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferDetails;
