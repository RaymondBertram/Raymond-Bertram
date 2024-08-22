import type { Metadata } from "next";
import { inter } from "./fonts";
import Navigation from "@/components/navigation/navigation.component";
import Footer from "@/components/footer/footer.component";

import "./globals.css";

export const metadata: Metadata = {
  title: "Raymond Bertram",
  description: "Portfolio of Raymond Bertram",
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
        <Footer />
      </body>
    </html>
  );
}
