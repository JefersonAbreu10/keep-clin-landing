"use client";

import Image from "next/image";
import { asset } from "@/config/site";
import styled from "styled-components";
import { FiUserCheck, FiZap, FiSmartphone } from "react-icons/fi";
import { Container, Section, Eyebrow, H2, Lead, SectionHead, GradText } from "./ui";

const pillars = [
  {
    Icon: FiUserCheck,
    title: "Secretária humana, 100% comissionada",
    text: "Cuida do atendimento, das ligações e dos pacientes. Você não contrata nem treina.",
    img: asset("/img/atendente.webp"),
    alt: "Secretária da Keep Clin sorrindo com headset em um escritório moderno",
  },
  {
    Icon: FiZap,
    title: "Inteligência artificial e automação",
    text: "Confirmações, lembretes, cadastros e acompanhamento rodam sozinhos.",
    img: asset("/img/atendente-notebook.webp"),
    alt: "Secretária trabalhando no notebook com ferramentas de automação",
  },
  {
    Icon: FiSmartphone,
    title: "Um aplicativo só da sua clínica",
    text: "Tudo o que hoje está em planilhas passa a viver num só lugar.",
    img: asset("/img/atendente-ligacao.webp"),
    alt: "Secretária em ligação com painel de indicadores na tela",
  },
];

/* Celular: lista compacta (foto pequena + texto). Tablet/desktop: três cartões. */
const Cards = styled.div`
  display: grid;
  gap: 10px;
  ${({ theme }) => theme.bp.md} { grid-template-columns: repeat(3, 1fr); gap: 22px; }
`;

const Card = styled.article`
  display: flex;
  gap: 14px;
  align-items: center;
  padding: 10px;
  border-radius: 18px;
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.line};
  box-shadow: ${({ theme }) => theme.shadow.sm};
  .img {
    position: relative;
    flex: 0 0 68px;
    height: 68px;
    border-radius: 16px;
    overflow: hidden;
  }
  .body { position: relative; min-width: 0; }
  .ic { display: none; }
  h3 { font-size: 14.5px; line-height: 1.3; color: ${({ theme }) => theme.colors.ink}; }
  p { margin-top: 3px; font-size: 13px; line-height: 1.4; color: ${({ theme }) => theme.colors.muted}; }

  ${({ theme }) => theme.bp.md} {
    display: block;
    padding: 0;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.radius.lg};
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    @media (hover: hover) { &:hover { transform: translateY(-6px); box-shadow: ${({ theme }) => theme.shadow.md}; } }
    .img { flex: none; width: 100%; height: auto; aspect-ratio: 16 / 10; border-radius: 0; }
    .body { padding: 24px 22px 24px; }
    .ic {
      display: grid;
      position: absolute; top: -26px; left: 22px;
      width: 52px; height: 52px; border-radius: 16px;
      place-items: center; color: #fff;
      background: ${({ theme }) => theme.gradient};
      box-shadow: 0 12px 24px rgba(111,62,144,.3);
      svg { width: 23px; height: 23px; }
    }
    h3 { margin-top: 20px; font-size: 19px; }
    p { margin-top: 8px; font-size: 15px; }
  }
  ${({ theme }) => theme.bp.short} {
    ${({ theme }) => theme.bp.md} { .img { aspect-ratio: 16 / 7; } .body { padding: 18px 20px; } h3 { margin-top: 18px; font-size: 17px; } p { font-size: 14px; margin-top: 6px; } }
  }
`;

const Banner = styled.div`
  margin-top: 12px;
  padding: 13px 16px;
  border-radius: 20px;
  background: ${({ theme }) => theme.gradient};
  color: #fff;
  text-align: center;
  font-size: clamp(15px, 2vw, 21px);
  font-weight: 700;
  line-height: 1.35;
  ${({ theme }) => theme.bp.md} { margin-top: 24px; padding: 20px 28px; border-radius: ${({ theme }) => theme.radius.lg}; }
  ${({ theme }) => theme.bp.short} { ${({ theme }) => theme.bp.md} { margin-top: 16px; padding: 14px 24px; } }
  ${({ theme }) => theme.bp.phoneShort} { display: none; }
`;

export function Solution() {
  return (
    <Section id="solucao" aria-labelledby="solucao-titulo">
      <Container>
        <SectionHead $center>
          <Eyebrow>A solução</Eyebrow>
          <H2 id="solucao-titulo">
            A Keep Clin <GradText>muda esse jogo</GradText>
          </H2>
          <Lead>A tecnologia cuida do repetitivo. A secretária cuida das pessoas e das vendas.</Lead>
        </SectionHead>
        <Cards>
          {pillars.map(({ Icon, title, text, img, alt }) => (
            <Card key={title}>
              <div className="img">
                <Image src={img} alt={alt} fill sizes="(min-width: 820px) 33vw, 84px" style={{ objectFit: "cover", objectPosition: "center 25%" }} />
              </div>
              <div className="body">
                <span className="ic"><Icon aria-hidden /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Card>
          ))}
        </Cards>
        <Banner>Gente + tecnologia: um atendimento de alto nível para a sua clínica.</Banner>
      </Container>
    </Section>
  );
}
