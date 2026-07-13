"use client";

import Image from "next/image";
import { useState } from "react";

type Plan = {
  id: string;
  name: string;
  price: string;
  summary: string;
  image: string;
  imageAlt: string;
  benefits: string[];
  categories: string[];
};

const plans: Plan[] = [
  {
    id: "protege",
    name: "Amore Protege",
    price: "9,90",
    summary: "Uma porta de entrada para cuidar da mente, do corpo e da rotina.",
    image: "/plans/amore-protege-cover.webp",
    imageAlt: "Pessoa em uma rotina de autocuidado, atividade física e bem-estar",
    benefits: [
      "Plataforma de bem-estar com mais de 5 mil conteúdos em vídeo, academias pay-per-use e assistente digital",
      "Programa de hábitos saudáveis com atendimento mensal de nutricionista, personal trainer e psicólogo",
      "Programa de saúde mental com 2 consultas mensais por vídeo",
    ],
    categories: ["Bem-estar", "Hábitos saudáveis", "Saúde mental"],
  },
  {
    id: "mulher",
    name: "Amore Mulher",
    price: "11,90",
    summary: "Cuidado para a mulher e sua família em diferentes fases da vida.",
    image: "/plans/amore-mulher-cover.webp",
    imageAlt: "Três gerações de mulheres reunidas em um momento de cuidado e afeto",
    benefits: [
      "Clínico geral por vídeo com agendamento e pronto atendimento 24/7, conforme as condições de utilização",
      "Atendimento 24/7 em saúde da mulher, obstetrícia e pediatria",
      "Acolhimento em situações de vulnerabilidade doméstica, com apoio e direcionamento legal",
      "Assistentes digitais com conteúdos sobre universo feminino, parentalidade, educação e criação dos filhos",
      "Plataforma de bem-estar e programa mensal de hábitos saudáveis",
    ],
    categories: ["Telemedicina", "Saúde da mulher", "Família", "Bem-estar"],
  },
  {
    id: "saude",
    name: "Amore Saúde",
    price: "16,90",
    summary: "Acesso presencial a cuidados de saúde com preços reduzidos.",
    image: "/plans/amore-saude-cover.webp",
    imageAlt: "Beneficiária sendo acolhida em um centro de saúde moderno",
    benefits: [
      "Rede de clínicas e médicos particulares para consultas presenciais com preços reduzidos",
      "Mais de 1.500 tipos de exames, com até 70% de desconto em procedimentos selecionados, conforme rede e localidade",
      "Rede de dentistas para consultas, exames e tratamentos odontológicos e ortodônticos",
    ],
    categories: ["Consultas", "Exames", "Odontologia"],
  },
  {
    id: "vida",
    name: "Amore Vida",
    price: "19,90",
    summary: "Saúde imediata e proteção financeira para momentos delicados.",
    image: "/plans/amore-vida-cover.webp",
    imageAlt: "Mãe usando atendimento por vídeo ao lado dos filhos em casa",
    benefits: [
      "Clínico geral por vídeo com agendamento e pronto atendimento 24/7, conforme as condições de utilização",
      "Seguro de R$ 10 mil em caso de morte acidental ou invalidez total permanente por acidente",
      "Assistência funeral de R$ 5 mil para o titular do programa",
    ],
    categories: ["Telemedicina", "Seguro acidental", "Assistência funeral"],
  },
  {
    id: "completa",
    name: "Amore Saúde Completa",
    price: "29,90",
    summary: "Uma combinação ampla de saúde presencial, digital e bem-estar.",
    image: "/plans/amore-saude-completa-cover.webp",
    imageAlt: "Casal integrando saúde digital, atividade física e cuidado cotidiano",
    benefits: [
      "Rede de consultas, exames e dentistas com preços reduzidos em todo o Brasil",
      "Clínico geral por vídeo com pronto atendimento 24/7, conforme as condições de utilização",
      "A partir de 15% de desconto em medicamentos participantes em mais de 5 mil estabelecimentos da rede parceira",
      "Programa de saúde mental com 2 consultas mensais por vídeo",
      "Plataforma de bem-estar e programa mensal de hábitos saudáveis",
    ],
    categories: ["Rede de saúde", "Telemedicina", "Farmácia", "Saúde mental", "Bem-estar"],
  },
  {
    id: "360",
    name: "Amore 360",
    price: "35,90",
    summary: "Saúde, bem-estar, economia e proteção reunidos em uma assinatura.",
    image: "/plans/amore-360-cover.webp",
    imageAlt: "Família multigeracional reunida em uma rotina ativa e saudável",
    benefits: [
      "Clínico geral por vídeo com pronto atendimento 24/7, conforme as condições de utilização",
      "A partir de 15% de desconto em medicamentos participantes em mais de 5 mil estabelecimentos da rede parceira",
      "Seguro acidental de R$ 10 mil e assistência funeral de R$ 5 mil",
      "Programa de saúde mental com 2 consultas mensais por vídeo",
      "Plataforma de bem-estar, hábitos saudáveis e clube de descontos",
    ],
    categories: ["Telemedicina", "Farmácia", "Proteção", "Saúde mental", "Bem-estar", "Descontos"],
  },
];

const comparison = [
  { label: "Telemedicina 24/7", ids: ["mulher", "vida", "completa", "360"] },
  { label: "Rede, exames e odonto", ids: ["saude", "completa"] },
  { label: "Bem-estar e hábitos saudáveis", ids: ["protege", "mulher", "completa", "360"] },
  { label: "Saúde mental", ids: ["protege", "completa", "360"] },
  { label: "Farmácia", ids: ["completa", "360"] },
  { label: "Proteção financeira", ids: ["vida", "360"] },
];

const needs = [
  { label: "Apoio emocional e hábitos", planId: "protege" },
  { label: "Saúde da mulher e família", planId: "mulher" },
  { label: "Consultas, exames e odonto", planId: "saude" },
  { label: "Telemedicina e proteção", planId: "vida" },
  { label: "Saúde e bem-estar combinados", planId: "completa" },
  { label: "Reunir mais benefícios", planId: "360" },
];

export default function PlanExplorer() {
  const [activeId, setActiveId] = useState(plans[0].id);
  const active = plans.find((plan) => plan.id === activeId) ?? plans[0];

  return (
    <>
      <div className="need-finder" aria-label="Escolha um plano pela necessidade principal">
        <p>O que você mais quer resolver agora?</p>
        <div>
          {needs.map((need) => (
            <button type="button" className={need.planId === activeId ? "active" : ""} onClick={() => setActiveId(need.planId)} key={need.planId}>{need.label}</button>
          ))}
        </div>
        <small>Use sua prioridade como ponto de partida e confira todos os itens antes de escolher.</small>
      </div>

      <div className="plan-selector-mobile">
        <label htmlFor="plan-select">Escolha um plano</label>
        <select id="plan-select" value={activeId} onChange={(event) => setActiveId(event.target.value)}>
          {plans.map((plan) => <option value={plan.id} key={plan.id}>{plan.name} — R$ {plan.price}</option>)}
        </select>
      </div>

      <div className="plan-tabs" role="tablist" aria-label="Planos Amore">
        {plans.map((plan) => (
          <button
            type="button"
            role="tab"
            aria-selected={plan.id === activeId}
            aria-controls="plan-panel"
            tabIndex={plan.id === activeId ? 0 : -1}
            className={plan.id === activeId ? "active" : ""}
            onClick={() => setActiveId(plan.id)}
            key={plan.id}
          >
            <span>{plan.name.replace("Amore ", "")}</span>
            <small>R$ {plan.price}</small>
          </button>
        ))}
      </div>

      <article className="plan-detail" id="plan-panel" role="tabpanel">
        <div className="plan-cover">
          <Image
            key={active.image}
            className="plan-cover-image"
            src={active.image}
            alt={active.imageAlt}
            fill
            sizes="(max-width: 860px) 100vw, (max-width: 1280px) 42vw, 510px"
          />
          <span className="plan-cover-number">Plano {String(plans.indexOf(active) + 1).padStart(2, "0")}</span>
        </div>
        <div className="plan-detail-content">
          <div className="plan-detail-intro">
            <h3>{active.name}</h3>
            <p>{active.summary}</p>
            <div className="plan-price"><span>R$</span><strong>{active.price}</strong><small>/mês</small></div>
            <a className="button" href={`https://wa.me/5591992119998?text=${encodeURIComponent(`Olá, quero tirar dúvidas sobre o ${active.name}.`)}`}>Tirar dúvidas sobre este plano <span aria-hidden="true">→</span></a>
          </div>
          <div className="plan-benefits">
            <p className="plan-benefits-title">O que está incluído</p>
            <ul>{active.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
            <div className="category-tags" aria-label="Categorias do plano">
              {active.categories.map((category) => <span key={category}>{category}</span>)}
            </div>
          </div>
        </div>
      </article>

      <details className="comparison">
        <summary>Comparar os seis planos <span aria-hidden="true">+</span></summary>
        <div className="comparison-scroll">
          <table>
            <thead><tr><th>Benefício</th>{plans.map((plan) => <th key={plan.id}>{plan.name.replace("Amore ", "")}</th>)}</tr></thead>
            <tbody>{comparison.map((item) => (
              <tr key={item.label}>
                <th>{item.label}</th>
                {plans.map((plan) => <td key={plan.id}><span className={item.ids.includes(plan.id) ? "has-benefit" : "no-benefit"}>{item.ids.includes(plan.id) ? "✓" : "—"}</span></td>)}
              </tr>
            ))}</tbody>
          </table>
        </div>
      </details>
      <p className="plan-note">Os serviços, limites, valores adicionais, rede e elegibilidade variam por plano e localidade. Confirme as condições antes da contratação.</p>
    </>
  );
}
