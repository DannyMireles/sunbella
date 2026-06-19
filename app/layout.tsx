import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SUNBRELLA | Electronic Live Band",
  description:
    "Experience a journey-driven blend of deep house with live vocals, flute, and spoken word poetry. Infusing hypnotic grooves with human soul and organic percussion.",
  icons: {
    icon: "/assets/sunbrella-icon.png"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
