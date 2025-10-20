import type { Metadata } from "next";
import { Questrial } from "next/font/google";
import "./globals.css";

const questrial = Questrial({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Go Derby - Live Cockfighting & Betting",
  description:
    "Watch live cockfighting matches and place your bets. Experience the thrill of derby betting with real-time streaming and live odds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${questrial} antialiased text-foreground`}>
        {children}
      </body>
    </html>
  );
}
