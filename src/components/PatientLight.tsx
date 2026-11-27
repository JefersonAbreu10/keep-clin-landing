"use client";

import styled from "styled-components";
import { Container, Section, Eyebrow, H2, Lead, SectionHead, GradText } from "./ui";

const farol = [
  { c: "#2BC48A", t: "Verde", s: "Satisfeito", a: "Manter o relacionamento" },
  { c: "#F5C04A", t: "Amarelo", s: "Neutro: não reclama, mas também não se encanta", a: "Encantar" },
  { c: "#E5484D", t: "Vermelho", s: "Se afastando", a: "Retomar o contato e reagendar" },
  { c: "#7A1F3D", t: "Crítico", s: "Risco de não voltar", a: "Contato prioritário" },
];

const resultados = [
  ["Tempo de resposta", "em minutos"],
  ["Consultas agendadas", "▲ mais"],
  ["Faltas", "▼ menos"],
  ["Pacientes que voltam", "▲ mais"],
];

const Grid = styled.div`
  display: grid;
  gap: 10px;
  ${({ theme }) => theme.bp.lg} { grid-template-columns: 1.1fr 0.9fr; gap: 28px; align-items: start; }
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
  ${({ theme }) => theme.bp.md} { gap: 12px; }
  li {
    display: flex; gap: 8px; align-items: flex-start; flex-direction: column;
    ${({ theme }) => theme.bp.md} { flex-direction: row; gap: 12px; }
    padding: 10px 11px; border-radius: 16px;
    background: #fff; border: 1px solid ${({ theme }) => theme.colors.line};
    box-shadow: ${({ theme }) => theme.shadow.sm};
    ${({ theme }) => theme.bp.md} { padding: 18px; align-items: flex-start; }
  }
  b { display: block; font-size: 14.5px; color: ${({ theme }) => theme.colors.ink}; }
  span { display: block; font-size: 12.5px; line-height: 1.35; color: ${({ theme }) => theme.colors.muted}; }
  em { display: inline-block; margin-top: 4px; font-style: normal; font-size: 12px; font-weight: 700; color: ${({ theme }) => theme.colors.purple}; }
  ${({ theme }) => theme.bp.md} { b { font-size: 17px; } span { font-size: 14px; } em { font-size: 13.5px; } }
`;

const Dot = styled.i<{ $c: string }>`
  width: 24px; height: 24px; border-radius: 50%; flex-shrink: 0;
  background: ${({ $c }) => $c};
  box-shadow: 0 0 0 5px ${({ $c }) => $c}22;
  ${({ theme }) => theme.bp.md} { width: 44px; height: 44px; }
`;

const Results = styled.div`
  padding: 12px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.colors.ink};
  color: #fff;
  ${({ theme }) => theme.bp.md} { padding: 24px; }
  h3 { font-size: 15px; ${({ theme }) => theme.bp.md} { font-size: 20px; } }
  ul { margin-top: 8px; display: grid; grid-template-columns: 1fr 1fr; gap: 6px; ${({ theme }) => theme.bp.md} { grid-template-columns: 1fr; } }
  li {
    display: flex; justify-content: space-between; align-items: center; gap: 6px;
    padding: 8px 10px; border-radius: 12px;
    background: rgba(255,255,255,.07); font-size: 12px; font-weight: 600;
    ${({ theme }) => theme.bp.md} { padding: 14px 16px; font-size: 16px; }
  }
  li em { font-style: normal; color: #9BE7C4; font-weight: 700; }
  p { margin-top: 8px; font-size: 12px; color: rgba(255,255,255,.75); ${({ theme }) => theme.bp.md} { font-size: 15px; } }
`;

export function PatientLight() {
  return (
    <Section id="farol" aria-labelledby="farol-titulo">
      <Container>
        <SectionHead>
          <Eyebrow>Farol do paciente</Eyebrow>
          <H2 id="farol-titulo">Cada cor, uma ação. <GradText>Meta: todos no verde.</GradText></H2>
          <Lead>A IA e a humana dedicada classificam cada paciente pela satisfação e agem de forma diferente para cada um.</Lead>
        </SectionHead>
        <Grid>
          <List>
            {farol.map((f) => (
              <li key={f.t}>
                <Dot $c={f.c} aria-hidden />
                <div><b>{f.t}</b><span>{f.s}</span><em>Ação: {f.a}</em></div>
              </li>
            ))}
          </List>
          <Results>
            <h3>O resultado</h3>
            <ul>{resultados.map(([t, v]) => <li key={t}>{t}<em>{v}</em></li>)}</ul>
            <p>Isso é estratégia: dados, com o cuidado de uma pessoa.</p>
          </Results>
        </Grid>
      </Container>
    </Section>
  );
}
