import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata = {
  title: "Coffee Garden SLC",
  description: "Neighborhood coffee shop in Salt Lake City",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}