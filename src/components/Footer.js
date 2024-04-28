import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="p-24 bg-zinc-900 grid grid-cols-3">
      <div>
        <div className="text-gray-200 font-Rma text-2xl">Site</div>
        <br></br>
        <ul className="text-white font-Rma text-xl">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/careers">Carreers</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <div className="text-gray-200 font-Rma text-2xl">Others</div>
          <br></br>
          <ul className="text-white font-Rma text-xl">
            <li>
              <Link href="">Sitemap</Link>
            </li>
            <li>
              <Link href="">Terms and Conditions</Link>
            </li>
            <li>
              <Link href="">Legal</Link>
            </li>
            <li>
              <Link href="">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div>
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
        <br></br>
        <div className="text-white">
          RMA acknowledges the Traditional Owners of Country throughout
          Australia. We pay our respects to Elders past and present.
        </div>
        <div></div>
      </div>
    </div>
  );
}
