import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vote Mozart for Delegate FOST 1.2",
  description: "Vote Mozart✅",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link rel="icon" href="/images/profile.jpg"/>
        <link href="https://fonts.googleapis.com/css2?family=Anta&family=Fredoka:wght@300..700&family=Jura:wght@300..700&display=swap" rel="stylesheet"/>
        <meta property="og:image" content="/images/profile.jpg"></meta>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
