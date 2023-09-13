import DiscountA from "@/components/discount/discount";
import Offers from "@/app/offer/page";
import BannerSlider from "@/components/slider/page";
import TopOffer from "@/components/topoffer/page";

export default function Home() {
  return (
    <main className="">
      <BannerSlider />
      <TopOffer />
      <DiscountA />
      <Offers />
    </main>
  );
}
