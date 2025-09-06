import { Typography } from "@material-tailwind/react";
const links = ["Company", "About Us", "Team", "Products", "Blog", "Pricing"];
const currentYear = new Date().getFullYear();

export function Footer({ contactsData }) {
  const { address, embedMapLink } = contactsData;
  return (
    <footer className="px-8 py-28">
      <div className="container mx-auto flex flex-col items-center">
        {/* <div className="flex flex-wrap items-center justify-center gap-8 pb-8">
          {links.map((link, index) => (
            <ul key={index}>
              <li>
                <Typography
                  as="a"
                  href="#"
                  color="white"
                  className="font-medium !text-gray-500 transition-colors hover:!text-gray-900"
                >
                  {link}
                </Typography>
              </li>
            </ul>
          ))}
        </div> */}

        <Typography
          color="blue-gray"
          variant="h6"
          className="mt-6  !font-normal text-black text-center"
        >
          {address || ""}
        </Typography>
        <Typography
          color="blue-gray"
          className="mt-6 !text-sm !font-normal text-gray-500"
        >
          Copyright &copy; {currentYear} Shreenath Cleaning Services. All rights
          reserved.
        </Typography>
        <Typography
          color="blue-gray"
          className="mt-6 !text-sm !font-normal text-gray-500"
        >
          Design and Developed by{" "}
          <a
            href="https://www.linkedin.com/in/dinesh-dixit/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-blue-700"
          >
            {" "}
            Dinesh Dixit
          </a>
        </Typography>
      </div>
    </footer>
  );
}
export default Footer;
