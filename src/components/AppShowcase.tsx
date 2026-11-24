"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { asset } from "@/config/site";
import styled from "styled-components";
import { FiCheck } from "react-icons/fi";
import { Container, Section, Eyebrow, H2, Lead, GradText } from "./ui";

const modules = [
  "Agenda e confirmações",
  "WhatsApp e Instagram",
  "Indicadores em tempo real",
  "Receituário e contratos",
  "Financeiro e relatórios",
  "Módulos sob medida",
];

const chips = ["Agenda", "WhatsApp", "Indicadores", "Receituário", "Financeiro", "Contratos"];

const screens = [
  { src: asset("/img/app-inicio.webp"), alt: "Tela inicial do app Keep Clin com as consultas do dia", label: "Início" },
  { src: asset("/img/app-conversas.webp"), alt: "Tela de conversas do app Keep Clin com mensagens do WhatsApp e Instagram", label: "Conversas" },
  { src: asset("/img/app-indicadores.webp"), alt: "Tela de indicadores do app Keep Clin com gráfico e metas do mês", label: "Indicadores" },
];

const Grid = styled(Container)`
  display: grid;
  gap: 18px;
  align-items: center;
  ${({ theme }) => theme.bp.md} { grid-template-columns: 0.95fr 1.05fr; gap: 40px; }
`;

const Text = styled.div`
  text-align: center;
  ${Lead} { margin-left: auto; margin-right: auto; }
  ${({ theme }) => theme.bp.md} { text-align: left; ${Lead} { margin-left: 0; } }
`;

const List = styled.ul`
  display: none;
  ${({ theme }) => theme.bp.md} {
    margin-top: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 16px;
    li {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 15px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.ink};
    }
    svg {
      flex-shrink: 0;
      width: 22px; height: 22px; padding: 4px;
      border-radius: 50%;
      color: #fff;
      background: ${({ theme }) => theme.gradient};
    }
  }
`;

const Chips = styled.ul`
  margin-top: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 6px;
  li {
    font-size: 12.5px;
    font-weight: 500;
    padding: 6px 11px;
    border-radius: 999px;
    background: #fff;
    border: 1px solid ${({ theme }) => theme.colors.line};
    color: ${({ theme }) => theme.colors.ink};
  }
  ${({ theme }) => theme.bp.md} { display: none; }
  @media (max-width: 819px) and (max-height: 700px) { display: none; }
`;

/* Celular: carrossel lateral, cada aparelho na altura da tela. Desktop: três aparelhos sobrepostos. */
const Track = styled.ul`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  padding: 16px 20px 22px;
  margin: -12px -20px 0;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }

  ${({ theme }) => theme.bp.md} {
    overflow: visible;
    justify-content: center;
    align-items: center;
    gap: 0;
    margin: 0;
    padding: 0;
  }
`;

const Phone = styled.li`
  flex: 0 0 auto;
  scroll-snap-align: center;
  text-align: center;
  --h: clamp(240px, calc(100svh - 480px), 460px);
  &:first-child { margin-left: calc(50% - 20px - var(--h) * 0.244); }
  &:last-child { margin-right: calc(50% - 20px - var(--h) * 0.244); }
  .frame {
    position: relative;
    height: var(--h);
    aspect-ratio: 400 / 820;
    filter: drop-shadow(0 10px 14px rgba(59, 31, 79, 0.22));
  }
  span {
    display: inline-block;
    margin-top: 8px;
    font-size: 13px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.purple};
  }

  ${({ theme }) => theme.bp.md} {
    &:first-child, &:last-child { margin: 0; }
    span { display: none; }
    .frame {
      height: min(54svh, 500px, 38vw);
      filter: drop-shadow(0 24px 36px rgba(59, 31, 79, 0.28));
    }
    &:nth-child(1) { margin-right: -11%; transform: rotate(-6deg) translateY(16px); z-index: 1; }
    &:nth-child(2) { z-index: 2; .frame { height: min(64svh, 580px, 44vw); } }
    &:nth-child(3) { margin-left: -11%; transform: rotate(6deg) translateY(16px); z-index: 1; }
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0;
  margin-top: -4px;
  button {
    display: grid;
    place-items: center;
    width: 44px;
    height: 44px;
    &::after {
      content: "";
      width: 8px; height: 8px;
      border-radius: 8px;
      background: ${({ theme }) => theme.colors.line};
      transition: width .25s ease, background .25s ease;
    }
    &[aria-current="true"]::after { width: 24px; background: ${({ theme }) => theme.gradient}; }
  }
  ${({ theme }) => theme.bp.md} { display: none; }
`;

export function AppShowcase() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  // Marca qual tela está no centro do carrossel (celular)
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const items = Array.from(el.children) as HTMLElement[];
      const center = el.scrollLeft + el.clientWidth / 2;
      let best = 0, dist = Infinity;
      items.forEach((it, i) => {
        const d = Math.abs(it.offsetLeft + it.offsetWidth / 2 - center);
        if (d < dist) { dist = d; best = i; }
      });
      setActive(best);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    const el = trackRef.current;
    const it = el?.children[i] as HTMLElement | undefined;
    if (el && it) el.scrollTo({ left: it.offsetLeft - (el.clientWidth - it.offsetWidth) / 2, behavior: "smooth" });
  };

  return (
    <Section id="aplicativo" $tone="soft" aria-labelledby="app-titulo" style={{ overflow: "hidden" }}>
      <Grid>
        <Text>
          <Eyebrow>Aplicativo Keep Clin</Eyebrow>
          <H2 id="app-titulo">
            Sua clínica <GradText>na palma da mão</GradText>
          </H2>
          <Lead>Automatizamos o repetitivo com um CRM ou um aplicativo feito para a sua clínica, com indicadores e atendimentos em tempo real.</Lead>
          <List>
            {modules.map((m) => (
              <li key={m}><FiCheck aria-hidden /> {m}</li>
            ))}
          </List>
          <Chips>
            {chips.map((m) => <li key={m}>{m}</li>)}
          </Chips>
        </Text>

        <div>
          <Track ref={trackRef} aria-label="Telas do aplicativo Keep Clin (deslize para ver mais)" tabIndex={0}>
            {screens.map((s, i) => (
              <Phone key={s.src}>
                <div className="frame">
                  <Image src={s.src} alt={s.alt} fill sizes="(min-width: 820px) 290px, 50vw" style={{ objectFit: "contain" }} priority={i === 0} />
                </div>
                <span>{s.label}</span>
              </Phone>
            ))}
          </Track>
          <Dots role="group" aria-label="Escolher tela do aplicativo">
            {screens.map((s, i) => (
              <button key={s.label} aria-label={`Ver tela ${s.label}`} aria-current={active === i} onClick={() => goTo(i)} />
            ))}
          </Dots>
        </div>
      </Grid>
    </Section>
  );
}
