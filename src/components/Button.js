import Link from "next/link";
export default function Button(props) {
  return (
    <Link
      href={props.to}
      className="px-12 py-3 text-xl border-2 shadow-sm hover:shadow-xl text-center tracking-widest hover:text-white font-Rma hover:bg-blue-500 transition duration-300 hover:scale-105"
    >
      {props.title}
    </Link>
  );
}
