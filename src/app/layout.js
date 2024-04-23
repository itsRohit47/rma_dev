import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });
import dotenv from "dotenv";
dotenv.config();

export const metadata = {
  title: "RMA Civil Construction | Home",
  description: "Website by Rohit Bajaj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
