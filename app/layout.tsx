import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";  // <-- relative
import Footer from "../components/Footer";  // <-- relative

export const metadata: Metadata = {
  title: "MR NIPUN OFC / TECH-WEB",
  description: "Full-Stack Developer • UI/UX Designer • Tech Enthusiast",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main className="container">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
