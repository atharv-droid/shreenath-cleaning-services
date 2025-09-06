"use client";
import React from "react";
import { Typography } from "@material-tailwind/react";

export function ServicesLeft({ service }) {
  // const { title, description, image } = service;
  const mobileScreen = window.innerWidth < 768;
  return (
    <section className="py-16 px-8">
      <div className="container grid grid-cols-1 md:grid-cols-2 items-center gap-24 mx-auto">
        <img
          src={service.image}
          alt="home cleaning"
          className="w-full h-[28rem] md:h-[32rem] object-contain rounded-xl shadow-md"
        />
        <div>
          <Typography className="mb-4 text-center" variant="h4">
            {service.title}
          </Typography>
          {/* <Typography variant="h5">$1,490</Typography> */}
          <Typography className="!mt-4 text-base font-normal leading-[27px] !text-gray-500">
            {service.description}
          </Typography>
          {/* <div className="my-8 flex items-center gap-2">
            <Rating value={4} className="text-amber-500" />
            <Typography className="!text-sm font-bold !text-gray-700">
              4.0/5 (100 reviews)
            </Typography>
          </div>
          <Typography color="blue-gray" variant="h6">
            Color
          </Typography> */}
          {/* <div className="my-8 mt-3 flex items-center gap-2">
            <div className="h-5 w-5 rounded border border-gray-900 bg-blue-gray-600 "></div>
            <div className="h-5 w-5 rounded border border-blue-gray-100 "></div>
            <div className="h-5 w-5 rounded border border-blue-gray-100 bg-gray-900 "></div>
          </div> */}
          {/* <div className="mb-4 flex w-full items-center gap-3 md:w-1/2 ">
            <Button color="gray" className="w-52">
              Add to Cart
            </Button>
            <IconButton color="gray" variant="text" className="shrink-0">
              <HeartIcon className="h-6 w-6" />
            </IconButton>
          </div> */}
        </div>
      </div>
    </section>
  );
}
export function ServicesRight({ service }) {
  // const { title, description, image } = service;
  return (
    <section className="py-16 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div>
          <Typography className="mb-4" variant="h4">
            {service.title}
          </Typography>
          {/* <Typography variant="h5">$1,490</Typography> */}
          <Typography className="!mt-4 text-base font-normal leading-[27px] !text-gray-500">
            {service.description}
          </Typography>
          {/* <div className="my-8 flex items-center gap-2">
            <Rating value={4} className="text-amber-500" />
            <Typography className="!text-sm font-bold !text-gray-700">
              4.0/5 (100 reviews)
            </Typography>
          </div>
          <Typography color="blue-gray" variant="h6">
            Color
          </Typography> */}
          {/* <div className="my-8 mt-3 flex items-center gap-2">
            <div className="h-5 w-5 rounded border border-gray-900 bg-blue-gray-600 "></div>
            <div className="h-5 w-5 rounded border border-blue-gray-100 "></div>
            <div className="h-5 w-5 rounded border border-blue-gray-100 bg-gray-900 "></div>
          </div> */}
          {/* <div className="mb-4 flex w-full items-center gap-3 md:w-1/2 ">
            <Button color="gray" className="w-52">
              Add to Cart
            </Button>
            <IconButton color="gray" variant="text" className="shrink-0">
              <HeartIcon className="h-6 w-6" />
            </IconButton>
          </div> */}
        </div>
        <img
          src={service.image}
          alt="pink blazer"
          className="w-full h-[28rem] md:h-[32rem] object-contain rounded-xl shadow-md"
        />
      </div>
    </section>
  );
}

export function ServicesShowcase({ services = [] }) {
  const mobileScreen = window.innerWidth < 768;
  console.log("Services data:", services);
  if (!services || services.length === 0)
    return (
      <Typography className="mb-4 text-center" variant="h4">
        No Services Available
      </Typography>
    );
  return (
    <>
      <div>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mt-12 !text-3xl lg:!text-3xl text-center "
        >
          Our Services
        </Typography>
        <Typography className="text-gray-600 max-w-2xl  text-center mt-4 px-12 mx-auto">
          Explore our wide range of cleaning services designed to meet all your
          needs. From residential to commercial cleaning, we have you covered
          with professional and reliable solutions.
        </Typography>
      </div>

      {services.map((srv, idx) =>
        srv && !mobileScreen ? (
          idx % 2 === 0 ? (
            <ServicesLeft key={srv.title || idx} service={srv} />
          ) : (
            <ServicesRight key={srv.title || idx} service={srv} />
          )
        ) : (
          <ServicesLeft key={srv.title || idx} service={srv} />
        )
      )}
    </>
  );
}
export default ServicesShowcase;
