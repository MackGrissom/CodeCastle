import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "CodeCastle",
  description:
    "Welcome to Code Castle, your ultimate destination for all things developer-related. Explore the latest developer news, tackle LeetCode-style challenges, engage in StackOverflow forums, and connect with like-minded enthusiasts. Join us today and reign over the kingdom of code!",
  icons: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
    appearance={{
      elements: {
        formButtonPrimary:'primary-gradient',
        footerActionLink:'primary-text-gradient hover:text-primary-500'
      }
    }}>
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
