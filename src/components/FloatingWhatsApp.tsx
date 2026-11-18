"use client";

import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaWhatsapp } from "react-icons/fa6";
import { whatsappUrl } from "@/config/site";

const pulse = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(37,211,102,.55); }
  70% { box-shadow: 0 0 0 16px rgba(37,211,102,0); }
  100% { box-shadow: 0 0 0 0 rgba(37,211,102,0); }
`;

const Btn = styled.a<{ $hidden: boolean }>`
  position: fixed;
  right: 14px;
  bottom: calc(14px + env(safe-area-inset-bottom, 0px));
  z-index: 60;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: #25D366;
  color: #fff;
  box-shadow: 0 10px 24px rgba(37, 211, 102, 0.35);
  animation: ${pulse} 2.4s infinite;
  transition: transform 0.25s ease, opacity 0.25s ease;
  opacity: ${({ $hidden }) => ($hidden ? 0 : 1)};
  transform: scale(${({ $hidden }) => ($hidden ? 0.6 : 1)});
  pointer-events: ${({ $hidden }) => ($hidden ? "none" : "auto")};
  svg { width: 30px; height: 30px; }
  &:active { transform: scale(0.92); }
  ${({ theme }) => theme.bp.md} { right: 28px; bottom: 28px; width: 64px; height: 64px; svg { width: 32px; height: 32px; } }
`;

// Some quando o topo ou a chamada final (que já têm botão de WhatsApp) estão na tela.
export function FloatingWhatsApp() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const targets = ["inicio", "contato"].map((id) => document.getElementById(id)).filter(Boolean) as Element[];
    const visible = new Set<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
        setHidden(visible.size > 0);
      },
      { threshold: 0.35 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <Btn
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Keep Clin no WhatsApp"
      $hidden={hidden}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
    >
      <FaWhatsapp aria-hidden />
    </Btn>
  );
}
