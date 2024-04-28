import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";

import dotenv from "dotenv";
dotenv.config();

export const metadata = {
  title: "RMA Civil Construction | Home",
  description: "Website by Rohit Bajaj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="no-scrollbar scroll-smooth">
      <body className="overflow-x-hidden ">
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
