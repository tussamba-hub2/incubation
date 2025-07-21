import React from "react";
import { Link } from "react-router-dom";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const headerVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const ctaVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
};
const buttonHover = {
  scale: 1.06,
  boxShadow: "0 4px 24px 0 rgba(254,114,123,0.15)",
  transition: { type: "spring", stiffness: 300 },
};

const HomePage = () => {
  return (
    <>
      <header className="header d-flex" id="header"
        initial="hidden" animate="visible" variants={headerVariants}
      >
        <nav className="nav-bar">
          <div className="none">
            <button className="text-primary" /* onClick={toggle} */>
              <i className="fi fi-rs-bars-sort"></i>
            </button>
          </div>
          <a href="" className="d-flex items-center g-8px logo-center">
            <img src="/_img/logo.png" alt="Logo" className="logo-img" />
            <h2 className="linear-txt size-20">twendyuige</h2>
          </a>
          <ul className="d-flex items-center justify-center g-36px list-navigation">
            {/* ...menu convertido para JSX... */}
            <li className="relative">
              <div className="d-flex items-center g-8px li">
                <span>Sobre</span>
                <i className="fi fi-rs-angle-small-down"></i>
              </div>
              <div className="inside-li">
                <div className="d-flex w-ground">
                  <div className="d-flex g-12px">
                    <div className="d-flex column g-20px">
                      <a href="#sobre" className="nowrap d-flex items-center g-8px">
                        <i className="fi fi-rs-knowledge"></i>
                        <span>O que é o twendyuige?</span>
                      </a>
                      <a href="#sobre" className="nowrap d-flex items-center g-8px">
                        <i className="fi fi-rs-marker"></i>
                        <span>Por que no Uíge?</span>
                      </a>
                      <a href="#sobre" className="nowrap d-flex items-center g-8px">
                        <i className="fi fi-rs-bullseye-arrow"></i>
                        <span>Nossos objetivos</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative">
              <div className="d-flex items-center g-8px li">
                <span>Programa</span>
                <i className="fi fi-rs-angle-small-down"></i>
              </div>
              <div className="inside-li">
                <div className="d-flex w-ground">
                  <div className="d-flex g-20px">
                    <div className="d-flex column g-20px">
                      <a href="#etapas" className="nowrap d-flex items-center g-8px">
                        <i className="fi fi-rs-stairs"></i>
                        <span>Etapas do processo</span>
                      </a>
                      <a href="#metodos" className="nowrap d-flex items-center g-8px">
                        <i className="fi fi-rs-box-open"></i>
                        <span>Metodologia de incubação</span>
                      </a>
                      <a href="#selecao" className="nowrap d-flex items-center g-8px">
                        <i className="fi fi-rs-mouse-pointer-click"></i>
                        <span>Critérios de seleção</span>
                      </a>
                    </div>
                    <div className="d-flex column g-8px">
                      <Link to="/registrar" className="d-flex items-center g-4px">
                        <span className="nowrap">Inscrever-se</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative">
              <div className="d-flex items-center g-8px li">
                <span>Contactos</span>
                <i className="fi fi-rs-angle-small-down"></i>
              </div>
              <div className="inside-li">
                <div className="d-flex w-ground">
                  <div className="d-flex g-12px">
                    <div className="d-flex column g-20px">
                      <a href="#contactos" className="nowrap d-flex items-center g-8px">
                        <i className="fi fi-rs-brain-bulb"></i>
                        <span>+244 935 406 556</span>
                      </a>
                      <a href="#contactos" className="nowrap d-flex items-center g-8px">
                        <i className="fi fi-rs-building"></i>
                        <span>Parceiros envolvidos</span>
                      </a>
                    </div>
                    <div className="d-flex column g-8px">
                      <img src="/_img/team.webp" alt="Programa" className="image-nav" />
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="relative">
              <a href="#perguntas" className="d-flex items-center g-8px li">
                <span>FAQ</span>
              </a>
            </li>
            <li className="relative">
              <a href="https://gpu-uige.ao" target="_blank" className="d-flex items-center g-8px li">
                <span>GPU</span>
              </a>
            </li>
          </ul>
          <div className="d-flex items-center justify-end button-abs">
            <Link to="/registrar" className="btn-sm btn-border">
              <span>Inscrever-se</span>
            </Link>
          </div>
          <div className="none justify-end">
            <Link to="/registrar" className="text-primary">
              <i className="fi fi-rs-user-add"></i>
            </Link>
          </div>
          <div className="none abs-close-it">
            <button className="text-primary" /* onClick={toggle} */>
              <i className="fi fi-rs-cross-small"></i>
            </button>
          </div>
        </nav>
      </header>
      <section className="overflow-section">
        <div className="inside-component" id="content-container">
          {/* HERO SECTION */}
          <section className="center-components"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}
          >
            <div className="d-flex column g-36px relative hero-animate delay-1 w-pd">
              <div className="d-flex column g-12px hero-animate delay-2 blur-back relative">
                <h1 className="text-center size-44 text-primary extra-bold mt-150">
                  Inicie sua Carreira em Tecnologia com o Nosso <br />
                  Programa de <span className="linear-txt">Incubação de Startups</span>
                </h1>
                <p className="text-center text-secondary size-18">
                  Aprendendo habilidades tecnológicas com experts. Faça boost no
                  seu aprendizado <br />
                  de tecnologia com profissionais do mercado.
                </p>
              </div>
              <div className="d-flex items-center justify-center text-center g-12px hero-animate delay-3">
                <div whileHover={buttonHover} style={{display: 'inline-block'}}>
                  <Link to="/registrar" className="btn btn-color">
                    <span>Inscrever-se agora</span>
                  </Link>
                </div>
                <div whileHover={buttonHover} style={{display: 'inline-block'}}>
                  <Link to="/registrar" className="btn btn-border blur">
                    <span>Saiba mais</span>
                  </Link>
                </div>
              </div>
              <div className="abs-pointer d-flex">
                <div className="d-flex relative g-4px">
                  <span className="spanner">Tussamba</span>
                  <i className="fi fi-ss-location-arrow"></i>
                </div>
              </div>
              <div className="abs-pointer two-pt d-flex">
                <div className="d-flex relative g-4px">
                  <span className="spanner">Domingos</span>
                  <i className="fi fi-ss-location-arrow"></i>
                </div>
              </div>
              <div className="abs-pointer three-pt d-flex">
                <div className="d-flex relative g-4px">
                  <span className="spanner">NAP</span>
                  <i className="fi fi-ss-location-arrow"></i>
                </div>
              </div>
            </div>
            <div className="d-flex column g-36px items-center justify-center hero-animate delay-4 relative w-pd">
              <span className="nerd"></span>
              <span className="nerd"></span>
              <span className="nerd"></span>
              <div className="video-container blur">
                <video autoPlay loop muted playsInline className="anim-3">
                  <source src="/_vids/coding.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            {/* SOBRE SECTION */}
            <div id="sobre" className="d-flex column g-36px relative w-pd"
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}
            >
              <div className="linear-back-appear d-flex">
                <div className="grid-about">
                  <div className="d-flex column g-12px">
                    <div className="d-flex column g-8px">
                      <h3 className="text-primary size-24 medium">O que é o twendyuige?</h3>
                      <p className="text-secondary">
                        É o primeiro programa de incubação tecnológica da
                        província do Uíge, <br />
                        criado para impulsionar jovens talentos, programadores e
                        startups locais <br />
                        com potencial para transformar ideias em soluções reais.
                      </p>
                    </div>
                    <div className="d-flex column g-8px">
                      <h3 className="text-primary size-24 medium">Por que no Uíge?</h3>
                      <p className="text-secondary">
                        O Uíge tem uma juventude talentosa, criativa e cheia de
                        vontade de fazer <br />
                        diferente — mas que muitas vezes não tem acesso às
                        ferramentas, <br />
                        formação e oportunidades que outras regiões já possuem.
                      </p>
                    </div>
                    <div className="d-flex column g-8px">
                      <h3 className="text-primary size-24 medium">Nossos Objectivos</h3>
                      <div className="d-flex column g-12px">
                        <div className="d-flex items-center text-secondary g-8px">
                          <i className="fi fi-ss-badge-check text-primary"></i>
                          <span>Desenvolver competências tecnológicas locais</span>
                        </div>
                        <div className="d-flex items-center text-secondary g-8px">
                          <i className="fi fi-ss-badge-check text-primary"></i>
                          <span>Criar um ecossistema de inovação</span>
                        </div>
                        <div className="d-flex items-center text-secondary g-8px">
                          <i className="fi fi-ss-badge-check text-primary"></i>
                          <span>Conectar talentos do Uíge ao mercado nacional e internacional</span>
                        </div>
                        <div className="d-flex items-center text-secondary g-8px">
                          <i className="fi fi-ss-badge-check text-primary"></i>
                          <span>Promover o crescimento regional por meio da tecnologia</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="image-about blur-back relative">
                    <img src="/_img/about.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* ETAPAS DO PROCESSO */}
          <section
            id="etapas"
            className="d-flex column g-36px relative"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}
          >
            <div className="mt-120 w-full program w-pd relative blur-back">
              <div className="d-flex items-center justify-center column g-8px">
                <h2 className="color size-32 medium text-center text-primary">
                  Etapas do processo twendyuige
                </h2>
                <p className="text-center text-secondary size-18">
                  Descubra como funciona o twendyuige em três fases simples,<br />
                  do início à apresentação final.
                </p>
              </div>
              <div className="d-flex column g-36px w-full">
                <div className="grid-cards">
                  <div className="image-card justify-end">
                    <img src="/_img/about.webp" alt="Etapas do processo" />
                  </div>
                  <div className="d-flex items-center justify-center">
                    <div className="line relative">
                      <span>01</span>
                    </div>
                  </div>
                  <div className="d-flex column g-8px justify-center">
                    <h3 className="text-primary size-18 medium">
                      Inscrição e Seleção
                    </h3>
                    <p className="text-secondary">
                      Os interessados enviam suas candidaturas <br />
                      com perfil e ideias. Uma equipe avalia o potencial <br />
                      de cada participante para compor a turma incubada.
                    </p>
                  </div>
                </div>
                <div className="grid-cards">
                  <div className="d-flex column g-8px justify-center">
                    <h3 className="text-primary size-18 medium text-right">
                      Formação e Desenvolvimento
                    </h3>
                    <p className="text-secondary text-right">
                      Os selecionados passam por formações práticas em <br />
                      tecnologia, empreendedorismo e inovação, com apoio <br />
                      direto de mentores e especialistas.
                    </p>
                  </div>
                  <div className="d-flex items-center justify-center">
                    <div className="line relative">
                      <span>02</span>
                    </div>
                  </div>
                  <div className="image-card justify-start">
                    <img src="/_img/team.webp" alt="Etapas do processo" />
                  </div>
                </div>
                <div className="grid-cards">
                  <div className="image-card justify-end">
                    <img src="/_img/benefits.webp" alt="Etapas do processo" />
                  </div>
                  <div className="d-flex items-center justify-center">
                    <div className="line relative">
                      <span>03</span>
                    </div>
                  </div>
                  <div className="d-flex column g-8px justify-center">
                    <h3 className="text-primary size-18 medium">
                      Apresentação Final (Demo Day)
                    </h3>
                    <p className="text-secondary">
                      Os projetos são apresentados publicamente a parceiros,
                      <br />
                      possíveis investidores e convidados, marcando o encerramento
                      <br />
                      do ciclo com visibilidade e novas oportunidades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* METODOLOGIA DE INCUBAÇÃO */}
          <section
            id="metodos"
            className="d-flex column g-36px relative w-pd"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}
          >
            <div className="mt-120 w-full d-flex column g-36px incubation-methods">
              <div className="w-pd d-flex w-full">
                <div className="w-full h-full relative">
                  <div className="inc-abs blur">
                    <div className="d-flex column g-4px">
                      <div className="d-flex items-center text-secondary g-8px">
                        <i className="fi fi-ss-badge-check text-primary"></i>
                        <span className="text-primary size-18">Aprendizado Prático (Hands-on)</span>
                      </div>
                      <p className="text-secondary size-14 light">
                        Os participantes aprendem fazendo: desde construir
                        protótipos <br />
                        até testar suas soluções no mundo real.
                      </p>
                    </div>
                  </div>
                  <div className="inc-abs blur">
                    <div className="d-flex column g-4px">
                      <div className="d-flex items-center text-secondary g-8px">
                        <i className="fi fi-ss-badge-check text-primary"></i>
                        <span className="text-primary size-18">Mentoria Personalizada</span>
                      </div>
                      <p className="text-secondary size-14 light">
                        Cada participante conta com o acompanhamento de mentores
                        <br />
                        experientes, com foco técnico, estratégico e de negócios.
                      </p>
                    </div>
                  </div>
                  <div className="inc-abs blur">
                    <div className="d-flex column g-4px">
                      <div className="d-flex items-center text-secondary g-8px">
                        <i className="fi fi-ss-badge-check text-primary"></i>
                        <span className="text-primary size-18">Construção em Comunidade</span>
                      </div>
                      <p className="text-secondary size-14 light">
                        O trabalho é colaborativo, promovendo troca de
                        experiências,
                        <br />
                        parcerias e apoio entre os participantes.
                      </p>
                    </div>
                  </div>
                  <div className="inc-abs blur">
                    <div className="d-flex column g-4px">
                      <div className="d-flex items-center text-secondary g-8px">
                        <i className="fi fi-ss-badge-check text-primary"></i>
                        <span className="text-primary size-18">Validação com o Usuário</span>
                      </div>
                      <p className="text-secondary size-14 light">
                        Os projetos são testados com usuários reais para garantir
                        <br />
                        que resolvam problemas reais de forma eficaz.
                      </p>
                    </div>
                  </div>
                  <div className="inc-abs blur">
                    <div className="d-flex column g-4px">
                      <div className="d-flex items-center text-secondary g-8px">
                        <i className="fi fi-ss-badge-check text-primary"></i>
                        <span className="text-primary size-18">Preparação para o Mercado</span>
                      </div>
                      <p className="text-secondary size-14 light">
                        Os participantes aprendem a transformar ideias em soluções
                        <br />
                        viáveis, com modelo de negócio, pitch e visão de
                        crescimento.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* CRITÉRIOS DE SELEÇÃO */}
          <section
            id="selecao"
            className="d-flex column g-36px relative w-pd"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}
          >
            <div className="mt-120 w-full d-flex column g-36px w-pd blur">
              <div className="d-flex column g-36px back-selection">
                <div className="d-flex column g-8px">
                  <h2 className="color size-32 medium text-primary">
                    Critérios de Seleção
                  </h2>
                  <p className="text-secondary size-18">
                    Buscamos pessoas com vontade de aprender, criar e transformar.
                    Estes são os <br />
                    critérios que usamos para selecionar quem fará parte do
                    twendyuige.
                  </p>
                </div>
                <div className="d-flex column g-36px">
                  <div className="d-flex column g-20px">
                    <div className="d-flex column g-8px">
                      <div className="d-flex items-center g-8px text-primary">
                        <i className="fi fi-rs-marker"></i>
                        <h3 className="color size-20 light">
                          Residência na província do Uíge
                        </h3>
                      </div>
                      <p className="text-secondary light">
                        Pioridade para candidatos que vivem na província e desejam
                        contribuir <br />
                        para o desenvolvimento local.
                      </p>
                    </div>
                    <div className="image-map">
                      <img src="/_img/edge-network.png" alt="Residência na Provícia do Uíge" />
                    </div>
                  </div>
                  <div className="grid-four">
                    <div className="d-flex column g-8px">
                      <div className="d-flex column g-8px">
                        <div className="d-flex items-center g-8px text-primary">
                          <i className="fi fi-rs-user-trust"></i>
                          <h3 className="color size-20 light">
                            Idade mínima: 18 anos
                          </h3>
                        </div>
                        <p className="text-secondary light">
                          Jovens a partir de 16 anos com interesse por tecnologia
                          ou empreendedorismo.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex column g-8px">
                      <div className="d-flex column g-8px">
                        <div className="d-flex items-center g-8px text-primary">
                          <i className="fi fi-rs-lightbulb-on"></i>
                          <h3 className="color size-20 light">
                            Ideia ou motivação clara
                          </h3>
                        </div>
                        <p className="text-secondary light">
                          Ter uma ideia de projeto ou o desejo genuíno de
                          desenvolver algo inovador.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex column g-8px">
                      <div className="d-flex column g-8px">
                        <div className="d-flex items-center g-8px text-primary">
                          <i className="fi fi-rs-clock-three"></i>
                          <h3 className="color size-20 light">Comprometimento</h3>
                        </div>
                        <p className="text-secondary light">
                          Disponibilidade para participar das atividades do
                          programa do início ao fim.
                        </p>
                      </div>
                    </div>
                    <div className="d-flex column g-8px">
                      <div className="d-flex column g-8px">
                        <div className="d-flex items-center g-8px text-primary">
                          <i className="fi fi-rs-hands-together"></i>
                          <h3 className="color size-20 light">Perfil colaborativo</h3>
                        </div>
                        <p className="text-secondary light">
                          Vontade de aprender, trabalhar em equipe e crescer junto
                          com outros participantes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* PERGUNTAS FREQUENTES */}
          <section
            id="perguntas"
            className="d-flex column g-36px relative w-pd"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionVariants}
          >
            <div className="mt-120 w-full w-pd relative">
              <div className="d-flex column g-36px">
                <div className="d-flex items-center justify-center column g-8px">
                  <h2 className="color size-32 medium text-center text-primary">
                    Perguntas Frequentes
                  </h2>
                </div>
                <div className="d-flex items-center justify-center">
                  <div className="faq-section">
                    {/* FAQ items */}
                    <div className="faq-item">
                      <div className="faq-question">
                        <h3 className="light text-primary">
                          Quem pode participar do twendyuige?
                        </h3>
                        <span className="plus-icon">+</span>
                      </div>
                      <div className="faq-answer">
                        <p className="text-secondary size-14">
                          Jovens a partir de 18 anos, residentes no Uíge, com
                          interesse por tecnologia, inovação ou empreendedorismo,
                          podem se candidatar.
                        </p>
                      </div>
                    </div>
                    <div className="faq-item">
                      <div className="faq-question">
                        <h3 className="light text-primary">
                          Preciso ter uma ideia pronta para me inscrever?
                        </h3>
                        <span className="plus-icon">+</span>
                      </div>
                      <div className="faq-answer">
                        <p className="text-secondary size-14">
                          Não. Basta ter vontade de aprender e desenvolver algo.
                          Ter uma ideia ajuda, mas não é obrigatório.
                        </p>
                      </div>
                    </div>
                    <div className="faq-item">
                      <div className="faq-question">
                        <h3 className="light text-primary">O programa é gratuito?</h3>
                        <span className="plus-icon">+</span>
                      </div>
                      <div className="faq-answer">
                        <p className="text-secondary size-14">
                          Sim, o twendy é totalmente gratuito para todos os
                          participantes selecionados. Há apenas uma taxa mínima de
                          2.000kz na inscrição.
                        </p>
                      </div>
                    </div>
                    <div className="faq-item">
                      <div className="faq-question">
                        <h3 className="light text-primary">
                          Qual é a duração do programa?
                        </h3>
                        <span className="plus-icon">+</span>
                      </div>
                      <div className="faq-answer">
                        <p className="text-secondary size-14">
                          O programa tem duração média de 3 a 4 meses, com
                          encontros semanais, mentorias e atividades práticas.
                        </p>
                      </div>
                    </div>
                    <div className="faq-item">
                      <div className="faq-question">
                        <h3 className="light text-primary">
                          Recebo certificado ao final?
                        </h3>
                        <span className="plus-icon">+</span>
                      </div>
                      <div className="faq-answer">
                        <p className="text-secondary size-14">
                          Sim. Os participantes que concluírem todas as etapas
                          receberão um certificado de participação.
                        </p>
                      </div>
                    </div>
                    <div className="faq-item">
                      <div className="faq-question">
                        <h3 className="light text-primary">
                          Preciso ter computador ou internet?
                        </h3>
                        <span className="plus-icon">+</span>
                      </div>
                      <div className="faq-answer">
                        <p className="text-secondary size-14">
                          Ter um computador é recomendado, mas o programa também
                          oferece apoio em espaços com acesso a equipamentos e
                          internet para quem precisar.
                        </p>
                      </div>
                    </div>
                    <div className="faq-item">
                      <div className="faq-question">
                        <h3 className="light text-primary">
                          Onde acontecerão as formações?
                        </h3>
                        <span className="plus-icon">+</span>
                      </div>
                      <div className="faq-answer">
                        <p className="text-secondary size-14">
                          As formações ocorrerão presencialmente no Uíge, Gabinete
                          dos Registros e Modernização Administrativa, Centro da
                          Cidade.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* CALL TO ACTION FINAL */}
          <section className="d-flex column g-36px relative"
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={ctaVariants}
          >
            <div className="mt-120 w-full w-pd ready-to-ship">
              <div className="d-flex column g-36px">
                <div className="d-flex column g-8px">
                  <h3 className="text-primary medium size-44">
                    Pronto para começar?
                  </h3>
                  <p className="text-primary light">
                    Vamos construir algo incrível juntos.
                  </p>
                </div>
                <div className="d-flex items-center text-center g-12px hero-animate delay-3">
                  <div whileHover={buttonHover} style={{display: 'inline-block'}}>
                    <Link to="/registrar" className="btn btn-color">
                      <span>Inscrever-se agora</span>
                    </Link>
                  </div>
                  <div whileHover={buttonHover} style={{display: 'inline-block'}}>
                    <Link to="/registrar" className="btn btn-border blur">
                      <span>Contacte-nos</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* FOOTER */}
          <footer id="contactos" className="footer blur blur-back relative">
            <div className="w-pd">
              <div className="grid-footer">
                <div className="d-flex column g-20px">
                  <a href="#" className="d-flex items-center g-8px logo-center">
                    <img src="/_img/logo.png" alt="Logo" className="logo-img" />
                    <h2 className="linear-txt size-20">twendyuige</h2>
                  </a>
                  <p className="text-secondary size-14">
                    Transformando ideias em soluções reais.
                  </p>
                </div>
                <div className="grid-ft-inside">
                  <div className="d-flex column g-20px">
                    <h5 className="text-secondary light size-14">Navegação rápida</h5>
                    <div className="d-flex column g-12px">
                      <a href="#" className="size-14 text-primary light">
                        Início
                      </a>
                      <a href="#" className="size-14 text-primary light">
                        Sobre o Programa
                      </a>
                      <a href="#" className="size-14 text-primary light">
                        Etapas do Processo
                      </a>
                      <a href="#" className="size-14 text-primary light">
                        Mentores
                      </a>
                      <a href="#" className="size-14 text-primary light">
                        FAQ
                      </a>
                      <a href="#" className="size-14 text-primary light">
                        Inscrever-se
                      </a>
                    </div>
                  </div>
                  <div className="d-flex column g-20px">
                    <h5 className="text-secondary light size-14">Contactos</h5>
                    <div className="d-flex column g-12px">
                      <a href="#" className="size-14 text-primary light">
                        Uíge, Angola
                      </a>
                      <a href="#" className="size-14 text-primary light">
                        contato@twendyuige.ao
                      </a>
                      <a href="#" className="size-14 text-primary light">
                        +244 935 406 556
                      </a>
                    </div>
                  </div>
                  <div className="d-flex column g-20px">
                    <h5 className="text-secondary light size-14">Redes sociais</h5>
                    <div className="d-flex column g-12px">
                      <a href="#" className="size-14 text-primary light">
                        Facebook: /twendyuige
                      </a>
                      <a href="#" className="size-14 text-primary light">
                        Instagram: @twendyuige
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full image-layer">
              <img src="/_img/layer.png" alt="layer" />
            </div>
            <p className="copyright">
              &copy; twendyuige 2025
            </p>
          </footer>
        </div>
        <input type="checkbox" id="theme-toggle" hidden />
        <label htmlFor="theme-toggle" className="fixed-mode d-flex">
          <i className="fi fi-ss-moon-stars"></i>
        </label>
      </section>
    </>
  );
};

export default HomePage; 