"use client";

import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { Container, Logo, ButtonPrimary } from "./ui";
import { SocialButtons } from "./SocialButtons";
import { whatsappUrl } from "@/config/site";

const nav = [
  { href: "#solucao", label: "Solução" },
  { href: "#servicos", label: "Serviços" },
  { href: "#metodo", label: "Método" },
  { href: "#metas", label: "Metas" },
  { href: "#aplicativo", label: "Aplicativo" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#faq", label: "Dúvidas" },
];

const Bar = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  transition: background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease;
  ${({ $scrolled }) =>
    $scrolled &&
    css`
      background: rgba(255, 250, 246, 0.86);
      backdrop-filter: blur(14px);
      box-shadow: 0 6px 24px rgba(59, 31, 79, 0.08);
    `}
`;

const Inner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  ${({ theme }) => theme.bp.md} { height: 76px; }
`;

const Nav = styled.nav`
  display: none;
  ${({ theme }) => theme.bp.lg} {
    display: flex;
    gap: 30px;
    a {
      font-size: 15px;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.text};
      position: relative;
      &::after {
        content: "";
        position: absolute;
        left: 0; right: 0; bottom: -6px;
        height: 2px;
        border-radius: 2px;
        background: ${({ theme }) => theme.gradient};
        transform: scaleX(0);
        transition: transform 0.25s ease;
      }
      &:hover::after { transform: scaleX(1); }
    }
  }
`;

const Cta = styled(ButtonPrimary)`
  display: none;
  min-height: 46px;
  padding: 0 22px;
  font-size: 15px;
  ${({ theme }) => theme.bp.md} { display: inline-flex; }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const MenuBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 14px;
  &:active { transform: scale(0.94); }
  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.line};
  color: ${({ theme }) => theme.colors.purple};
  svg { width: 22px; height: 22px; }
  ${({ theme }) => theme.bp.lg} { display: none; }
`;

const Drawer = styled.div<{ $open: boolean }>`
  position: fixed;
  inset: 64px 0 0 0;
  z-index: 49;
  overflow-y: auto;
  overscroll-behavior: contain;
  background: #FFFAF6;
  padding: 24px 20px 40px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transform: translateY(${({ $open }) => ($open ? "0" : "-12px")});
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
  transition: opacity 0.25s ease, transform 0.25s ease;
  a.link {
    display: flex;
    align-items: center;
    min-height: 56px;
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.ink};
    padding: 8px 4px;
    &:active { color: ${({ theme }) => theme.colors.purple}; }
    border-bottom: 1px solid ${({ theme }) => theme.colors.line};
  }
  ${({ theme }) => theme.bp.lg} { display: none; }
`;

const DrawerFoot = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 1080px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => { window.removeEventListener("keydown", onKey); mq.removeEventListener("change", onMq); };
  }, [open]);

  return (
    <>
    <Bar $scrolled={scrolled || open}>
      <Inner>
        <a href="#inicio" aria-label="Keep Clin, voltar ao início">
          <Logo />
        </a>
        <Nav aria-label="Principal">
          {nav.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </Nav>
        <Right>
          <Cta href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp aria-hidden /> Fale conosco
          </Cta>
          <MenuBtn onClick={() => setOpen((o) => !o)} aria-label={open ? "Fechar menu" : "Abrir menu"} aria-expanded={open}>
            {open ? <FiX /> : <FiMenu />}
          </MenuBtn>
        </Right>
      </Inner>
    </Bar>
      <Drawer $open={open} aria-hidden={!open}>
        {nav.map((n) => (
          <a className="link" key={n.href} href={n.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            {n.label}
          </a>
        ))}
        <DrawerFoot>
          <ButtonPrimary href={whatsappUrl()} target="_blank" rel="noopener noreferrer" tabIndex={open ? 0 : -1}>
            <FaWhatsapp aria-hidden /> Falar no WhatsApp
          </ButtonPrimary>
          <SocialButtons />
        </DrawerFoot>
      </Drawer>
    </>
  );
}
