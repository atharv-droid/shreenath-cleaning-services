import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
  Button,
} from "@material-tailwind/react";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setOpenNav(false), 1000);
    }
  };

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Button
        variant="gradient"
        size="sm"
        className=" lg:inline-block"
        onClick={() => handleScroll("services")}
      >
        <span>Services</span>
      </Button>
      <Button
        variant="gradient"
        size="sm"
        className=" lg:inline-block"
        onClick={() => handleScroll("about")}
      >
        <span>About</span>
      </Button>

      <Button
        variant="gradient"
        size="sm"
        className=" lg:inline-block"
        onClick={() => handleScroll("contact")}
      >
        Contact
      </Button>
    </ul>
  );

  return (
    <div className="sticky top-0 m-auto max-h-[768px] w-full overflow-hidden shadow-lg  z-50">
      <Navbar className="sticky top-0 z-50 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <div>
            <Typography
              as="a"
              href="#"
              className="cursor-pointer font-medium text-lg flex items-center"
            >
              <img
                src="https://atharv-droid.github.io/shreenath-cleaning-services-data/images/ShreenathCleaningServicesLogoTransparent.png"
                alt="ShreenathServicesLogo"
                className="h-12 w-12 object-cover rounded-lg mx-0 p-0 mr-2"
              />
              Shreenath Cleaning Services
            </Typography>
          </div>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          {/* <div className="flex items-center gap-x-1">
            <Button fullWidth variant="text" size="sm" className="">
              <span>Log In</span>
            </Button>
            <Button fullWidth variant="gradient" size="sm" className="">
              <span>Sign in</span>
            </Button>
          </div> */}
        </Collapse>
      </Navbar>
    </div>
  );
}
