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
