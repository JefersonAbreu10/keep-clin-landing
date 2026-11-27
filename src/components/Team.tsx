"use client";

import styled from "styled-components";
import { FiCpu, FiUserCheck, FiCompass, FiPlus } from "react-icons/fi";
import { Container, Section, Eyebrow, H2, Lead, SectionHead, GradText } from "./ui";

const team = [
  {
    Icon: FiCpu,
    tag: "Inteligência artificial",
    title: "IA que trabalha o tempo todo",
    items: ["Atende WhatsApp e Instagram", "Automatiza processos administrativos", "Organiza dados e indicadores"],
    tone: "ai",
  },
  {
    Icon: FiUserCheck,
    tag: "Humana dedicada",
    title: "Especialista em vendas e sucesso do cliente",
    items: ["Atua junto com a IA para potencializar", "Converte leads e fideliza pacientes", "Cuida de cada paciente com atenção"],
    tone: "human",
  },
  {
    Icon: FiCompass,
    tag: "Humana de estratégia",
    title: "Quem pensa o crescimento da clínica",
    items: ["Cria os planos de ação", "Busca soluções com base nos dados", "Foco em aumentar os lucros"],
    tone: "human",
  },
] as const;

const Grid = styled.div`
  display: grid;
  gap: 10px;
  align-items: stretch;
  ${({ theme }) => theme.bp.lg} { grid-template-columns: 1fr auto 1fr auto 1fr; gap: 14px; }
`;

const Plus = styled.span`
  display: none;
  align-self: center;
  width: 40px; height: 40px; border-radius: 50%;
  place-items: center;
  background: ${({ theme }) => theme.gradient};
  color: #fff;
  ${({ theme }) => theme.bp.lg} { display: grid; svg { width: 20px; height: 20px; } }
`;

const Card = styled.article<{ $tone: "ai" | "human" }>`
  padding: 16px 16px;
  border-radius: 20px;
  background: ${({ $tone, theme }) => ($tone === "ai" ? "linear-gradient(160deg,#3B1F4F,#24152F)" : "#fff")};
  color: ${({ $tone, theme }) => ($tone === "ai" ? "#fff" : theme.colors.ink)};
  border: 1px solid ${({ $tone, theme }) => ($tone === "ai" ? "rgba(255,255,255,.12)" : theme.colors.line)};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  ${({ theme }) => theme.bp.md} { padding: 26px 24px; border-radius: ${({ theme }) => theme.radius.md}; }
  .top { display: flex; align-items: center; gap: 10px; }
  .ic {
    width: 40px; height: 40px; border-radius: 13px; flex-shrink: 0;
    display: grid; place-items: center; color: #fff;
    background: ${({ theme }) => theme.gradient};
    svg { width: 19px; height: 19px; }
  }
  .tag {
    font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
    color: ${({ $tone, theme }) => ($tone === "ai" ? "#F6B07C" : theme.colors.purple)};
  }
  h3 { margin-top: 10px; font-size: 16px; line-height: 1.3; }
  ul { margin-top: 10px; display: grid; gap: 6px; }
  li {
    display: flex; gap: 8px; font-size: 13.5px; line-height: 1.4;
    color: ${({ $tone, theme }) => ($tone === "ai" ? "rgba(255,255,255,.82)" : theme.colors.text)};
  }
  li::before { content: "✓"; color: #2BC48A; font-weight: 700; }
  ${({ theme }) => theme.bp.md} {
    h3 { font-size: 19px; }
    li { font-size: 15px; }
  }
`;

const Note = styled.p`
  margin-top: 14px;
  padding: 13px 16px;
  border-radius: 18px;
  background: ${({ theme }) => theme.gradientSoft};
  border: 1px solid ${({ theme }) => theme.colors.line};
  text-align: center;
  font-size: 14px;
  line-height: 1.45;
  color: ${({ theme }) => theme.colors.ink};
  ${({ theme }) => theme.bp.md} { margin-top: 24px; font-size: 17px; padding: 18px 24px; }
`;

export function Team() {
  return (
    <Section id="equipe" $tone="soft" aria-labelledby="equipe-titulo">
      <Container>
        <SectionHead>
          <Eyebrow>Como entregamos</Eyebrow>
          <H2 id="equipe-titulo">
            IA que escala, <GradText>pessoas que cuidam</GradText>
          </H2>
          <Lead>Uma clínica AI-First sem perder a experiência humanizada: a tecnologia e duas especialistas trabalhando juntas por você.</Lead>
        </SectionHead>
        <Grid>
          {team.flatMap((t, i) => {
            const card = (
              <Card key={t.tag} $tone={t.tone}>
                <div className="top">
                  <span className="ic"><t.Icon aria-hidden /></span>
                  <span className="tag">{t.tag}</span>
                </div>
                <h3>{t.title}</h3>
                <ul>{t.items.map((x) => <li key={x}>{x}</li>)}</ul>
              </Card>
            );
            return i < team.length - 1
              ? [card, <Plus key={`p${i}`} aria-hidden><FiPlus /></Plus>]
              : [card];
          })}
        </Grid>
        <Note>
          <strong>A IA não fica sozinha.</strong> Cada clínica tem um humano dedicado, e é essa combinação que transforma tecnologia em resultado.
        </Note>
      </Container>
    </Section>
  );
}
