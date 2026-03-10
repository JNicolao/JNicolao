import { Metadata } from "next";

const url = "https://jnicolao.me";
const icon = "/icons/android-chrome-512x512.png";
const ogImageUrl = `${url}/images/john.svg`;

const description =
  "Software Engineer | Full-stack Developer.";

export const metadata: Metadata = {
  title: "Justine Nicolao",
  description,
  keywords: [
    "Justine Nicolao",
    "Software Engineer",
    "Web Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Fullstack Engineer",
  ],
  creator: "Justine Nicolao",
  authors: [{ name: "Justine Nicolao" }],
  metadataBase: new URL(url),
  openGraph: {
    title: "Justine Nicolao",
    description,
    url,
    siteName: "Justine Nicolao",
    images: [
      {
        url: ogImageUrl,
        width: 331,
        height: 397,
        alt: "Justine Nicolao — Software Engineer",
        type: "image/svg+xml",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon,
    shortcut: icon,
    apple: "https://jnicolao.me/icons/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "https://jnicolao.me/icons/favicon-16x16.png",
        sizes: "16x16",
      },
      {
        rel: "icon",
        url: "https://jnicolao.me/icons/favicon-32x32.png",
        sizes: "32x32",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Justine Nicolao",
    description,
    site: "@jnicolao5",
    creator: "@jnicolao5",
    images: [ogImageUrl],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#000000",
};
