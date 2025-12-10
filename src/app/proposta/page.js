// /src/app/proposta/page.jsx
"use client"; // ESSENCIAL: Permite usar o useState

import Image from "next/image";
import { useState } from "react"; // Importar useState
// >>> Adicione a importação do Link do Next.js <<<
import Link from "next/link";
import "./style_proposta.css"; 

// --- 1. ESTRUTURA DE DADOS DAS RAÇAS (FÁCIL DE EXPANDIR) ---
const RACES = [
  {
    id: 'anao',
    name: 'Anão(ã)',
    imageSrc: '/assets/races/Forfild.png', // *Você precisará criar essa imagem*
    description: 'Anões e Anãs são seres robustos, resilientes, mestres em mineração e forja. Sua sociedade é baseada em clãs e no valor da palavra. São conhecidos por sua barba e seu temperamento forte, mas também por sua lealdade inabalável.',
  },
  {
    id: 'humano',
    name: 'Humano',
    imageSrc: '/assets/races/giovany.png', // *Você precisará criar essa imagem*
    description: 'Os humanos são a raça mais diversa e adaptável. Sem uma especialidade inata, eles se destacam em todas as áreas, desde magia arcana até a liderança militar. Sua força reside na sua ambição e na capacidade de construir impérios.',
  },
  {
    id: 'chi_rath',
    name: 'Chi’rath',
    imageSrc: '/assets/races/Leela_Priya.jpg', // *Você precisará criar essa imagem*
    description: 'Os Chi’rath são seres graciosos, ligados à natureza oculta da noite. sabios e guerreiros ferozes como piratas. Suas habilidades como espadachins e monjes são dignas de elogios em varios planetas, preferindo mais a noite do que o dia são misticos que culturam a noite.',
  },
];
// -----------------------------------------------------------------

/*
export const metadata = {
  // Metadados específicos para a aba do navegador
  title: "Proposta - DRACONIC FLASH",
};*/

export default function PropostaPage() {
  // Estado para controlar qual raça está selecionada. Inicializa como null.
  const [selectedRaceId, setSelectedRaceId] = useState(null);
  
  // Encontra o objeto da raça selecionada para exibir a descrição
  const selectedRace = RACES.find(race => race.id === selectedRaceId);

  return (
    // O layout.js já envolve este componente
    <main>
        <h1>DRACONIC FLASH</h1>
        <div className="image-container">
            <Image
            src="/assets/conceitual1.png" // Caminho para a imagem na pasta /public/assets
            alt="arte exemplo do jogo"
            width={800} 
            height={450}
            />
        </div>
        <p>
            Draconic Flash é um jogo de rpg de turno, similar a outros nomes como divinity, obscure entre outros, nosso projeto independente visa criar, um jogo unico, mundo proprio, historia envolvente, varios finais, consequencias pra decisões e companheiros unicos e envolventes.
        </p>

        {/* --- NOVO CONTEÚDO: SELEÇÃO DE RAÇA --- */}
        <div id="race-selection-section">
            <h2 className="title-section">Escolha sua Raça</h2>
            
            <div className="race-cards-container">
                {RACES.map(race => (
                    // O card é o botão clicável.
                    <div 
                        key={race.id} 
                        className={`race-card ${selectedRaceId === race.id ? 'selected' : ''}`}
                        onClick={() => setSelectedRaceId(race.id)}
                    >
                        {/* ⚠️ Lembre-se: Você deve criar a pasta /public/assets/races/ e colocar as imagens aqui! */}
                        <Image
                            src={race.imageSrc}
                            alt={`Ícone da raça ${race.name}`}
                            width={150} 
                            height={150}
                        />
                        <h3>{race.name}</h3>
                    </div>
                ))}
            </div>

            {/* IFRAME DE DESCRIÇÃO SIMULADO: Exibe o card de descrição se uma raça for selecionada */}
            {selectedRace && (
                <div id="race-description-box" className="card-board">
                    <h3 className="description-title">
                        Descrição do {selectedRace.name}
                    </h3>
                    <p className="description-text">
                        {selectedRace.description}
                    </p>
                </div>
            )}
            
        </div>
        {/* --- FIM NOVO CONTEÚDO --- */}
        {/* NOVO BOTÃO DE VOLTAR */}
        <div id="back-button-container">
             {/* O componente Link do Next.js faz a navegação interna sem recarregar a página */}
            <Link href="/" className="back-button">
              ← Voltar para a Página Inicial
            </Link>
        </div>
        {/* FIM NOVO BOTÃO */}
    </main>
  );
}