// /src/app/proposta/template.js

// 1. Exporta apenas a metadata (sem o "use client")
export const metadata = {
  title: "Proposta - DRACONIC FLASH",
};

// 2. Define o componente Template para envolver a página
export default function PropostaTemplate({ children }) {
  // Este template simplesmente passa o conteúdo da página adiante
  return <>{children}</>;
}