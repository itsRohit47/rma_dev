import Cta from "@/components/cta";
import Image from "next/image";

export const metadata = {
  title: "RMA Civil Construction | Our Team",
  description: "Website by Rohit Bajaj",
};

export default function TeamsLayout({ children }) {
  return (
    <div>
      {/* header */}
      <div id="header" className="border relative h-96">
        <Image
          src="/images/team.jpeg"
          alt="team image RMA"
          width={2000}
          height={2000}
          className="h-full w-full object-cover absolute inset-0"
        ></Image>
        <div className="absolute h-full w-full bg-black inset-0 opacity-50 z-0"></div>
        <div className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-4xl font-semibold">Our Team</div>
          <div className="">
            At RMA, we believe that our people is our difference. We are a
            forward thinking, people-centric business, that recognises the
            importance of working as one team towards a common goal.
          </div>
        </div>
      </div>
      {children}
      {/* CTA */}
      <Cta></Cta>
    </div>
  );
}
