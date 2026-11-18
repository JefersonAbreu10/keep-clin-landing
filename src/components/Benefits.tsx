"use client";

import styled from "styled-components";
import { FiDollarSign, FiTrendingUp, FiSmile, FiShield } from "react-icons/fi";
import { Container, Section, Eyebrow, H2, Lead, SectionHead } from "./ui";

const items = [
  { Icon: FiDollarSign, title: "Mais lucro, menos despesas", text: "Menos da metade do custo de uma secretária comum." },
  { Icon: FiTrendingUp, title: "Alta performance", text: "Metas e métricas acompanhadas de perto." },
  { Icon: FiSmile, title: "Experiência humanizada", text: "Uma pessoa de verdade, com a agilidade da IA." },
  { Icon: FiShield, title: "Sem dor de cabeça", text: "Seleção, treinamento e acompanhamento são com a gente." },
];

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  ${({ theme }) => theme.bp.lg} { grid-template-columns: repeat(4, 1fr); gap: 18px; }
  li {
    padding: 16px 14px;
    border-radius: 18px;
    ${({ theme }) => theme.bp.md} { padding: 26px 22px; border-radius: ${({ theme }) => theme.radius.md}; }
    background: ${({ theme }) => theme.gradientSoft};
    border: 1px solid ${({ theme }) => theme.colors.line};
  }
  .ic {
    width: 40px; height: 40px; border-radius: 13px;
    ${({ theme }) => theme.bp.md} { width: 52px; height: 52px; border-radius: 16px; }
    display: grid; place-items: center;
    background: #fff;
    color: ${({ theme }) => theme.colors.purple};
    box-shadow: ${({ theme }) => theme.shadow.sm};
    svg { width: 20px; height: 20px; }
  }
  h3 { margin-top: 10px; font-size: 14.5px; line-height: 1.3; color: ${({ theme }) => theme.colors.ink}; }
  p { margin-top: 4px; font-size: 13px; line-height: 1.45; color: ${({ theme }) => theme.colors.muted}; }
  ${({ theme }) => theme.bp.md} {
    h3 { margin-top: 16px; font-size: 18px; }
    p { margin-top: 8px; font-size: 15px; }
  }
`;

export function Benefits() {
  return (
    <Section aria-labelledby="beneficios-titulo">
      <Container>
        <SectionHead $center>
          <Eyebrow>Por que a Keep Clin</Eyebrow>
          <H2 id="beneficios-titulo">Mais resultado, mais cuidado</H2>
          <Lead>O nosso objetivo é simples: a sua clínica lucrar mais, gastar menos e atender melhor.</Lead>
        </SectionHead>
        <Grid>
          {items.map(({ Icon, title, text }) => (
            <li key={title}>
              <span className="ic"><Icon aria-hidden /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
