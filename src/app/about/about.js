import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

function About() {
  return (
    <section className="container mx-auto px-8 py-10">
      <Typography color="blue-gray" variant="h3" className="mb-8 text-center">
        About Us
      </Typography>
      <Card shadow={false} className="border border-gray-300 rounded-2xl">
        <CardHeader shadow={false} className="h-60 !rounded-lg">
          <img
            src="/ShreenathCleaningServicesLogoTransparent.png"
            alt="dark"
            className="w-full h-full object-center object-contain bg-gray-300"
          />
        </CardHeader>
        <CardBody>
          <div className="flex lg:gap-0 gap-6 flex-wrap justify-between items-center">
            <div className="flex items-center gap-3">
              <Avatar src="/img/avatar1.jpg" alt="avatar" variant="rounded" />
              <div>
                <Typography color="blue-gray" variant="h6">
                  Emma Roberts
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  emma.roberts@mail.com
                </Typography>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {/* <Button
                variant="outlined"
                className="border-gray-300 flex items-center gap-2"
              >
                <i className="fa fa-github text-base" />
                Github
              </Button> */}
              {/* <Button
                variant="outlined"
                className="border-gray-300 flex items-center gap-2"
              >
                <i className="fa-brands fa-twitter" />
                Twitter
              </Button> */}
              {/* <Button
                variant="outlined"
                className="border-gray-300 flex items-center gap-2"
              >
                <i className="fa-brands fa-medium" />
                Medium
              </Button> */}
            </div>
          </div>
          <Typography
            variant="small"
            className="font-normal text-gray-600 mt-6"
          >
            Shreenath Cleaning Services is a professional cleaning company
            dedicated to providing top-notch cleaning solutions for homes and
            offices. With a team of experienced and trained professionals, we
            ensure a spotless and hygienic environment tailored to your needs.
            Our commitment to quality, reliability, and customer satisfaction
            sets us apart in the industry. Whether it's regular cleaning, deep
            cleaning, or specialized services, we use eco-friendly products and
            the latest techniques to deliver exceptional results. Trust
            Shreenath Cleaning Services for a cleaner, healthier space. Your
            satisfaction is our priority! Contact us today for a free
            consultation and experience the difference.
          </Typography>
        </CardBody>
      </Card>
    </section>
  );
}

export default About;
