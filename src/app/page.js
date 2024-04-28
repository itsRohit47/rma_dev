import HeroSection from "@/components/HeroSection";
import AboutusHome from "@/components/AboutusHome";
import Brands from "@/components/Brands";
import ServicesHome from "@/components/ServicesHome";
import FeaturedProjects from "@/components/FeaturedProjects";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <div className="">
      <HeroSection></HeroSection>
      <Brands></Brands>
      <AboutusHome></AboutusHome>
      <ServicesHome></ServicesHome>
      <FeaturedProjects></FeaturedProjects>
      <Cta></Cta>
    </div>
  );
}
