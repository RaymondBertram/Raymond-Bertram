import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { inter } from "./fonts";
import Navigation from "@/components/navigation/navigation.component";
import Footer from "@/components/footer/footer.component";

import "./globals.css";

export const metadata: Metadata = {
  title: "Raymond Bertram - Full Stack Software Engineer",
  description: "Explore the portfolio of Raymond Bertram, a Full Stack Software Engineer specializing in web and mobile app development using Next.js, React, and TypeScript.",
  applicationName: "Raymond Bertram",
  authors: [{ name: "Raymond Bertram", url: "https://bertram-tech.de" }],
  generator: "Raymond Bertram",
  keywords: ["Raymond Bertram", "Portfolio", "Full Stack Software Engineer", "Next.js", "React", "TypeScript", "Web Development", "Mobile App Development"],
  publisher: "Raymond Bertram",
  category: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">   
      <body className={inter.className}>
      <Navigation />   
        {children}
        <Analytics/>
        <Footer />
      </body>
    </html>
  );
}
