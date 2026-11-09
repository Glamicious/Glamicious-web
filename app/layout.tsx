import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glamicious — Book your glow-up in a few taps",
  description:
    "Find top-rated beauty pros near you, see real-time availability and book instantly — no calls, no waiting. Salons, spas, lash & nail studios.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
