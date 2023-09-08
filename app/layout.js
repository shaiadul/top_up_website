import "./globals.css";
import { Inter } from "next/font/google";
import MainNav from "@/components/header/mainnav";
import AuthProvider from "@/components/authprovider/authprovider";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "top_up",
  description: "Generated by MD Shaiadul Bashar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <MainNav />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
