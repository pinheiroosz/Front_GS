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

const Home: React.FC = () => {
	const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
	const [disasterTab, setDisasterTab] = useState(0);

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
															disasterTab === tIdx
																? " active"
																: ""
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
