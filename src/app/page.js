import LatestProjects from "@/components/LatestProjects";
import AboutusHome from "@/components/AboutusHome";
import Image from "next/image";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <div>
      <div className="h-screen relative">
        {/* bg-image fixed */}
        <Image
          src="/images/rails.jpeg"
          alt=""
          width={2000}
          height={2000}
          className="object-cover w-full h-full fixed top-0"
        ></Image>
        {/* overlay - fixed as well */}
        <div className="inset-0 bg-black opacity-60 fixed top-0"></div>
        {/* main content */}
        <main className="absolute inset-0 top-1/2 -translate-y-1/2 w-screen">
          {/* hero content */}
          <div className="text-center w-full h-max text-white  flex flex-col items-center justify-center gap-3 mb-32">
            <div className="text-6xl">
              Providing Civil Construction and Electrical Infrastructure
              Services Across Victoria
            </div>
            <div className="text-base max-w-4xl">
              We deliver comprehensive infrastructure services across Victoria,
              specializing in earthworks, drainage, roads, subdivisions, rail,
              recreation facilities, and electrical infrastructure. Our
              expertise spans residential, commercial, and industrial
              developments, ensuring successful project outcomes for our
              clients.
            </div>
            <div className="flex gap-2 items-center justify-center w-full">
              <div className="group">
                <div className="flex items-center justify-center gap-2 border px-5 py-2 w-max group-hover:cursor-pointer group-hover:bg-blue-500 transition duration-300">
                  <div className="group-hover:shadow-xl">Enquire Now</div>
                  <div className="group-hover:translate-x-1 transition duration-300">
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
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="group">
                <div className="flex items-center justify-center gap-2 border px-5 py-2 w-max group-hover:cursor-pointer group-hover:bg-blue-500 transition duration-300">
                  <div className="group-hover:shadow-xl">
                    Download Capability Statement
                  </div>
                  <div className="group-hover:translate-x-1 transition duration-300">
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
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* main content */}
          <LatestProjects></LatestProjects>
          <AboutusHome></AboutusHome>
          <Cta></Cta>
        </main>
      </div>
    </div>
  );
}
