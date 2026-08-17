import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export * from "@/components/Metadata";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Justine Nicolao",
  alternateName: "Justine Bororio",
  jobTitle: "Software Engineer",
  url: "https://jnicolao.com",
  image: "https://jnicolao.com/images/photo.jpg",
  worksFor: {
    "@type": "Organization",
    name: "PickSpot Network",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Flutter",
    "Frontend Engineering",
  ],
  sameAs: [
    "https://www.linkedin.com/in/jnicolao/",
    "https://github.com/JNicolao",
    "https://x.com/jnicolao5",
    "https://medium.com/@jnicolao",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
