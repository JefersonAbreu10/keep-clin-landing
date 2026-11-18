"use client";

import styled, { css } from "styled-components";
import { FaWhatsapp, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { site, whatsappUrl } from "@/config/site";

const items = [
  { key: "whatsapp", label: "Falar no WhatsApp", href: whatsappUrl(), Icon: FaWhatsapp, bg: "#25D366" },
  { key: "instagram", label: "Instagram da Keep Clin", href: site.links.instagram, Icon: FaInstagram,
    bg: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fd5949 45%, #d6249f 60%, #285AEB 90%)" },
  { key: "linkedin", label: "LinkedIn da Keep Clin", href: site.links.linkedin, Icon: FaLinkedinIn, bg: "#0A66C2" },
] as const;

const Row = styled.ul`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const Btn = styled.a<{ $bg: string; $variant: "brand" | "glass" }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 16px;
  color: #fff;
  transition: transform 0.25s cubic-bezier(.2,.8,.2,1.4), box-shadow 0.25s ease, background 0.25s ease;
  svg { width: 22px; height: 22px; }

  ${({ $variant, $bg }) =>
    $variant === "brand"
      ? css`
          background: ${$bg};
          box-shadow: 0 10px 22px rgba(36, 21, 47, 0.18);
        `
      : css`
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
          backdrop-filter: blur(8px);
          @media (hover: hover) { &:hover { background: ${$bg}; border-color: transparent; } }
        `}

  @media (hover: hover) { &:hover { transform: translateY(-4px) scale(1.06); box-shadow: 0 16px 30px rgba(36, 21, 47, 0.28); } }
  &:active { transform: scale(0.92); }
`;

export function SocialButtons({ variant = "brand" }: { variant?: "brand" | "glass" }) {
  return (
    <Row>
      {items.map(({ key, label, href, Icon, bg }) => (
        <li key={key}>
          <Btn href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} $bg={bg} $variant={variant}>
            <Icon aria-hidden />
          </Btn>
        </li>
      ))}
    </Row>
  );
}
