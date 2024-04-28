import Cta from "@/components/cta";
import Hero from "@/components/Hero";
export const metadata = {
  title: "RMA Civil Construction | Projects",
  description: "Website by Rohit Bajaj",
};

export default function ProjectsLayout({ children }) {
  return (
    <div>
      <Hero
        img="bg-project"
        heading="OUR PROJECTS"
        subheading="We are focused on delivering project outcomes. We understand that a
            successful project requires the team to share knowledge and work
            together. Our team deliver projects for civil infrastructure clients
            across Victoria."
        blink="/contact"
        btitle="I HAVE A PROJECT FOR RMA"
      ></Hero>
      {children}
      {/* CTA */}
      <Cta></Cta>
    </div>
  );
}
