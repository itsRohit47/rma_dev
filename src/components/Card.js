import Image from "next/image";
import Link from "next/link";

export default function Card(props) {
  return (
    <Link
      href={props.to}
      className="relative group  overflow-hidden min-w-[360px] min-h-[500px] "
    >
      <Image
        src={`/images/${props.img}`}
        alt={props.title}
        width={2000}
        height={2000}
        className="object-cover h-full w-full transition duration-300 group-hover:scale-110"
      />

      <div className="absolute w-full h-full bg-black group-hover:bg-red-800 opacity-20 group-hover:opacity-55 transition duration-300 inset-0"></div>
      <div className="text-white absolute inset-0 w-full h-full p-4">
        <div className="font-Rma text-5xl text-center group-hover:scale-105 transition duration-300">
          {props.title}
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition duration-300 text-base text-center absolute top-1/2 -translate-y-1/2">
          {props.des}
        </div>
      </div>
    </Link>
  );
}
