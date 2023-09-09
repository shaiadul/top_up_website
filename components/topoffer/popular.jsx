import React from "react";
import PopularCard from "./popularcard";
import Image from "next/image";
import adding from "../../public/adding.webp";

const Popular = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 justify-center items-start gap-5 mb-10 w-full">
      <div className="card-container grid grid-cols-3 justify-center items-center gap-5 col-span-2">
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
        <PopularCard />
      </div>
      <div className="google-add ">
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
            Best online game of the month ! <a target="_black" href="https://play.google.com/store/apps/details?id=com.bag.farm.day.village.farming.games&hl=en&gl=US&pli=1" className="text-gray-500 hover:underline hover:text-gray-400">Install Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Popular;
