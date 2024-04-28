import Image from "next/image";
import Cta from "@/components/cta";
import Hero from "@/components/Hero";
export default function AboutHome() {
  return (
    <div>
      <Hero
        heading="ABOUT US"
        subheading=" RMA Civil is a civil construction company specialising in the full range
        of civil infrastructure and electrical works across the commercial,
        government and industrial sectors. With a commitment to delivery
        excellence, we have built a reputation based on reliability and a desire
        to achieve results.."
        blink="/contact"
        btitle="WORK WITH US"
        img="bg-about"
      ></Hero>
      <Cta></Cta>
    </div>
  );
}
