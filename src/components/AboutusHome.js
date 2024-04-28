import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
export default function AboutusHome() {
  return (
    <div className=" p-24 h-max grid xl:grid-cols-2 gap-10 leading-7">
      <div className="">
        <div className="font-bold tracking-widest text-blue-500">ABOUT US</div>
        <br></br>
        <div className="font-Rma text-6xl tracking-wider">
          Rooted in History, Driven by the Future
        </div>
        <br></br>
        <div className="">
          RMA Civil is a civil construction company specialising in the full
          range of civil infrastructure and electrical works across the
          commercial, government and industrial sectors. With a commitment to
          delivery excellence, we have built a reputation based on reliability
          and a desire to achieve results.
        </div>
        <br></br>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <div className="font-Rma text-5xl">20+ years</div>
            <div className="font-medium text-gray-600 max-w-sm">
              of expertise in civil infrastructure and project delivery
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="font-Rma text-5xl">100+ projects</div>
            <div className="font-medium text-gray-600  max-w-sm">
              successfully delivered across vicotria with excellence
            </div>
          </div>
        </div>
        <br></br>
        <div className="flex flex-col gap-3 flex-wrap ">
          <Button title="OUR STORY" to="/about"></Button>
          <Button title="OUR VALUES" to="/about"></Button>
          <Button title="OUR VISION" to="/about"></Button>
        </div>
      </div>
      <div>
        <Image
          src="/images/electrical.jpeg"
          alt=""
          width={2000}
          height={2000}
          className="object-cover h-full w-full"
        ></Image>
      </div>
    </div>
  );
}
