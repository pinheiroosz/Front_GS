"use client";
import React, { useState } from "react";
import "./Home.css";

const cardDetails = [
  {
    title: "Tipos de desastres",
    description: "Conheça os principais tipos de desastres naturais e tecnológicos que podem afetar sua região.",
    content: (
      <>
        <h3>Exemplos:</h3>
        <ul>
          <li>Enchentes, terremotos, incêndios florestais, deslizamentos, acidentes industriais, etc.</li>
        </ul>
        <p>Saiba como identificar sinais de risco e como agir em cada situação.</p>
      </>
    ),
  },
  {
    title: "Alimentação",
    description: "Dicas de alimentos não perecíveis, armazenamento e preparo seguro em situações de emergência.",
    content: (
      <>
        <h3>Recomendações:</h3>
        <ul>
          <li>Estoques de água potável, enlatados, barras de cereal, grãos, etc.</li>
        </ul>
        <p>Armazene alimentos em local seco e seguro. Evite desperdício e verifique prazos de validade.</p>
      </>
    ),
  },
  {
    title: "Dicas de sobrevivência",
    description: "Orientações essenciais para manter a segurança, saúde e bem-estar durante e após um desastre.",
    content: (
      <>
        <h3>Essenciais:</h3>
        <ul>
          <li>Monte um kit de emergência, mantenha contato com familiares, siga orientações das autoridades.</li>
        </ul>
        <p>Cuide da saúde mental e física. Busque abrigo seguro e mantenha-se informado.</p>
      </>
    ),
  },
];

const Home: React.FC = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <div className="home-main-container">
      <video className="home-bg-video" src="/video/earth.mp4" autoPlay loop muted playsInline />
      <div className="home-content">
        <h1>Bem-vindo ao Portal de Prevenção</h1>
        <div className="home-cards-row">
          {cardDetails.map((card, idx) => (
            <div
              className={`home-card${expandedIdx === idx ? " expanded" : ""}${expandedIdx !== null && expandedIdx !== idx ? " faded" : ""}`}
              key={idx}
              onClick={() => setExpandedIdx(idx)}
              tabIndex={0}
              style={{ cursor: expandedIdx === null ? "pointer" : expandedIdx === idx ? "default" : "not-allowed" }}
            >
              <h2>{card.title}</h2>
              <p>{card.description}</p>
              {expandedIdx === idx && (
                <div className="home-card-details">
                  {card.content}
                  <button className="close-btn" onClick={e => { e.stopPropagation(); setExpandedIdx(null); }}>Fechar</button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
