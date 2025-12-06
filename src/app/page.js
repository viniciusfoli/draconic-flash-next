// /src/app/page.js
"use client"; // ESSENCIAL: Permite usar hooks (estado e efeitos)

import { useState, useEffect } from "react";
import Image from "next/image"; // Componente para otimização de imagens
import Script from "next/script"; // Componente para scripts externos (ion-icons)

export default function Home() {
  // O estado 'light' substitui a manipulação direta do DOM
  // Começa como 'true' porque o seu index.html original começava com class="light"
  const [isLightMode, setIsLightMode] = useState(true); 

  // Função que substitui toggleMode() do script.js
  const toggleMode = () => {
    setIsLightMode(prev => !prev);
  };

  // Valores dinâmicos
  const avatarSrc = isLightMode ? "/assets/avatar-light.png" : "/assets/avatar.png";
  const avatarAlt = isLightMode ? "Foto de perfil no modo light" : "Foto de perfil no modo dark";

  // Hook que substitui a parte do script.js que muda a classe no <html>
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const htmlElement = document.documentElement;
      
      if (isLightMode) {
        htmlElement.classList.add("light");
      } else {
        htmlElement.classList.remove("light");
      }
    }
  }, [isLightMode]);
  
  // O JSX substitui a estrutura do index.html
  return (
    <>
      <div id="container">
        <div id="profile">
          <Image
            src={avatarSrc}
            alt={avatarAlt}
            width={112} 
            height={112} 
            priority 
          />
          <p>@DraconicBlaze</p>
        </div>

        {/* LIGAÇÃO COM O NOVO COMPORTAMENTO: onClick chama a função React */}
        <div id="switch" onClick={toggleMode}>
          <button></button>
          <span></span>
        </div>

        <ul>
          <li>
            {/* Link para a nova página de proposta */}
            <a href="/proposta">Proposta do Jogo</a> 
          </li>
          <li>
            <a href="#">Apoiar</a>
          </li>
          <li>
            <a href="#" target="_blank">
              Ultimas Noticias de Firestone
            </a>
          </li>
          <li>
            <a href="#">Ultimas Atualizações</a>
          </li>
        </ul>

        <div id="social-links">
          <a href="http://github.com" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a href="http://instagram.com" target="_blank">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="http://youtube.com" target="_blank">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
          <a href="http://linkedin.com" target="_blank">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>

        <footer>Feito com ♥</footer>
      </div>

      {/* Scripts dos Ícones */}
      <Script
        type="module"
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        strategy="lazyOnload"
      />
      <Script
        nomodule
        src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        strategy="lazyOnload"
      />
    </>
  );
}