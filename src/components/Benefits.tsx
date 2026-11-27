"use client";

import styled from "styled-components";
import { FiDollarSign, FiTrendingUp, FiTrendingDown, FiSmile, FiShield, FiHeart } from "react-icons/fi";
import { Container, Section, Eyebrow, H2, Lead, SectionHead } from "./ui";

const items = [
  { Icon: FiDollarSign, title: "100% comissionado", text: "Lucramos quando a sua clínica prospera." },
  { Icon: FiShield, title: "Garantia de resultado", text: "Se uma meta do contrato não for atingida, o valor é descontado da nossa comissão." },
  { Icon: FiSmile, title: "Experiência humanizada", text: "Duas humanas dedicadas à sua clínica, com a IA potencializando." },
  { Icon: FiHeart, title: "Melhor relacionamento com o cliente", text: "Cada paciente acompanhado de perto, no momento certo, para fidelizar." },
  { Icon: FiTrendingUp, title: "Mais vendas e retenção", text: "Mais consultas, menos faltas e pacientes que voltam." },
  { Icon: FiTrendingDown, title: "Menos despesas, mais lucro", text: "Automação e estratégia para gastar menos e vender mais." },
];

const Grid = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  ${({ theme }) => theme.bp.lg} { grid-template-columns: repeat(3, 1fr); gap: 18px; }
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
          <H2 id="beneficios-titulo">Menos despesas, mais lucro e mais qualidade</H2>
          <Lead>Nosso objetivo é reduzir despesas, aumentar os lucros e melhorar a qualidade do atendimento.</Lead>
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
