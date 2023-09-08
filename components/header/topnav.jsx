import Link from "next/link";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import facebookIcon from "../../public/facebook-3-logo-png-transparent.png";
import youtubeIcon from "../../public/youtube-icon-logo-png-transparent.png";
import whatsappIcon from "../../public/whatsapp-logo-transparent.png";

function TopNav() {
  return (
    
      <section className="container mx-auto px-5 flex justify-between items-center py-3">
        <div></div>
        <div className="flex justify-center items-center gap-3">
          <Link
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100052893668039"
          >
            <Image
              src={facebookIcon}
              alt="logo"
              width={100}
              height={100}
              className="w-7 h-7 hover:animate-ping duration-700 "
            />
          </Link>
          <Link target="_blank" href="/">
            <Image
              src={youtubeIcon}
              alt="logo"
              width={100}
              height={100}
              className="w-7 h-7 rounded-full hover:animate-ping duration-700"
            />
          </Link>
          <Link target="_blank" href="https://wa.me/01740673877">
            <Image
              src={whatsappIcon}
              alt="logo"
              width={100}
              height={100}
              className="w-9 h-9 hover:animate-ping duration-700 "
            />
          </Link>
          <Link href="/" className="flex justify-center items-center gap-2 btn hover:opacity-60 text-white border border-[#50DBB4] bg-[#50dbb4c6] hover:bg-[#50DBB4] duration-500 py-1 px-2 rounded-md">
            <ArrowDownTrayIcon className="w-5 h-5 font-semibold" />
            Android App
          </Link>
        </div>
      </section>
  );
}

export default TopNav;
