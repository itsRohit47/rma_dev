import Image from "next/image";
import Link from "next/link";
export default function LatestProjects() {
  return (
    <div className="w-full mx-auto h-max text-white   backdrop-blur-sm p-10">
      <div className="p-2 w-full text-center tracking-widest text-lg ">
        <div className="text-white">LATEST PROJECTS</div>
        <Link href="" className="text-white text-sm hover:underline">
          View all
        </Link>
      </div>
      <div className="py-10 px-2 grid grid-cols-2 gap-4">
        <div className="bg-white shadow-xl w-full h-52 hover:cursor-pointer relative group overflow-hidden">
          <Image
            src="/images/rails.jpeg"
            alt="team image RMA"
            width={2000}
            height={2000}
            className="h-full w-full object-cover absolute inset-0 group-hover:scale-110 transition duration-300"
          ></Image>
          <div className="absolute h-full w-full bg-black inset-0 opacity-50 z-0 group-hover:bg-blue-500 transition duration-300"></div>
          <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex items-center justify-between gap-2">
            <div className="text-2xl font-semibold">WHO ARE WE</div>
            <div className="group-hover:translate-x-2 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-xl w-full h-52 hover:cursor-pointer relative group overflow-hidden">
          <Image
            src="/images/earthworks.jpg"
            alt="team image RMA"
            width={2000}
            height={2000}
            className="h-full w-full object-cover absolute inset-0 group-hover:scale-110 transition duration-300"
          ></Image>
          <div className="absolute h-full w-full bg-black inset-0 opacity-50 z-0 group-hover:bg-blue-500 transition duration-300"></div>
          <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex items-center justify-between gap-2">
            <div className="text-2xl font-semibold">WHO ARE WE</div>
            <div className="group-hover:translate-x-2 transition duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
