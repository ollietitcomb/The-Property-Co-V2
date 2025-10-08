import { DefaultSeoProps } from "next-seo";

export const defaultSEO: DefaultSeoProps = {
  titleTemplate: "%s | The Better Half Property Co",
  defaultTitle: "The Better Half Property Co | Your better half in property",
  description:
    "From quick fixes to long-term growth — Brighton & Hove's better half for property solutions.",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://betterhalfproperty.co",
    siteName: "The Better Half Property Co",
    images: [
      {
        url: "https://betterhalfproperty.co/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Better Half Property Co - Your better half in property",
      },
    ],
  },
  twitter: {
    handle: "@betterhalfprop",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      name: "theme-color",
      content: "#0f172a",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "/apple-touch-icon.png",
      sizes: "180x180",
    },
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "PropertyManagement",
  name: "The Better Half Property Co",
  description:
    "From quick fixes to long-term growth — Brighton & Hove's better half for property solutions.",
  url: "https://betterhalfproperty.co",
  telephone: "+44-1273-XXXXXX",
  email: "hello@betterhalfproperty.co",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Brighton & Hove",
    addressRegion: "East Sussex",
    addressCountry: "GB",
  },
  areaServed: {
    "@type": "City",
    name: "Brighton & Hove",
  },
  priceRange: "££",
};

