import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SplashScreenLoader } from "@/components/splash-screen-loader";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spereon.codes"),
  title: {
    default: "Spereon.codes — Software That Grows With Your Business",
    template: "%s | Spereon.codes",
  },
  description:
    "Access secure, scalable business applications on a monthly subscription.",
  keywords: [
    "SaaS development",
    "custom software development",
    "mobile app development",
    "HRMS software",
    "ERP systems",
  ],
  openGraph: {
    type: "website",
    siteName: "Spereon.codes",
    title: "Spereon.codes — Software That Grows With Your Business",
    description:
      "Scalable SaaS platforms, mobile apps, ERP, HRMS, and custom software for businesses of all sizes.",
    url: "https://spereon.codes",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spereon.codes — Software That Grows With Your Business",
    description:
      "Scalable SaaS platforms, mobile apps, ERP, HRMS, and custom software for businesses of all sizes.",
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
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="splash-pending flex min-h-full flex-col">
        <noscript>
          <style>{`body.splash-pending{background:inherit;overflow:auto}body.splash-pending .site-content,.site-content{visibility:visible!important;opacity:1!important;transform:none!important;pointer-events:auto!important}`}</style>
        </noscript>
        <ThemeProvider>
          <SplashScreenLoader>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </SplashScreenLoader>
        </ThemeProvider>
      </body>
    </html>
  );
}
