"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";

const Login = () => {
  const session = useSession();
  
  // if(session.status === "loading"){
  //     return <div>loading...</div>
  // }
  // if(session.status === "authenticated"){
  //     return <div> <button className="btn bg-red-300" onClick={() => signOut("google")}>logOut</button></div>
  // }
  // if(session.status === "unauthenticated"){
  //     return <button className="btn bg-blue-300" onClick={() => signIn("google")}>login</button>
  // } onClick={() => signIn("google")}

  return (
    <section class="container mx-auto">
      <div class="wrapper my-24">
      
        <div class="login ">
          <div className="flex mx-auto justify-center">
              <Link href="/">
                <Image
                  src={logo}
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-40 h-36 ]"
                />
              </Link>
            </div>
          <a class="facebook-login-btn">Log In with Facebook</a>

          <a class="twitter-login-btn">Log In with Twitter</a>

          <a onClick={() => signIn("google")} class="google-login-btn">Log In with Google</a>
        </div>
      </div>
    </section>
  );
};

export default Login;
