import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ratnaparkkhi Institute of Engineering & Management",
  description: "Official admissions counseling & vocational training center in Chh. Sambhajinagar. Offering UGC-recognized Online & Distance degrees, ITI trade courses, NIOS 10th/12th, and NSDC/Skill India programs with our unique Learn & Earn scheme.",
  keywords: "Ratnaparkkhi Institute of Engineering & Management, RIEM Sambhajinagar, Online Education Maharashtra, Distance Learning degrees, ITI courses, NIOS 10th 12th, YCMOU, Skill India, NAPS apprenticeships, Learn and Earn, MBA, MCA, BBA, BCA, BA, B.Com",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Ratnaparkkhi Institute of Engineering & Management",
    description: "Official admissions counseling & vocational training center in Chh. Sambhajinagar. Offering UGC-recognized Online & Distance degrees, ITI trade courses, NIOS 10th/12th, and NSDC/Skill India programs with our unique Learn & Earn scheme.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Ratnaparkkhi Institute of Engineering & Management Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-navy-900 transition-colors duration-200">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}
