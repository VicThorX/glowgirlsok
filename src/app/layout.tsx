import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AmbientGlow } from "@/components/ui/ambient-glow";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07090E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://glowgirls.com.ar"),
  title: "Glow Girls | Cosmética Botánica & Cuidado Capilar de Alta Gama",
  description:
    "Descubre la alquimia de una piel luminosa y un cabello radiante. Fórmulas botánicas puras, biotecnología dermoestética y resultados clínicos visibles.",
  keywords: [
    "Glow Girls",
    "Glowgirlsok",
    "Skincare premium",
    "Tónico de Rosas",
    "Niacinamida Pantenol",
    "Shampoo Matizador Violeta",
    "Cosmética Botánica Argentina",
    "Clean Beauty",
  ],
  authors: [{ name: "Glow Girls Studio" }],
  openGraph: {
    title: "Glow Girls | Cosmética Botánica & Dermoestética",
    description: "Fórmulas puras, biotecnología y el resplandor natural que tu piel y cabello merecen.",
    url: "https://glowgirls.com.ar",
    siteName: "Glow Girls",
    images: [
      {
        url: "/brand/logo.png",
        width: 800,
        height: 800,
        alt: "Glow Girls Skin & Hair Care",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Glow Girls | Cosmética Botánica & Cuidado Capilar",
    description: "La alquimia perfecta entre ciencia botánica y belleza estética.",
    images: ["/brand/logo.png"],
  },
  icons: {
    icon: "/brand/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${cormorant.variable} ${jakarta.variable} dark scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="font-sans bg-obsidian-900 text-foreground selection:bg-rosegold-300/30 selection:text-white antialiased min-h-screen relative overflow-x-hidden"
      >
        {/* Interactive Ambient Glow & Noise */}
        <AmbientGlow />
        
        {/* Main Application Container */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>

        {/* Floating Quick Action WhatsApp Pill */}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
