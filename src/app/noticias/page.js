// /src/app/noticias/page.js

import Link from "next/link";
import Image from "next/image";
// >> IMPORTAÇÃO DO NOVO CSS <<
import "./noticias.css";
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

            {/* NOVO CONTAINER: PARA OS ARTIGOS DE COLUNA */}
            <div className="secondary-articles-container">
                
                {/* Artigo Exemplo 2 (Secundário, na coluna) */}
                <article className="noticia-artigo">
                    <h2>A Guerra Muda de Rumo: Demônios Avançam Após a Destruição da Capital</h2>
                    <p className="data-publicacao">Publicado no 72º Dia do Solstício de Inverno, ano 756 N.E.</p>
                    <p>
                        Com a destruição repentina de Firestone e o colapso político do continente, o Pilar de Fogo Mortal — principal força defensiva contra
                        o avanço demoníaco — permaneceu imóvel e sem ordens centrais.
                        A ausência de comando abriu uma brecha inédita: pela primeira vez em décadas, as tropas demoníacas avançaram além das Linhas Escarlate.
                        A cidade-fortaleza de Brantalam, conhecida por resistir a três gerações de invasões, agora enfrenta seu pior cenário.

                        Especialistas militares afirmam que a perda da capital deve provocar mudanças estratégicas drásticas e pode até anunciar o início de uma 
                        guerra total.
                    </p>
                </article>
                
                {/* Adicione mais artigos aqui no futuro... */}
                <article className="noticia-artigo">
                    <h2>Sargenta Malícia: A Punidora do Exercito Demôniaco Está Desaparecida</h2>
                    <p className="data-publicacao">Publicado no 72º Dia do Solstício de Inverno, ano 756 N.E.</p>
                    <p>
                        A sargenta Malícia Halder, a oficial responsável por escoltar e supervisionar o transporte do protótipo demoníaco que resultou na destruição 
                        de Firestone, está oficialmente desaparecida.

                        Relatos indicam que Malícia retornou imediatamente a Brantalam após os eventos, mas desde então nenhum soldado ou civil declarou tê-la 
                        visto.

                        Rumores apontam: captura pelas forças demoníacas, deserção, ou até envolvimento maior do que se acreditava no projeto ilegal.

                        O Exército Continental se recusa a comentar.
                    </p>
                </article>

                <article className="noticia-artigo">
                    <h2>Hollows ao Sul: Criaturas Atingem Bosque Ensopado</h2>
                    <p className="data-publicacao">Publicado no 72º Dia do Solstício de Inverno, ano 756 N.E.</p>
                    <p>
                        Enquanto o norte do continente tenta conter o avanço demoníaco, uma nova frente de perigo se abriu:
                        uma grande divisão do recém-formado Exército Hollow se deslocou até o sul, descendo pelas rotas florestais e alcançando a pequena cidade
                        pesqueira de Bosque Ensopado.

                        Moradores relatam criaturas surgindo do nevoeiro da baía, avançando pelas docas e arrastando pessoas para dentro da água. As autoridades locais 
                        decretaram evacuação, mas a maioria das rotas já foi comprometida.

                        Os estudiosos afirmam que os Hollows não agem como demônios — não negociam, não recuam e não demonstram qualquer intenção além da expansão 
                        contínua das fendas dimensionais.
                    </p>
                </article>

            </div>
            {/* FIM DO NOVO CONTAINER */}

        </main>
    );
}