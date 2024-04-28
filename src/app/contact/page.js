"use client";
// imports
import Link from "next/link";
import Image from "next/image";
import Cta from "@/components/cta";
import Hero from "@/components/Hero";

// main function export
export default function Contact() {
  // function to handle the form submission
  async function handleSubmit(event) {
    event.preventDefault();
    const submitButton = event.target.querySelector(".submit-button");
    submitButton.disabled = true;
    submitButton.classList.add("processing");
    const formData = new FormData(event.target);
    formData.append("access_key", "dc2ad19f-c61a-455e-8b72-859c6b925261");
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      submitButton.classList.remove("processing");
      submitButton.classList.add("success");
      setTimeout(() => {
        submitButton.classList.remove("success");
        submitButton.disabled = false;
      }, 2000);
      event.target.reset();
    }
  }
  return (
    <main className="text-gray-950">
      <div>
        <Hero
          img="bg-team"
          heading="CONTACT OUR TEAM"
          subheading="Have any questions? Our team will get back to you as soon as we
              can"
          blink="#form"
          btitle="SEND AN ENQUIRY"
        ></Hero>

        {/* main */}
        <div className="grid grid-cols-1 md:grid-cols-2 p-52 gap-20" id="form">
          {/* form */}
          <div className="shadow-xl p-4 border">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="hidden"
                name="subject"
                value="New Message from RMA website"
              ></input>
              {/* first name */}
              <div className="flex flex-col">
                <label for="fname" className="font-semibold mb-2">
                  First Name
                </label>
                <input
                  id="fname"
                  name="First-name"
                  type="text"
                  placeholder="First Name"
                  className="border p-2 focus:outline-none"
                  required
                ></input>
              </div>
              {/* last name */}
              <div className="flex flex-col">
                <label for="lname" className="font-semibold mb-2">
                  Last Name
                </label>
                <input
                  id="lname"
                  name="Last-name"
                  type="text"
                  placeholder="Last Name"
                  className="border p-2 focus:outline-none"
                  required
                ></input>
              </div>
              {/* email */}
              <div className="flex flex-col">
                <label for="company" className="font-semibold mb-2">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="email"
                  placeholder="you@company.com"
                  className="border p-2 focus:outline-none"
                  required
                ></input>
              </div>
              {/* phone */}
              <div className="flex flex-col">
                <label for="phone" className="font-semibold mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="0412345678"
                  className="border p-2 focus:outline-none"
                  required
                ></input>
              </div>
              {/* message */}
              <div className="flex flex-col">
                <label for="message" className="font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  type="text"
                  placeholder="Leave us a message..."
                  rows="5"
                  className="border p-2 focus:outline-none"
                  required
                ></textarea>
              </div>
              {/* services */}
              <div>
                <div className="font-semibold mb-2">Services</div>
                <div className="flex flex-col flex-wrap items-start gap-3 font-semibold ">
                  <div className="flex items-center justify-center gap-2">
                    <input
                      type="checkbox"
                      id="earthworks"
                      name="earthworks"
                      value="Earthworks"
                      className=""
                    ></input>
                    <label for="earthworks">Earthworks</label>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <input
                      type="checkbox"
                      id="Drainage"
                      name="Drainage"
                      value="Drainage"
                    ></input>
                    <label for="Drainage">Drainage</label>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <input
                      type="checkbox"
                      id="Roads"
                      name="Roads"
                      value="Roads"
                    ></input>
                    <label for="one">Roads</label>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <input
                      type="checkbox"
                      id="Sub-Divisions"
                      name="Sub-Divisions"
                      value="Sub-Divisions"
                    ></input>
                    <label for="one">Sub-Divisions</label>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <input
                      type="checkbox"
                      id="Rail"
                      for="Rail"
                      value="Rail"
                    ></input>
                    <label for="one">Rail</label>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <input
                      type="checkbox"
                      id="Recreation-Facilities"
                      name="Recreation-Facilities"
                      value="Recreation Facilities"
                    ></input>
                    <label for="Recreation-Facilities">
                      Recreation Facilities
                    </label>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <input
                      type="checkbox"
                      id="Electrical-Infrastructure"
                      name="Electrical-Infrastructure"
                      value="Electrical Infrastructure"
                    ></input>
                    <label for="one">Electrical Infrastructure</label>
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="submit-button bg-white border-2 px-12 py-3 font-Rma text-xl"
              >
                SUBMIT
              </button>
            </form>
          </div>
          {/* additional info */}
          <div className="flex flex-col gap-10">
            {/* call us */}
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-Rma tracking-widest w-max">
                CALL US
              </div>
              <div className="text-gray-600">
                Call our team Mon-Fri from 9am to 5pm.
              </div>
              <Link href="tel:0352922066" className="underline w-max">
                03 52 922 066
              </Link>
            </div>
            {/* visit us */}
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-Rma tracking-widest">VISIT US</div>
              <div className="text-gray-600">
                Chat to us in-person at our Geelong HQ.
              </div>
              <Link
                href="https://maps.app.goo.gl/dJU6FsxnnRv5Lvqk6"
                target="_blank"
                className="underline"
              >
                16-18 Brougham St, Geelong, Victoria
              </Link>
            </div>
            {/* map */}
            <div className="border h-full p-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1249.820794342214!2d144.35777195713695!3d-38.14470233225193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad4141d51e81b85%3A0xda4267994f3fe79c!2s16-18%20Brougham%20St%2C%20Geelong%20VIC%203220!5e0!3m2!1sen!2sau!4v1713773350868!5m2!1sen!2sau"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Cta></Cta>
    </main>
  );
}
