import Cta from "@/components/cta";
import Image from "next/image";
export const metadata = {
  title: "RMA Civil Construction | Projects",
  description: "Website by Rohit Bajaj",
};

export default function ProjectsLayout({ children }) {
  return (
    <div>
      {/* header */}
      <div id="header" className="border relative h-96">
        <Image
          src="/images/projectpage.jpeg"
          alt="team image RMA"
          width={2000}
          height={2000}
          className="h-full w-full object-cover absolute inset-0"
        ></Image>
        <div className="absolute h-full w-full bg-black inset-0 opacity-50 z-0"></div>
        <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-4xl font-semibold">Our Projects</div>
          <div className="">
            We are focused on delivering project outcomes. We understand that a
            successful project requires the team to share knowledge and work
            together. Our team deliver projects for civil infrastructure clients
            across Victoria.
          </div>
        </div>
      </div>

      {children}
      {/* CTA */}
      <Cta></Cta>
    </div>
  );
}
