import DiscountA from '@/components/discount/discount'
import Offers from '@/components/offer/page'
import BannerSlider from '@/components/slider/page'
import TopOffer from '@/components/topoffer/page'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <BannerSlider />
      <TopOffer/>
      <DiscountA />
      <Offers />
    </main>
  )
}
