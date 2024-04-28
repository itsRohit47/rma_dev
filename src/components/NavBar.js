"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Breadcrumb from "./BreadCrumbs";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // adjust the value to your liking
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`${
        scrolled ? "bg-zinc-950 transition duration-300 border-b" : ""
      } flex items-center justify-between fixed w-full h-max z-20 p-4 text-white font-bold tracking-widest `}
    >
      <div className="w-52">
        <Link href="/">
          <Image
            src="/images/logo.svg"
            alt=""
            width={250}
            height={350}
            className="object-cover"
          ></Image>
        </Link>
      </div>
      <ul className="hidden md:flex items-center space-x-4 z-10 font-Rma text-xl ">
        <li>
          <Link href="/services" className="hover:underline transition">
            SERVICES
          </Link>
        </li>
        <li>
          <Link href="/projects" className="hover:underline transition">
            PROJECTS
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline transition">
            ABOUT
          </Link>
        </li>
        <li>
          <Link href="/careers" className="hover:underline transition">
            CAREERS
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline transition">
            CONTACT
          </Link>
        </li>
      </ul>
      {/* <Breadcrumb></Breadcrumb> */}
    </nav>
  );
}
