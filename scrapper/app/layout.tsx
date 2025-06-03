import type { Metadata } from "next";
import "./globals.css";
import { Raleway } from "next/font/google";

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.dev",
};

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "800"], // Only include weights you actually use
  display: "swap", // Optional but recommended
  variable: "--font-raleway", // CSS variable option
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.className}>
      <body>{children}</body>
    </html>
  );
}
