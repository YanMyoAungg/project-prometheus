import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";
import TopNav from "@/components/topNav";
import BottomNav from "@/components/bottomNav";
import { Metadata } from "next";
import { ProtectedClient } from "@/hooks/useAuthenticate";

export const metadata: Metadata = {
  title: "Prometheus",
  description: "Prometheus",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <Provider>
          <ProtectedClient>
            <TopNav />

            {children}
            <BottomNav />
          </ProtectedClient>
        </Provider>
      </body>
    </html>
  );
}
