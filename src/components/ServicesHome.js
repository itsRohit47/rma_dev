"use client";
import Card from "./Card";
import Button from "./Button";
import { useRef } from "react";

export default function ServicesHome() {
  const containerRef = useRef(null);

  const handlePrev = () => {
    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft - 360,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft + 360,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-24 bg-zinc-950 text-white">
      <div className="grid lg:grid-cols-2">
        <div className="">
          <div className="font-bold tracking-widest text-blue-500">
            OUR SERVICES
          </div>
          <br></br>
          <div className="font-Rma text-6xl tracking-wider">
            Our Core Capabilities
          </div>
        </div>
        <div className="w-full ">
          Our comprehensive range of civil construction services covers all
          aspects of infrastructure development, from earthworks and drainage to
          roads, subdivisions, rail, and recreation facilities. We also provide
          expertise in electrical infrastructure and maintenance. Whether it's a
          small-scale development or a large-scale project, our team has the
          expertise and experience to deliver high-quality results.
          <br></br>
          <br></br>
          <Button to="" title="FIND MORE"></Button>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="relative">
        <button
          className="absolute z-10 top-1/2 -left-8 border-[6px] -translate-y-1/2 border-silver-700 rounded-full bg-gray-950 hover:bg-gray-800 p-4"
          onClick={handlePrev}
        >
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
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          className="absolute z-10 top-1/2 -right-8 border-[6px] -translate-y-1/2 border-silver-700 rounded-full bg-gray-950 hover:bg-gray-800 p-4"
          onClick={handleNext}
        >
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
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
        <div
          className="flex overflow-x-scroll no-scrollbar relative gap-4"
          ref={containerRef}
        >
          <Card
            title="EARTHWORKS"
            img="earthworks.jpg"
            to=""
            des="We provide comprehensive earthworks services, including cut and fill, formation and batters, water retention basins, and more, to prepare your site for construction."
          ></Card>
          <Card
            title="DRAINAGE"
            img="drainage.jpeg"
            des="Our drainage services include stormwater management, culvert installation, sewer and water main construction, and more, to ensure efficient water flow and protection from erosion."
            to=""
          ></Card>
          <Card
            title="ROADWORKS"
            img="roads.jpeg"
            des="We design and build roads, highways, and intersections, including pavement rehabilitation, retaining wall structures, and road safety improvements, to ensure safe and efficient transportation."
            to=""
          ></Card>
          <Card
            title="SUB DIVISIONS"
            img="subdivision.jpg"
            des="Our team develops residential, commercial, and industrial sub-divisions, including site preparation, road construction, and utilities installation, to create functional and sustainable communities."
            to=""
          ></Card>
          <Card
            title="RAILWAYS"
            img="rails.jpeg"
            des="We provide expertise in rail construction, including access tracks, station carparks, and combined service routes, to support the growth of rail transportation."
            to=""
          ></Card>
          <Card
            title="RECREATION FACILITIES"
            img="recreation.jpg"
            des="We design and build sports fields, shared user paths, playgrounds, and other recreational facilities, to create safe and enjoyable spaces for the community."
            to=""
          ></Card>
          <Card
            title="ELECTRICAL INFRA-STRUCTURE"
            img="electrical.jpeg"
            des="Our team provides electrical infrastructure solutions, including trenching, conduit installation, cable hauling, and maintenance, to support the reliable transmission and distribution of electricity."
            to=""
          ></Card>
        </div>
      </div>
    </div>
  );
}
