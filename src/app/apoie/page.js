// /src/app/apoie/page.js

import Link from 'next/link';
// Importa o novo componente cliente com a lógica interativa (agora .js)
import ApoieForm from './ApoieForm'; 
// OBS: Removidos os imports problemáticos de 'headers'.

export const metadata = {
    title: "Apoie - DRACONIC FLASH",
    description: "Ajude o projeto Draconic Flash a se tornar realidade, demonstrando interesse em desenvolvimento."
};

// O 'async' e o 'fetch' abaixo garantem que esta página seja Server-Side Rendered (SSR)
export default async function ApoiePage() {
    
    // TÉCNICA PARA FORÇAR O SSR: 
    // fetch com 'cache: no-store' busca a hora atual e garante renderização no servidor a cada requisição.
    const dynamicData = await fetch('http://worldtimeapi.org/api/timezone/America/Sao_Paulo', { 
        cache: 'no-store' 
    }).then(res => res.json()).catch(() => ({ datetime: new Date().toISOString() }));
    
    const serverTime = new Date(dynamicData.datetime).toLocaleTimeString('pt-BR');
    
    return (
        <main id="apoie-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}>
            
            <Link href="/" style={{ color: '#C084FC', textDecoration: 'none' }}>
                ← Voltar para a Página Inicial
            </Link>
            
            <h1 style={{ textAlign: 'center', margin: '40px 0 20px' }}>
                ⭐ Apoie o DRACONIC FLASH (SSR) ⭐
            </h1>
            
            <p style={{ textAlign: 'justify', marginBottom: '30px', lineHeight: '1.6' }}>
                Esta página demonstra a **Renderização no Lado do Servidor (SSR)**. O maior apoio que o projeto pode receber é o interesse em participar do desenvolvimento! 
                Deixe seu comentário abaixo.
            </p>

            {/* O conteúdo interativo (formulário) é carregado a partir do componente cliente */}
            <ApoieForm /> 
            
            <p style={{ marginTop: '40px', fontSize: '0.9rem', color: '#aaa' }}>
                * Esta página foi renderizada no servidor (SSR) às: **{serverTime}**
                <br />
                * O horário muda a cada vez que você recarrega a página.
            </p>

        </main>
    );
}