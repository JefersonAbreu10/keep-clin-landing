"use client";

import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { FaWhatsapp } from "react-icons/fa6";
import { FiArrowDown, FiCheckCircle, FiCpu, FiBell } from "react-icons/fi";
import { Container, ButtonPrimary, ButtonGhost, GradText } from "./ui";
import { SocialButtons } from "./SocialButtons";
import { whatsappUrl, asset } from "@/config/site";

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const Wrap = styled.section`
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  overflow: hidden;
  color: #fff;

  /* Celular/tablet: foto de fundo em tela cheia */
  .bg { position: absolute; inset: 0; z-index: 0; }
  .bg::after {
    content: "";
    position: absolute; inset: 0;
    background:
      linear-gradient(180deg, rgba(36,21,47,.10) 0%, rgba(36,21,47,.25) 35%, rgba(36,21,47,.88) 68%, #24152F 100%);
  }

  ${({ theme }) => theme.bp.lg} {
    color: inherit;
    .bg { display: none; }
    &::before {
      content: "";
      position: absolute;
      width: 720px; height: 720px;
      right: -260px; top: -220px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(236,148,83,.28), rgba(111,62,144,.10) 55%, transparent 70%);
      pointer-events: none;
    }
  }
`;

const Grid = styled(Container)`
  position: relative;
  z-index: 1;
  display: grid;
  align-content: end;
  padding-top: 96px;
  padding-bottom: 28px;

  ${({ theme }) => theme.bp.lg} {
    align-content: center;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 56px;
    align-items: center;
    padding-top: 96px;
    padding-bottom: 40px;
  }
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px 7px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,.14);
  border: 1px solid rgba(255,255,255,.28);
  backdrop-filter: blur(8px);
  font-size: 12.5px;
  font-weight: 500;
  i {
    width: 8px; height: 8px; border-radius: 50%;
    background: #2BC48A;
    box-shadow: 0 0 0 4px rgba(43,196,138,.25);
  }
  ${({ theme }) => theme.bp.lg} {
    background: #fff;
    border-color: ${({ theme }) => theme.colors.line};
    box-shadow: ${({ theme }) => theme.shadow.sm};
    color: ${({ theme }) => theme.colors.purple};
  }
`;

const H1 = styled.h1`
  margin-top: 16px;
  font-size: clamp(32px, 9vw, 44px);
  line-height: 1.08;
  font-weight: 700;
  letter-spacing: -0.03em;
  span {
    background: linear-gradient(90deg, #F6B07C, #E7A3C0);
    -webkit-background-clip: text; background-clip: text; color: transparent;
  }
  ${({ theme }) => theme.bp.lg} {
    font-size: clamp(42px, 4.4vw, 62px);
    color: ${({ theme }) => theme.colors.ink};
    span { background: ${({ theme }) => theme.gradient}; -webkit-background-clip: text; background-clip: text; }
  }
  ${({ theme }) => theme.bp.short} { font-size: clamp(28px, 7.6vw, 48px); }
`;

const Sub = styled.p`
  margin-top: 14px;
  font-size: 15px;
  line-height: 1.55;
  max-width: 560px;
  color: rgba(255,255,255,.85);
  strong { color: #fff; font-weight: 700; }
  ${({ theme }) => theme.bp.lg} {
    margin-top: 20px;
    font-size: clamp(16px, 1.3vw, 18px);
    color: ${({ theme }) => theme.colors.muted};
    strong { color: ${({ theme }) => theme.colors.ink}; }
  }
`;

const Ctas = styled.div`
  margin-top: 22px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  a { min-width: 0; padding: 0 10px; font-size: 14.5px; gap: 8px; }
  ${({ theme }) => theme.bp.sm} { display: flex; a { padding: 0 24px; } }
  ${({ theme }) => theme.bp.lg} { margin-top: 30px; gap: 12px; a { font-size: 16px; } }
`;

const Ghost = styled(ButtonGhost)`
  color: #fff;
  background: rgba(255,255,255,.12);
  border-color: rgba(255,255,255,.35);
  ${({ theme }) => theme.bp.lg} {
    color: ${({ theme }) => theme.colors.purple};
    background: #fff;
    border-color: ${({ theme }) => theme.colors.line};
  }
`;

const Social = styled.div`
  display: none;
  ${({ theme }) => theme.bp.lg} {
    margin-top: 26px;
    display: flex;
    align-items: center;
    gap: 16px;
    span { font-size: 14px; color: ${({ theme }) => theme.colors.muted}; }
  }
`;

const Points = styled.ul`
  margin-top: 18px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px 14px;
  font-size: 13px;
  color: rgba(255,255,255,.88);
  li { display: inline-flex; align-items: center; gap: 6px; }
  li::before { content: "✓"; color: #F6B07C; font-weight: 700; }
  ${({ theme }) => theme.bp.lg} { display: none; }
`;

const Visual = styled.div`
  display: none;
  ${({ theme }) => theme.bp.lg} {
    display: block;
    position: relative;
    justify-self: center;
    height: min(66svh, 600px);
    aspect-ratio: 4 / 5;
    max-width: 100%;
  }
`;

const PhotoFrame = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadow.lg};
  &::after {
    content: "";
    position: absolute; inset: 0;
    background: linear-gradient(180deg, transparent 55%, rgba(59,31,79,.45));
  }
`;

const Ring = styled.div`
  position: absolute;
  inset: -14px 18px 26px -14px;
  border-radius: 46px;
  background: ${({ theme }) => theme.gradient};
  opacity: 0.9;
  transform: rotate(-4deg);
  z-index: -1;
`;

const FloatCard = styled.div<{ $pos: string; $delay?: string }>`
  position: absolute;
  ${({ $pos }) => $pos};
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 11px 15px;
  border-radius: 18px;
  background: rgba(255,255,255,.96);
  box-shadow: ${({ theme }) => theme.shadow.md};
  animation: ${float} 5s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay ?? "0s"};
  z-index: 2;
  b { display: block; font-size: 14px; color: ${({ theme }) => theme.colors.ink}; line-height: 1.25; }
  small { font-size: 12px; color: ${({ theme }) => theme.colors.muted}; }
  .ic {
    width: 38px; height: 38px; border-radius: 12px;
    display: grid; place-items: center; color: #fff;
    background: ${({ theme }) => theme.gradient};
    svg { width: 19px; height: 19px; }
  }
  .ok { background: #2BC48A; }
`;

const Caption = styled.div`
  position: absolute;
  left: 24px; right: 24px; bottom: 22px;
  z-index: 2;
  color: #fff;
  b { display: block; font-size: 18px; }
  span { font-size: 14px; opacity: .85; }
`;

export function Hero() {
  return (
    <Wrap id="inicio">
      <div className="bg" aria-hidden>
        <Image
          src={asset("/img/atendente.webp")}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 18%" }}
        />
      </div>

      <Grid>
        <div>
          <Badge><i /> 100% comissionada · garantia de resultado</Badge>
          <H1>
            Transforme a sua clínica em uma <span>AI-First</span>, sem perder o toque humano
          </H1>
          <Sub>
            <strong>Inteligência artificial</strong> que atende, automatiza e organiza, com um <strong>humano dedicado à sua clínica</strong>.
            Mais vendas, mais retenção de pacientes e menos despesas. Nós só lucramos quando a sua clínica prospera.
          </Sub>
          <Ctas>
            <ButtonPrimary href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp aria-hidden /> Quero conhecer
            </ButtonPrimary>
            <Ghost href="#solucao">
              Como funciona <FiArrowDown aria-hidden />
            </Ghost>
          </Ctas>
          <Points>
            <li>100% comissionada</li>
            <li>Garantia de resultado</li>
            <li>IA + humano dedicado</li>
          </Points>
          <Social>
            <span>Siga a Keep Clin:</span>
            <SocialButtons />
          </Social>
        </div>

        <Visual>
          <Ring aria-hidden />
          <PhotoFrame>
            <Image
              src={asset("/img/atendente.webp")}
              alt="Especialista humana da Keep Clin sorrindo, usando headset, atendendo com apoio de inteligência artificial"
              fill
              priority
              sizes="(min-width: 1080px) 520px, 1px"
              style={{ objectFit: "cover", objectPosition: "center 20%" }}
            />
            <Caption>
              <b>Um humano dedicado à sua clínica</b>
              <span>A IA potencializa, nunca fica sozinha</span>
            </Caption>
          </PhotoFrame>
          <FloatCard $pos="top: 34px; left: -40px;">
            <span className="ic ok"><FiCheckCircle aria-hidden /></span>
            <div><b>IA responde em minutos</b><small>24h, 7 dias por semana</small></div>
          </FloatCard>
          <FloatCard $pos="top: 46%; right: -36px;" $delay="1.2s">
            <span className="ic"><FiBell aria-hidden /></span>
            <div><b>Consulta agendada</b><small>lead convertido</small></div>
          </FloatCard>
          <FloatCard $pos="bottom: 96px; left: -44px;" $delay="2.2s">
            <span className="ic"><FiCpu aria-hidden /></span>
            <div><b>Garantia de resultado</b><small>12 metas em contrato</small></div>
          </FloatCard>
        </Visual>
      </Grid>
    </Wrap>
  );
}
