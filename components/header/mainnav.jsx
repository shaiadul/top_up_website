"use client";

import { useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import TopNav from "./topnav";
import logo from "../../public/logo.png";
import victor from "../../public/vector.jpg";
import { MagnifyingGlassIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { signOut, useSession } from "next-auth/react";

function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
  const divRef = useRef();
  const session = useSession();

  return (
    <nav className="shadow-lg w-full">
      <TopNav />
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="ml-[-30px]">
              <Link href="/">
                <Image
                  src={logo}
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
            <ul className="flex items-center justify-center space-x-4 text-xl">
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
                <div className="hidden group-hover:block h-60 w-[500px] absolute left-0 shadow-xl border-2 border-[#50dbb464] rounded-md bg-gray-50 duration-200"></div>
              </li>
              <li className="inline-block relative group">
                <Link
                  className="text-[#50DBB4] hover:text-gray-600 duration-500"
                  href="/"
                >
                  Information
                </Link>
                <div className="hidden group-hover:block h-40 w-[200px] absolute left-10 shadow-xl border-2 border-[#50dbb464] rounded-md bg-gray-50 duration-200">
                  <ul className="p-3 text-gray-600 text-sm">
                    <li className=" hover:text-[#50DBB4] flex justify-center items-center mb-3">
                      <UserGroupIcon className="w-6 h-6 mr-2 font-semibold inline-block" />
                      <Link href="/">Privacy Policy Page</Link>
                    </li>
                    <li className="hover:text-[#50DBB4] flex justify-center items-center mb-3">
                      <UserGroupIcon className="w-6 h-6 mr-2 font-semibold inline-block" />
                      <Link href="/">Privacy Policy Page</Link>
                    </li>
                    <li className=" hover:text-[#50DBB4] flex justify-center items-center mb-3">
                      <UserGroupIcon className="w-6 h-6 mr-2 font-semibold inline-block" />
                      <Link href="/">Privacy Policy Page</Link>
                    </li>
                    <li className=" hover:text-[#50DBB4] flex justify-center items-center mb-3">
                      <UserGroupIcon className="w-6 h-6 mr-2 font-semibold inline-block" />
                      <Link href="/">Privacy Policy Page</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <div className="inline-block mr-2 py-1 px-3 border-2 border-[#50DBB4] rounded-full ">
              <input
                className="focus:outline-none bg-transparent"
                type="text"
                placeholder="Enter your key-word"
              />
              <MagnifyingGlassIcon className="w-6 h-6 font-semibold text-gray-400 inline-block" />
            </div>
          </div>

          <div className="hidden lg:block">
            <ul className="flex justify-center items-center">
              {session.data?.user ? (
                <li className="inline-block ">
                  <button
                    onClick={() => signOut("google")}
                    className="btn border border-[#50DBB4] hover:bg-[#50DBB4] font-sm ml-2 py-1 px-3 hover:text-white rounded-md duration-500"
                  >
                    <Link href="/"> logOut</Link>
                  </button>
                </li>
              ) : (
                <li className="inline-block ">
                  <button className="btn border border-[#50DBB4] hover:bg-[#50DBB4] font-sm  py-1 px-3 hover:text-white rounded-md duration-500">
                    <Link href="/login"> Login</Link>
                  </button>
                </li>
              )}

              {session.data?.user ? (
                <li className="inline-block ">
                  <Link href="/">
                    <Image
                      src={session.data?.user?.image}
                      alt="logo"
                      width={100}
                      height={100}
                      className="w-9 h-9 rounded-full border border-[#50DBB4] ml-2"
                    />
                  </Link>
                </li>
              ) : (
                <li className="inline-block ">
                  <Link href="/">
                    <Image
                      src={victor}
                      alt="logo"
                      width={100}
                      height={100}
                      className="w-9 h-9 rounded-full border border-[#50DBB4] ml-2"
                    />
                  </Link>
                </li>
              )}
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
              <div className="block">
                <ul className="flex items-center justify-center space-x-4 text-xl">
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
                    <div className="hidden group-hover:block h-60 w-[400px] absolute left-[-100px] shadow-xl border-2 border-[#50dbb464] rounded-md bg-gray-50 duration-200"></div>
                  </li>
                  <li className="inline-block relative group">
                    <Link
                      className="text-[#50DBB4] hover:text-gray-600 duration-500"
                      href="/"
                    >
                      Information
                    </Link>
                    <div className="hidden group-hover:block h-40 w-[200px] absolute left-0 shadow-xl border-2 border-[#50dbb464] rounded-md bg-gray-50 duration-200">
                      <ul className="p-3 text-gray-600 text-sm">
                        <li className=" hover:text-[#50DBB4] flex justify-center items-center mb-3">
                          <UserGroupIcon className="w-6 h-6 mr-2 font-semibold inline-block" />
                          <Link href="/">Privacy Policy Page</Link>
                        </li>
                        <li className="hover:text-[#50DBB4] flex justify-center items-center mb-3">
                          <UserGroupIcon className="w-6 h-6 mr-2 font-semibold inline-block" />
                          <Link href="/">Privacy Policy Page</Link>
                        </li>
                        <li className=" hover:text-[#50DBB4] flex justify-center items-center mb-3">
                          <UserGroupIcon className="w-6 h-6 mr-2 font-semibold inline-block" />
                          <Link href="/">Privacy Policy Page</Link>
                        </li>
                        <li className=" hover:text-[#50DBB4] flex justify-center items-center mb-3">
                          <UserGroupIcon className="w-6 h-6 mr-2 font-semibold inline-block" />
                          <Link href="/">Privacy Policy Page</Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex justify-center mx-auto">
                <div className="my-4 mr-2 py-1 px-3 border-2 border-[#50DBB4] rounded-full ">
                  <input
                    className="focus:outline-none bg-transparent"
                    type="text"
                    placeholder="Enter your key-word"
                  />
                  <MagnifyingGlassIcon className="w-6 h-6 font-semibold text-gray-400 inline-block" />
                </div>
              </div>
              <div className="flex justify-center">
                <ul className="mb-2">
                  <li className="inline-block ">
                    <button className="btn border border-[#50DBB4] hover:bg-[#50DBB4] font-sm py-1 px-3 hover:text-white rounded-md duration-500">
                      <Link href="/"> SignUp</Link>
                    </button>
                  </li>
                  <li className="inline-block ">
                    <button className="btn border border-[#50DBB4] hover:bg-[#50DBB4] font-sm ml-2 py-1 px-3 hover:text-white rounded-md duration-500">
                      <Link href="/login"> Login</Link>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}

export default MainNav;
