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
      <div className="p-24">
        <div className="text-center">
          <div className="p-10 bg-gray-50 rounded-lg">
            <div className="font-Rma text-4xl tracking-widest">WHO WE ARE</div>
            <br></br>
            <div>
              RMA Civil is a civil construction company specialising in the full
              range of civil infrastructure and electrical works across the
              commercial, government and industrial sectors. With a commitment
              to delivery excellence, we have built a reputation based on
              reliability and a desire to achieve results.
            </div>
          </div>
        </div>
        <br></br>
        <div className="text-center">
          <div className="p-10 bg-gray-50 rounded-lg">
            <div className="font-Rma text-4xl tracking-widest">OUR VISION</div>
            <br></br>
            <div>
              Is to be recognised as a leading multi-disciplinary civil business
              that provides certainty for our clients, through excellence in
              delivery and positive engagement. Our culture is what sets us
              apart and our shared values is why we are the partner of choice.
            </div>
          </div>
        </div>
        <br></br>
        <div className="text-center">
          <div className="p-10 bg-gray-50 rounded-lg">
            <div className="font-Rma text-4xl tracking-widest">
              WHY CHOOSE US
            </div>
            <br></br>
            <div>
              <div className="">
                {" "}
                Choosing RMA, you are not just getting any company but a company
                with a common goal, to provide value for our clients and make a
                real difference in the community!{" "}
                <span className="font-bold">
                  Driving the success of the company are two fundamental
                  objectives:
                </span>
              </div>
              <br></br>
              <div className="grid grid-cols-2 gap-28">
                <div className="flex  flex-col items-center justify-start gap-4">
                  {" "}
                  <div className="bg-blue-500 border-[10px] border-gray-200 font-Rma text-xl rounded-full text-white w-6 h-6 p-4 flex items-center justify-center">
                    1
                  </div>
                  <div className="text-base">
                    To create long term relationships with our employees,
                    clients, stakeholders, and communities.
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start gap-4">
                  {" "}
                  <div className="bg-blue-500 border-[10px] border-gray-200 font-Rma text-xl rounded-full text-white w-6 h-6 p-4 flex items-center justify-center">
                    2
                  </div>
                  <div className="text-base">
                    To provide high quality service for our clients, measured by
                    our performance and consistency in safety, technical
                    excellence, innovation, and delivery.
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <br></br>
        <div className="text-center">
          <div className="p-10 bg-gray-50 rounded-lg">
            <div className="font-Rma text-4xl tracking-widest">
              OUR STRENGHTS
            </div>
            <br></br>
            <br></br>
            <div className="grid grid-cols-2 gap-20">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="bg-blue-500 border-[10px] border-gray-200 font-Rma text-xl rounded-full text-white w-6 h-6 p-4 flex items-center justify-center">
                  1
                </div>
                <div className="font-Rma text-3xl">OUR PEOPLE</div>
                <div className="text-gray-600">
                  highly skilled workforce, family oriented, well trained and
                  engaged
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="bg-blue-500 border-[10px] border-gray-200 font-Rma text-xl rounded-full text-white w-6 h-6 p-4 flex items-center justify-center">
                  2
                </div>
                <div className="font-Rma text-3xl">OUR EQUIPMENT</div>
                <div className="text-gray-600">
                  Our fleet of plant and equipment is latest technology, fir for
                  purpose for all project types
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="bg-blue-500 border-[10px] border-gray-200 font-Rma text-xl rounded-full text-white w-6 h-6 p-4 flex items-center justify-center">
                  3
                </div>
                <div className="font-Rma text-3xl">OUR RELATIONSHIPS</div>
                <div className="text-gray-600">
                  Build on past performance and trust with repeat work. We value
                  the community we work in and have pride in all that we do
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="bg-blue-500 border-[10px] border-gray-200 font-Rma text-xl rounded-full text-white w-6 h-6 p-4 flex items-center justify-center">
                  4
                </div>
                <div className="font-Rma text-3xl">INNOVATIVE MINDSET</div>
                <div className="text-gray-600">
                  Conduct ourselves to highest level of safety standards, we
                  find ways to improve productivity and keep our people safe)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Cta></Cta>
    </div>
  );
}
