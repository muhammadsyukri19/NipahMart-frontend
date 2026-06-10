import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NipaHub | Connecting Coastal Potential with Digital Markets",
  description:
    "NipaHub is a digital platform empowering artisanal communities in Aceh through sustainable Nipah palm innovation and global commerce. Marketplace, community, and impact—all in one ecosystem.",
  keywords: ["nipah", "marketplace", "aceh", "sustainable", "artisan", "coastal"],
  openGraph: {
    title: "NipaHub | Connecting Coastal Potential with Digital Markets",
    description:
      "Empowering artisanal communities in Aceh through sustainable Nipah palm innovation and global commerce.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
