import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Castrum Novum INVEST a.s. | Investičná spoločnosť",
  description:
    "Castrum Novum INVEST a.s. - odborníci na investičné projekty financované z eurofondov. IČO: 54919266",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sk" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
