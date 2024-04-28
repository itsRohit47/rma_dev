import Image from "next/image";
import Cta from "@/components/cta";
import Hero from "@/components/Hero";
export default function Careers() {
  return (
    <div>
      <Hero
        heading="CAREERS"
        subheading="We are currently not hiring, however if there are any open positions, we will be listing them seek.com.au, check back later."
        blink=""
        btitle="APPLY FOR A JOB"
        img="bg-careers"
      ></Hero>
      <Cta></Cta>
    </div>
  );
}
