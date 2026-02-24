import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MedAI Assistant - Your Healthcare Support Companion",
  description: "Multilingual AI-powered healthcare support for rural and semi-urban users. Get health insights and find nearby doctors.",
  keywords: ["MedAI", "Healthcare", "AI Assistant", "Medical Support", "Health", "Multilingual"],
  authors: [{ name: "MedAI Team" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "MedAI Assistant",
    description: "Your Multilingual Healthcare Support Companion",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1a1a2e" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider defaultTheme="system" storageKey="medai-theme">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
