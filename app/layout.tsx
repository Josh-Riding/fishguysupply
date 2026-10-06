import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fish Guy Supply — Fishkeeping Without the Guesswork",
  description: "Complete aquarium bundles, starter kits, and supplies picked by fish people. Everything you need to start fishkeeping with confidence.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
