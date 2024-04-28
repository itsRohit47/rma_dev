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
          Rooted in History, Backed by something
        </div>
        <br></br>
        <div className="">
          Excepteur sunt non eiusmod ullamco cupidatat deserunt proident sunt
          sunt dolore consequat et. Cillum cillum do proident ad laboris.
          Occaecat cillum laboris commodo mollit do labore aute eu deserunt
          mollit duis eiusmod magna. Sint ad tempor reprehenderit eu mollit
          laboris. Irure anim elit fugiat veniam minim aliquip.
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
          <Button title="OUR STORY" to=""></Button>
          <Button title="OUR VALUES" to=""></Button>
          <Button title="OUR VISION" to=""></Button>
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
