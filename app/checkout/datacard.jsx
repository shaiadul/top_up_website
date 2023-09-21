"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import rocket from "../../public/rocket.png";
import { useStore } from "../context/store";
import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";

const DataCard = () => {
    const { orderPrice, orderQuantity, orderPlayerId } = useStore();
    const [copied, setCopied] = useState(false);
  
    const copyToClipboard = () =>{
      navigator.clipboard.writeText("01740673877");
      setCopied(true);
    }


  return (
    <><div className="grid grid-cols-1 md:grid-cols-3 justify-between items-start gap-y-5 md:gap-5 my-5 ">
        <div className="col-span-2 shadow-md bg-gray-100 border">
          <h1 className="text-[#50DBB4] p-5 border-b-2 ">
            Select Payment Method
          </h1>
          <div className="m-5 grid grid-cols-1 md:grid-cols-3 gap-y-3 md:gap-3 ">
            <Image
              height={100}
              width={100}
              sizes="100vw"
              src={rocket}
              alt="card"
              className="w-full object-cover border rounded-md shadow-md"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-5">
          <div className=" shadow-md bg-gray-100 border">
            <h1 className="text-[#50DBB4] p-5 border-b-2 ">
              Payment Information
            </h1>
            <div className="m-5 flex justify-between items-center">
              <span className="text-xl">Total Amounts Is</span>
              <span className="text-xl"> {orderPrice} BDT </span>
            </div>
            <div className="mx-5 flex justify-start items-center">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-md pl-2">
                Accept{" "}
                <a className="btn text-blue-500 hover:underline" href="#">
                  {" "}
                  Terms & Conditions
                </a>
              </span>
            </div>
            <div className="flex justify-center">
              <button className=" text-sm text-gray-50 font-bold font-serif shadow-md m-5 p-2 bg-yellow-400 rounded-md w-full">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between items-start gap-y-5 md:gap-5 my-5 ">
        <div className="col-span-2 shadow-md bg-gray-300 border rounded-md">
          <div className="m-5 p-3 flex flex-col gap-y-5 border-2 rounded-md bg-gray-200">
            <span>
              1. *247# ডায়াল করে আপনার Bkash মোবাইল মেনুতে যান অথবা Bkash
              অ্যাপে যান।
            </span>
            <span>2. "Send Money" -এ ক্লিক করুন।</span>
            <span className="flex">
              3. প্রাপক নম্বর হিসেবে আমাদের একাউন্ট নম্বরটি লিখুনঃ{" "}
              <p className="font-semibold ml-2">01740673877</p>
            </span>
            <span>4. টাকার পরিমাণ দিন</span>
            <span>5. নিশ্চিত করতে এখন আপনার BKASH মোবাইল মেনু পিন লিখুন।</span>
            <span>
              6. সবকিছু ঠিক থাকলে, আপনি BKASH থেকে একটি নিশ্চিতকরণ বার্তা পাবেন।
            </span>
            <span>
              7. বক্সে আপনার Transaction ID দিন এবং Confirm বাটনে ক্লিক করুন।
            </span>
          </div>
          <div className="m-5 p-3 flex bg-gray-200 rounded-md">
            <div className="flex justify-center items-center">
              Sent Payment Here{" "}
              <span className="ml-5 text-xl text-yellow-400 font-bold flex">
                01746510279
                {copied ? (
                  <ClipboardDocumentCheckIcon className="ml-2 w-6 h-6 text-gray-600 inline-block" />
                ) : (
                  <ClipboardDocumentIcon 
                  onClick={copyToClipboard}
                  className="ml-2 w-6 h-6 text-gray-500 inline-block" />
                )}
              </span>
            </div>
          </div>
          <div className="m-5 p-3 flex flex-col justify-center items-start gap-y-3 bg-gray-200 rounded-md">
            <label htmlFor="Transaction">Enter Payment/Transaction ID</label>
            <input
              type="text"
              name="Transaction"
              id="Transaction"
              placeholder="Enter your Transaction ID"
              className="border p-2 rounded-md w-full focus:outline-none"
            />
          </div>
        </div>
      </div>
    </>
    
  )
}

export default DataCard