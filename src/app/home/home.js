"use client";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image"; // put your uploaded image in /public and rename it
import { ChipCustomAnimation } from "./offerBanner";
export default function HeroSection({ landingPage }) {
  const { Offer, landingPageText, mobileNumber } = landingPage;
  return (
    <section className="relative h-[95vh] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/LandingPageBG.png"
        alt="Exotic Destination"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-3xl px-6">
        {Offer && <ChipCustomAnimation value={Offer}></ChipCustomAnimation>}

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Shreenath Cleaning Services
        </h1>
        <p className="text-lg md:text-xl mb-6">{landingPageText}</p>
        <button
          className="bg-green-500 px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition flex justify-center items-center gap-3 mx-auto"
          onClick={() => window.open(`https://wa.me/${mobileNumber}`, "_blank")}
        >
          <FaWhatsapp className="text-3xl" /> PLAN YOUR CLEANING
        </button>
      </div>
    </section>
  );
}
