// /src/app/noticias/page.js

import Link from "next/link";
import Image from "next/image";
// Se você criar um CSS específico para notícias (ex: noticias.css), importe aqui.
// Por enquanto, usaremos os estilos globais.

export const metadata = {
    title: "Notícias de Firestone - DRACONIC FLASH",
    description: "Últimas atualizações sobre o mundo e a trama de Draconic Flash."
};

export default function NoticiasPage() {
    return (
        <main id="noticias-container">
            {/* Botão de Voltar */}
            <div style={{ marginTop: '20px', marginBottom: '40px' }}>
                <Link href="/" style={{ 
                    padding: '8px 15px', 
                    border: '1px solid var(--strole-color)', 
                    borderRadius: '4px', 
                    textDecoration: 'none'
                }}>
                    ← Voltar para a Página Inicial
                </Link>
            </div>

            <h1>Jornal do Mundo: Últimas de Firestone</h1>

            {/* Artigo Exemplo 1 */}
            <article className="noticia-artigo">
                <h2>A Queda de Firestone</h2>
                <p className="data-publicacao">Publicado no 66º Dia do Solstício de Inverno, ano 756 N.E.</p>
                <div className="noticia-imagem-container">
                    <Image
                        src="/assets/noticias/ruina1.png" // Lembre-se de criar esta imagem em /public/assets/noticias/
                        alt="A muralha de ferro sendo reconstruída"
                        width={600}
                        height={350}
                        // Estilos inline usam a sintaxe de objeto JavaScript (camelCase)
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                </div>
                <p>
                    A antiga capital do continente, Firestone, foi completamente destruída ontem após o acionamento de uma arma ilegal de origem demoníaca. 
                    A explosão gerada pelo dispositivo não apenas arrasou a cidade, como contaminou todos os sobreviventes com um viruz demoniaco, permitindo 
                    o surgimento de entidades hostis que especialistas estão chamando de Hollows.

                    Autoridades confirmaram que o artefato fazia parte de um projeto clandestino conduzido pelo grupo de desenvolvimento do exercito demoniaco, 
                    que buscava demonstrar o poder do armamento ignorando todas as leis interplanares.

                    Segundo testemunhas, o céu “se partiu em camadas”, seguido por um clarão que consumiu todo o distrito central. As primeiras aparições dos 
                    Hollows ocorreram minutos depois, emergindo das cinzas não havia sobrevivente apenas ambições monstros que tomaram o lugar das pobres almas,
                    que tiveram o azar de estar no lugar errado na hora errada.

                    As guildas de defesa, o Exército Continental e o Conclave Arcano declararam estado de emergência.
                    O número de mortos ainda é desconhecido, mas acredita-se que a maior parte da população da capital não sobreviveu ao impacto.

                    A Queda de Firestone representa a maior catástrofe na história recente, marcando o início da chamada Era da Ruptura, período de instabilidade 
                    que deve se estender pelos próximos anos.
                </p>
                <hr />
            </article>

            {/* Artigo Exemplo 2 */}
            <article className="noticia-artigo">
                <h2>Novas Descobertas Arcanas</h2>
                <p className="data-publicacao">Publicado em 20 de Novembro, ano 432 N.E.</p>
                <p>
                    Magos do Círculo de Cristal anunciaram a descoberta de um novo tipo de runa elemental. Acredita-se que esta runa possa revolucionar a forma como a energia dracônica é canalizada. Mais detalhes serão divulgados após testes rigorosos, mas as implicações para a guerra mágica são vastas.
                </p>
            </article>

        </main>
    );
}