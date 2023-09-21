"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import adding from "../../../public/adding.webp";
import Link from "next/link";
import { useStore } from "@/app/context/store";

const OfferDetails = ({ params }) => {

  const {setOrderPrice, setOrderQuantity, setOrderPlayerId} = useStore();

  const [item, setItem] = useState();
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [playerId, setPlayerId] = useState("");
  
  
  

  const id = params.id;
  const fetchSingleOffer = async (id) => {
    const response = await fetch(`http://localhost:3000/api/offers/` + id);
    const data = await response.json();
    setItem(data);
  };

  useEffect(() => {
    fetchSingleOffer(id);
  }, []);

  const handlePrice = (price) => { 
    setQuantity(quantity);
    setPrice(price);
  }; 
  const handleQuantity = (quantity) => {
    setQuantity(quantity);
  }; 

  const handlePlayerId = (e) => {
    setPlayerId(e.target.value);
  };
  
  const handleOrder = () => {
    setOrderPrice(price);
    setOrderQuantity(quantity);
    setOrderPlayerId(playerId);
  }  


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
            {item?.offers?.map((i, index) => {
              return (
                <div
                  hidden={i?.sold === "false" ? true : false}
                  key={index}
                  onClick={() => handlePrice(Number(i?.price)) + handleQuantity(Number(i?.quantity)) }
                  className={` flex justify-between items-center my-2 p-2 bg-white hover:bg-[#50dbb42f] border hover:border-[#50dbb42f] text-gray-400  font-semibold rounded-md duration-700 cursor-pointer`}
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
                onChange={handlePlayerId}
                value={playerId}
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
              <span className="text-xl">Total Diamond Is : {quantity} </span>
              <span className="text-xl"> {price} BDT </span>
            </div>
            <div className="flex justify-center">
              <Link onClick={handleOrder} href="/checkout" className=" text-sm text-gray-50 font-bold font-serif shadow-md m-5 p-2 bg-yellow-400 rounded-md w-full">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* description */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-start gap-y-5 md:gap-5 ">
        <div className="col-span-2 shadow-md bg-gray-100 border">
          <h1 className="text-[#50DBB4] p-5 border-b-2 ">Description</h1>
          <div className="m-5 grid grid-cols-1 gap-y-5 md:gap-3 ">
            <span>
              {" "}
              <input type="radio" checked disabled /> শুধুমাত্র Bangladesh
              সার্ভারে ID Code দিয়ে টপ আপ হবে।
            </span>
            <span>
              {" "}
              <input type="radio" checked disabled /> Player ID Code ভুল দিয়ে
              Diamond না পেলে কর্তৃপক্ষ দায়ী নয় ।
            </span>
            <span>
              {" "}
              <input type="radio" checked disabled /> Order কমপ্লিট হওয়ার পরেও
              আইডিতে ডাইমন্ড না গেলে চেক করার জন্য ID Pass দিতে হবে।
            </span>
            <span>
              {" "}
              <input type="radio" checked disabled /> অর্ডার Cancel হলে কি কারণে
              তা Cancel হয়েছে তা বিবেচনা সাপেক্ষ ।
            </span>
            <div>
              {" "}
              <input type="radio" checked disabled /> Confirm Your Player ID: <span className="font-semibold">{playerId}</span> 
            </div>
          </div>
        </div>
        <div className="google-add flex justify-center items-center mx-5 md:mx-0 w-full mx-auto">
          <div className="border shadow-md p-3 w-full h-full bg-gray-100 rounded-lg">
            <Image
              height={100}
              width={100}
              sizes="100vw"
              src={adding}
              alt="card"
              className="w-full rounded-lg"
            />
            <div className="font-semibold text-lg text-gray-400 pt-2">
              Best online game of the month !{" "}
              <a
                target="_black"
                href="https://play.google.com/store/apps/details?id=com.bag.farm.day.village.farming.games&hl=en&gl=US&pli=1"
                className="text-gray-500 hover:underline hover:text-gray-400"
              >
                Install Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferDetails;
