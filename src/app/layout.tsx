import type { Metadata } from "next";
import { Lato } from "next/font/google";

import { WeatherProvider } from "@/providers/WeatherProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { UnitsProvider } from "@/providers/UnitsProvider";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

// Google Font
const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Climatic",
  description:
    "Get accurate and real-time weather updates for your city. Check the current temperature, forecasts, and more.",
  keywords:
    "weather, live weather, real-time weather, forecast, city weather, air quality",
  authors: [{ name: "Mahmoud Elagamy", url: "https://agamy.netlify.app/" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.variable} suppressHydrationWarning>
      <body className={`min-h-screen tracking-wide antialiased`}>
        <WeatherProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <UnitsProvider>
              <h1 className="sr-only">Weather App</h1>
              <div className="container py-4">{children}</div>
              <Toaster />
            </UnitsProvider>
          </ThemeProvider>
        </WeatherProvider>
      </body>
    </html>
  );
}
