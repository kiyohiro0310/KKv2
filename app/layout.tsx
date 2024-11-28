import type { Metadata } from "next";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Suspense } from "react";
import Loading from "./loading";
import "./globals.css";
import "@splidejs/react-splide/css/sea-green";

export const metadata: Metadata = {
  title: "Kiyohiro Kambayashi",
  description: "Build to make life better",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </Suspense>
    </html>
  );
}
