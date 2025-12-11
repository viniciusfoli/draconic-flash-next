// /src/app/apoie/ApoieForm.js

'use client'; // ⬅️ ESSENCIAL: Permite usar o Event Handler onClick

import React from 'react';

// Estilos simples (mantidos aqui para que este componente seja auto-suficiente)
const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #555',
    backgroundColor: '#333',
    color: 'white',
    boxSizing: 'border-box'
};

const buttonStyle = {
    padding: '12px 25px',
    backgroundColor: '#C084FC',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.2s'
};

export default function ApoieForm() {
    
    // Handler para o clique do botão
    const handleSubmit = () => {
        alert('Mensagem de interesse enviada! Obrigado por apoiar o desenvolvimento.');
    }

    return (
        <div style={{ backgroundColor: '#202020', padding: '20px', borderRadius: '8px', border: '1px solid #333' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>Comentário de Apoio</h2>
            
            <form>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Seu Nome / Apelido:</label>
                    <input type="text" id="name" name="name" required style={inputStyle} placeholder="Seu nome ou perfil de contato (simulado)" />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="comment" style={{ display: 'block', marginBottom: '5px' }}>Por que deseja ajudar a desenvolver? (Comentário):</label>
                    <textarea id="comment" name="comment" required rows="5" style={inputStyle} placeholder="Diga o que você achou da proposta e como gostaria de contribuir!"></textarea>
                </div>
                <button 
                    type="button" 
                    onClick={handleSubmit} 
                    style={buttonStyle}
                >
                    Simular Envio de Contribuição
                </button>
            </form>
        </div>
    );
}