import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DailySpark - One personal boost every morning",
  description: "Receive a short, personal message + abstract background — bilingual (FR/EN) — save or share in one tap.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}


