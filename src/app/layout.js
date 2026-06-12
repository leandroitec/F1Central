import Link from "next/link";
import "./globals.css";
import { FavoritesProvider } from "@/app/favorites/FavoritesContext";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-zinc-950 text-white flex flex-col min-h-screen">

        {/* Envolvemos lo que está dentro del body */}
        <FavoritesProvider>

          {/* NAVBAR */}
          <nav className="border-b bg-zinc-800 backdrop-blur-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
              <Link href="/" className="font-black text-2xl italic tracking-tighter">
                F1<span className="text-red-600">.</span>
              </Link>
              <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
                <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>
                <Link href="/pilotos" className="hover:text-red-600 transition-colors">Pilotos</Link>
                <Link href="/escuderias" className="hover:text-red-600 transition-colors">Escuderías</Link>
              </div>
            </div>
          </nav>

          {/* CONTENIDO */}
          <main className="flex-1">
            {children}
          </main>

          {/* FOOTER */}
          <footer className="border-t py-10 px-6 bg-zinc-800">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-zinc-500 text-sm">© 2026 F1 Hub Proyecto Educativo</p>
              <div className="flex gap-6">
                <Link href="/pilotos/leyendas" className="text-zinc-400 hover:text-white text-xs">LEYENDAS</Link>
                <Link href="https://www.formula1.com" className="text-zinc-400 hover:text-white text-xs">WEB OFICIAL</Link>
              </div>
            </div>
          </footer>

        </FavoritesProvider>
      </body>
    </html>
  );
}