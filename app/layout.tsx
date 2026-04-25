import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ParticlesComponent from "@/components/Particles";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const poppins = Poppins({ subsets: ["latin"], weight: ['400', '700'], variable: '--font-poppins' });

export const metadata: Metadata = {
  title: "104 Protocol - IEC 60870-5-104 Address Convertor",
  description: "Learn IEC 60870-5-104 protocol, ASDU, CASDU, IOA address conversion and substation communication with practical engineering examples.",
  icons: {
    icon: "/app/favicon.png",
  },
   keywords: [
    "IEC 60870-5-104",
    "IEC 104 protocol",
    "ASDU",
    "CASDU",
    "IOA",
    "SCADA communication",
    "RTU protocol",
    "IEC 104 address converter"
  ],
  authors: [{ name: "Md Azad" }],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <ParticlesComponent />
        <Header />
        <main className="container mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
