import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ophir International Services | Tours, Travel, Safari and Investment in Madagascar",
  description: "Discover Madagascar differently. Exclusive signature circuits and the most promising investment opportunities in the Indian Ocean.",
  keywords: "Madagascar travel, Madagascar travel agency, Madagascar investment, Madagascar tourism, Baobab tour, Indri tour, Sakalava tour, Vezo tour, Madagascar circuits, Madagascar business investment",
  icons: {
    icon: "/assets/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
