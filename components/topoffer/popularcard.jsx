
import card from '../../public/spiderman-miles.webp'
import Image from 'next/image'

const PopularCard = () => {
  return (
    <div className='border shadow-md p-3 w-full h-full bg-gray-100 rounded-lg '>
        <Image
        height={100}
        width={100}
        sizes='100vw'
        src={card}
        alt='card'
        className='w-full rounded-lg'
         />
         <h1 className='font-semibold text-sm md:text-md pt-2 text-gray-600'>Spider-Man  miles morales@ </h1>
    </div>
  )
}

export default PopularCard