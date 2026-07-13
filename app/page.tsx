import PlanExplorer from "./PlanExplorer";

const benefits = [
  { icon: "24h", title: "Telemedicina", description: "Atendimento médico por vídeo para ter orientação quando mais precisa." },
  { icon: "♡", title: "Saúde mental", description: "Apoio psicológico para cuidar da mente com acolhimento e constância." },
  { icon: "+", title: "Consultas e exames", description: "Rede credenciada com preços reduzidos para cuidados presenciais." },
  { icon: "%", title: "Farmácia", description: "Economia em medicamentos em milhares de farmácias credenciadas." },
  { icon: "↗", title: "Bem-estar", description: "Nutrição, atividade física e conteúdos para uma rotina mais saudável." },
  { icon: "◇", title: "Proteção", description: "Opções com seguro acidental e assistência funeral para mais tranquilidade." },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Amore — início"><img src="/amore-logo.svg" alt="Amore" /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <a href="#empresas">Para empresas</a>
          <a href="#pessoas">Para pessoas</a>
          <a href="#beneficios">Benefícios</a>
          <a href="#planos">Planos</a>
          <a href="#como-usar">Como usar</a>
        </nav>
        <a className="button button-small" href="#contato">Falar com a Amore</a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Saúde, bem-estar e proteção</p>
          <h1>Cuidado que acompanha a vida — <em>dentro e fora</em> do trabalho.</h1>
          <p className="hero-lead">Benefícios acessíveis para empresas cuidarem de suas equipes e para pessoas e famílias viverem com mais saúde, bem-estar e proteção.</p>
          <div className="hero-actions">
            <a className="button" href="#empresas">Solução para empresas <span aria-hidden="true">→</span></a>
            <a className="button button-ghost" href="#planos">Planos para pessoas</a>
          </div>
          <div className="trust-row" aria-label="Diferenciais da Amore">
            <span><b aria-hidden="true">✓</b> Planos a partir de R$ 9,90</span>
            <span><b aria-hidden="true">✓</b> Acesso pelo celular</span>
            <span><b aria-hidden="true">✓</b> Cuidado para a família</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Pessoas reunidas em um ambiente de trabalho acolhedor">
          <div className="photo-orbit" aria-hidden="true" />
          <div className="hero-photo-frame"><img src="/hero-rh.png" alt="Equipe diversa reunida em um ambiente de trabalho acolhedor" /></div>
          <div className="floating-card floating-company"><span className="floating-icon">B2B</span><span><strong>Para empresas</strong><small>cuidado que valoriza equipes</small></span></div>
          <div className="floating-card floating-family"><span className="family-icon">♡</span><span><strong>Para pessoas e famílias</strong><small>benefícios para a vida real</small></span></div>
        </div>
      </section>

      <section className="proof-band" aria-label="Diferenciais dos planos Amore">
        <div><strong>6 planos</strong><span>para diferentes necessidades</span></div>
        <div><strong>24 horas</strong><span>telemedicina nos planos elegíveis</span></div>
        <div><strong>+5 mil</strong><span>farmácias na rede de desconto</span></div>
        <div><strong>Até 70%</strong><span>de desconto em exames</span></div>
      </section>

      <section className="section audience-section" id="pessoas">
        <div className="section-heading centered-heading compact-heading">
          <p className="eyebrow">Uma Amore, duas jornadas</p>
          <h2>Cuidado que faz sentido para quem oferece e para quem usa.</h2>
        </div>
        <div className="audience-grid">
          <article className="audience-card company-card" id="empresas">
            <span className="audience-label">Para empresas</span>
            <h3>Um benefício valioso para sua equipe e viável para o seu negócio.</h3>
            <p>Empresários, lideranças, RH e entidades podem ampliar o cuidado com colaboradores e associados em uma solução simples de comunicar e usar.</p>
            <ul><li>Proposta personalizada</li><li>Saúde física e emocional</li><li>Apoio à estratégia de bem-estar</li></ul>
            <a className="text-link light-link" href="#corporativo">Conhecer o Amore Corporativo <span aria-hidden="true">→</span></a>
          </article>
          <article className="audience-card people-card">
            <span className="audience-label">Para pessoas e famílias</span>
            <h3>Mais acesso à saúde, bem-estar e proteção sem pesar no orçamento.</h3>
            <p>Escolha a combinação de benefícios que mais combina com a sua rotina e tenha cuidado acessível na palma da mão.</p>
            <ul><li>Seis opções de assinatura</li><li>Planos a partir de R$ 9,90/mês</li><li>Uso simples pelo celular</li></ul>
            <a className="text-link" href="#planos">Explorar os planos <span aria-hidden="true">→</span></a>
          </article>
        </div>
      </section>

      <section className="section benefits-section" id="beneficios">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">Cuidado completo</p><h2>Muitas formas de cuidar, reunidas em uma só experiência.</h2></div>
          <p>Dos cuidados do dia a dia à proteção para momentos importantes, a Amore conecta serviços que atendem diferentes fases da vida.</p>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit) => <article className="benefit-card" key={benefit.title}><span className="benefit-icon" aria-hidden="true">{benefit.icon}</span><h3>{benefit.title}</h3><p>{benefit.description}</p></article>)}
        </div>
      </section>

      <section className="section plans-section" id="planos">
        <div className="section-heading split-heading plans-heading">
          <div><p className="eyebrow">Planos Amore</p><h2>Encontre o cuidado que combina com você.</h2></div>
          <p>Compare benefícios, valores e escolha o plano mais adequado para o seu momento. Para empresas, construímos uma proposta sob medida.</p>
        </div>
        <PlanExplorer />
      </section>

      <section className="section app-section" id="como-usar">
        <div className="app-visual" aria-label="Representação da experiência Amore no celular">
          <div className="phone-shell">
            <div className="phone-head"><span>amore</span><i>♡</i></div>
            <p>Olá! Como podemos cuidar de você hoje?</p>
            <div className="phone-feature"><small>PRONTO ATENDIMENTO</small><strong>Consulta por vídeo 24 horas</strong><span>Começar →</span></div>
            <div className="phone-actions"><span>Consultas</span><span>Exames</span><span>Farmácia</span><span>Bem-estar</span></div>
          </div>
        </div>
        <div className="app-copy">
          <p className="eyebrow">Cuidado na palma da mão</p>
          <h2>Ative, acesse e use seus benefícios pelo celular.</h2>
          <p>A jornada acontece no app TEM Saúde: após a contratação, o beneficiário recebe as orientações de acesso e encontra os serviços disponíveis em seu plano.</p>
          <ol className="mini-steps">
            <li><span>1</span><div><strong>Ative seu acesso</strong><p>Use CPF e token recebido para criar sua senha.</p></div></li>
            <li><span>2</span><div><strong>Encontre o serviço</strong><p>Consulte os benefícios disponíveis no seu plano.</p></div></li>
            <li><span>3</span><div><strong>Comece a cuidar</strong><p>Agende ou acesse o atendimento pelo app.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section corporate-section" id="corporativo">
        <div className="corporate-copy">
          <p className="eyebrow">Amore Corporativo</p>
          <h2>Cuidado com as pessoas também é estratégia de negócio.</h2>
          <p>Uma solução para empresas de diferentes portes oferecerem saúde, bem-estar e proteção a colaboradores, associados e suas famílias — com uma proposta adequada ao perfil de cada organização.</p>
          <div className="corporate-points"><span>Valor percebido pela equipe</span><span>Apoio à saúde e ao bem-estar</span><span>Proposta personalizada</span></div>
          <a className="button" href="#contato">Solicitar proposta empresarial</a>
        </div>
        <div className="corporate-panel">
          <p>Por que levar a Amore?</p>
          <div><span>01</span><h3>Amplie o acesso</h3><p>Facilite cuidados de saúde física e emocional para diferentes perfis.</p></div>
          <div><span>02</span><h3>Fortaleça o vínculo</h3><p>Mostre, na prática, que pessoas e famílias fazem parte da cultura de cuidado.</p></div>
          <div><span>03</span><h3>Construa com flexibilidade</h3><p>Converse com a Amore para desenhar a melhor proposta para sua organização.</p></div>
        </div>
      </section>

      <section className="final-cta" id="contato">
        <div><span className="heart-seal" aria-hidden="true">♡</span><p className="eyebrow">Por onde você quer começar?</p><h2>A Amore tem um caminho para sua empresa, para você e para sua família.</h2>
          <div className="contact-paths">
            <a className="button" href="https://wa.me/5591992119998?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20solu%C3%A7%C3%A3o%20corporativa%20da%20Amore.">Sou uma empresa <span aria-hidden="true">→</span></a>
            <a className="button button-ghost" href="https://wa.me/5591992119998?text=Ol%C3%A1%2C%20quero%20conhecer%20os%20planos%20da%20Amore%20para%20pessoas%20e%20fam%C3%ADlias.">Quero um plano <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><img src="/amore-logo.svg" alt="Amore" /><p>Saúde, bem-estar e proteção para empresas, pessoas e famílias.</p></div>
        <div className="footer-links"><div><strong>Explore</strong><a href="#empresas">Para empresas</a><a href="#pessoas">Para pessoas</a><a href="#planos">Planos</a></div><div><strong>Contato</strong><a href="tel:+5591992119998">(91) 99211-9998</a><a href="mailto:comercial@amore-saude.com">comercial@amore-saude.com</a></div></div>
        <div className="footer-bottom"><span>© 2026 Amore Benefícios</span><span>Saúde, bem-estar e proteção em cada fase da vida.</span></div>
      </footer>
    </main>
  );
}
