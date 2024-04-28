"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

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
          <p className="w-max">Home{pathname}</p>
        </Link>
      </div>
      <ul className="hidden md:flex items-center space-x-4 z-10 font-Rma text-xl ">
        <li>
          <Link
            href="/services"
            className={pathname == "/services" ? "border px-3 py-1" : ""}
          >
            SERVICES
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={pathname == "/projects" ? "border px-3 py-1" : ""}
          >
            PROJECTS
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={pathname == "/about" ? "border px-3 py-1" : ""}
          >
            ABOUT
          </Link>
        </li>
        <li>
          <Link
            href="/team"
            className={pathname == "/team" ? "border px-3 py-1" : ""}
          >
            TEAM
          </Link>
        </li>
        <li>
          <Link
            href="/careers"
            className={pathname == "/careers" ? "border px-3 py-1" : ""}
          >
            CAREERS
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={pathname == "/contact" ? "border px-3 py-1" : ""}
          >
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
