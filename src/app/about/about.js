import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";

function About({ aboutData }) {
  const {
    name,
    profileImage,
    title,
    description,
    mobileNumber,
    email,
    locations = {},
  } = aboutData;
  return (
    <section className="container mx-auto px-8 py-10">
      <Typography color="blue-gray" variant="h3" className="mb-8 text-center">
        About Us
      </Typography>
      <Card shadow={false} className="border border-gray-300 rounded-2xl">
        <CardHeader shadow={false} className="h-60 !rounded-lg">
          <img
            src="https://atharv-droid.github.io/shreenath-cleaning-services-data/images/ShreenathCleaningServicesLogoTransparent.png"
            alt="dark"
            className="w-full h-full object-center object-contain bg-gray-300"
          />
        </CardHeader>
        <CardBody>
          <div className="flex lg:gap-0 gap-6 flex-wrap justify-between items-center">
            <div className="flex items-center gap-3">
              <Avatar src={profileImage} alt="avatar" variant="rounded" />
              <div>
                <Typography color="blue-gray" variant="h6">
                  {name || "Shreenath Cleaning Services"}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  {email || ""}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  {mobileNumber || ""}
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
            {description ||
              "Shreenath Cleaning Services is a professional cleaning company dedicated to providing top-notch cleaning solutions for residential and commercial spaces. With a team of experienced and trained cleaners, we ensure that every nook and corner is spotless, creating a healthy and inviting environment for our clients."}
          </Typography>
          <Typography
            variant="h4"
            className="font-normal text-gray-600 mt-6 text-center "
          >
            {locations?.text || "We proudly serve all over Pune."}
          </Typography>
          <div className="font-normal text-gray-600 mt-6 text-center flex flex-wrap justify-center">
            {locations?.list?.map((location) => (
              <Chip
                key={location}
                color="amber"
                value={location}
                size="sm"
                className="w-fit mx-1 mb-1"
              />
            ))}
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default About;
