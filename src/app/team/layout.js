import Cta from "@/components/cta";
import Hero from "@/components/Hero";
export const metadata = {
  title: "RMA Civil Construction | Our Team",
  description: "Website by Rohit Bajaj",
};

export default function TeamsLayout({ children }) {
  return (
    <div>
      <Hero
        img="bg-team"
        heading="MEET THE LEADERSHIP"
        subheading="At RMA, we believe that our people is our difference. We are a
            forward thinking, people-centric business, that recognises the
            importance of working as one team towards a common goal."
        blink="#team"
        btitle="VIEW ALL"
      ></Hero>
      {children}
      <Cta></Cta>
    </div>
  );
}
