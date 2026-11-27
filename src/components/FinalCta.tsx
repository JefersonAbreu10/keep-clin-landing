"use client";

import styled from "styled-components";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { Container, ButtonGhost, LogoMark } from "./ui";
import { site, whatsappUrl } from "@/config/site";

const Box = styled.div`
  position: relative;
  overflow: hidden;
  padding: 36px 20px;
  border-radius: 40px;
  background: ${({ theme }) => theme.gradient};
  color: #fff;
  text-align: center;
  ${({ theme }) => theme.bp.md} { padding: 80px 48px; }
  &::before, &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,.12);
  }
  &::before { width: 320px; height: 320px; left: -100px; top: -120px; }
  &::after { width: 420px; height: 420px; right: -160px; bottom: -200px; }
  > * { position: relative; z-index: 1; }
  h2 { margin-top: 14px; font-size: clamp(28px, 4.6vw, 48px); line-height: 1.12; letter-spacing: -0.02em; }
  p { margin: 16px auto 0; max-width: 600px; font-size: clamp(16px, 1.8vw, 18px); opacity: .9; }
`;

const Btns = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: center;
  ${({ theme }) => theme.bp.sm} { flex-direction: row; }
`;

const WhiteBtn = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 54px;
  padding: 0 28px;
  border-radius: 999px;
  background: #fff;
  color: ${({ theme }) => theme.colors.purple};
  font-weight: 700;
  box-shadow: 0 14px 30px rgba(36,21,47,.25);
  transition: transform .2s ease;
  svg { width: 22px; height: 22px; color: #25D366; }
  @media (hover: hover) { &:hover { transform: translateY(-2px); } }
  &:active { transform: scale(0.97); }
`;

const Wrap = styled.section`
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 72px 0 16px;
`;

export function FinalCta() {
  return (
    <Wrap id="contato" aria-labelledby="cta-titulo">
      <Container>
        <Box>
          <LogoMark $size={64} aria-hidden style={{ background: "rgba(255,255,255,.18)", boxShadow: "none" }}>K</LogoMark>
          <h2 id="cta-titulo">Pronto para ter uma clínica AI-First, com cuidado humano?</h2>
          <p>IA e duas humanas dedicadas à sua clínica, 100% comissionado e com garantia de resultado. Nós lucramos quando a sua clínica prospera.</p>
          <Btns>
            <WhiteBtn href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp aria-hidden /> Falar no WhatsApp
            </WhiteBtn>
            <ButtonGhost $light href={site.links.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram aria-hidden /> {site.instagramHandle}
            </ButtonGhost>
          </Btns>
        </Box>
      </Container>
    </Wrap>
  );
}
