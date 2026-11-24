"use client";

import styled from "styled-components";
import { FiFileText } from "react-icons/fi";
import { Container, Section, Eyebrow, H2, Lead, SectionHead, GradText } from "./ui";

const metricas = [
  ["FRT", "Quanto tempo leva para responder"],
  ["SLA", "Se os prazos foram cumpridos"],
  ["TMA", "Quanto dura cada atendimento"],
  ["FCR", "Resolveu no primeiro contato"],
  ["Conversão", "Conversas que viram consulta"],
  ["Show rate", "Pacientes que compareceram"],
  ["No-show", "Pacientes que faltaram"],
  ["Ocupação", "Quanto da agenda foi preenchida"],
  ["CSAT", "Satisfação do paciente"],
  ["NPS", "Se indicaria a clínica"],
  ["Retorno", "Pacientes que voltam"],
  ["Reclamações", "O que precisa melhorar"],
];

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 6px;
  ${({ theme }) => theme.bp.md} { grid-template-columns: repeat(4, 1fr); gap: 12px; }
  ${({ theme }) => theme.bp.lg} { grid-template-columns: repeat(6, 1fr); }
  li {
    padding: 9px 8px;
    border-radius: 13px;
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.14);
    ${({ theme }) => theme.bp.md} { padding: 16px 14px; border-radius: 16px; }
  }
  b { display: block; font-size: 13.5px; color: #fff; }
  span { display: block; margin-top: 2px; font-size: 12px; line-height: 1.3; color: rgba(255,255,255,.78); }
  ${({ theme }) => theme.bp.md} { b { font-size: 17px; } span { font-size: 13.5px; } }
`;

const Bottom = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
  ${({ theme }) => theme.bp.md} { margin-top: 28px; flex-direction: row; align-items: center; justify-content: space-between; }
`;

const Stamp = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border: 3px solid ${({ theme }) => theme.colors.orange};
  border-radius: 12px;
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 700;
  letter-spacing: 0.12em;
  font-size: 13px;
  transform: rotate(-3deg);
  svg { width: 18px; height: 18px; }
  ${({ theme }) => theme.bp.md} { font-size: 16px; padding: 10px 20px; }
`;

const Promise = styled.p`
  font-size: 14.5px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.85);
  strong { color: #fff; }
  ${({ theme }) => theme.bp.md} { font-size: 17px; max-width: 620px; }
`;

export function ContractMetrics() {
  return (
    <Section id="metas" $tone="dark" aria-labelledby="metas-titulo">
      <Container>
        <SectionHead>
          <Eyebrow $light>Metas em contrato</Eyebrow>
          <H2 id="metas-titulo" $light>
            Sua clínica <GradText>não é só mais uma</GradText>
          </H2>
          <Lead $light>
            As metas ficam definidas em contrato, com 12 indicadores. Cada número tem uma estratégia por trás, com técnicas de vendas e planos de ação.
          </Lead>
        </SectionHead>
        <Grid>
          {metricas.map(([n, d]) => (
            <li key={n}><b>{n}</b><span>{d}</span></li>
          ))}
        </Grid>
        <Bottom>
          <Stamp><FiFileText aria-hidden /> DEFINIDO EM CONTRATO</Stamp>
          <Promise>
            <strong>Não é só promessa:</strong> é o nosso compromisso com a sua clínica, por escrito.
          </Promise>
        </Bottom>
      </Container>
    </Section>
  );
}
