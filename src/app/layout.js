import { Inter } from "next/font/google"; // Importa a fonte Inter
import "./globals.css";

// Configura a fonte Inter
const inter = Inter({ 
    subsets: ["latin"],
    weight: ['400', '500', '700'] 
});

export const metadata = {
  // Títulos e descrições globais
  title: "DRACONIC BLAZE - Linktree",
  description: "Projeto de linktree com proposta de jogo Draconic Flash.",
};

export default function RootLayout({ children }) {
  return (
    // Define a linguagem para português
    <html lang="pt-br">
      {/* Aplica a classe da fonte no body */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}