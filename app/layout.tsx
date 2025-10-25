import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Finpedia - Master Accounting & Finance",
    template: "%s | Finpedia"
  },
  description: "Your comprehensive resource for learning accounting principles, financial analysis, and business finance concepts through practical tutorials and expert Q&A.",
  keywords: ["accounting", "finance", "education", "tutorials", "Q&A", "financial statements", "budgeting", "taxation", "investments"],
  authors: [{ name: "Finpedia Team" }],
  creator: "Finpedia",
  publisher: "Finpedia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://finpedia.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://finpedia.vercel.app",
    title: "Finpedia - Master Accounting & Finance",
    description: "Your comprehensive resource for learning accounting principles, financial analysis, and business finance concepts through practical tutorials and expert Q&A.",
    siteName: "Finpedia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Finpedia - Master Accounting & Finance",
    description: "Your comprehensive resource for learning accounting principles, financial analysis, and business finance concepts through practical tutorials and expert Q&A.",
    creator: "@finpedia",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
