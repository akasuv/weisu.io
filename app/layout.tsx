import { Analytics } from "@vercel/analytics/react";

import Header from "@/components/Header";

import "./globals.css";

export const metadata = {
  title: "Wei Su",
  description: "I'm Wei Su, a web developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="max-w-screen-lg mx-auto px-4">
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
