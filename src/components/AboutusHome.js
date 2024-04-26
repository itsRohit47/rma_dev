import Image from "next/image";
import Link from "next/link";
export default function AboutusHome() {
  return (
    <div className="w-full mx-auto h-max text-white mb-10 backdrop-blur-sm p-10">
      <div className="p-2 w-full text-center tracking-widest text-lg ">
        <div className="text-white">ABOUT US</div>
        <Link href="" className="text-white text-sm hover:underline">
          Find more
        </Link>
      </div>
      <div className="py-10 px-2 grid grid-cols-2 gap-4">
        <div className="p-2">
          <div>
            RMA Civil is a civil construction company specialising in the full
            range of civil infrastructure and electrical works across the
            commercial, government and industrial sectors. With a commitment to
            delivery excellence, we have built a reputation based on reliability
            and a desire to achieve results.
            <br></br>
            <br></br>
            We deliver comprehensive infrastructure services across Victoria,
            specializing in earthworks, drainage, roads, subdivisions, rail,
            recreation facilities, and electrical infrastructure. Our expertise
            spans residential, commercial, and industrial developments, ensuring
            successful project outcomes for our clients.
            <br></br>
            <br></br>
            <div>
              Learn more about our capabilities{" "}
              <Link className="underline" href="">
                here
              </Link>{" "}
            </div>
          </div>
          <br></br>
          <div className="flex flex-col gap-2">
            <Link
              href=""
              className="group flex items-center justify-center gap-2 w-max"
            >
              <div>Our History</div>
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
            </Link>
            <Link
              href=""
              className="group flex items-center justify-center gap-2 w-max"
            >
              <div>Our Vision</div>
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
            </Link>
            <Link
              href=""
              className="group flex items-center justify-center gap-2 w-max"
            >
              <div>Our Values</div>
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
            </Link>
            <Link
              href=""
              className="group flex items-center justify-center gap-2 w-max"
            >
              <div>Our Mission</div>
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
            </Link>
          </div>
        </div>
        <div>
          <Image
            src="/images/earthworks.jpg"
            alt=""
            width={2000}
            height={2000}
          ></Image>
        </div>
      </div>
    </div>
  );
}
