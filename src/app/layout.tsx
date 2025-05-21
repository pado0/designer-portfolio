import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "silvy.yang",
  description: "portfolio",
  icons: [
    { rel: "icon", type: "image/x-icon", url: "/favicon/favicon.ico" },
    { rel: "icon", type: "image/svg+xml", url: "/favicon/favicon.svg" },
    { rel: "icon", type: "image/png", sizes: "96x96", url: "/favicon/favicon-96x96.png" },
    { rel: "apple-touch-icon", sizes: "180x180", url: "/favicon/apple-touch-icon.png" },
    { rel: "icon", type: "image/png", sizes: "192x192", url: "/favicon/web-app-manifest-192x192.png" },
    { rel: "icon", type: "image/png", sizes: "512x512", url: "/favicon/web-app-manifest-512x512.png" },
  ],
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
