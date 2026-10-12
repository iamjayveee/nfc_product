import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bizkonek",
  description: "Leave a review, see the menu, and join the WiFi.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1 };

// System fonts only: nothing extra to download on mobile data (§12 boundary 4).
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
