"use client";

import styled from "styled-components";
import { FiShield } from "react-icons/fi";
import { Container, Section, Eyebrow, H2, Lead, SectionHead, GradText } from "./ui";

/* Estratégia de vendas e retenção: do contato ao paciente fiel, com a métrica que acompanha cada etapa. */
const etapas = [
  { n: "1", t: "Atrair", d: "Instagram e WhatsApp organizados para gerar contatos.", m: "Contatos novos" },
  { n: "2", t: "Responder", d: "IA responde na hora e a humana assume quando importa.", m: "Tempo de resposta" },
  { n: "3", t: "Agendar", d: "Ligação consultiva com SPIN para virar consulta.", m: "Conversão em consulta" },
  { n: "4", t: "Comparecer", d: "Confirmações e lembretes para reduzir faltas.", m: "Show rate e no-show" },
  { n: "5", t: "Fidelizar", d: "Farol do paciente e contato no momento certo.", m: "Retorno e NPS" },
  { n: "6", t: "Crescer", d: "Plano de ação com base nos números.", m: "Lucro e ocupação" },
];

const Flow = styled.ol`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  ${({ theme }) => theme.bp.sm} { grid-template-columns: 1fr 1fr; gap: 10px; }
  ${({ theme }) => theme.bp.lg} { grid-template-columns: repeat(3, 1fr); gap: 16px; }
  li {
    position: relative;
    padding: 12px 14px;
    border-radius: 16px;
    background: #fff;
    border: 1px solid ${({ theme }) => theme.colors.line};
    box-shadow: ${({ theme }) => theme.shadow.sm};
    ${({ theme }) => theme.bp.md} { padding: 20px 18px; border-radius: ${({ theme }) => theme.radius.md}; }
  }
  .n {
    width: 28px; height: 28px; border-radius: 9px;
    display: grid; place-items: center;
    background: ${({ theme }) => theme.gradient};
    color: #fff; font-weight: 700; font-size: 14px;
  }
  h3 { margin-top: 8px; font-size: 15px; color: ${({ theme }) => theme.colors.ink}; }
  p { margin-top: 3px; font-size: 13px; line-height: 1.4; color: ${({ theme }) => theme.colors.muted}; }
  .m {
    margin-top: 8px; display: inline-block;
    padding: 4px 10px; border-radius: 999px;
    background: ${({ theme }) => theme.gradientSoft};
    color: ${({ theme }) => theme.colors.purple};
    font-size: 12px; font-weight: 700;
  }
  ${({ theme }) => theme.bp.md} {
    h3 { margin-top: 12px; font-size: 18px; }
    p { margin-top: 6px; font-size: 14.5px; }
    .m { font-size: 13px; }
  }
`;

const Guarantee = styled.div`
  margin-top: 14px;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 14px 16px;
  border-radius: 20px;
  background: ${({ theme }) => theme.gradient};
  color: #fff;
  ${({ theme }) => theme.bp.md} { margin-top: 24px; padding: 22px 28px; gap: 18px; }
  .ic {
    flex-shrink: 0; width: 44px; height: 44px; border-radius: 14px;
    display: grid; place-items: center; background: rgba(255,255,255,.2);
    svg { width: 22px; height: 22px; }
  }
  b { display: block; font-size: 16px; }
  span { display: block; margin-top: 2px; font-size: 13.5px; line-height: 1.4; opacity: .92; }
  ${({ theme }) => theme.bp.md} { b { font-size: 20px; } span { font-size: 16px; } }
`;

export function SalesStrategy() {
  return (
    <Section id="estrategia" aria-labelledby="estrategia-titulo">
      <Container>
        <SectionHead>
          <Eyebrow>Estratégia de vendas e retenção</Eyebrow>
          <H2 id="estrategia-titulo">
            Do primeiro contato ao paciente fiel, <GradText>com números em cada etapa</GradText>
          </H2>
          <Lead>
            Alavancamos as vendas e a retenção da sua clínica com um funil acompanhado de perto. Cada etapa tem uma métrica, e cada métrica tem um plano de ação.
          </Lead>
        </SectionHead>
        <Flow>
          {etapas.map((e) => (
            <li key={e.n}>
              <span className="n">{e.n}</span>
              <h3>{e.t}</h3>
              <p>{e.d}</p>
              <span className="m">{e.m}</span>
            </li>
          ))}
        </Flow>
        <Guarantee>
          <span className="ic"><FiShield aria-hidden /></span>
          <div>
            <b>100% comissionado e com garantia de resultado</b>
            <span>Nós lucramos quando a sua clínica prospera. Os resultados e as metas ficam definidos em contrato.</span>
          </div>
        </Guarantee>
      </Container>
    </Section>
  );
}
