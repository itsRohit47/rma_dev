import Image from "next/image";
import Marquee from "react-fast-marquee";
export default function Brands() {
  return (
    <div className=" bg-gray-100 w-screen grid lg:grid-cols-3">
      <div className="p-4 lg:px-20 lg:py-10 font-Rma text-xl tracking-widest">OUR CLIENTS INCLUDE</div>
      <div className="lg:col-span-2">
        <Marquee gradient={true} gradientColor="#f3f4f6">
          <Image
            src="/images/fh.svg"
            alt="fulton hogan logo"
            width={150}
            height={150}
            className="object-contain mx-10"
          ></Image>
          <Image
            src="/images/jh.svg"
            alt="fulton hogan logo"
            width={150}
            height={150}
            className="object-contain mx-10"
          ></Image>
          <Image
            src="/images/sw.svg"
            alt="fulton hogan logo"
            width={150}
            height={150}
            className="object-contain mx-10"
          ></Image>
          <Image
            src="/images/acc.svg"
            alt="fulton hogan logo"
            width={150}
            height={150}
            className="object-contain mx-10"
          ></Image>{" "}
          <Image
            src="/images/decmil.svg"
            alt="fulton hogan logo"
            width={150}
            height={150}
            className="object-contain mx-10"
          ></Image>{" "}
        </Marquee>
      </div>
    </div>
  );
}
