import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const generalSans = localFont({
  src: './fonts/GeneralSans-Regular.woff',
  variable: "--font-general-sans",
  weight: "100 900",
})

const title = "MCEC";
const description = "Engineering Club at Moorpark College";
const image = "https://utfs.io/f/af1c5a9d-0e02-4764-9bec-5272671f0a1d-ipq0ei.jpg"

export const metadata: Metadata = {
  title,
  description,
  icons: ["https://utfs.io/f/af1c5a9d-0e02-4764-9bec-5272671f0a1d-ipq0ei.jpg"],
  openGraph: {
    title,
    description,
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
    creator: "@maiommhoon",
  },
  metadataBase: new URL("https://utfs.io"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${generalSans.variable} ${geistSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
