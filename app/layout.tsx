import type { Metadata } from "next";
import { Cormorant_Garamond, Cinzel } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: "Le Marteau et le Miroir — 33 frappes pour se transformer",
  description:
    "Un marteau pour briser ce qui enferme. Un miroir pour regarder sans fuir. 33 frappes pour traverser le feu et devenir ce que tu es déjà.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${cormorant.variable} ${cinzel.variable}`}>
        {children}
      </body>
    </html>
  );
}
