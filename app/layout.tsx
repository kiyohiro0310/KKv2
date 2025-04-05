import type { Metadata } from "next";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import { Suspense } from "react";
import Loading from "./loading";
import "./globals.css";
import "@splidejs/react-splide/css/sea-green";
import { Poppins } from "next/font/google";
import { ThemeContextProvider } from "./Themes/ThemeContext";
import { cookies } from "next/headers";

const font = Poppins({
  weight: ["400", "700"],
  style: ["normal", "normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kiyohiro Kambayashi",
  description: "Build to make life better",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const serverCookies = await cookies();
  const theme = serverCookies.get("theme")?.value || "light";

  return (
    <html lang="en" data-theme={theme}>
      <Suspense fallback={<Loading />}>
        <ThemeContextProvider>
          <body className={`${font.className} overflow-x-hidden`}>
            <Header />
            {children}
            <Footer />
          </body>
        </ThemeContextProvider>
      </Suspense>
    </html>
  );
}
