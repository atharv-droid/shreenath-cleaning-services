"use client";
import { Button, ThemeProvider, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { StickyNavbar } from "./navbar/navbar";
import HeroSection, { DefaultImg } from "./home/home";
import Services, { ServicesLeft, ServicesRight } from "./services/services";
import ContactSection from "./contact/contact";
import Footer from "./footer/footer";
import ServicesShowcase from "./services/services";
import SpecialServicesShowcase from "./services/special-services";
import About from "./about/about";

export default function Home() {
  // const services = {
  //   homeCleaning: `At Shreenath Cleaning Services, we believe your home should be a
  //             sanctuary—clean, comfortable, and inviting. Our comprehensive Home
  //             Cleaning service is designed to give you peace of mind and a
  //             sparkling living environment. We meticulously clean every area,
  //             including living rooms, kitchens, bedrooms, and bathrooms, using
  //             safe and eco-friendly products that protect your family and the
  //             environment. Our experienced team pays close attention to detail,
  //             tackling dust, dirt, and grime in even the hardest-to-reach places.
  //             Whether you need a one-time deep clean or regular maintenance, we
  //             tailor our services to fit your schedule and specific needs. We
  //             understand that every home is unique, so we offer flexible packages
  //             and personalized solutions. With Shreenath Cleaning Services, you
  //             can trust that your home will be fresh, hygienic, and welcoming for
  //             you and your loved ones. Let us handle the cleaning, so you can
  //             spend more time enjoying what matters most. Book your home cleaning
  //             today and experience the difference!`,
  //   officeCleaning: `Create a productive and welcoming workspace with Shreenath Cleaning
  //             Services’ Office Cleaning solutions. We understand the importance of
  //             a clean office for both employees and clients, which is why our team
  //             delivers thorough cleaning for workstations, meeting rooms, common
  //             areas, and restrooms. Using eco-friendly products and advanced
  //             techniques, we remove dust, sanitize surfaces, and maintain a
  //             hygienic environment that supports health and efficiency. Our
  //             flexible scheduling ensures minimal disruption to your business
  //             operations, whether you require daily, weekly, or custom cleaning
  //             plans. We pay close attention to high-touch areas and shared spaces,
  //             helping to reduce the spread of germs and create a positive
  //             impression for everyone who enters your office. Trust Shreenath
  //             Cleaning Services to keep your workplace spotless, safe, and ready
  //             for success. Contact us today to discuss your office cleaning needs
  //             and discover how we can help your business shine.`,
  //   deepCleaning: `Experience a truly refreshed space with Shreenath Cleaning Services’ Deep Cleaning solutions. Our deep cleaning goes beyond the surface, targeting hidden dirt, stubborn stains, and built-up grime in every corner of your home or office. We focus on areas often overlooked during regular cleaning, such as behind appliances, under furniture, and inside cabinets. Using advanced equipment and safe, effective products, our skilled team ensures a thorough clean that promotes a healthier environment. Deep cleaning is ideal for seasonal refreshes, post-renovation cleanups, or preparing your property for special occasions. We tailor our approach to your needs, delivering exceptional results and restoring your space to its best condition. Trust Shreenath Cleaning Services for a spotless, revitalized environment—book your deep cleaning today!
  // `,
  // };
  const services = [
    {
      title: "Home Cleaning",
      description: `At Shreenath Cleaning Services, we believe your home should be a
            sanctuary—clean, comfortable, and inviting. Our comprehensive Home
            Cleaning service is designed to give you peace of mind and a
            sparkling living environment. We meticulously clean every area,
            including living rooms, kitchens, bedrooms, and bathrooms, using
            safe and eco-friendly products that protect your family and the
            environment. Our experienced team pays close attention to detail,
            tackling dust, dirt, and grime in even the hardest-to-reach places.
            Whether you need a one-time deep clean or regular maintenance, we
            tailor our services to fit your schedule and specific needs. We
            understand that every home is unique, so we offer flexible packages
            and personalized solutions. With Shreenath Cleaning Services, you
            can trust that your home will be fresh, hygienic, and welcoming for
            you and your loved ones. Let us handle the cleaning, so you can
            spend more time enjoying what matters most. Book your home cleaning
            today and experience the difference!`,
      image: "/HomeCleaning.jpg",
    },
    {
      title: "Office Cleaning",
      description: `Create a productive and welcoming workspace with Shreenath Cleaning
            Services’ Office Cleaning solutions. We understand the importance of
            a clean office for both employees and clients, which is why our team
            delivers thorough cleaning for workstations, meeting rooms, common
            areas, and restrooms. Using eco-friendly products and advanced
            techniques, we remove dust, sanitize surfaces, and maintain a
            hygienic environment that supports health and efficiency. Our
            flexible scheduling ensures minimal disruption to your business
            operations, whether you require daily, weekly, or custom cleaning
            plans. We pay close attention to high-touch areas and shared spaces,
            helping to reduce the spread of germs and create a positive
            impression for everyone who enters your office. Trust Shreenath
            Cleaning Services to keep your workplace spotless, safe, and ready
            for success. Contact us today to discuss your office cleaning needs
            and discover how we can help your business shine.`,
      image: "/OfficeCleaning.jpg",
    },
    {
      title: "Deep Cleaning",
      description: `Experience a truly refreshed space with Shreenath Cleaning Services’ Deep Cleaning solutions. Our deep cleaning goes beyond the surface, targeting hidden dirt, stubborn stains, and built-up grime in every corner of your home or office. We focus on areas often overlooked during regular cleaning, such as behind appliances, under furniture, and inside cabinets. Using advanced equipment and safe, effective products, our skilled team ensures a thorough clean that promotes a healthier environment. Deep cleaning is ideal for seasonal refreshes, post-renovation cleanups, or preparing your property for special occasions. We tailor our approach to your needs, delivering exceptional results and restoring your space to its best condition. Trust Shreenath Cleaning Services for a spotless, revitalized environment—book your deep cleaning today!`,
      image: "/DeepCleaning.jpg",
    },
  ];

  return (
    <ThemeProvider>
      <StickyNavbar></StickyNavbar>
      <HeroSection></HeroSection>
      <ServicesShowcase services={services}></ServicesShowcase>
      <SpecialServicesShowcase></SpecialServicesShowcase>
      <About></About>
      <ContactSection></ContactSection>
      <Footer></Footer>
    </ThemeProvider>
  );
}
