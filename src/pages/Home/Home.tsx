"use client";
import React, { useState } from "react";
import "./Home.css";

const cardDetails = [
	{
		title: "Tipos de desastres",
		description:
			"Conheça os principais tipos de desastres naturais e tecnológicos que podem afetar sua região.",
		content: (
			<>
				<h3>Principais Desastres</h3>
				<ul>
					<li>
						<b>Enchentes:</b> Causadas por chuvas intensas, podem provocar
						alagamentos e deslizamentos.
					</li>
					<li>
						<b>Terremotos:</b> Movimentos bruscos do solo, comuns em áreas de
						falhas geológicas.
					</li>
					<li>
						<b>Incêndios Florestais:</b> Podem ser naturais ou provocados,
						ameaçando fauna, flora e pessoas.
					</li>
					<li>
						<b>Deslizamentos:</b> Ocorrem em encostas instáveis, principalmente
						após chuvas fortes.
					</li>
					<li>
						<b>Acidentes Tecnológicos:</b> Vazamentos químicos, rompimento de
						barragens, explosões industriais.
					</li>
				</ul>
				<p>
					<b>Dica:</b> Informe-se sobre os riscos da sua região e tenha um plano
					de evacuação.
				</p>
			</>
		),
	},
	{
		title: "Alimentação",
		description:
			"Dicas de alimentos não perecíveis, armazenamento e preparo seguro em situações de emergência.",
		content: (
			<>
				<h3>Como se preparar</h3>
				<ul>
					<li>
						<b>Estoques Essenciais:</b> Água potável, enlatados, barras de
						cereal, grãos, leite em pó, biscoitos.
					</li>
					<li>
						<b>Armazenamento:</b> Guarde alimentos em local seco, arejado e
						protegido de animais.
					</li>
					<li>
						<b>Validade:</b> Verifique prazos e consuma os mais antigos primeiro
						(sistema PEPS).
					</li>
					<li>
						<b>Preparo:</b> Prefira alimentos que não precisem de cozimento ou
						refrigeração.
					</li>
				</ul>
				<p>
					<b>Dica:</b> Tenha sempre um abridor de latas manual e utensílios
					descartáveis no kit de emergência.
				</p>
			</>
		),
	},
	{
		title: "Dicas de sobrevivência",
		description:
			"Orientações essenciais para manter a segurança, saúde e bem-estar durante e após um desastre.",
		content: (
			<>
				<h3>Sobrevivendo em situações de risco</h3>
				<ul>
					<li>
						<b>Kit de Emergência:</b> Inclua lanterna, pilhas, rádio, documentos,
						remédios, apito e itens de higiene.
					</li>
					<li>
						<b>Comunicação:</b> Mantenha contato com familiares e siga
						orientações das autoridades locais.
					</li>
					<li>
						<b>Saúde:</b> Cuide de ferimentos, evite água e alimentos
						contaminados, mantenha-se hidratado.
					</li>
					<li>
						<b>Saúde Mental:</b> Converse com pessoas próximas, mantenha a calma
						e procure apoio se necessário.
					</li>
				</ul>
				<p>
					<b>Dica:</b> Sempre tenha um ponto de encontro combinado com
					familiares e vizinhos.
				</p>
			</>
		),
	},
];

const disasterTabs = [
	{
		label: "Enchentes",
		content: (
			<>
				<h4>Enchentes</h4>
				<video
					src="/video/rainfall.mp4"
					autoPlay
					loop
					muted
					playsInline
					style={{ width: "100%", borderRadius: 12, marginBottom: 12 }}
				/>
				<p>
					Ocorrem devido ao excesso de chuvas, transbordamento de rios ou falhas
					em drenagem urbana. Podem causar alagamentos, perdas materiais e riscos
					à vida.
				</p>
			</>
		),
	},
	{
		label: "Terremotos",
		content: (
			<>
				<h4>Terremotos</h4>
				<video
					src="/video/earthquake.mp4"
					autoPlay
					loop
					muted
					playsInline
					style={{ width: "100%", borderRadius: 12, marginBottom: 12 }}
				/>
				<p>
					Movimentos bruscos do solo, geralmente em áreas de falhas geológicas.
					Podem provocar destruição de edificações e riscos de deslizamentos.
				</p>
			</>
		),
	},
	{
		label: "Tsunamis",
		content: (
			<>
				<h4>Tsunamis</h4>
				<video
					src="/video/tsunami.mp4"
					autoPlay
					loop
					muted
					playsInline
					style={{
						width: "100%",
						borderRadius: 12,
						marginBottom: 12,
					}}
				/>
				<p>
					Ondas gigantes causadas por terremotos ou erupções submarinas. Podem
					atacar áreas costeiras com grande força, causando destruição e perdas
					humanas.
				</p>
				<ul>
					<li>
						<b>Sinais:</b> Recuo repentino do mar, tremores, alertas oficiais.
					</li>
					<li>
						<b>O que fazer:</b> Afaste-se imediatamente da praia e busque locais
						elevados.
					</li>
				</ul>
			</>
		),
	},
	{
		label: "Incêndios Florestais",
		content: (
			<>
				<h4>Incêndios Florestais</h4>
				<video
					src="/video/fire.mp4"
					autoPlay
					loop
					muted
					playsInline
					style={{ width: "100%", borderRadius: 12, marginBottom: 12 }}
				/>
				<p>
					Podem ser naturais ou provocados, ameaçando fauna, flora e pessoas. O
					combate deve ser feito por profissionais.
				</p>
			</>
		),
	},
	{
		label: "Furacões",
		content: (
			<>
				<h4>Furacões</h4>
				<video
					src="/video/hurricane.mp4"
					autoPlay
					loop
					muted
					playsInline
					style={{ width: "100%", borderRadius: 12, marginBottom: 12 }}
				/>
				<p>
					Furacões são tempestades tropicais intensas com ventos muito fortes e chuvas torrenciais, capazes de causar grandes destruições em áreas costeiras e interiores.
				</p>
				<ul>
					<li><b>Sinais:</b> Alertas meteorológicos, ventos fortes, mar agitado, chuvas intensas.</li>
					<li><b>O que fazer:</b> Busque abrigo seguro, mantenha-se longe de janelas, siga as orientações das autoridades e tenha um kit de emergência preparado.</li>
				</ul>
			</>
		),
	},
];

// Componente para cálculo de racionamento
const RationCalculator: React.FC = () => {
  const [people, setPeople] = React.useState(1);
  const [days, setDays] = React.useState(3);
  const [food, setFood] = React.useState(10); // quantidade em kg
  const [water, setWater] = React.useState(10); // litros
  const [result, setResult] = React.useState<string | null>(null);
  const [diet, setDiet] = React.useState<string | null>(null);
  const [showResult, setShowResult] = React.useState(false);
  const [showDiet, setShowDiet] = React.useState(false);
  // Novo estado para expandir o card e diminuir as abas
  const expanded = showResult || showDiet;

  const handleCalc = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(false);
    setShowDiet(false);
    // Consumo médio por pessoa/dia
    const foodPerDay = 0.4; // kg
    const waterPerDay = 2; // litros
    const maxDaysFood = Math.floor(food / (foodPerDay * people));
    const maxDaysWater = Math.floor(water / (waterPerDay * people));
    const minDays = Math.min(maxDaysFood, maxDaysWater);
    setResult(
      `Seu estoque dura aproximadamente ${minDays} dia(s) para ${people} pessoa(s).` +
        (minDays < days
          ? `\nAtenção: o estoque é insuficiente para ${days} dias de confinamento!`
          : `\nEstoque suficiente para o período estimado.`)
    );
    // Dieta sugerida
    if (minDays > 0) {
      const foodPerMeal = (food / (people * minDays * 3)); // 3 refeições por dia
      const waterPerMeal = (water / (people * minDays * 3));
      setDiet(
        `Sugestão de dieta para racionamento:\n` +
        `- ${foodPerMeal.toFixed(2)} kg de alimentos não perecíveis por pessoa a cada refeição (3x ao dia)\n` +
        `- ${waterPerMeal.toFixed(2)} litros de água por pessoa a cada refeição\n` +
        `\nDistribua as refeições igualmente ao longo do dia para garantir energia e hidratação.`
      );
    } else {
      setDiet(null);
    }
    setTimeout(() => setShowResult(true), 150); // delay para animação
    setTimeout(() => setShowDiet(true), 350); // delay para animação
  };

  return (
    <form onSubmit={handleCalc} className={`ration-form${expanded ? ' ration-form-expanded' : ''}`}>
      <div className={`ration-flex${expanded ? ' ration-flex-expanded' : ''}`}>
        <div className={`ration-fields${expanded ? ' ration-fields-expanded' : ''}`}>
          <div className="ration-row">
            <label>
              <span>Pessoas</span>
              <input type="number" min={1} value={people} onChange={e => setPeople(Number(e.target.value))} />
            </label>
            <label>
              <span>Dias de confinamento</span>
              <input type="number" min={1} value={days} onChange={e => setDays(Number(e.target.value))} />
            </label>
          </div>
          <div className="ration-row">
            <label>
              <span>Alimentos (kg)</span>
              <input type="number" min={0} value={food} onChange={e => setFood(Number(e.target.value))} />
            </label>
            <label>
              <span>Água (litros)</span>
              <input type="number" min={0} value={water} onChange={e => setWater(Number(e.target.value))} />
            </label>
          </div>
          <button type="submit" className="ration-btn">Calcular</button>
          {result && (
            <div className={`ration-result ration-fade${showResult ? ' show' : ''}`}>{result}</div>
          )}
        </div>
        {diet && (
          <div className={`ration-diet-side ration-fade${showDiet ? ' show' : ''}`}>{diet}</div>
        )}
      </div>
    </form>
  );
};

const survivalTabs = [
	{
		label: "Enchentes",
		content: (
			<>
				<h4>Dicas para Enchentes</h4>
				<ul>
					<li>Procure abrigo em locais altos e seguros.</li>
					<li>Evite contato com a água da enchente, pois pode estar contaminada.</li>
					<li>Desligue a energia elétrica se a água começar a entrar em casa.</li>
					<li>Não tente atravessar áreas alagadas a pé ou de carro.</li>
					<li>Mantenha documentos e itens essenciais em embalagens impermeáveis.</li>
				</ul>
			</>
		),
	},
	{
		label: "Terremotos",
		content: (
			<>
				<h4>Dicas para Terremotos</h4>
				<ul>
					<li>Durante o tremor, proteja-se sob mesas ou móveis resistentes.</li>
					<li>Afaste-se de janelas, espelhos e objetos que possam cair.</li>
					<li>Após o tremor, saia com calma e evite elevadores.</li>
					<li>Tenha um ponto de encontro combinado com familiares.</li>
					<li>Mantenha um kit de emergência acessível.</li>
				</ul>
			</>
		),
	},
	{
		label: "Tsunamis",
		content: (
			<>
				<h4>Dicas para Tsunamis</h4>
				<ul>
					<li>Ao sentir tremores ou receber alertas, afaste-se imediatamente da praia.</li>
					<li>Busque locais elevados e permaneça até o aviso das autoridades.</li>
					<li>Não volte para áreas de risco até a liberação oficial.</li>
					<li>Tenha um plano de evacuação para a família.</li>
				</ul>
			</>
		),
	},
	{
		label: "Incêndios Florestais",
		content: (
			<>
				<h4>Dicas para Incêndios Florestais</h4>
				<ul>
					<li>Evacue imediatamente se houver risco próximo.</li>
					<li>Use panos úmidos para proteger as vias respiratórias da fumaça.</li>
					<li>Evite áreas de vegetação seca e siga rotas seguras.</li>
					<li>Não tente combater o fogo sozinho, acione o Corpo de Bombeiros.</li>
				</ul>
			</>
		),
	},
	{
		label: "Furacões",
		content: (
			<>
				<h4>Dicas para Furacões</h4>
				<ul>
					<li>Fique atento aos alertas meteorológicos e evacue se orientado.</li>
					<li>Refugie-se em locais seguros, longe de janelas e portas de vidro.</li>
					<li>Tenha água, alimentos e lanternas à disposição.</li>
					<li>Desligue aparelhos elétricos e mantenha-se informado pelo rádio.</li>
				</ul>
			</>
		),
	},
	{
		label: "Racionar Alimentos",
		content: (
			<>
				<h4>Calculadora de Racionamento de Alimentos</h4>
				<RationCalculator />
			</>
		),
	},
];

const Home: React.FC = () => {
	const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
	const [disasterTab, setDisasterTab] = useState(0);
	const [survivalTab, setSurvivalTab] = useState(0);

	return (
		<div className="home-main-container">
			<video
				className="home-bg-video"
				src="/video/earth.mp4"
				autoPlay
				loop
				muted
				playsInline
			/>
			<div className="home-content">
				<h1>Bem-vindo ao Portal de Prevenção</h1>
				<div
					className={`home-cards-row${
						expandedIdx !== null ? " expanded-row" : ""
					}`}
				>
					{cardDetails.map((card, idx) => (
						<div
							className={`home-card${
								expandedIdx === idx ? " expanded" : ""
							}${
								expandedIdx !== null && expandedIdx !== idx
								? " faded"
								: ""
							}`}
							key={idx}
							onClick={() => setExpandedIdx(idx)}
							tabIndex={0}
							style={{
								cursor:
									expandedIdx === null
									? "pointer"
									: expandedIdx === idx
									? "default"
									: "not-allowed",
							}}
						>
							<h2>{card.title}</h2>
							<p>{card.description}</p>
							{expandedIdx === idx && (
								<div className="home-card-details">
									{idx === 0 ? (
										<div className="tabs-and-content">
											<div className="tabs-container">
												{disasterTabs.map((tab, tIdx) => (
													<button
														key={tab.label}
														className={`tab-btn${
															disasterTab === tIdx ? " active" : ""
														}`}
														onClick={(e) => {
															e.stopPropagation();
															setDisasterTab(tIdx);
														}}
													>
														{tab.label}
													</button>
												))}
											</div>
											<div className="tab-content">
												{disasterTabs[disasterTab].content}
											</div>
										</div>
									) : idx === 2 ? (
										<div className="tabs-and-content">
											<div className="tabs-container">
												{survivalTabs.map((tab, tIdx) => (
													<button
														key={tab.label}
														className={`tab-btn${
															survivalTab === tIdx ? " active" : ""
														}`}
														onClick={(e) => {
															e.stopPropagation();
															setSurvivalTab(tIdx);
														}}
													>
														{tab.label}
													</button>
												))}
											</div>
											<div className="tab-content">
												{survivalTabs[survivalTab].content}
											</div>
										</div>
									) : (
										card.content
									)}
									<button
										className="close-btn"
										onClick={(e) => {
											e.stopPropagation();
											setExpandedIdx(null);
										}}
									>
										Fechar
									</button>
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
