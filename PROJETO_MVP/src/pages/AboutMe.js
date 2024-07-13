import React from 'react';
import { Link } from 'react-router-dom'; // Importar o componente Link
import '../index.css'; // Importar o arquivo de estilos

export default function AboutMe() {
    return (
        <div className="about-me-container">
            <div className="about-me-content">
                <h2>Sobre Mim</h2>
                <p>Eu sou Ike Sobera, o DJ perfeito para o seu evento. Com experiência de anos na indústria musical, meu objetivo é proporcionar a melhor experiência em entretenimento para o seu evento.</p>
                <p>Siga-me no Instagram <a href="https://instagram.com/ikesobera" target="_blank" rel="noopener noreferrer">@ikesobera</a> para atualizações e novidades!</p>
            </div>

            {/* Botão para voltar para a página Home */}
            <Link to="/" style={{ position: 'fixed', top: '10px', left: '30px', zIndex: 999, borderRadius: "32px" }}>
                <button className="back-button">Voltar para HomePage</button>
            </Link>
        </div>
    );
}
