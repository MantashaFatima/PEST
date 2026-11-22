
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Balaji Pest Control | Professional Pest Control Services in Delhi NCR",
  description:
    "Balaji Pest Control provides professional pest control solutions for homes, offices and commercial spaces across Delhi, Gurugram, Noida and Ghaziabad. Call 9599752537 or WhatsApp 9999651595.",
  keywords: [
    "Balaji Pest Control",
    "Pest Control Delhi NCR",
    "Cockroach Control",
    "Termite Control",
    "Bed Bug Control",
    "Pest Control Noida",
    "Pest Control Gurugram",
    "Pest Control Ghaziabad",
  ],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
