"use client";

import styled from "styled-components";
import { Container, Section, Eyebrow, H2, Lead, SectionHead } from "./ui";

const steps = [
  { n: "01", title: "Conversa inicial", text: "Entendemos a rotina e os objetivos da sua clínica." },
  { n: "02", title: "Análise e configuração", text: "Mapeamos os processos e configuramos o aplicativo e as automações." },
  { n: "03", title: "IA e humano em ação", text: "A IA atende e automatiza, e a humana dedicada vende e fideliza." },
  { n: "04", title: "Metas e estratégia", text: "12 indicadores em contrato e planos de ação para crescer." },
];


const Steps = styled.ol`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  ${({ theme }) => theme.bp.lg} { grid-template-columns: repeat(4, 1fr); gap: 18px; }
  li {
    position: relative;
    padding: 16px 14px;
    border-radius: 18px;
    ${({ theme }) => theme.bp.md} { padding: 26px 22px; border-radius: ${({ theme }) => theme.radius.md}; }
    background: #fff;
    border: 1px solid ${({ theme }) => theme.colors.line};
    box-shadow: ${({ theme }) => theme.shadow.sm};
  }
  .n {
    font-size: 30px;
    ${({ theme }) => theme.bp.md} { font-size: 40px; }
    font-weight: 700;
    line-height: 1;
    background: ${({ theme }) => theme.gradient};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  h3 { margin-top: 8px; font-size: 14.5px; line-height: 1.3; color: ${({ theme }) => theme.colors.ink}; }
  p { margin-top: 4px; font-size: 13px; line-height: 1.45; color: ${({ theme }) => theme.colors.muted}; }
  ${({ theme }) => theme.bp.md} {
    h3 { margin-top: 14px; font-size: 18px; }
    p { margin-top: 8px; font-size: 15px; }
  }
`;


export function HowItWorks() {
  return (
    <Section id="como-funciona" $tone="soft" aria-labelledby="como-titulo">
      <Container>
        <SectionHead>
          <Eyebrow>Como funciona</Eyebrow>
          <H2 id="como-titulo">Da primeira conversa ao atendimento de alto nível</H2>
          <Lead>Um processo simples, acompanhado de perto por quem cuida da sua clínica.</Lead>
        </SectionHead>
        <Steps>
          {steps.map((s) => (
            <li key={s.n}>
              <span className="n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </Steps>
      </Container>
    </Section>
  );
}
