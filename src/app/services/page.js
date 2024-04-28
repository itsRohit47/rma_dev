import Hero from "@/components/Hero";
import CustomSection from "@/components/CustomSection";
import CustomSection2 from "@/components/CustomSection2";
import Cta from "@/components/cta";
export default function Services() {
  return (
    <div>
      <Hero
        heading="OUR SERVICES"
        subheading="We deliver comprehensive infrastructure services across Victoria, specializing in earthworks, drainage, roads, subdivisions, rail, recreation facilities, and electrical infrastructure. Our expertise spans residential, commercial, and industrial developments, ensuring successful project outcomes for our clients."
        blink="/contact"
        btitle="LET'S TALK"
        img="bg-service"
      ></Hero>
      <div id="earthworks">
        <CustomSection2
          heading="EARTHWORKS"
          list="CUT/FILL, FORMATION AND BATTERS, WATER RETENTION BASINS, WETLAND CONSTRUCTION, COMPOUNDS, HAUL ROADS"
          img="earthworks.jpg"
        ></CustomSection2>
      </div>
      <div id="drainage">
        <CustomSection
          heading="DRAINAGE"
          list="STORMWATER, CULVERTS AND GROSS POLLUTION TRAPS, CULVERTS, SEWER, WATER"
          img="drainage.jpeg"
        ></CustomSection>
      </div>
      <div id="roads">
        {" "}
        <CustomSection2
          heading="ROADWORKS"
          list="PAVEMENT REHABILITATION AND RECONSTRUCTION, RETAINING WALL STRUCTURES, SIGNALISED INTERSECTIONS, ROUNDABOUTS, SHOULDER WIDENINGS, TURNING LANES, ROAD SAFETY IMPROVEMENTS"
          img="roads.jpeg"
        ></CustomSection2>
      </div>
      <div id="sub">
        <CustomSection
          heading="SUB-DIVISIONS"
          list="RESIDENTIAL DEVELOPMENTS, COMMERCIAL AND INDUSTRIAL DEVELOPMENT"
          img="subdivision.jpg"
        ></CustomSection>
      </div>
      <div id="rails">
        <CustomSection2
          heading="RAILWORKS"
          list="ACCESS TRACKS AND COMPOUNDS, STATION CARPARKS AND FORECOURTS, BUS INTERCHANGES, COMBINED SERVICE ROUTE (ELECTRICAL AND COMMUNICATIONS)"
          img="rails.jpeg"
        ></CustomSection2>
      </div>
      <div id="recreation">
        {" "}
        <CustomSection
          heading="RECREATION FACILITIES"
          list="SPORTS FIELDS, SHARED USER PATHS, PLAYGROUNDS"
          img="recreation.jpg"
        ></CustomSection>
      </div>
      <div id="electrical">
        {" "}
        <CustomSection2
          heading="ELECTRICAL INFRASTRUCTURE"
          list="TRENCHING, CONDUITS AND COMBINED SERVICE BANKS, CABLE HAULING, POLE TO PIT WORK, UNDERGROUND FAULTS, MAINTENANCE"
          img="electrical.jpeg"
        ></CustomSection2>
      </div>
    </div>
  );
}
