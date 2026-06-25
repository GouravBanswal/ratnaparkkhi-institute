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
  metadataBase: new URL("https://ratnaparkkhisansttha.com"),

  title: {
    default: "Ratnaparkkhi Institute™ of Engineering & Management (RIEM)",
    template: "%s | RIEM",
  },

  description:
    "Ratnaparkkhi Institute™ of Engineering & Management (RIEM) is a premier engineering, ITI, and technical skill development institute offering advanced engineering branches, NCVT-approved ITI trades, NSDC Skill India courses, and MBA programs across India.",

  keywords: [
    "Ratnaparkkhi Institute",
    "RIEM",
    "Engineering Institute",
    "ITI Institute",
    "Technical Education",
    "Computer Science Engineering",
    "Mechanical Engineering",
    "Civil Engineering",
    "Electrical Engineering",
    "Electronics & Telecommunication Engineering",
    "ITI Electrician",
    "ITI Fitter",
    "NCVT ITI Trades",
    "MBA Specializations",
    "Learn and Earn",
    "Apprenticeship",
    "Placement Assistance",
    "Career Guidance",
    "Chhatrapati Sambhajinagar",
    "Maharashtra Engineering College",
  ],

  authors: [
    {
      name: "Ratnaparkkhi Institute™ of Engineering & Management",
    },
  ],

  creator: "Ratnaparkkhi Institute™ of Engineering & Management",

  publisher: "Ratnaparkkhi Institute™ of Engineering & Management",

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ratnaparkkhisansttha.com",
    siteName: "Ratnaparkkhi Institute™ of Engineering & Management",
    title: "Ratnaparkkhi Institute™ of Engineering & Management (RIEM)",
    description:
      "Admissions, Skill Development, ITI Programs, MBA Specializations, Career Guidance, Learn & Earn Programs, Apprenticeships, and Engineering Technical Training across India.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Ratnaparkkhi Institute™ of Engineering & Management",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ratnaparkkhi Institute™ of Engineering & Management (RIEM)",
    description:
      "Admissions, Skill Development, ITI Programs, MBA Specializations, Career Guidance, Learn & Earn Programs, Apprenticeships, and Engineering Technical Training across India.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  category: "Education",
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
