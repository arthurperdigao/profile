const translations = {
    pt: {
        nav_home: "Início",
        nav_experience: "Experiência",
        nav_projects: "Cases & QA",
        nav_stack: "Stack & Skills",
        nav_contact: "Contato",
        nav_cv: "Currículo PDF",

        hero_badge: "Disponível para Oportunidades • SDET & QA Architect",
        hero_role: "SDET & QA Architect | Automação E2E | Inovação com IA",
        hero_subtitle: "Engenharia de Qualidade de Software de alto nível unindo automação resiliente com Playwright & TypeScript, validação de APIs críticas e integração de Inteligência Artificial generativa.",
        hero_bio: "Atuando desde 2018 com foco em automação de testes e qualidade de ponta a ponta. Experiência sólida em fintechs (crédito consignado) e travel techs, liderança técnica, ambientes Staging/UAT e arquitetura RAG para aceleração de suporte e esteiras de engenharia.",
        
        stat_years: "8+ ANOS",
        stat_years_label: "Experiência em QA",
        stat_e2e: "100+ E2E",
        stat_e2e_label: "Cenários Playwright",
        stat_ai: "LLM & RAG",
        stat_ai_label: "Inovação & Scraping",
        stat_domains: "FINTECH & TRAVEL",
        stat_domains_label: "Verticais Críticas",

        cta_experience: "Trajetória Corporativa",
        cta_projects: "Ver Cases Técnicos",
        cta_contact: "Falar Comigo",
        cta_download_cv: "Baixar Currículo (PDF)",
        cta_visit: "Acessar Repositório / Detalhes",

        // Experience Section
        exp_title: "Trajetória & Experiência",
        exp_subtitle: "Histórico de liderança, engenharia de qualidade e inovação tecnológica em produtos de grande escala.",

        exp_paytrack_role: "Engenheiro de Qualidade Senior",
        exp_paytrack_date: "Outubro de 2025 — Presente • 1 ano 1 mês",
        exp_paytrack_loc: "Belo Horizonte, MG (Remoto/Híbrido)",
        exp_paytrack_b1: "<strong>Estratégia de QA em Travel:</strong> Atuação estratégica na garantia de qualidade das verticais de Aéreo, Hotéis, Rodoviário e Carros, unindo engenharia de testes com soluções de Inteligência Artificial para otimização de processos.",
        exp_paytrack_b2: "<strong>Aprovação e Homologação Técnica:</strong> Liderança na aprovação técnica e homologação de novos integradores, estabelecendo critérios rigorosos de prontidão em funcionalidade e qualidade antes de produção.",
        exp_paytrack_b3: "<strong>+100 Cenários E2E Automatizados:</strong> Desenvolvimento de mais de 100 cenários de testes automatizados com Playwright e Vitest, garantindo resiliência de fluxos críticos de negócio (pesquisa, reserva, emissão e cancelamento).",
        exp_paytrack_b4: "<strong>Qualidade Multicamadas:</strong> Estruturação de estratégia multicamadas combinando testes manuais, análise estruturada de riscos, validação de APIs e escrita de cenários BDD em ambientes Local, Staging e UAT.",
        exp_paytrack_highlight: "<strong>Inovação com IA Generativa & RAG:</strong> Criei um sistema de chat LLM para equipes de suporte N1 e N2 com arquitetura RAG cruzando dados manuais com API proprietária de web scraping no Jira e Confluence. Automatizei a extração contínua de bugs resolvidos para retroalimentar a base de conhecimento da IA, gerando precisão e alta economia financeira.",

        exp_inter_role: "Analista de QA",
        exp_inter_date: "Dezembro de 2023 — Outubro de 2025 • 1 ano 11 meses",
        exp_inter_loc: "Belo Horizonte, MG",
        exp_inter_b1: "<strong>Automação Otimizada Playwright:</strong> Desenvolvimento de automações de testes com Playwright em TypeScript, criando rotinas otimizadas para execução local rápida que aceleraram validações no dia a dia.",
        exp_inter_b2: "<strong>Massa de Dados e Ambientes:</strong> Vivência sólida em ambientes UAT e Staging com manipulação de dados para construção de cenários de teste realistas e rastreáveis.",
        exp_inter_b3: "<strong>Domínio de Crédito Consignado:</strong> Atuação em diferentes modalidades de crédito consignado (SIAPE, CLT/Privado e Leilão INSS), garantindo testes eficientes em WebView, aplicativos mobile (iOS e Android) e plataformas web.",
        exp_inter_highlight: "<strong>Responsabilidade de Produto:</strong> Atuação proativa assumindo a responsabilidade da qualidade ponta a ponta, inclusive substituindo o Product Owner (PO) durante seus períodos de ausência.",

        exp_123_role: "Engenheiro de Teste / QA",
        exp_123_date: "Agosto de 2022 — Novembro de 2023 • 1 ano 4 meses",
        exp_123_loc: "Belo Horizonte, MG",
        exp_123_b1: "<strong>Testes de APIs & Microsserviços:</strong> Aplicação de testes de acordo com a demanda de cada cenário, com forte foco em testes de APIs REST e integrações.",
        exp_123_b2: "<strong>Esteiras CI/CD & Ambientes:</strong> Configuração e manutenção de ambientes de teste utilizando Git e pipelines Jenkins.",
        exp_123_b3: "<strong>BDD & Bancos de Dados:</strong> Manipulação de banco de dados no ambiente de teste, criação de cenários de teste BDD com Gherkin e revisão técnica de testes escritos por outros QAs.",

        exp_forpeople_role: "Analista de Teste / QA & TechLead",
        exp_forpeople_date: "Abril de 2021 — Agosto de 2022 • 1 ano 5 meses",
        exp_forpeople_loc: "Belo Horizonte, MG",
        exp_forpeople_b1: "<strong>Aplicações de Alta Escala:</strong> Garantia de qualidade em software Web e aplicativo Mobile atendendo a mais de 43 mil acessos simultâneos de clientes.",
        exp_forpeople_b2: "<strong>Testes Multimodais:</strong> Execução de testes de stress, performance, caixa-preta, usabilidade e testes de integração em qualquer nova funcionalidade.",
        exp_forpeople_b3: "<strong>Mapeamento de Causa-Raiz:</strong> Validação de todos os bugs reportados pelo setor técnico, busca da causa-raiz e mapeamento da solução para a equipe de desenvolvimento.",
        exp_forpeople_highlight: "<strong>Atuação como TechLead:</strong> Liderança técnica (Julho de 2021 — Março de 2022) na análise e validação de erros e bugs críticos reportados por usuários no sistema.",

        exp_stefanini_role: "Analista de Sistemas (Vallourec)",
        exp_stefanini_date: "Fevereiro de 2020 — Dezembro de 2020 • 11 meses",
        exp_stefanini_loc: "Brumadinho, MG",
        exp_stefanini_b1: "<strong>Infraestrutura & Redes:</strong> Foco em infraestrutura de redes WAN/VPN, servidores e sistemas operacionais para grandes operações industriais.",
        exp_stefanini_b2: "<strong>Segurança & Continuidade:</strong> Gestão de hardware, software, rotinas de backup, controle de acesso e conectividade segura garantindo a continuidade do negócio.",

        exp_aec_role: "Supervisor de Assistência Técnica & Suporte N1/N2",
        exp_aec_date: "Maio de 2018 — Fevereiro de 2020 • 1 ano 11 meses",
        exp_aec_loc: "Belo Horizonte, MG",
        exp_aec_b1: "<strong>Supervisão Técnica:</strong> Liderança e supervisão de equipe técnica (Junho/2019 — Fevereiro/2020).",
        exp_aec_b2: "<strong>Suporte Nível 2 (Terra):</strong> Diagnóstico técnico para soluções de hospedagem, domínios, zonas de DNS e serviços de e-mail corporativos e residenciais.",

        // Projects Section
        projects_title: "Cases de Engenharia & Automação",
        projects_subtitle: "Casos reais de arquitetura de testes, automação E2E de alta resiliência e soluções de Inteligência Artificial.",
        
        project_travel_title: "Travel Verticals — Suíte E2E Playwright & Vitest",
        project_travel_desc: "Arquitetura de testes automatizados E2E cobrindo 4 verticais críticas (Aéreo, Hotéis, Rodoviário e Carros) com mais de 100 cenários de fluxos transacionais, mocks de parceiros e homologação contínua.",

        project_rag_title: "AI Support Agent — RAG + Scraping Jira & Confluence",
        project_rag_desc: "Sistema proprietário de IA Generativa que cruza chamados históricos de bugs resolvidos e bases de conhecimento para acelerar em tempo real o atendimento das equipes de suporte N1 e N2.",

        project_banking_title: "Consignado Banking — Suíte Mobile & WebView",
        project_banking_desc: "Estratégia completa de testes em Crédito Consignado (SIAPE, CLT, Leilão INSS) abrangendo plataformas Web, WebView e apps nativos iOS/Android com provisionamento de dados realistas em UAT e Staging.",

        project_apiflow_title: "APIFlowTester — Ferramenta Visual de Testes",
        project_apiflow_desc: "Ferramenta open-source para modelagem visual drag-and-drop de fluxos de testes de integração e validação de requisições de APIs REST.",

        // Tech Stack
        stack_title: "Tech Stack & Competências",
        stack_subtitle: "Tecnologias, padrões de engenharia e certificações aplicadas na construção de sistemas confiáveis.",
        stack_cat_qa: "// AUTOMAÇÃO & QUALIDADE DE SOFTWARE",
        stack_cat_ai: "// INTELIGÊNCIA ARTIFICIAL & DADOS",
        stack_cat_devops: "// CI/CD, CLOUD & AMBIENTES",
        stack_cat_domain: "// PLATAFORMAS & DOMÍNIOS DE NEGÓCIO",
        stack_cat_certs: "// FORMAÇÃO ACADÊMICA & CERTIFICAÇÕES",

        cert_promove_bs: "Bacharel em Sistemas de Informação",
        cert_promove_bs_desc: "Faculdades Promove (2017 - 2020) • Tecnologia em Sistemas de Informação",
        cert_promove_net: "Tecnologia em Sistemas de Redes",
        cert_promove_net_desc: "Faculdades Promove (2019 - 2020) • Infraestrutura, conectividade e segurança",
        cert_aws_cf: "AWS Academy Cloud Foundations",
        cert_aws_cf_desc: "Amazon Web Services • Arquitetura de nuvem, computação distribuída e governança",
        cert_aws_cc: "Amazon AWS Cloud Computing",
        cert_aws_cc_desc: "Amazon Web Services • Serviços em nuvem, resiliência e escalabilidade",
        cert_db: "Database Foundations",
        cert_db_desc: "Modelagem relacional, manipulação SQL e integridade de dados",
        cert_java: "Java Foundations",
        cert_java_desc: "Orientação a objetos, algoritmos e fundamentos da plataforma Java",

        // Contact Section
        contact_badge: "Disponível para Oportunidades CLT / PJ",
        contact_title_1: "Pronto para Construir um Produto",
        contact_title_2: "com Qualidade & Resiliência Extrema?",
        contact_subtitle: "Aberto a conversas para posições de Engenheiro de Qualidade Sênior, SDET e QA Lead.",
        contact_linkedin_title: "LinkedIn",
        contact_linkedin_desc: "Conectar e conversar profissionalmente",
        contact_linkedin_cta: "Acessar Perfil →",
        contact_github_title: "GitHub",
        contact_github_desc: "Explorar códigos, frameworks e testes",
        contact_github_cta: "Ver Repositórios →",
        contact_email_title: "E-mail Direto",
        contact_email_desc: "arthuradm2016@gmail.com",
        contact_email_cta: "Copiar / Enviar E-mail →",
        contact_whatsapp_title: "WhatsApp / Telefone",
        contact_whatsapp_desc: "+55 (31) 98633-1106",
        contact_whatsapp_cta: "Iniciar Conversa →",
        contact_copied: "E-mail copiado para a área de transferência!",

        cv_banner_title: "Acesse o Currículo Completo em PDF",
        cv_banner_desc: "Baixe o documento detalhado com todo o histórico corporativo, projetos, competências e certificações.",
        cv_banner_btn: "Baixar Currículo (PDF)",

        footer_rights: "© 2026 Arthur Perdigão • SDET & QA Architect. Todos os direitos reservados.",

        projects: {
            playwright_travel: {
                title: "Travel Verticals — Suíte E2E Playwright & Vitest (Paytrack)",
                desc: "Arquitetura e desenvolvimento de suíte com mais de 100 testes automatizados E2E cobrindo fluxos críticos de Aéreo, Hotéis, Rodoviário e Carros. Redução significativa do tempo de validação de regressão com execução paralela otimizada e critérios rigorosos de homologação de novos integradores antes de produção.",
                link: "#",
                gallery: [
                    { url: "assets/cases/playwright_travel.jpg", caption: "Dashboard de Execução E2E: Status em tempo real das verticais Travel e matriz de execução" }
                ]
            },
            rag_jira_ai: {
                title: "AI Support Agent — RAG & Scraping Jira/Confluence (Paytrack)",
                desc: "Criação de sistema de IA Generativa integrando LLM e arquitetura RAG (Retrieval-Augmented Generation) para equipes de suporte N1 e N2. Utiliza API proprietária de web scraping no Jira e Confluence que rastreia continuamente chamados de bugs solucionados e retroalimenta automaticamente a base de conhecimento, proporcionando economia financeira e respostas imediatas.",
                link: "#",
                gallery: [
                    { url: "assets/cases/rag_jira_ai.jpg", caption: "Arquitetura RAG e Painel do Agente de IA para suporte N1/N2" }
                ]
            },
            banking_qa_suite: {
                title: "Consignado Banking — Suíte Mobile & WebView (Banco Inter)",
                desc: "Engenharia de qualidade ponta a ponta para módulos de Crédito Consignado (SIAPE, CLT/Privado e Leilão INSS). Automação com Playwright em TypeScript, execução de rotinas locais aceleradas, manipulação de massa sintética e rastreável em ambientes Staging e UAT, além de substituição do Product Owner em períodos de ausência.",
                link: "#",
                gallery: [
                    { url: "assets/cases/banking_qa_suite.jpg", caption: "Matriz de Validação Multiplataforma: Mobile iOS, Android e WebView para Crédito Bancário" }
                ]
            },
            apiflow: {
                title: "APIFlowTester — Ferramenta Visual de Testes de Integração",
                desc: "Ferramenta visual desenvolvida com React para orquestração de testes de APIs via canvas drag-and-drop. Permite desenhar fluxos de integração complexos, parametrizar dados de chamadas HTTP e validar respostas encadeadas de ponta a ponta.",
                link: "https://github.com/arthurperdigao/APIFlowTester",
                gallery: [
                    { url: "apitesteflow/456168149-1108bcc0-35a7-438c-9d58-081b73e78ea0.png", caption: "Canvas Interativo e Resultados de Execução de APIs" }
                ]
            }
        }
    },
    en: {
        nav_home: "Home",
        nav_experience: "Experience",
        nav_projects: "Cases & QA",
        nav_stack: "Stack & Skills",
        nav_contact: "Contact",
        nav_cv: "Resume PDF",

        hero_badge: "Open for Opportunities • SDET & QA Architect",
        hero_role: "SDET & QA Architect | E2E Automation | AI Innovation",
        hero_subtitle: "High-level Software Quality Engineering combining resilient Playwright & TypeScript automation, critical API validation, and Generative AI acceleration.",
        hero_bio: "Active since 2018 focused on test automation and end-to-end quality. Solid experience in fintechs (payroll loan systems) and travel techs, technical leadership, Staging/UAT environments, and RAG architecture for support and engineering pipeline acceleration.",
        
        stat_years: "8+ YEARS",
        stat_years_label: "QA Experience",
        stat_e2e: "100+ E2E",
        stat_e2e_label: "Playwright Scenarios",
        stat_ai: "LLM & RAG",
        stat_ai_label: "Innovation & Scraping",
        stat_domains: "FINTECH & TRAVEL",
        stat_domains_label: "Critical Verticals",

        cta_experience: "Corporate Experience",
        cta_projects: "View QA Cases",
        cta_contact: "Get in Touch",
        cta_download_cv: "Download Resume (PDF)",
        cta_visit: "View Repository / Details",

        // Experience Section
        exp_title: "Career Experience",
        exp_subtitle: "Proven track record of technical leadership, quality engineering, and AI innovation in large-scale products.",

        exp_paytrack_role: "Senior Quality Engineer",
        exp_paytrack_date: "October 2025 — Present • 1 yr 1 mo",
        exp_paytrack_loc: "Belo Horizonte, MG (Remote/Hybrid)",
        exp_paytrack_b1: "<strong>Travel QA Strategy:</strong> Strategic role ensuring software quality across Travel verticals (Air, Hotels, Bus, and Car Rentals), merging test engineering with Artificial Intelligence solutions for internal process optimization.",
        exp_paytrack_b2: "<strong>Technical Readiness & Partner Certification:</strong> Led technical approval and certification for new integrators, enforcing strict readiness criteria in functionality and quality prior to production release.",
        exp_paytrack_b3: "<strong>100+ Automated E2E Scenarios:</strong> Built a high-resilience test suite with Playwright and Vitest covering critical business flows (search, booking, issuance, and cancellation).",
        exp_paytrack_b4: "<strong>Multi-tier Quality Strategy:</strong> Structured multi-tier QA combining manual testing, structured risk analysis, API validation, and BDD scenario authoring across Local, Staging, and UAT environments.",
        exp_paytrack_highlight: "<strong>Generative AI & RAG Innovation:</strong> Designed an LLM chat system for N1/N2 support teams using RAG architecture combined with a proprietary scraping API for Jira and Confluence. Continuous automated data pipeline tracking resolved bugs feeds the knowledge base, delivering high precision and company savings.",

        exp_inter_role: "QA Analyst",
        exp_inter_date: "December 2023 — October 2025 • 1 yr 11 mos",
        exp_inter_loc: "Belo Horizonte, MG",
        exp_inter_b1: "<strong>Optimized Playwright Automation:</strong> Developed robust test automation using Playwright with TypeScript and created local execution routines that accelerated day-to-day web application validations.",
        exp_inter_b2: "<strong>Data Provisioning & Environments:</strong> Solid track record managing test data across UAT and Staging environments to build realistic, traceable test scenarios.",
        exp_inter_b3: "<strong>Payroll Loan Domain:</strong> End-to-end quality for complex, regulated credit modalities (SIAPE, Private CLT, INSS Auction) across WebView, native mobile (iOS and Android), and web platforms.",
        exp_inter_highlight: "<strong>Product Ownership:</strong> Proactive ownership of end-to-end quality and product responsibilities, serving as substitute Product Owner during PO absences.",

        exp_123_role: "Test / QA Engineer",
        exp_123_date: "August 2022 — November 2023 • 1 yr 4 mos",
        exp_123_loc: "Belo Horizonte, MG",
        exp_123_b1: "<strong>API & Microservices Testing:</strong> Deep testing of REST APIs, contract validation, and microservice integration reliability.",
        exp_123_b2: "<strong>CI/CD & Environments:</strong> Environment configuration and automated test pipelines using Git and Jenkins.",
        exp_123_b3: "<strong>BDD & Databases:</strong> Test database manipulation, writing BDD scenarios in Gherkin, and conducting technical reviews of QA test suites.",

        exp_forpeople_role: "Test / QA Analyst & TechLead",
        exp_forpeople_date: "April 2021 — August 2022 • 1 yr 5 mos",
        exp_forpeople_loc: "Belo Horizonte, MG",
        exp_forpeople_b1: "<strong>High-Scale Platforms:</strong> Quality assurance for Web and Mobile applications handling over 43,000 concurrent client sessions.",
        exp_forpeople_b2: "<strong>Multi-modal Testing:</strong> Executed stress testing, performance, black-box, usability, and integration testing on all new features.",
        exp_forpeople_b3: "<strong>Root Cause Mapping:</strong> Validated bugs, conducted root-cause analyses, and mapped technical solutions directly for engineering teams.",
        exp_forpeople_highlight: "<strong>Tech Lead Role:</strong> Technical leadership (Jul 2021 - Mar 2022) analyzing, triaging, and resolving critical system incidents reported by users.",

        exp_stefanini_role: "Systems Analyst (Allocated at Vallourec)",
        exp_stefanini_date: "February 2020 — December 2020 • 11 mos",
        exp_stefanini_loc: "Brumadinho, MG",
        exp_stefanini_b1: "<strong>Infrastructure & Networking:</strong> Specialized support and secure connectivity management across WAN/VPN networks, servers, and OS for major industrial operations.",
        exp_stefanini_b2: "<strong>Security & Continuity:</strong> Executed backup routines, access control, and data protection policies ensuring business continuity.",

        exp_aec_role: "Technical Support Supervisor & N1/N2 Support",
        exp_aec_date: "May 2018 — February 2020 • 1 yr 11 mos",
        exp_aec_loc: "Belo Horizonte, MG",
        exp_aec_b1: "<strong>Technical Supervision:</strong> Led and supervised technical support and assistance teams (Jun 2019 — Feb 2020).",
        exp_aec_b2: "<strong>Level 2 Support (Terra):</strong> Advanced diagnostic support for web hosting infrastructure, DNS zones, domain management, and corporate/residential email.",

        // Projects Section
        projects_title: "Engineering & Automation Cases",
        projects_subtitle: "Real-world test architectures, resilient E2E automation suites, and Artificial Intelligence solutions.",

        project_travel_title: "Travel Verticals — Playwright & Vitest E2E Suite",
        project_travel_desc: "Automated E2E test architecture covering 4 critical verticals (Flights, Hotels, Bus, and Car Rentals) with over 100 transactional test scenarios, partner mocks, and continuous homologation.",

        project_rag_title: "AI Support Agent — RAG + Jira & Confluence Scraping",
        project_rag_desc: "Proprietary Generative AI system that cross-references historical resolved bug tickets and knowledge bases to empower N1 and N2 support teams in real time.",

        project_banking_title: "Banking Payroll Credit — Mobile & WebView Suite",
        project_banking_desc: "Comprehensive testing strategy for critical payroll loans (SIAPE, CLT, INSS) across Web, WebView, and native iOS/Android applications with synthetic data generation in UAT and Staging.",

        project_apiflow_title: "APIFlowTester — Visual Integration Testing Tool",
        project_apiflow_desc: "Open-source visual tool for drag-and-drop modeling and automated execution of API integration test flows.",

        // Tech Stack
        stack_title: "Tech Stack & Competencies",
        stack_subtitle: "Technologies, engineering patterns, and certifications applied to deliver reliable software.",
        stack_cat_qa: "// TEST AUTOMATION & QUALITY ENGINEERING",
        stack_cat_ai: "// ARTIFICIAL INTELLIGENCE & DATA",
        stack_cat_devops: "// CI/CD, CLOUD & ENVIRONMENTS",
        stack_cat_domain: "// PLATFORMS & BUSINESS DOMAINS",
        stack_cat_certs: "// EDUCATION & CERTIFICATIONS",

        cert_promove_bs: "Bachelor in Information Systems",
        cert_promove_bs_desc: "Faculdades Promove (2017 - 2020) • Technology in Information Systems",
        cert_promove_net: "Computer Network Systems",
        cert_promove_net_desc: "Faculdades Promove (2019 - 2020) • Network infrastructure, connectivity, and security",
        cert_aws_cf: "AWS Academy Cloud Foundations",
        cert_aws_cf_desc: "Amazon Web Services • Cloud architecture, distributed computing, and governance",
        cert_aws_cc: "Amazon AWS Cloud Computing",
        cert_aws_cc_desc: "Amazon Web Services • Cloud services, reliability, and scalability",
        cert_db: "Database Foundations",
        cert_db_desc: "Relational data modeling, SQL queries, and data integrity",
        cert_java: "Java Foundations",
        cert_java_desc: "Object-oriented programming, algorithms, and Java platform core",

        // Contact Section
        contact_badge: "Open for Opportunities • Full-time / Contractor",
        contact_title_1: "Ready to Build a Product with",
        contact_title_2: "Extreme Quality & Resilience?",
        contact_subtitle: "Open to discussions for Senior Quality Engineer, SDET, and QA Lead roles.",
        contact_linkedin_title: "LinkedIn",
        contact_linkedin_desc: "Connect and chat professionally",
        contact_linkedin_cta: "View Profile →",
        contact_github_title: "GitHub",
        contact_github_desc: "Explore code, frameworks, and test suites",
        contact_github_cta: "View Repositories →",
        contact_email_title: "Direct Email",
        contact_email_desc: "arthuradm2016@gmail.com",
        contact_email_cta: "Copy / Send Email →",
        contact_whatsapp_title: "WhatsApp / Phone",
        contact_whatsapp_desc: "+55 (31) 98633-1106",
        contact_whatsapp_cta: "Start Conversation →",
        contact_copied: "Email copied to clipboard!",

        cv_banner_title: "Access Full Resume in PDF",
        cv_banner_desc: "Download the complete document with full corporate trajectory, projects, competencies, and certifications.",
        cv_banner_btn: "Download Resume (PDF)",

        footer_rights: "© 2026 Arthur Perdigão • SDET & QA Architect. All rights reserved.",

        projects: {
            playwright_travel: {
                title: "Travel Verticals — Playwright & Vitest E2E Suite (Paytrack)",
                desc: "Architecture and implementation of a suite with 100+ automated E2E tests covering critical flows for Flights, Hotels, Bus, and Car Rentals. Significant regression turnaround acceleration with optimized parallel execution and strict partner readiness validation prior to production rollout.",
                link: "#",
                gallery: [
                    { url: "assets/cases/playwright_travel.jpg", caption: "E2E Execution Dashboard: Real-time status across Travel verticals and test matrix" }
                ]
            },
            rag_jira_ai: {
                title: "AI Support Agent — RAG & Jira/Confluence Scraping (Paytrack)",
                desc: "Engineered a Generative AI system combining LLMs with RAG (Retrieval-Augmented Generation) for N1 and N2 support teams. Employs a proprietary web scraping API on Jira and Confluence that continuously tracks resolved bug tickets and automatically refreshes knowledge embeddings, yielding financial savings and immediate, accurate answers.",
                link: "#",
                gallery: [
                    { url: "assets/cases/rag_jira_ai.jpg", caption: "RAG Architecture and AI Support Agent Dashboard for N1/N2 teams" }
                ]
            },
            banking_qa_suite: {
                title: "Payroll Loans Banking — Mobile & WebView Suite (Banco Inter)",
                desc: "End-to-end quality engineering for payroll credit products (SIAPE, Private CLT, INSS Auction). Playwright automation in TypeScript, high-speed local test routines, synthetic data generation in Staging and UAT environments, and acting as substitute Product Owner during absences.",
                link: "#",
                gallery: [
                    { url: "assets/cases/banking_qa_suite.jpg", caption: "Multi-platform Validation Matrix: iOS, Android, and WebView for Banking Credit" }
                ]
            },
            apiflow: {
                title: "APIFlowTester — Visual Integration Testing Tool",
                desc: "Visual tool developed with React for API integration test orchestration via an interactive drag-and-drop canvas. Enables designing complex integration flows, parameterizing HTTP requests, and verifying chained responses end-to-end.",
                link: "https://github.com/arthurperdigao/APIFlowTester",
                gallery: [
                    { url: "apitesteflow/456168149-1108bcc0-35a7-438c-9d58-081b73e78ea0.png", caption: "Interactive Canvas and API Execution Results" }
                ]
            }
        }
    }
};

const flags = {
    pt: "🇧🇷",
    en: "🇺🇸"
};

let currentLang = 'pt';
let openProjectId = null; // Track which project is open in the modal

function updateContent(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    const app = document.getElementById('app');
    
    // Smooth transition effect
    app.style.opacity = '0';
    
    setTimeout(() => {
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key] !== undefined) {
                if (el.getAttribute('data-i18n-html') === 'true') {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });

        // Update Modal if open
        if (openProjectId) {
            updateModalData(openProjectId);
        }

        // Update selector UI
        const flagEl = document.getElementById('current-flag');
        const langEl = document.getElementById('current-lang');
        if (flagEl) flagEl.textContent = flags[lang];
        if (langEl) langEl.textContent = lang.toUpperCase();
        
        // Update document lang
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';
        
        app.style.opacity = '1';
    }, 200);
}

function setLanguage(lang) {
    console.log('Setting language to:', lang);
    if (!translations[lang]) {
        console.error('Translation not found for:', lang);
        return;
    }
    currentLang = lang;
    localStorage.setItem('preferred-lang', lang);
    updateContent(lang);
}

// Language Detection
function detectLanguage() {
    const saved = localStorage.getItem('preferred-lang');
    if (saved && translations[saved]) return saved;
    
    const browserLang = navigator.language.split('-')[0];
    return (translations[browserLang]) ? browserLang : 'en';
}

// Initial Setup
document.addEventListener('DOMContentLoaded', () => {
    const initialLang = detectLanguage();
    setLanguage(initialLang);

    // Event Listeners for options
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const selectedLang = option.getAttribute('data-lang');
            console.log('Option clicked:', selectedLang);
            setLanguage(selectedLang);
        });
    });

    // Custom Cursor Logic
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorOutline = document.querySelector(".cursor-outline");

    window.addEventListener("mousemove", (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Smooth outline follow
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Cursor hover effects
    const hoverElements = document.querySelectorAll("a, button, .project-card, .stack-item");
    hoverElements.forEach(el => {
        el.addEventListener("mouseenter", () => {
            cursorOutline.classList.add("cursor-hover");
            cursorDot.style.transform = "translate(-50%, -50%) scale(0.5)";
        });
        el.addEventListener("mouseleave", () => {
            cursorOutline.classList.remove("cursor-hover");
            cursorDot.style.transform = "translate(-50%, -50%) scale(1)";
        });
    });

    // Scroll Reveal Logic
    const revealCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.15
    });

    document.querySelectorAll(".reveal").forEach(el => {
        revealObserver.observe(el);
    });

    // Magnetic Effect
    const magneticElements = document.querySelectorAll('.magnetic');
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = `translate(0px, 0px)`;
        });
    });

    // Text Scramble Effect
    class TextScramble {
        constructor(el) {
            this.el = el;
            this.chars = '!<>-_/[]{}—=+*^?#________';
            this.update = this.update.bind(this);
        }
        setText(newText) {
            const oldText = this.el.innerText;
            const length = Math.max(oldText.length, newText.length);
            const promise = new Promise((resolve) => this.resolve = resolve);
            this.queue = [];
            for (let i = 0; i < length; i++) {
                const from = oldText[i] || '';
                const to = newText[i] || '';
                const start = Math.floor(Math.random() * 40);
                const end = start + Math.floor(Math.random() * 40);
                this.queue.push({ from, to, start, end });
            }
            cancelAnimationFrame(this.frameRequest);
            this.frame = 0;
            this.update();
            return promise;
        }
        update() {
            let output = '';
            let complete = 0;
            for (let i = 0, n = this.queue.length; i < n; i++) {
                let { from, to, start, end, char } = this.queue[i];
                if (this.frame >= end) {
                    complete++;
                    output += to;
                } else if (this.frame >= start) {
                    if (!char || Math.random() < 0.28) {
                        char = this.randomChar();
                        this.queue[i].char = char;
                    }
                    output += `<span class="dud">${char}</span>`;
                } else {
                    output += from;
                }
            }
            this.el.innerHTML = output;
            if (complete === this.queue.length) {
                this.resolve();
            } else {
                this.frameRequest = requestAnimationFrame(this.update);
                this.frame++;
            }
        }
        randomChar() {
            return this.chars[Math.floor(Math.random() * this.chars.length)];
        }
    }

    const el = document.querySelector('.scramble');
    const fx = new TextScramble(el);
    const originalText = el.innerText;
    
    // Scramble on load and hover
    setTimeout(() => fx.setText(originalText), 1000);
    el.addEventListener('mouseenter', () => fx.setText(originalText));

    // X-Ray Mode Logic
    const xrayToggle = document.getElementById('xray-toggle');
    xrayToggle.addEventListener('click', () => {
        document.body.classList.toggle('xray-mode');
        if (document.body.classList.contains('xray-mode')) {
            console.log("X-Ray Mode Active: Bounding boxes visible.");
        }
    });

    // HUD Logic
    const hudRes = document.getElementById('hud-res');
    const hudScr = document.getElementById('hud-scr');
    const hudFps = document.getElementById('hud-fps');
    const hudLng = document.getElementById('hud-lng');

    let lastTime = performance.now();
    let frameCount = 0;

    function updateHUD() {
        // Update Resolution
        hudRes.innerText = `${window.innerWidth}x${window.innerHeight}`;

        // Update Scroll
        const scrollPercent = Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100);
        hudScr.innerText = `${scrollPercent}%`;

        // Update FPS
        frameCount++;
        const now = performance.now();
        if (now - lastTime >= 1000) {
            hudFps.innerText = frameCount;
            frameCount = 0;
            lastTime = now;
        }

        hudLng.innerText = currentLang.toUpperCase();
        requestAnimationFrame(updateHUD);
    }
    updateHUD();

    // Constellation Canvas Logic
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 120; // Dobrando a quantidade
    let mouse = { x: null, y: null, radius: 150 };

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 1.5;
        }
        update() {
            // Reação ao Mouse (Fuga)
            if (mouse.x != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouse.radius) {
                    let forceX = dx / dist;
                    let forceY = dy / dist;
                    this.x -= forceX * 2;
                    this.y -= forceY * 2;
                }
            }

            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            ctx.fill();
        }
    }

    for (let i = 0; i < particleCount; i++) particles.push(new Particle());

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, i) => {
            p.update();
            p.draw();
            for (let j = i + 1; j < particles.length; j++) {
                const p2 = particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.strokeStyle = `rgba(0, 112, 243, ${(1 - dist / 150) * 0.8})`;
                    ctx.lineWidth = 0.8;
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animateParticles);
    }
    animateParticles();

    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = null;
        mouse.y = null;
    });

    // Project Modal Logic
    const modal = document.getElementById('project-modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalLink = document.getElementById('modal-link');
    const closeBtn = document.querySelector('.close-modal');
    
    let currentProjectGallery = [];
    let currentImgIndex = 0;

    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.getAttribute('data-project');
            openProjectId = projectId;
            updateModalData(projectId);
            
            modal.classList.add('active');
            modal.style.display = 'flex';
        });
    });

    function updateModalData(projectId) {
        const data = translations[currentLang].projects[projectId];
        if (!data) return;

        currentProjectGallery = data.gallery;
        currentImgIndex = 0;
        modalTitle.innerText = data.title;
        modalDesc.innerText = data.desc;
        if (data.link && data.link !== '#') {
            modalLink.style.display = 'inline-block';
            modalLink.href = data.link;
        } else {
            modalLink.style.display = 'none';
        }
        updateModalImage();
    }

    // Copy to clipboard handling
    document.querySelectorAll('.copy-email-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const email = btn.getAttribute('data-email') || 'arthuradm2016@gmail.com';
            if (navigator.clipboard) {
                navigator.clipboard.writeText(email).then(() => {
                    showToast(translations[currentLang].contact_copied || 'E-mail copiado!');
                }).catch(() => {
                    window.location.href = `mailto:${email}`;
                });
            } else {
                window.location.href = `mailto:${email}`;
            }
        });
    });

    function showToast(msg) {
        let toast = document.getElementById('copy-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'copy-toast';
            toast.className = 'copy-toast';
            document.body.appendChild(toast);
        }
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 3000);
    }

    function updateModalImage() {
        if (currentProjectGallery.length === 0) return;
        const item = currentProjectGallery[currentImgIndex % currentProjectGallery.length];
        modalImg.src = item.url;
        modalCaption.innerText = item.caption;
    }

    closeBtn.addEventListener('click', () => {
        modal.classList.remove('active');
        openProjectId = null;
        setTimeout(() => modal.style.display = 'none', 300);
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            openProjectId = null;
            setTimeout(() => modal.style.display = 'none', 300);
        }
    });

    // Gallery Nav
    document.querySelector('.gallery-nav.next').addEventListener('click', (e) => {
        e.stopPropagation();
        currentImgIndex = (currentImgIndex + 1) % currentProjectGallery.length;
        updateModalImage();
    });

    document.querySelector('.gallery-nav.prev').addEventListener('click', (e) => {
        e.stopPropagation();
        currentImgIndex = (currentImgIndex - 1 + currentProjectGallery.length) % currentProjectGallery.length;
        updateModalImage();
    });
    document.addEventListener('mousemove', (e) => {
        const parallaxElements = document.querySelectorAll('.parallax');
        const abstractShapes = document.querySelectorAll('.abstract-shape');
        
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        parallaxElements.forEach(el => {
            const speed = el.getAttribute('data-speed') || 5; // Aumentando velocidade
            const x = (window.innerWidth - mouseX * speed) / 80;
            const y = (window.innerHeight - mouseY * speed) / 80;
            el.style.transform = `translateX(${x}px) translateY(${y}px)`;
        });

        abstractShapes.forEach((shape, index) => {
            const speed = (index + 1) * 5; // Movimento mais forte
            const x = (window.innerWidth - mouseX * speed) / 100;
            const y = (window.innerHeight - mouseY * speed) / 100;
            shape.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${mouseX / 5}deg)`;
        });
    });
});
