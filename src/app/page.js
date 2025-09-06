"use client";
import { ThemeProvider } from "@material-tailwind/react";
import { StickyNavbar } from "./navbar/navbar";
import HeroSection from "./home/home";
import ContactSection from "./contact/contact";
import Footer from "./footer/footer";
import ServicesShowcase from "./services/services";
import SpecialServicesShowcase from "./services/special-services";
import About from "./about/about";
import { useEffect, useState } from "react";
import { fetchData } from "./api/api";

export default function Home() {
  const [services, setServices] = useState([]);
  const [specialServices, setSpecialServices] = useState([]);
  const [landingPage, setLandingPage] = useState([]);
  useEffect(() => {
    const loadLandingPage = async () => {
      try {
        const data = await fetchData("landingPage.json");
        setLandingPage(data);
      } catch (err) {
        console.error("Failed to fetch services:", err);
      }
    };
    const loadServices = async () => {
      try {
        const data = await fetchData("services.json");
        setServices(data);
      } catch (err) {
        console.error("Failed to fetch services:", err);
      }
    };
    const loadSpecialServices = async () => {
      try {
        const data = await fetchData("specialServices.json");
        setSpecialServices(data);
      } catch (err) {
        console.error("Failed to fetch services:", err);
      }
    };
    loadLandingPage();
    loadServices();
    loadSpecialServices();
  }, []);
  return (
    <ThemeProvider>
      <StickyNavbar></StickyNavbar>
      {/* {landingPage && <HeroSection landingPage={landingPage}></HeroSection>}

      {services.length > 0 && (
        <ServicesShowcase services={services}></ServicesShowcase>
      )}
      {specialServices.length > 0 && (
        <SpecialServicesShowcase
          services={specialServices}
        ></SpecialServicesShowcase>
      )}

      <About></About>
      
      <ContactSection></ContactSection> */}
      <section id="hero">
        {landingPage && <HeroSection landingPage={landingPage} />}
      </section>

      <section id="services" className="scroll-mt-24">
        {services.length > 0 && <ServicesShowcase services={services} />}
      </section>

      <section id="special-services" className="scroll-mt-24">
        {specialServices.length > 0 && (
          <SpecialServicesShowcase services={specialServices} />
        )}
      </section>

      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="contact" className="scroll-mt-24">
        <ContactSection />
      </section>
      <Footer></Footer>
    </ThemeProvider>
  );
}
