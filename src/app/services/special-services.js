"use client";

import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import Image from "next/image";

const services = [
  {
    title: "Prior Festival Cleaning",
    description: `Comprehensive cleaning to prepare your home or office for the festivities.We offer professional cleaning solutions tailored to homes, offices,
          and businesses before festivities. Explore our most popular special
          services below.`,
    image: "/HomeCleaning.jpg",
  },
  {
    title: "Prior Festival Cleaning",
    description: `Comprehensive cleaning to prepare your home or office for the festivities.We offer professional cleaning solutions tailored to homes, offices,
          and businesses before festivities. Explore our most popular special
          services below.`,
    image: "/HomeCleaning.jpg",
  },
];

export default function SpecialServicesShowcase() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto text-center mb-12">
        <Typography variant="h2" className="mb-4 font-bold">
          Our Special Services
        </Typography>
        <Typography className="text-gray-600 max-w-2xl mx-auto">
          We offer professional cleaning solutions tailored to homes, offices,
          and businesses before festivities. Explore our most popular special
          services below.
        </Typography>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <Card
            key={idx}
            shadow={true}
            className="rounded-xl hover:shadow-lg transition-shadow"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={300}
              objectFit="cover"
              objectPosition="center"
              className="h-56 w-full object-cover rounded-t-xl"
            />
            <CardBody>
              <Typography variant="h5" className="mb-2 font-semibold">
                {service.title}
              </Typography>
              <Typography className="text-gray-600 mb-4">
                {service.description}
              </Typography>
              {/* <Button color="blue" size="sm">
                Learn More
              </Button> */}
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
}
