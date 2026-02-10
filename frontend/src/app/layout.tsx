import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Studio Volpe - Commercialisti",
    template: "%s | Studio Volpe",
  },
  description:
    "Studio di commercialisti al servizio di imprese e professionisti. Consulenza fiscale, contabile e societaria.",
  keywords: [
    "commercialista",
    "consulenza fiscale",
    "consulenza contabile",
    "partita IVA",
    "dichiarazione redditi",
    "Roma",
  ],
  authors: [{ name: "Studio Volpe" }],
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "Studio Volpe",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
