"use client";

import styled from "styled-components";
import { FiArrowRight } from "react-icons/fi";
import { Container, Section, Eyebrow, H2, Lead, SectionHead, GradText } from "./ui";

const spin = [
  { l: "S", n: "Situação", q: "O que te motivou a nos procurar?", d: "descobre o motivo" },
  { l: "P", n: "Problema", q: "Qual é sua principal preocupação?", d: "descobre a dor" },
  { l: "I", n: "Implicação", q: "Como isso afeta sua rotina?", d: "descobre a urgência" },
  { l: "N", n: "Necessidade", q: "Qual resultado você espera?", d: "descobre o objetivo" },
];

const pilares = ["Exclusividade", "Autoridade", "Experiência", "Personalização", "Relacionamento"];

const Grid = styled.div`
  display: grid;
  gap: 10px;
  ${({ theme }) => theme.bp.lg} { grid-template-columns: 1.15fr 0.85fr; gap: 28px; align-items: start; }
`;

const Spin = styled.ul`
  display: grid;
  gap: 6px;
  ${({ theme }) => theme.bp.md} { grid-template-columns: 1fr 1fr; gap: 14px; }
  li {
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 8px 12px;
    border-radius: 16px;
    background: #fff;
    border: 1px solid ${({ theme }) => theme.colors.line};
    box-shadow: ${({ theme }) => theme.shadow.sm};
    ${({ theme }) => theme.bp.md} { padding: 18px; border-radius: ${({ theme }) => theme.radius.md}; }
  }
  .l {
    width: 32px; height: 32px; border-radius: 10px; flex-shrink: 0;
    ${({ theme }) => theme.bp.md} { width: 40px; height: 40px; border-radius: 12px; }
    display: grid; place-items: center;
    background: ${({ theme }) => theme.gradient};
    color: #fff; font-weight: 700; font-size: 18px;
  }
  b { display: block; font-size: 14px; color: ${({ theme }) => theme.colors.ink}; }
  q { display: block; margin-top: 1px; font-size: 13px; color: ${({ theme }) => theme.colors.text}; }
  small { display: block; margin-top: 1px; font-size: 12px; color: ${({ theme }) => theme.colors.purple}; font-weight: 600; }
  ${({ theme }) => theme.bp.md} { b { font-size: 17px; } q { font-size: 15px; } small { font-size: 14px; } }
`;

const Value = styled.div`
  padding: 12px 14px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.gradientSoft};
  border: 1px solid ${({ theme }) => theme.colors.line};
  ${({ theme }) => theme.bp.md} { padding: 24px; }
  h3 { font-size: 14.5px; color: ${({ theme }) => theme.colors.ink}; line-height: 1.3; }
  ${({ theme }) => theme.bp.md} { h3 { font-size: 20px; } }
`;

const Flow = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  div {
    flex: 1; text-align: center; padding: 7px 4px; border-radius: 14px;
    background: #fff; border: 1px solid ${({ theme }) => theme.colors.line};
    font-size: 13.5px; font-weight: 700; color: ${({ theme }) => theme.colors.ink};
    small { display: block; font-size: 11px; color: ${({ theme }) => theme.colors.orange}; }
  }
  div.hi { background: ${({ theme }) => theme.gradient}; color: #fff; border-color: transparent; small { color: #fff; } }
  svg { flex-shrink: 0; color: ${({ theme }) => theme.colors.muted}; }
  ${({ theme }) => theme.bp.md} { div { font-size: 16px; padding: 14px 6px; } }
`;

const Pills = styled.ul`
  margin-top: 8px;
  display: flex; flex-wrap: wrap; gap: 5px;
  li {
    font-size: 11.5px; font-weight: 600; padding: 4px 9px; border-radius: 999px;
    background: #fff; border: 1px solid ${({ theme }) => theme.colors.line}; color: ${({ theme }) => theme.colors.purple};
  }
  ${({ theme }) => theme.bp.md} { li { font-size: 14px; padding: 8px 14px; } }
`;

export function SalesMethod() {
  return (
    <Section id="metodo" aria-labelledby="metodo-titulo">
      <Container>
        <SectionHead>
          <Eyebrow>Vendas consultivas</Eyebrow>
          <H2 id="metodo-titulo">Ela liga para cada lead com o <GradText>método SPIN</GradText></H2>
          <Lead>Quatro perguntas que revelam o que o paciente precisa. Primeiro ela entende, depois apresenta a solução.</Lead>
        </SectionHead>
        <Grid>
          <Spin>
            {spin.map((s) => (
              <li key={s.l}>
                <span className="l">{s.l}</span>
                <div><b>{s.n}</b><q>{s.q}</q><small>→ {s.d}</small></div>
              </li>
            ))}
          </Spin>
          <Value>
            <h3>O paciente percebe valor antes de ouvir o preço</h3>
            <Flow>
              <div><small>1</small>Entender</div>
              <FiArrowRight aria-hidden />
              <div className="hi"><small>2</small>Solução</div>
              <FiArrowRight aria-hidden />
              <div><small>3</small>Preço</div>
            </Flow>
            <Pills>{pilares.map((p) => <li key={p}>{p}</li>)}</Pills>
          </Value>
        </Grid>
      </Container>
    </Section>
  );
}
