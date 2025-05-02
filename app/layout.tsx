import type { Metadata } from "next";
import { Montserrat } from "next/font/google"; // Importa solo Montserrat
import "./globals.css";
import Whatsapp from "@/components/Whatsapp";

const montserrat = Montserrat({
  variable: "--font-montserrat", // Usa un nombre de variable descriptivo
  subsets: ["latin"],  // Incluye el subconjunto latin si es necesario
  display: 'swap',    // Optimiza la carga de la fuente
});

export const metadata: Metadata = {
  title: "Pueblo",
  description: "Branding y comunicación estratégica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}  // Aplica la variable de la fuente
      >
        <Whatsapp />
        {children}
      </body>
    </html>
  );
}