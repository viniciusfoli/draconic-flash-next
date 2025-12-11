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
                    A antiga capital do continente, Firestone, foi completamente destruída ontem após o acionamento de uma arma
                    ilegal de origem demoníaca. A explosão gerada pelo dispositivo não apenas arrasou a cidade, como 
                    infectou todos os sobreviventes com um vírion infernal, responsável pelo surgimento das entidades 
                    hostis agora chamadas de Hollows.
                </p>

                <p>
                    Autoridades confirmaram que o artefato fazia parte de um projeto clandestino conduzido pelo grupo de 
                    desenvolvimento bélico do Exército Demoníaco, que buscava demonstrar o poder do armamento ignorando 
                    todas as leis interplanares.
                </p>

                <p>
                    Segundo testemunhas, o céu “se partiu em camadas”, seguido por um clarão que consumiu todo o distrito 
                    central. As primeiras aparições dos Hollows ocorreram minutos depois, emergindo das cinzas. 
                    Não houve sobreviventes — apenas criaturas deformadas, fragmentos distorcidos das almas que tiveram 
                    o azar de estar no lugar errado na hora errada.
                </p>

                <p>
                    As Guildas de Defesa, o Exército Continental e o Conclave Arcano declararam estado de emergência.
                    O número de mortos ainda é desconhecido, mas estima-se que a maior parte da população da capital 
                    não tenha sobrevivido ao impacto.
                </p>

                <p>
                    A Queda de Firestone representa a maior catástrofe da história recente, marcando o início da chamada 
                    Era da Ruptura — um período de instabilidade que deve assombrar o continente pelos próximos anos.
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
                        Com a destruição repentina de Firestone e o colapso político do continente, o Pilar de Fogo Mortal — 
                        principal força ofensiva do Inferno para manter sua presença na realidade — voltou a avançar, queimando 
                        mais intensamente do que nunca contra os exércitos da Aliança.
                    </p>

                    <p>
                        A ausência de comando central abriu uma brecha inédita: pela primeira vez em décadas, as tropas 
                        demoníacas ultrapassaram as Linhas Escarlate. A cidade-fortaleza de Brantalam, símbolo de resistência 
                        por três gerações, agora enfrenta seu pior cenário.
                    </p>

                    <p>
                        Especialistas militares afirmam que a perda da capital deve provocar mudanças estratégicas drásticas e 
                        pode até anunciar o início de uma guerra total.
                    </p>
                </article>
                
                {/* Adicione mais artigos aqui no futuro... */}
                <article className="noticia-artigo">
                    <h2>Sargenta Malícia: A Punidora do Exército Demoníaco Está Desaparecida</h2>
                    <p className="data-publicacao">Publicado no 72º Dia do Solstício de Inverno, ano 756 N.E.</p>
                    <p>
                        A sargenta Malícia Halder, a oficial responsável por escoltar e supervisionar o transporte do protótipo 
                        demoníaco que resultou na destruição de Firestone, está oficialmente desaparecida.
                    </p>

                    <p>
                        Relatos indicam que Malícia retornou imediatamente a Brantalam após o incidente, mas desde então nenhum 
                        soldado ou civil declarou tê-la visto.
                    </p>

                    <p>
                        Rumores circulam sobre sua possível captura, deserção ou até mesmo envolvimento direto no desenvolvimento 
                        da arma. O Exército Continental se recusa a comentar.
                    </p>
                </article>

                <article className="noticia-artigo">
                    <h2>Hollows ao Sul: Criaturas Atingem Bosque Ensopado</h2>
                    <p className="data-publicacao">Publicado no 72º Dia do Solstício de Inverno, ano 756 N.E.</p>
                    <p>
                        Enquanto o norte do continente tenta conter o avanço demoníaco, uma nova frente de perigo se abriu: 
                        uma grande divisão do recém-formado Exército Hollow deslocou-se para o sul, seguindo pelas rotas 
                        florestais até alcançar a pequena cidade pesqueira de Bosque Ensopado.
                    </p>

                    <p>
                        Moradores relatam criaturas emergindo do nevoeiro da baía, avançando pelas docas e arrastando pessoas 
                        para dentro da água. As autoridades locais decretaram evacuação, mas grande parte das rotas já está 
                        comprometida.
                    </p>

                    <p>
                        Pesquisadores afirmam que os Hollows não agem como demônios — não negociam, não recuam e não demonstram 
                        qualquer intenção além de consumir vida e propagar o vírion infernal.
                    </p>
                </article>

                <article className="noticia-artigo">
                    <h2>Desaparecidos de Fogo e Cinzas: Nobres e Diplomatas Entre as Vítimas</h2>
                    <p className="data-publicacao">Publicado no 73º Dia do Solstício de Inverno, ano 756 N.E.</p>
                    <p>
                        A tragédia da Queda de Firestone continua a revelar nomes inesperados entre os desaparecidos.
                        Entre eles está o príncipe branco Gaspar, herdeiro do Império Leonídeo. Fontes afirmam que o príncipe
                        havia fugido de seu planeta natal e viajado para Teralkia, onde teria sido envolvido em um suposto
                        complô para assassinar o príncipe-regente Scar. Gaspar estava na capital no momento do ataque demoníaco
                        e foi dado como morto — embora seu corpo não tenha sido encontrado.
                    </p>

                    <p>
                        A dinastia Chi’rath também sofreu perdas severas. Os Caçadores Imperiais — conhecidos por derrubar
                        as pragas interestelares mais mortais e por roubar das caravanas anãs sem jamais serem capturados —
                        estavam em missão diplomática em Firestone quando a arma demoníaca foi acionada. Nenhum corpo foi
                        identificado, e o conselho Chi’rath declarou silêncio absoluto.
                    </p>

                    <p>
                        Especialistas afirmam que a ausência dessas figuras pode desencadear instabilidade interestelar,
                        especialmente devido à importância política de suas ordens e linhagens.
                    </p>
                </article>

                <article className="noticia-artigo">
                    <h2>Heróis Perdidos: Lendas Caídas na Queda de Firestone</h2>
                    <p className="data-publicacao">Publicado no 73º Dia do Solstício de Inverno, ano 756 N.E.</p>

                    <p>
                        Entre os nomes mais chocantes da lista de desaparecidos está o Martelo de Guerra do Clã da Guerra —
                        considerado o maior guerreiro anão de sua geração. Um protetor incansável, responsável pela morte de
                        centenas de piratas Chi’rath e defensor histórico das rotas estelares. Mesmo sua força lendária não foi
                        suficiente para resistir à arma demoníaca que devastou a capital. Seu corpo também não foi encontrado.
                    </p>

                    <p>
                        Representantes dos anões afirmam que o Clã da Guerra entrou em <em>isolamento total</em>.
                        Nenhum comunicado oficial foi emitido. A expectativa é que estejam preparando retaliação.
                    </p>

                    <p>
                        Outro herói dado como morto é o renomado mago da Academia Árvore do Mundo — o jovem prodígio que
                        salvou estudantes e a princesa de Gaiscat e foi o único da história a sobreviver ao Teste do Coração
                        de Fênix. Rumores antigos afirmavam que o teste concedia imortalidade, mas o desaparecimento do mago
                        após a explosão parece desmentir qualquer esperança de lenda.
                    </p>
                </article>

                <article className="noticia-artigo">
                    <h2>Sombras em Firestone: Civis Influentes e Mercenários Entre os Desaparecidos</h2>
                    <p className="data-publicacao">Publicado no 73º Dia do Solstício de Inverno, ano 756 N.E.</p>

                    <p>
                        A Guilda de Comerciantes confirmou oficialmente a morte de Zevulun, filho do Mestre da Guilda —
                        uma figura promissora no comércio intercontinental. A guilda declarou luto e anunciou que assumirá
                        todas as operações humanitárias em sua homenagem. Como tantos outros, seu corpo não foi localizado.
                    </p>

                    <p>
                        Entre as aventureiras desaparecidas estão também a heroína elfa Ximena e a duende mercenária
                        Gretel Rau. Ximena, amplamente amada pelo povo élfico, ganhou notoriedade ao lutar jovem na
                        Guerra do Anel Alquímico contra a humanidade. Ela viajava para Firestone para auxiliar na
                        mobilização de tropas antes do ataque.
                    </p>

                    <p>
                        Já Gretel Rau, por outro lado, era conhecida como a maior trapaceira de cinco reinos — temida por
                        sua fama de enganar reis, magos e até anões. Em contraste com os lamentos pela perda de Ximena,
                        alguns cidadãos comentam que “um problema a menos” pode não ser tão ruim. Ainda assim: seu corpo,
                        assim como o de tantos, não foi encontrado.
                    </p>
                </article>

            </div>
            {/* FIM DO NOVO CONTAINER */}

        </main>
    );
}