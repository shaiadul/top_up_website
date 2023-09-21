"use client";
import React, { useEffect, useState } from "react";
import { useStore } from "../context/store";
import DataCard from "./datacard";

const CheckOut = () => {
  const [methods, setMethods] = useState([]);

  const fetchMethods = async () => {
    const response = await fetch("http://localhost:3000/api/methods");
    const data = await response.json();
    setMethods(data);
  };

  useEffect(() => {
    fetchMethods();
  }, []);

  // console.log(orderPrice, orderQuantity, orderPlayerId);
  console.log("this is payment method data", methods);
  return (
    <section className="container mx-auto px-5 my-10">
      {/* {methods.map((method) => (
        <DataCard key={method.id} method={method} />
      ))} */}
      <DataCard />
    </section>
  );
};

export default CheckOut;
