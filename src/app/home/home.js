"use client";
// export function DefaultImg() {
//   return (
//     <img
//       className="h-[100vh] w-full object-contain  object-center shadow-2xl rounded-sm"
//       src="/LandingPageBG.png"
//       alt="nature image"
//     />
//   );
// }
"use client";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image"; // put your uploaded image in /public and rename it
export default function HeroSection() {
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
        <p className="text-lg mb-2">Save up to 20% on early bookings!</p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Shreenath Cleaning Services
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Experience spotless living and working spaces with Shreenath Cleaning
          Services. Our professional team delivers thorough, reliable, and
          affordable cleaning solutions for homes, offices, and commercial
          spaces. Whether you need regular maintenance or a one-time deep clean,
          we use eco-friendly products and modern techniques to ensure your
          environment is fresh, healthy, and welcoming. Trust us to handle the
          mess—so you can enjoy more of what matters most. Book your cleaning
          today and discover the difference!
        </p>
        <button
          className="bg-green-500 px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition flex justify-center items-center gap-3 mx-auto"
          onClick={() => window.open("https://wa.me/9370732823", "_blank")}
        >
          <FaWhatsapp className="text-3xl" /> PLAN YOUR CLEANING
        </button>
      </div>
    </section>
  );
}
