import React from 'react'
import offer from '../../public/clash_of_clan.jpg'
import Image from 'next/image'

const OfferCard = () => {
  return (
    <div className='border shadow-2xl p-3 w-full h-full bg-gray-100 rounded-md '>
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
       
         <h1 className='font-semibold text-md pt-2 text-gray-600'>Spider-Man  miles morales@ </h1>
    </div>
  )
}

export default OfferCard