"use client";

import { useState } from "react";

type Plan = {
  id: string;
  name: string;
  price: string;
  summary: string;
  benefits: string[];
  categories: string[];
};

const plans: Plan[] = [
  {
    id: "protege",
    name: "Amore Protege",
    price: "9,90",
    summary: "Uma porta de entrada para cuidar da mente, do corpo e da rotina.",
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
    benefits: [
      "Clínico geral por vídeo com agendamento e pronto atendimento 24/7, ilimitado e sem custo",
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
    benefits: [
      "Rede de clínicas e médicos particulares para consultas presenciais com preços reduzidos",
      "Mais de 1.500 tipos de exames laboratoriais e de imagem com até 70% de desconto",
      "Rede de dentistas para consultas, exames e tratamentos odontológicos e ortodônticos",
    ],
    categories: ["Consultas", "Exames", "Odontologia"],
  },
  {
    id: "vida",
    name: "Amore Vida",
    price: "19,90",
    summary: "Saúde imediata e proteção financeira para momentos delicados.",
    benefits: [
      "Clínico geral por vídeo com agendamento e pronto atendimento 24/7, ilimitado e sem custo",
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
    benefits: [
      "Rede de consultas, exames e dentistas com preços reduzidos em todo o Brasil",
      "Clínico geral por vídeo com pronto atendimento 24/7, ilimitado e sem custo",
      "A partir de 15% de desconto em medicamentos em mais de 5 mil farmácias",
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
    benefits: [
      "Clínico geral por vídeo com pronto atendimento 24/7, ilimitado e sem custo",
      "A partir de 15% de desconto em medicamentos em mais de 5 mil farmácias",
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

export default function PlanExplorer() {
  const [activeId, setActiveId] = useState(plans[0].id);
  const active = plans.find((plan) => plan.id === activeId) ?? plans[0];

  return (
    <>
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
        <div className="plan-detail-intro">
          <p className="plan-number">Plano {String(plans.indexOf(active) + 1).padStart(2, "0")}</p>
          <h3>{active.name}</h3>
          <p>{active.summary}</p>
          <div className="plan-price"><span>R$</span><strong>{active.price}</strong><small>/mês</small></div>
          <a className="button" href={`https://wa.me/5591992119998?text=${encodeURIComponent(`Olá, quero saber mais sobre o ${active.name}.`)}`}>Quero este plano <span aria-hidden="true">→</span></a>
        </div>
        <div className="plan-benefits">
          <p className="plan-benefits-title">O que está incluído</p>
          <ul>{active.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
          <div className="category-tags" aria-label="Categorias do plano">
            {active.categories.map((category) => <span key={category}>{category}</span>)}
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
      <p className="plan-note">Os serviços variam por plano. Condições e elegibilidade são confirmadas no momento da contratação.</p>
    </>
  );
}
