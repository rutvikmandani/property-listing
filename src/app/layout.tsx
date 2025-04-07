import "@/styles/globals.css";
import { Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { geistSans, geistMono } from "@/config/fonts";
import Header from "@/component/Layout/Header";
import Footer from "@/component/Layout/Footer";

type MetaObject = {
  title: {
    template: string;
    default: string;
  };
  description: string;
  icons?: {
    icon: string;
  };
};

export async function generateMetadata() {
  let title = "";
  let favicon = "";
  let description = "";
  const response = await fetch(`${process.env.API_URL}/configuration`, {
    next: {
      revalidate: 0,
    },
    headers: {
      "X-User-Id": process.env.USER_ID ?? "",
    },
  });

  if (response.ok) {
    const data = await response.json();
    const titleData = data?.data?.website?.page_title;
    if (titleData) {
      title = titleData;
    }
    const faviconData = data?.data?.website?.favicon;
    if (faviconData) {
      favicon = faviconData;
    }

    const descriptionData = data?.data?.website?.page_description;
    if (descriptionData) {
      description = descriptionData;
    }
  }

  const metaObject: MetaObject = {
    title: {
      template: `%s | ${title || "Real Estate"}`,
      default: "Home",
    },
    description:
      description ||
      "Explore the best properties for sale and rent. Discover homes, apartments, and commercial spaces in prime locations. Get the best deals now!",
  };
  if (favicon) {
    metaObject.icons = {
      icon: favicon,
    };
  }

  return metaObject;
}

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
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
