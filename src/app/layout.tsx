import "@/styles/globals.css";
import { Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { geistSans, geistMono } from "@/config/fonts";
import Header from "@/component/Layout/Header";
import Footer from "@/component/Layout/Footer";
import ProgressProvider from "@/component/ProgressBar";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background antialiased",
          geistMono.variable,
          geistSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <ProgressProvider>
            <Header />
            {children}
            <Footer />
          </ProgressProvider>
        </Providers>
      </body>
    </html>
  );
}
