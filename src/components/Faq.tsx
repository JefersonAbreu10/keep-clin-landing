"use client";

import { useState } from "react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { Container, Section, Eyebrow, H2, SectionHead } from "./ui";

const faqs = [
  {
    q: "O que é uma clínica AI-First?",
    a: "É uma clínica que coloca a inteligência artificial no centro da operação: ela atende, automatiza processos e organiza as informações. Mas a experiência continua humanizada, porque sempre há um humano dedicado à sua clínica.",
  },
  {
    q: "A IA trabalha sozinha?",
    a: "Não. A IA nunca fica sozinha. Uma humana especialista em vendas e sucesso do cliente atua junto com ela, e outra humana cuida da estratégia, cria os planos de ação e busca soluções para aumentar os lucros.",
  },
  {
    q: "Essa equipe é funcionária da minha clínica?",
    a: "Não. As especialistas fazem parte da equipe da Keep Clin. Você não contrata nem treina ninguém: nós cuidamos de tudo e atendemos a sua clínica com a IA potencializando os resultados.",
  },
  {
    q: "Quanto custa?",
    a: "O modelo é 100% comissionado: nós lucramos quando a sua clínica prospera, e damos garantia de resultado. Fale com a gente pelo WhatsApp para receber a proposta ideal para a sua clínica.",
  },
  {
    q: "O que são as metas definidas em contrato?",
    a: "São 12 indicadores, como tempo de resposta, conversão de conversas em consultas, faltas, satisfação e retorno dos pacientes. Eles ficam no contrato: é o nosso compromisso, por escrito.",
  },
  {
    q: "O atendimento funciona 24 horas?",
    a: "Sim. A sua clínica responde 24 horas, 7 dias por semana: a inteligência artificial garante a resposta rápida, e a humana dedicada continua o atendimento com o toque humano.",
  },
  {
    q: "O que exatamente é automatizado?",
    a: "WhatsApp, Instagram e serviços administrativos, como confirmações de consulta, lembretes, cadastros e acompanhamento dos pacientes. Automatizamos sempre depois de analisar os processos da clínica.",
  },
  {
    q: "Como funciona o aplicativo?",
    a: "Criamos um aplicativo para a sua clínica, com todas as informações centralizadas e a gestão na palma da sua mão: agenda, atendimento, receituário, financeiro, relatórios, contratos e indicadores, em tempo real. Também criamos CRM e outras tecnologias para modernizar a clínica. Funciona no computador e no celular.",
  },
];

const List = styled.ul`
  max-width: 820px;
  margin: 0 auto;
  display: grid;
  gap: 8px;
  ${({ theme }) => theme.bp.md} { gap: 12px; }
`;

const Item = styled.li<{ $open: boolean }>`
  border-radius: ${({ theme }) => theme.radius.md};
  background: #fff;
  border: 1px solid ${({ theme, $open }) => ($open ? theme.colors.orange : theme.colors.line)};
  transition: border-color 0.25s ease;
  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 16px;
    text-align: left;
    font-size: 14.5px;
    ${({ theme }) => theme.bp.md} { padding: 20px 22px; font-size: 16px; }
    font-weight: 700;
    color: ${({ theme }) => theme.colors.ink};
  }
  svg {
    flex-shrink: 0;
    width: 28px; height: 28px; padding: 6px;
    border-radius: 50%;
    color: #fff;
    background: ${({ theme }) => theme.gradient};
    transform: rotate(${({ $open }) => ($open ? "45deg" : "0")});
    transition: transform 0.25s ease;
  }
  .a {
    display: grid;
    grid-template-rows: ${({ $open }) => ($open ? "1fr" : "0fr")};
    transition: grid-template-rows 0.3s ease;
    > div { overflow: hidden; }
    p { padding: 0 16px 16px; font-size: 13.5px; line-height: 1.5; color: ${({ theme }) => theme.colors.muted}; }
    ${({ theme }) => theme.bp.md} { p { padding: 0 22px 22px; font-size: 15px; } }
  }
`;

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" aria-labelledby="faq-titulo">
      <Container>
        <SectionHead $center>
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <H2 id="faq-titulo">Perguntas que as clínicas fazem</H2>
        </SectionHead>
        <List>
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Item key={f.q} $open={isOpen}>
                <button id={`faq-q-${i}`} onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} aria-controls={`faq-${i}`}>
                  {f.q} <FiPlus aria-hidden />
                </button>
                <div className="a" id={`faq-${i}`} role="region" aria-labelledby={`faq-q-${i}`}>
                  <div><p>{f.a}</p></div>
                </div>
              </Item>
            );
          })}
        </List>
      </Container>
    </Section>
  );
}
