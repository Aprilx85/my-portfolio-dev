import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import CustomCursor from "@/components/custom-cursor";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Chatri Jangsriya — Web Developer",
    template: "%s | Chatri Jangsriya",
  },
  description:
    "Bangkok-based web developer building fast, responsive sites and clean front-end experiences.",
  keywords: ["web developer", "Bangkok", "React", "Next.js", "TypeScript", "Thailand"],
  authors: [{ name: "Chatri Jangsriya" }],
  creator: "Chatri Jangsriya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chatri.dev",
    siteName: "Chatri Jangsriya",
    title: "Chatri Jangsriya — Web Developer",
    description:
      "Bangkok-based web developer building fast, responsive sites and clean front-end experiences.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chatri Jangsriya — Web Developer",
    description:
      "Bangkok-based web developer building fast, responsive sites and clean front-end experiences.",
    creator: "@chatri",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <CustomCursor />
          <Navbar />
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
