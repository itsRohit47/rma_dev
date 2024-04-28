import Image from "next/image";
import Link from "next/link";

export default function GridCard(props) {
  return (
    <Link
      href={props.to}
      className="relative group  overflow-hidden min-w-[300px] min-h-[500px]"
    >
      <Image
        src={`https:${props.img}`}
        alt={props.title}
        width={2000}
        height={2000}
        className="object-cover h-full w-full transition duration-300 group-hover:scale-110"
      />

      <div className="absolute w-full h-full bg-black group-hover:bg-red-800 opacity-40 group-hover:opacity-55 transition duration-300 inset-0"></div>
      <div className="text-white absolute inset-0 top-1/2 -translate-y-1/2 w-full h-max p-4  text-center tracking-widest">
        <div className="font-bold">{props.loc}</div>
        <div className="font-Rma text-4xl">{props.title}</div>
      </div>
    </Link>
  );
}
