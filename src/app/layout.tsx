import type { Metadata } from "next";
import { Lato } from "next/font/google";

import { UnitsProvider } from "@/providers/UnitsProvider";
import { ToggleStateProvider } from "@/providers/ToggleStateProvider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

// Google Font
const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lato",
  display: "swap",
});

// Metadata tags
export const metadata: Metadata = {
  title: "Climatic",
  description:
    "Get accurate and real-time weather updates for your city. Check the current temperature, forecasts, and more.",
  keywords:
    "weather, live weather, real-time weather, forecast, city weather, air quality",
  authors: [{ name: "Mahmoud Elagamy", url: "https://agamy.netlify.app/" }],
  creator: "Mahmoud Elagamy",
  openGraph: {
    title: "Climatic",
    description:
      "Get accurate and real-time weather updates for your city. Check the current temperature, forecasts, and more.",
    url: "https://climatic-app.netlify.app/",
    siteName: "Climatic",
    images: [
      {
        url: "https://climatic-app.netlify.app/sharing-preview.png",
        width: 100,
        height: 100,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable}`}>
      <body className={`relative min-h-dvh tracking-wide antialiased`}>
        <UnitsProvider>
          <ToggleStateProvider>
            <h1 className="sr-only">Weather App</h1>
            <div className="container py-4">{children}</div>
            <Toaster />
          </ToggleStateProvider>
        </UnitsProvider>
      </body>
    </html>
  );
}
