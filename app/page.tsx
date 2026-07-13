import PlanExplorer from "./PlanExplorer";

const benefits = [
  { icon: "24h", title: "Orientação médica sem sair de casa", description: "Acesse atendimento por vídeo nos planos elegíveis, conforme as condições de utilização." },
  { icon: "♡", title: "Apoio para a saúde emocional", description: "Converse com um profissional e mantenha uma rotina de atenção à saúde mental." },
  { icon: "+", title: "Preços mais acessíveis na rede", description: "Consulte opções de médicos, exames e odontologia com valores reduzidos nos planos elegíveis." },
  { icon: "%", title: "Economia em medicamentos", description: "Tenha descontos em medicamentos participantes nos estabelecimentos da rede parceira." },
  { icon: "↗", title: "Hábitos possíveis de manter", description: "Receba apoio de programas de nutrição, atividade física e bem-estar, conforme o plano." },
  { icon: "◇", title: "Mais tranquilidade para imprevistos", description: "Algumas opções incluem seguro acidental e assistência funeral, conforme as condições contratadas." },
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
          <p className="eyebrow">Seis opções a partir de R$ 9,90 por mês</p>
          <h1>Saúde, bem-estar e proteção <em>mais acessíveis</em> para cada fase da vida.</h1>
          <p className="hero-lead">Compare benefícios para você e sua família ou conheça uma solução personalizada para sua empresa, entidade ou associação.</p>
          <div className="hero-actions">
            <a className="button" href="#planos">Comparar planos e preços <span aria-hidden="true">→</span></a>
            <a className="button button-ghost" href="#empresas">Solução para empresas</a>
          </div>
          <div className="trust-row" aria-label="Diferenciais da Amore">
            <span><b aria-hidden="true">✓</b> 6 opções de assinatura</span>
            <span><b aria-hidden="true">✓</b> Acesso pelo celular</span>
            <span><b aria-hidden="true">✓</b> Benefícios para diferentes necessidades</span>
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
        <div><strong>+5 mil</strong><span>estabelecimentos participantes da rede de farmácia</span></div>
        <div><strong>Até 70%</strong><span>em exames selecionados, conforme rede e localidade</span></div>
      </section>

      <section className="definition-band" aria-label="O que é a Amore">
        <p><strong>O que você encontra na Amore?</strong> Opções de benefícios por assinatura que combinam serviços e programas de saúde, bem-estar e proteção. O que está incluído e as regras de utilização variam conforme o plano escolhido.</p>
      </section>

      <section className="section audience-section" id="pessoas">
        <div className="section-heading centered-heading compact-heading">
          <p className="eyebrow">Escolha como a Amore pode ajudar</p>
          <h2>Benefícios para você, sua família ou sua equipe.</h2>
        </div>
        <div className="audience-grid">
          <article className="audience-card company-card" id="empresas">
            <span className="audience-label">Para empresas</span>
            <h3>Um benefício relevante não precisa criar uma operação complexa.</h3>
            <p>A Amore ajuda empresários, lideranças, RH e entidades a estruturar uma proposta adequada ao perfil da organização e mais simples de comunicar.</p>
            <ul><li>Proposta personalizada</li><li>Saúde física e emocional</li><li>Apoio à estratégia de bem-estar</li></ul>
            <a className="text-link light-link" href="#corporativo">Conhecer o Amore Corporativo <span aria-hidden="true">→</span></a>
          </article>
          <article className="audience-card people-card">
            <span className="audience-label">Para pessoas e famílias</span>
            <h3>Resolver cada necessidade separadamente pode pesar no orçamento.</h3>
            <p>Compare seis combinações de benefícios e encontre uma rota mais clara para acessar saúde, bem-estar e proteção pelo celular.</p>
            <ul><li>Seis opções de assinatura</li><li>Planos a partir de R$ 9,90/mês</li><li>Uso simples pelo celular</li></ul>
            <a className="text-link" href="#planos">Explorar os planos <span aria-hidden="true">→</span></a>
          </article>
        </div>
      </section>

      <section className="journey-strip" aria-label="Como começar com a Amore">
        <div><span>01</span><strong>Compare</strong><p>Veja necessidades, benefícios e preços antes de conversar com o atendimento.</p></div>
        <div><span>02</span><strong>Escolha</strong><p>Identifique a opção mais adequada para sua rotina ou solicite uma proposta corporativa.</p></div>
        <div><span>03</span><strong>Ative e utilize</strong><p>Receba as orientações de acesso e encontre no celular os serviços do plano contratado.</p></div>
      </section>

      <section className="section benefits-section" id="beneficios">
        <div className="section-heading split-heading">
          <div><p className="eyebrow">O que os benefícios permitem</p><h2>Mais acesso, apoio emocional, economia e proteção.</h2></div>
          <p>Cada plano reúne uma combinação diferente. Entenda primeiro o resultado que você procura e depois confira as condições de cada benefício.</p>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit) => <article className="benefit-card" key={benefit.title}><span className="benefit-icon" aria-hidden="true">{benefit.icon}</span><h3>{benefit.title}</h3><p>{benefit.description}</p></article>)}
        </div>
      </section>

      <section className="section plans-section" id="planos">
        <div className="section-heading split-heading plans-heading">
          <div><p className="eyebrow">Planos Amore</p><h2>Compare por necessidade, benefício e preço.</h2></div>
          <p>Veja o que cada opção inclui antes de falar com o atendimento. Para empresas e entidades, a proposta é construída de acordo com o perfil da organização.</p>
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
          <p className="eyebrow">Escolha, ative e utilize</p>
          <h2>Seus benefícios disponíveis pelo celular.</h2>
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
          <h2>Ofereça um benefício relevante sem perder a flexibilidade.</h2>
          <p>Amplie o acesso de colaboradores, associados e familiares a serviços de saúde, bem-estar e proteção com uma proposta adequada ao perfil e ao orçamento da organização.</p>
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

      <section className="section faq-section" id="duvidas">
        <div className="section-heading split-heading faq-heading">
          <div><p className="eyebrow">Antes de escolher</p><h2>Respostas para decidir com mais clareza.</h2></div>
          <p>As condições específicas de utilização, elegibilidade e disponibilidade devem ser confirmadas para o plano e a localidade escolhidos.</p>
        </div>
        <div className="faq-list">
          <details><summary>O que exatamente a Amore oferece?<span>+</span></summary><p>A Amore reúne opções de benefícios por assinatura. Cada plano combina serviços e programas de saúde, bem-estar e proteção diferentes, com acesso orientado pelo celular.</p></details>
          <details><summary>O que está incluído na mensalidade?<span>+</span></summary><p>Os itens incluídos variam por plano. Alguns programas e atendimentos estão contemplados na assinatura; consultas presenciais, exames, odontologia e medicamentos podem ser acessados com preços reduzidos e pagamento adicional, conforme a rede.</p></details>
          <details><summary>Como começo a utilizar?<span>+</span></summary><p>Após a contratação, o beneficiário recebe as orientações de acesso. A ativação informada pela operação utiliza CPF e token para criação da senha no app TEM Saúde.</p></details>
          <details><summary>Os serviços estão disponíveis em todas as cidades?<span>+</span></summary><p>A disponibilidade pode variar conforme benefício, prestador, rede e localidade. Confirme a cobertura e as opções disponíveis para sua região antes de contratar ou agendar.</p></details>
          <details><summary>Como funcionam os descontos?<span>+</span></summary><p>Os percentuais dependem do serviço, procedimento, estabelecimento e rede participante. A referência de até 70% se aplica a exames selecionados, conforme rede e localidade.</p></details>
          <details><summary>Como funciona para empresas e entidades?<span>+</span></summary><p>A Amore entende o perfil da organização, estrutura uma proposta de benefícios e orienta o processo de implantação e comunicação. O primeiro passo é solicitar uma conversa com a equipe comercial.</p></details>
        </div>
      </section>

      <section className="final-cta" id="contato">
        <div><span className="heart-seal" aria-hidden="true">♡</span><p className="eyebrow">Escolha seu próximo passo</p><h2>Compare os planos ou encontre uma solução para sua organização.</h2>
          <div className="contact-paths">
            <a className="button" href="https://wa.me/5591992119998?text=Ol%C3%A1%2C%20quero%20conhecer%20a%20solu%C3%A7%C3%A3o%20corporativa%20da%20Amore.">Sou uma empresa <span aria-hidden="true">→</span></a>
            <a className="button button-ghost" href="https://wa.me/5591992119998?text=Ol%C3%A1%2C%20quero%20conhecer%20os%20planos%20da%20Amore%20para%20pessoas%20e%20fam%C3%ADlias.">Quero um plano <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <a href="#inicio" aria-label="Amore — voltar ao início"><img src="/amore-logo.svg" alt="Amore" /></a>
            <p>Saúde, bem-estar e proteção para empresas, pessoas e famílias.</p>
            <span>Benefícios para cuidar de quem importa.</span>
          </div>

          <nav className="footer-links" aria-label="Navegação do rodapé">
            <div>
              <strong>Para você</strong>
              <a href="#pessoas">Pessoas e famílias</a>
              <a href="#beneficios">Benefícios</a>
              <a href="#planos">Planos e preços</a>
              <a href="#como-usar">Como utilizar</a>
            </div>
            <div>
              <strong>Para organizações</strong>
              <a href="#empresas">Visão para empresas</a>
              <a href="#corporativo">Solução corporativa</a>
              <a href="#duvidas">Dúvidas frequentes</a>
            </div>
            <div className="footer-contact">
              <strong>Fale com a Amore</strong>
              <p>Atendimento comercial para pessoas e organizações.</p>
              <a href="tel:+5591992119998"><small>Telefone e WhatsApp</small><span>(91) 99211-9998</span></a>
              <a href="mailto:comercial@amore-saude.com"><small>E-mail</small><span>comercial@amore-saude.com</span></a>
            </div>
          </nav>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Amore Benefícios</span>
          <span>Saúde, bem-estar e proteção em cada fase da vida.</span>
          <a href="#inicio">Voltar ao topo <span aria-hidden="true">↑</span></a>
        </div>
      </footer>
    </main>
  );
}
