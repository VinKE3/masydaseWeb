import Providers from "@/context/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Footer } from "@/components/Footer";
import MainHeader from "@/components/Header/MainHeader";

const popinsFont = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MasyDase",
  description: "Soluciones de software para tu negocio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={popinsFont.className}>
        <Providers>
          <MainHeader />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
