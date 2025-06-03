import type { Metadata } from "next";
import { leagueSpartan } from './fonts';
import "./globals.css";

export const metadata: Metadata = {
  title: "Good Time Running Club",
  description: "The best running club ever",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={leagueSpartan.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
