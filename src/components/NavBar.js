"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

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
        scrolled ? "backdrop-blur-sm transition duration-300" : ""
      } flex items-center justify-between  fixed w-full z-10 p-4 text-white`}
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
      <ul className="hidden md:flex items-center space-x-4 z-10">
        <li>
          <Link href="/services" className="">
            Services
          </Link>
        </li>
        <li>
          <Link href="/projects" className="">
            Projects
          </Link>
        </li>
        <li>
          <Link href="/team" className="">
            Team
          </Link>
        </li>
        <li>
          <Link href="/about" className="">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
