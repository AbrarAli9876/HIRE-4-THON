import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "HIRE-4-THON | National Level Hackathon",
  description:
    "HIRE-4-THON is a 24-hour national hackathon at KSSEM, Bengaluru with a ₹4 LPA job offer for champions, internships for runners-up, and a premium hiring-focused experience.",
  openGraph: {
    title: "HIRE-4-THON | National Level Hackathon",
    description:
      "KSSEM Bengaluru • 26–27 March 2026 • ₹4 LPA job offer, internships, cash prizes, and a 24-hour build marathon.",
    url: "https://hire4thon.example.com",
    siteName: "HIRE-4-THON",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HIRE-4-THON | National Level Hackathon",
    description:
      "Join HIRE-4-THON: 24-hour national hackathon at KSSEM with ₹4 LPA offer, internships, and prize pool.",
  },
  icons: {
    icon: [
      { url: "/hire4thon-favicon-3.png", type: "image/png", sizes: "any" },
      { url: "/hire4thon-favicon-3.png", type: "image/png", rel: "shortcut icon" },
    ],
    apple: "/hire4thon-favicon-3.png",
  },
  metadataBase: new URL("https://hire4thon.example.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/hire4thon-favicon-3.png" sizes="any" type="image/png" />
        <link rel="shortcut icon" href="/hire4thon-favicon-3.png" type="image/png" />
        <link rel="apple-touch-icon" href="/hire4thon-favicon-3.png" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased bg-background text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
