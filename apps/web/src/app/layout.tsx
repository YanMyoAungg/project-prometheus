import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";
import TopNav from "@/components/topNav";
import BottomNav from "@/components/bottomNav";
import { Metadata } from "next";
import { ClientProvider } from "@/hooks/useMounted";

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
        <ClientProvider>
          <Provider>
            <TopNav />

            {children}
            <BottomNav />
          </Provider>
        </ClientProvider>
      </body>
    </html>
  );
}
