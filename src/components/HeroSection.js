import Image from "next/image";
import Button from "./Button";
export default function HeroSection() {
  return (
    <div className="h-screen w-screen relative bg-fixed bg-cover bg-paralax">
      <div className="w-full h-full bg-gradient-to-r from-black from-10%"></div>
      <div className="absolute inset-0 top-1/3 -translate-y-1/4 p-20 h-max text-white leading-7 tracking-widest">
        <div className="text-7xl max-w-5xl font-Rma">
          Providing Civil Construction and Electrical Infrastructure Services
          Across Victoria
        </div>
        <br></br>
        <div className="text-lg max-w-3xl">
          We deliver comprehensive infrastructure services across Victoria,
          specializing in earthworks, drainage, roads, subdivisions, rail,
          recreation facilities, and electrical infrastructure. Our expertise
          spans residential, commercial, and industrial developments, ensuring
          successful project outcomes for our clients.
        </div>
        <br></br>
        <div className="flex gap-10 justify-start">
          <Button title="CAPABILITY STATEMENT" to=""></Button>
          <Button title="ENQUIRE NOW" to=""></Button>
        </div>
      </div>
    </div>
  );
}
