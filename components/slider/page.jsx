"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import slide1 from "../../public/slideImg/img_1.jpg";

const BannerSlider = () => {
    
    const [page, setPage] = useState(2);
    // const path = `/../../public/slideImg/img_${page}.jpg`;
    useEffect(() =>{
        let int = setInterval(() => {
            setPage(page => ((page +1) >= 4 ? 1 : page + 1))
        }, 5000);
        return () => clearInterval(int)
    },[])

    const handlePrevPage = () => {
        setPage(page => ((page -1) <= 0 ? 3 : page - 1))
    }
    const handleNextPage = () => {
        setPage(page => ((page +1) >= 4 ? 1 : page + 1))
    }

  return (
    <section className="relative mt-10 flex h-[calc(100vh-500px)] w-screen flex-col justify-center items-center ">
      <div className="absolute w-full h-full -z-10">
        <Image     
          width={100}
          height={100}
          sizes="100vw"
        //   src={`/public/slideImg/img_${page}.jpg`}
        // src={`../../public/logo.png`}
          src={slide1}
          alt="banner"
          className="w-full h-full object-cover object-center "
        /> 
        
      </div>
      {/* left array */}
      <div onClick={handlePrevPage} className="z-10 fixed left-4 text-4xl font-bold ">
        <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-[#50DBB4] ">&lt;-</span>
      </div>
      {/* right array */}
      <div onClick={handleNextPage} className="z-10 fixed right-4 text-4xl font-bold">
        <span className="inline-block transition-transform hover:translate-x-1 motion-reduce:transform-none cursor-pointer hover:text-[#50DBB4] ">-&gt;</span>
      </div>
    </section>
  );
};

export default BannerSlider;
