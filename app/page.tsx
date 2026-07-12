const benefits = [
  { icon: "24h", title: "Telemedicina 24 horas", description: "Acesso rápido a cuidado médico por vídeo, inclusive fora do horário comercial." },
  { icon: "♡", title: "Saúde mental", description: "Apoio psicológico para ajudar colaboradores a cuidar da mente com constância." },
  { icon: "+", title: "Consultas e exames", description: "Rede de clínicas e laboratórios com condições mais acessíveis." },
  { icon: "%", title: "Benefício farmácia", description: "Economia em medicamentos nas farmácias credenciadas." },
  { icon: "↗", title: "Hábitos saudáveis", description: "Nutrição, atividade física e conteúdos para uma rotina de bem-estar." },
  { icon: "◇", title: "Proteção", description: "Serviços que ampliam a segurança e o cuidado em momentos importantes." },
];

const solutions = [
  {
    label: "Saúde",
    title: "Acesso que faz diferença na rotina",
    description: "Telemedicina, consultas, exames, farmácia e odontologia em uma jornada simples.",
    features: ["Pronto atendimento por vídeo", "Rede de saúde credenciada", "Descontos em medicamentos"],
  },
  {
    label: "Bem-estar",
    title: "Cuidado integral, além da consulta",
    description: "Recursos para saúde emocional e hábitos que sustentam uma vida melhor.",
    features: ["Apoio psicológico", "Nutrição e atividade física", "Conteúdos de bem-estar"],
    featured: true,
  },
  {
    label: "Proteção",
    title: "Mais tranquilidade para as pessoas",
    description: "Benefícios que apoiam o colaborador e sua família em diferentes momentos.",
    features: ["Serviços de proteção", "Clube de benefícios", "Experiência integrada"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Amore — início"><img src="/amore-logo.svg" alt="Amore" /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#para-rh">Para o RH</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#como-funciona">Como funciona</a>
          <a href="#solucao">Solução</a>
        </nav>
        <a className="button button-small" href="#contato">Solicitar proposta</a>
      </header>

      <section className="hero b2b-hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Benefícios corporativos que cuidam de pessoas</p>
          <h1>Um benefício que sua equipe <em>sente</em> — e o RH coloca em prática.</h1>
          <p className="hero-lead">
            Saúde, bem-estar e proteção em uma solução acessível para empresas que querem valorizar colaboradores e fortalecer sua cultura de cuidado.
          </p>
          <div className="hero-actions">
            <a className="button" href="#contato">Quero uma proposta <span aria-hidden="true">→</span></a>
            <a className="text-link" href="#beneficios">Conhecer os benefícios</a>
          </div>
          <div className="trust-row" aria-label="Vantagens para empresas">
            <span><b aria-hidden="true">✓</b> Para empresas em geral</span>
            <span><b aria-hidden="true">✓</b> Ativação simples</span>
            <span><b aria-hidden="true">✓</b> Tudo em um app</span>
          </div>
        </div>

        <div className="hero-visual b2b-hero-visual" aria-label="Profissional de RH conversando com colaboradores">
          <div className="photo-orbit" aria-hidden="true" />
          <div className="hero-photo-frame">
            <img src="/hero-rh.png" alt="Profissional de RH em conversa com uma equipe diversa" />
          </div>
          <div className="floating-card floating-video">
            <span className="floating-icon">24h</span>
            <span><strong>Saúde mais acessível</strong><small>Telemedicina quando precisar</small></span>
          </div>
          <div className="floating-card floating-saving">
            <span className="saving-badge">RH</span>
            <span><strong>Benefício relevante</strong><small>para diferentes perfis de equipe</small></span>
          </div>
          <div className="hr-proof-card">
            <span aria-hidden="true">♡</span>
            <div><strong>Cuidado que aproxima</strong><small>empresa e colaboradores</small></div>
          </div>
        </div>
      </section>

      <section className="intro-band" aria-label="Proposta corporativa Amore">
        <p>Feito para pessoas. Pensado para o RH.</p>
        <div className="intro-points">
          <span>Valor percebido</span><i aria-hidden="true" />
          <span>Acesso simples</span><i aria-hidden="true" />
          <span>Cuidado integral</span><i aria-hidden="true" />
          <span>Custo acessível</span>
        </div>
      </section>

      <section className="section rh-section" id="para-rh">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">O desafio do RH mudou</p><h2>Benefícios precisam ser usados, não apenas oferecidos.</h2></div>
          <p>A Amore ajuda o RH a colocar cuidado de verdade na rotina das pessoas, com uma solução fácil de comunicar, acessar e valorizar.</p>
        </div>
        <div className="rh-value-grid">
          <article><span>01</span><h3>Mais valor percebido</h3><p>Um benefício conectado a necessidades reais do colaborador e de sua família.</p></article>
          <article><span>02</span><h3>Cultura de cuidado</h3><p>Saúde física, emocional e bem-estar presentes no dia a dia da empresa.</p></article>
          <article><span>03</span><h3>Experiência simples</h3><p>Acesso aos serviços pelo celular, sem uma jornada complicada para a equipe.</p></article>
        </div>
      </section>

      <section className="section benefits-section" id="beneficios">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">Cuidado completo</p><h2>Um benefício. Muitas formas de cuidar.</h2></div>
          <p>Uma combinação de serviços que ajuda o RH a atender diferentes perfis, momentos e necessidades dentro da mesma equipe.</p>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <span className="benefit-icon" aria-hidden="true">{benefit.icon}</span>
              <h3>{benefit.title}</h3><p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section plans-section" id="solucao">
        <div className="section-heading centered-heading">
          <p className="eyebrow">Uma solução que se adapta</p>
          <h2>O cuidado certo para cada empresa.</h2>
          <p>Combine frentes de saúde, bem-estar e proteção em uma proposta pensada para sua equipe.</p>
        </div>
        <div className="plan-grid solution-grid">
          {solutions.map((solution) => (
            <article className={`plan-card solution-card${solution.featured ? " featured" : ""}`} key={solution.label}>
              <span className="solution-label">{solution.label}</span>
              <h3>{solution.title}</h3><p>{solution.description}</p>
              <ul>{solution.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
              <a className={solution.featured ? "button" : "button button-outline"} href="#contato">Incluir na proposta</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section how-section" id="como-funciona">
        <div className="how-copy">
          <p className="eyebrow">Da proposta ao uso</p>
          <h2>Simples para o RH. Próximo para as pessoas.</h2>
          <p>A Amore acompanha a construção da proposta e deixa o acesso aos benefícios direto para o colaborador.</p>
          <a className="text-link light-link" href="#contato">Conversar com a Amore <span aria-hidden="true">→</span></a>
        </div>
        <ol className="steps">
          <li><span>01</span><div><strong>Entendemos sua empresa</strong><p>Conhecemos o perfil da equipe e os objetivos do RH.</p></div></li>
          <li><span>02</span><div><strong>Desenhamos a proposta</strong><p>Selecionamos os benefícios mais adequados para o seu contexto.</p></div></li>
          <li><span>03</span><div><strong>Ativamos o cuidado</strong><p>Os colaboradores recebem acesso e começam a utilizar pelo app.</p></div></li>
        </ol>
      </section>

      <section className="section corporate-section">
        <div className="corporate-copy">
          <p className="eyebrow">Para empresas de todos os portes</p>
          <h2>Mais que um benefício: uma mensagem clara de cuidado.</h2>
          <p>Quando a empresa facilita o acesso à saúde e ao bem-estar, o colaborador percebe que existe atenção às pessoas por trás dos processos.</p>
          <a className="button" href="#contato">Conhecer a solução corporativa</a>
        </div>
        <div className="corporate-visual rh-dashboard" aria-label="Pilares da proposta corporativa">
          <p>O que o RH entrega</p>
          <div className="dashboard-item"><span>♡</span><div><strong>Cuidado integral</strong><small>saúde física e emocional</small></div></div>
          <div className="dashboard-item"><span>↗</span><div><strong>Bem-estar contínuo</strong><small>presente além da consulta</small></div></div>
          <div className="dashboard-item"><span>◇</span><div><strong>Proteção para a equipe</strong><small>mais tranquilidade no dia a dia</small></div></div>
        </div>
      </section>

      <section className="final-cta" id="contato">
        <div><span className="heart-seal" aria-hidden="true">♡</span><p className="eyebrow">Leve a Amore para sua empresa</p>
          <h2>Vamos criar um benefício que as pessoas realmente valorizam?</h2>
          <p>Conte um pouco sobre sua empresa e receba uma proposta pensada para seus colaboradores.</p>
          <a className="button" href="https://wa.me/5591992119998?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20solu%C3%A7%C3%A3o%20corporativa%20da%20Amore.">Falar com a Amore <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><img src="/amore-logo.svg" alt="Amore" /><p>Benefícios corporativos de saúde, bem-estar e proteção.</p></div>
        <div className="footer-links">
          <div><strong>Para o RH</strong><a href="#para-rh">Por que Amore</a><a href="#beneficios">Benefícios</a><a href="#como-funciona">Como funciona</a></div>
          <div><strong>Contato</strong><a href="tel:+5591992119998">(91) 99211-9998</a><a href="mailto:comercial@amore-saude.com">comercial@amore-saude.com</a></div>
        </div>
        <div className="footer-bottom"><span>© 2026 Amore Benefícios</span><span>Cuidado para quem faz a empresa acontecer.</span></div>
      </footer>
    </main>
  );
}
