"use client";

import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { FavoritesProvider } from "@/app/favorites/FavoritesContext";

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-zinc-950 text-white font-sans">
        
        <FavoritesProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </FavoritesProvider>

      </body>
    </html>
  );
}