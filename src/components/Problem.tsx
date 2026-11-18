"use client";

import Image from "next/image";
import styled from "styled-components";
import { FiGrid, FiMessageCircle, FiClock, FiTrendingDown } from "react-icons/fi";
import { Container, Section, Eyebrow, H2, Lead } from "./ui";

const pains = [
  { Icon: FiGrid, title: "Tudo em planilhas", text: "Agenda numa planilha, financeiro em outra." },
  { Icon: FiMessageCircle, title: "Paciente esperando", text: "Mensagens sem resposta viram consultas perdidas." },
  { Icon: FiClock, title: "Equipe sobrecarregada", text: "Confirmações e cadastros feitos à mão." },
  { Icon: FiTrendingDown, title: "Dinheiro na mesa", text: "Pacientes somem e ninguém sabe por quê." },
];

const Grid = styled(Container)`
  display: grid;
  gap: 32px;
  align-items: center;
  ${({ theme }) => theme.bp.lg} { grid-template-columns: 0.8fr 1.2fr; gap: 64px; }
`;

const Photo = styled.div`
  display: none;
  ${({ theme }) => theme.bp.lg} {
    display: block;
    position: relative;
    justify-self: center;
    height: min(64svh, 560px);
    aspect-ratio: 4 / 5;
    max-width: 100%;
    border-radius: 32px;
    overflow: hidden;
    box-shadow: ${({ theme }) => theme.shadow.md};
    &::after {
      content: "Sem processo, sem controle.";
      position: absolute;
      left: 20px; bottom: 20px;
      padding: 10px 18px;
      border-radius: 999px;
      background: #E5484D;
      color: #fff;
      font-weight: 700;
      font-size: 15px;
    }
  }
`;

const Cards = styled.ul`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  ${({ theme }) => theme.bp.md} { gap: 16px; margin-top: 30px; }
  li {
    padding: 13px 12px;
    border-radius: 16px;
    background: #fff;
    border: 1px solid ${({ theme }) => theme.colors.line};
    ${({ theme }) => theme.bp.md} { padding: 22px; border-radius: ${({ theme }) => theme.radius.md}; }
  }
  .ic {
    width: 36px; height: 36px; border-radius: 12px;
    display: grid; place-items: center;
    background: rgba(229,72,77,.1);
    color: #E5484D;
    svg { width: 18px; height: 18px; }
    ${({ theme }) => theme.bp.md} { width: 44px; height: 44px; svg { width: 21px; height: 21px; } }
  }
  h3 { margin-top: 8px; font-size: 14px; line-height: 1.3; color: ${({ theme }) => theme.colors.ink}; }
  p { margin-top: 3px; font-size: 13px; line-height: 1.4; color: ${({ theme }) => theme.colors.muted}; }
  ${({ theme }) => theme.bp.md} {
    h3 { margin-top: 14px; font-size: 17px; }
    p { margin-top: 6px; font-size: 15px; }
  }
  ${({ theme }) => theme.bp.short} {
    ${({ theme }) => theme.bp.md} { margin-top: 18px; li { padding: 16px 18px; } h3 { margin-top: 10px; font-size: 16px; } p { font-size: 14px; } }
  }
`;

const Tag = styled.p`
  margin-top: 16px;
  display: inline-block;
  padding: 8px 16px;
  border-radius: 999px;
  background: #E5484D;
  color: #fff;
  font-weight: 700;
  font-size: 13px;
  ${({ theme }) => theme.bp.lg} { display: none; }
  ${({ theme }) => theme.bp.phoneShort} { display: none; }
`;

export function Problem() {
  return (
    <Section $tone="soft" aria-labelledby="problema-titulo">
      <Grid>
        <Photo>
          <Image
            src="/img/mesa-bagunca.webp"
            alt="Mesa de recepção cheia de papéis, cadernos e planilhas"
            fill
            sizes="(min-width: 1080px) 450px, 1px"
            style={{ objectFit: "cover" }}
          />
        </Photo>
        <div>
          <Eyebrow>O problema</Eyebrow>
          <H2 id="problema-titulo">Sua clínica ainda roda no improviso?</H2>
          <Lead>Processos espalhados fazem a equipe perder tempo e a clínica perder dinheiro.</Lead>
          <Cards>
            {pains.map(({ Icon, title, text }) => (
              <li key={title}>
                <span className="ic"><Icon aria-hidden /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </Cards>
          <Tag>Sem processo, sem controle.</Tag>
        </div>
      </Grid>
    </Section>
  );
}
