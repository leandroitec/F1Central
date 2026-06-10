"use client";

import "./globals.css";
import { FavoritesProvider } from "@/app/favoritos/FavoritesContext";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-zinc-950 text-white">
        <FavoritesProvider>
          {children}
        </FavoritesProvider>
      </body>
    </html>
  );
}