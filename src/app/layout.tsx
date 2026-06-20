import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AV Dentistry | Premium Dental Clinic in Chennai",
  description:
    "AV Dentistry in Kandhanchavadi, OMR Chennai offers advanced dental treatments, painless procedures, and compassionate care for the entire family. Book your appointment today.",
  keywords: [
    "AV Dentistry",
    "dental clinic Chennai",
    "dentist OMR",
    "Kandhanchavadi dentist",
    "root canal Chennai",
    "teeth whitening",
    "dental cleaning",
  ],
  openGraph: {
    title: "AV Dentistry | Premium Dental Clinic in Chennai",
    description:
      "Advanced dental treatments, painless procedures, and compassionate care for the entire family.",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full scroll-smooth`}>
      <body className="min-h-full bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
