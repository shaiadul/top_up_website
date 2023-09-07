"use client";

import { useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import TopNav from "./topnav";

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef();

  return (
    <nav className="shadow-xl fixed top-0 w-full">
      <TopNav />
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="ml-[-30px]">
              <Link href="/">
                <Image
                  src="https://dcassetcdn.com/design_img/2078023/595843/595843_11051780_2078023_2014012c_image.png"
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-44 h-36 "
                />
              </Link>
            </div>
            <div className="hidden lg:block">
              <div className="ml-5 md:ml-0 lg:ml-10 xl:ml-12 flex items-baseline space-x-4"></div>
            </div>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center justify-center space-x-4 ga">
              <li className="inline-block ">
                <Link
                  className="text-[#50DBB4] hover:text-gray-600 duration-500"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="inline-block relative group ">
                <Link
                  className="text-[#50DBB4] hover:text-gray-600 duration-500 "
                  href="/"
                >
                  Games
                </Link>
                <div className="hidden group-hover:block h-60 w-[500px] absolute left-0 shadow-xl border-2 border-[#50dbb464] rounded-md bg-gray-50 duration-200">

                </div>
              </li>
              <li className="inline-block ">
                <Link
                  className="text-[#50DBB4] hover:text-gray-600 duration-500"
                  href="/"
                >
                  Information
                </Link>
              </li>
              
              
            </ul>
          </div>

          <div className="hidden lg:block">
            <ul>
              <li className="inline-block ">
                <button className="btn border border-[#50DBB4] hover:bg-[#50DBB4] font-sm py-1 px-3 hover:text-white rounded-md duration-500">
                  <Link href="/"> SignUp</Link>
                </button>
              </li>
              <li className="inline-block ">
                <button className="btn border border-[#50DBB4] hover:bg-[#50DBB4] font-sm ml-2 py-1 px-3 hover:text-white rounded-md duration-500">
                  <Link href="/"> Login</Link>
                </button>
              </li>
            </ul>
          </div>

          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className=" inline-flex items-center justify-center p-2 rounded-md HeadColor text-xl hover:text-[#50DBB4]  "
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterhref="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leavehref="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={divRef} className=" pt-2 pb-3 space-y-1 sm:px-3">
              <div className=" flex justify-start align-middle ml-4 pr-3 text-md ">
                <button className="loginButton HeadColor text-[15px] md:text-[17px] lg:text-[20px] font-bold py-2 mr-5">
                  <Link href="/signUp"> Login</Link>
                </button>

                <button className=" loginButton normalColor text-[15px] md:text-[17px] lg:text-[20px] font-bold py-2">
                  <Link href="/signUp">sign Up</Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default MainNav;
