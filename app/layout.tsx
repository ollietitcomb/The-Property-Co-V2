import type { Metadata } from "next";
import { localBusinessSchema } from "@/lib/seo";
import "@/styles/globals.css";
import "@/styles/fonts.css";

export const metadata: Metadata = {
  title: {
    default: "The Better Half Property Co | Your better half in property",
    template: "%s | The Better Half Property Co",
  },
  description:
    "From quick fixes to long-term growth — Brighton & Hove's better half for property solutions.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://betterhalfproperty.co"),
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://betterhalfproperty.co",
    siteName: "The Better Half Property Co",
    title: "The Better Half Property Co | Your better half in property",
    description:
      "From quick fixes to long-term growth — Brighton & Hove's better half for property solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Better Half Property Co - Brighton & Hove property, done properly.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

