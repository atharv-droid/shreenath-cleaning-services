import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shreenath Cleaning Services",
  description:
    "A complete cleaning solution for your home and office. We provide top-notch cleaning services at affordable prices. Contact us today for a free quote!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Shreenath Cleaning Services</title>
        <meta
          name="description"
          content="A complete cleaning solution for your home and office. We provide top-notch cleaning services at affordable prices. Contact us today for a free quote!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph tags */}
        <meta property="og:title" content="Shreenath Cleaning Services" />
        <meta
          property="og:description"
          content="A complete cleaning solution for your home and office. We provide top-notch cleaning services at affordable prices. Contact us today for a free quote!"
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://yourdomain.com/" /> */}
        {/* Twitter Card tags */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Shreenath Cleaning Services" />
        <meta
          name="twitter:description"
          content="A complete cleaning solution for your home and office. We provide top-notch cleaning services at affordable prices. Contact us today for a free quote!"
        /> */}
        {/* Canonical link */}
        {/* <link rel="canonical" href="https://yourdomain.com/" /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
