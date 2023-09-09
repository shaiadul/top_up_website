import React from 'react'
import offer from '../../public/clash_of_clan.jpg'
import Image from 'next/image'

const OfferCard = () => {
  return (
    <div className='border shadow-2xl p-3 w-80 h-full bg-gray-100 rounded-md '>
        <div className='overflow-hidden '>
             <Image
        height={100}
        width={100}
        sizes='100vw'
        src={offer}
        alt='card'
        className='w-full object-cover rounded-md hover:scale-105 transition duration-500 ease-in-out'
         />
        </div>
        <div className='pt-2 flex justify-between items-center'>
            <span className='font-semibold text-md text-gray-600'>Spider-Man morales@ </span><span className='ml-auto bg-[#50DBB4] p-1 rounded-md text-white btn'>Sold Out</span>
        </div>
         
    </div>
  )
}

export default OfferCard