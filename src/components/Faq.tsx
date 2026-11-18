"use client";

import { useState } from "react";
import styled from "styled-components";
import { FiPlus } from "react-icons/fi";
import { Container, Section, Eyebrow, H2, SectionHead } from "./ui";

const faqs = [
  {
    q: "A atendente é funcionária da minha clínica?",
    a: "Não. A atendente é da equipe da Keep Clin. Nós cuidamos da seleção, do treinamento e do acompanhamento, e ela atende a sua clínica com o apoio da inteligência artificial.",
  },
  {
    q: "Quanto custa?",
    a: "Os pacotes custam menos da metade do valor de uma secretária comum. Fale com a gente pelo WhatsApp para receber a proposta ideal para o tamanho da sua clínica.",
  },
  {
    q: "O que exatamente é automatizado?",
    a: "Tarefas administrativas e repetitivas, como confirmações de consulta, lembretes, cadastros e acompanhamento dos pacientes. Automatizamos sempre depois de analisar os processos da clínica.",
  },
  {
    q: "Como funciona o aplicativo?",
    a: "Criamos um aplicativo da Keep Clin para a sua clínica, com os módulos que fazem sentido para você, como agenda, atendimento, cadastro, financeiro e indicadores. Ele funciona no computador e no celular.",
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
                <button onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} aria-controls={`faq-${i}`}>
                  {f.q} <FiPlus aria-hidden />
                </button>
                <div className="a" id={`faq-${i}`} role="region">
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
