import Image from "next/image";

export default function Home() {
  return (
    <main className="h-screen relative">
      <Image
        src="/images/earthworks.jpg"
        alt=""
        width={2000}
        height={2000}
        className="object-cover w-full h-full"
      ></Image>
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl flex items-center justify-center">
        Home Page being built... :] check back soon
      </div>
    </main>
  );
}
