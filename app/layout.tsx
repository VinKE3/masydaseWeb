import Providers from "@/context/Providers";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

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
      <head>
        <link rel="icon" href="/path/to/logo2.ico" type="image/x-icon" />
      </head>
      <body className={popinsFont.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
