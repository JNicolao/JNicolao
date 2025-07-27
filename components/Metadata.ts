import { Metadata } from "next";

const url = "https://jnicolao.me";
const icon = "/icons/android-chrome-512x512.png";
const image = "/images/photo.jpeg";

export const metadata: Metadata = {
  title: "Justine Nicolao",
  description:
    "Software Engineer solving problems you didn't know you had, in ways you don't understand.",
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
    description:
      "Software Engineer solving problems you didn't know you had, in ways you don't understand.",
    url,
    siteName: "Justine Nicolao",
    images: [
      {
        url: "https://jnicolao.me/images/photo.jpeg",
        width: 800,
        height: 600,
        alt: "Photo of Justine Nicolao",
      },
      {
        url: "https://jnicolao.me/images/photo.jpeg",
        width: 1800,
        height: 1600,
        alt: "Photo of Justine Nicolao",
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
    description:
      "Software Engineer solving problems you didn't know you had, in ways you don't understand.",
    site: "@jnicolao5",
    creator: "@jnicolao5",
    images: [image],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#000000",
};
