import Image from "next/image";
import Cta from "@/components/cta";
export default function ServicesHome() {
  return (
    <div>
      {/* header */}
      <div className="border relative h-screen">
        {/* <Image
          src="/images/team.jpeg"
          alt="team image RMA"
          width={2000}
          height={2000}
          className="h-full w-full object-cover absolute inset-0"
        ></Image> */}
        <div className="absolute h-full w-full bg-black inset-0 opacity-50 z-0"></div>
        <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-4xl font-semibold">Core Capabilities</div>
          <div className="">
            We deliver comprehensive infrastructure services across Victoria,
            specializing in earthworks, drainage, roads, subdivisions, rail,
            recreation facilities, and electrical infrastructure. Our expertise
            spans residential, commercial, and industrial developments, ensuring
            successful project outcomes for our clients.
          </div>
        </div>
      </div>
      {/* sections like vision, value etc */}
      <div className="grid grid-cols-2 gap-4 p-10 -translate-y-52">
        <div className="bg-white shadow-xl w-full h-52 hover:cursor-pointer relative group overflow-hidden">
          <Image
            src="/images/earthworks.jpg"
            alt="team image RMA"
            width={2000}
            height={2000}
            className="h-full w-full object-cover object-bottom absolute inset-0 group-hover:scale-110 transition duration-300"
          ></Image>
          <div className="absolute h-full w-full bg-black inset-0 opacity-50 z-0 group-hover:bg-blue-500 transition duration-300"></div>
          <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex items-center justify-between gap-2">
            <div className="text-2xl font-semibold">EARTHWORKS</div>
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
            src="/images/drainage.jpeg"
            alt="team image RMA"
            width={2000}
            height={2000}
            className="h-full w-full object-cover absolute inset-0 group-hover:scale-110 transition duration-300"
          ></Image>
          <div className="absolute h-full w-full bg-black inset-0 opacity-50 z-0 group-hover:bg-blue-500 transition duration-300"></div>
          <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex items-center justify-between gap-2">
            <div className="text-2xl font-semibold">DRAINAGE</div>
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
            src="/images/roads.jpeg"
            alt="team image RMA"
            width={2000}
            height={2000}
            className="h-full w-full object-cover absolute inset-0 group-hover:scale-110 transition duration-300"
          ></Image>
          <div className="absolute h-full w-full bg-black inset-0 opacity-50 z-0 group-hover:bg-blue-500 transition duration-300"></div>
          <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex items-center justify-between gap-2">
            <div className="text-2xl font-semibold">ROADS</div>
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
            src="/images/subdivision.jpg"
            alt="team image RMA"
            width={2000}
            height={2000}
            className="h-full w-full object-cover absolute inset-0 group-hover:scale-110 transition duration-300"
          ></Image>
          <div className="absolute h-full w-full bg-black inset-0 opacity-50 z-0 group-hover:bg-blue-500 transition duration-300"></div>
          <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex items-center justify-between gap-2">
            <div className="text-2xl font-semibold">SUB-DIVISIONS</div>
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
            src="/images/rails.jpeg"
            alt="team image RMA"
            width={2000}
            height={2000}
            className="h-full w-full object-cover absolute inset-0 group-hover:scale-110 transition duration-300"
          ></Image>
          <div className="absolute h-full w-full bg-black inset-0 opacity-50 z-0 group-hover:bg-blue-500 transition duration-300"></div>
          <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex items-center justify-between gap-2">
            <div className="text-2xl font-semibold">RAIL</div>
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
            src="/images/recreation.jpg"
            alt="team image RMA"
            width={2000}
            height={2000}
            className="h-full w-full object-cover absolute inset-0 group-hover:scale-110 transition duration-300"
          ></Image>
          <div className="absolute h-full w-full bg-black inset-0 opacity-50 z-0 group-hover:bg-blue-500 transition duration-300"></div>
          <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex items-center justify-between gap-2">
            <div className="text-2xl font-semibold">RECREATION FACILITIES</div>
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
            src="/images/electrical.jpeg"
            alt="team image RMA"
            width={2000}
            height={2000}
            className="h-full w-full object-cover absolute inset-0 group-hover:scale-110 transition duration-300"
          ></Image>
          <div className="absolute h-full w-full bg-black inset-0 opacity-50 z-0 group-hover:bg-blue-500 transition duration-300"></div>
          <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center flex items-center justify-between gap-2">
            <div className="text-2xl font-semibold">
              ELECTRICAL INFRASTRUCTURE
            </div>
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

      <Cta></Cta>
    </div>
  );
}
