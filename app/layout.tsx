import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Lora, Merriweather, Mulish} from "next/font/google";
import "./globals.css";
import SectionContainer from "@/components/SectionContainer";
import { lora } from "./fonts";

export const metadata: Metadata = {
  title: "Janelle Yulo",
  description: "Janelle Yulo's website",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html className={lora.className} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <SectionContainer>
            < Header />
            {children}
          </SectionContainer>
        </main>
        <Footer />
      </body>
    </html>
  );
}
