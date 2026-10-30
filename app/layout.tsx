import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "English rootme | Next Batch",
  description: "English rootme online English learning and batch management.",
  applicationName: "English rootme",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#030303" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
