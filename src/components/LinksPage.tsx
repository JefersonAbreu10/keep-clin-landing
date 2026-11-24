"use client";

import styled, { keyframes } from "styled-components";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { FiBriefcase, FiZap, FiShare2, FiChevronRight } from "react-icons/fi";
import { site, whatsappUrl, basePath } from "@/config/site";
import { KeepInfo } from "./KeepInfo";

// Edite aqui os destinos dos botões.
const links = [
  {
    key: "portfolio",
    label: "Portfólio",
    sub: "Conheça a Keep Clin e o que entregamos",
    href: `${basePath}/`,
    Icon: FiBriefcase,
    bg: "linear-gradient(135deg,#EC9453,#BA726C 55%,#6F3E90)",
  },
  {
    key: "whatsapp",
    label: "Fale no WhatsApp",
    sub: "Atendimento rápido com a nossa equipe",
    href: whatsappUrl("Olá! Vim pelo Instagram da Keep Clin e quero saber mais."),
    Icon: FaWhatsapp,
    bg: "#25D366",
  },
  {
    key: "testar",
    label: "Testar produtos",
    sub: "Experimente a Keep Clin na sua clínica",
    href: whatsappUrl("Olá! Vim pelo Instagram e quero testar os produtos da Keep Clin."),
    Icon: FiZap,
    bg: "#6F3E90",
  },
];

const rise = keyframes`from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}`;
const drift = keyframes`0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-20px)}`;

const Page = styled.main`
  min-height: 100svh;
  display: flex;
  justify-content: center;
  padding: 20px 16px 40px;
  background: #1d1027;
  color: #fff;
  font-family: var(--font-poppins), system-ui, sans-serif;
  position: relative;
  overflow: hidden;
`;

const Glow = styled.div<{ $c: string; $x: string; $y: string }>`
  position: absolute;
  width: 420px;
  height: 420px;
  border-radius: 50%;
  background: ${({ $c }) => $c};
  filter: blur(110px);
  opacity: 0.45;
  left: ${({ $x }) => $x};
  top: ${({ $y }) => $y};
  animation: ${drift} 14s ease-in-out infinite;
  pointer-events: none;
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 28px;
`;

const RoundBtn = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  color: #fff;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.16);
  cursor: pointer;
  svg { width: 20px; height: 20px; }
  &:active { transform: scale(0.92); }
`;

const Logo = styled.div<{ $size?: number }>`
  width: ${({ $size = 44 }) => $size}px;
  height: ${({ $size = 44 }) => $size}px;
  border-radius: ${({ $size = 44 }) => $size * 0.3}px;
  background: linear-gradient(135deg, #ec9453, #ba726c 55%, #6f3e90);
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: ${({ $size = 44 }) => $size * 0.55}px;
  box-shadow: 0 18px 40px rgba(111, 62, 144, 0.45);
`;

const Avatar = styled.div`
  padding: 5px;
  border-radius: 38px;
  background: rgba(255, 255, 255, 0.12);
  animation: ${rise} 0.6s ease both;
`;

const Name = styled.h1`
  margin-top: 18px;
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.5px;
  animation: ${rise} 0.6s 0.08s ease both;
  span { font-weight: 300; }
`;

const Bio = styled.p`
  margin-top: 8px;
  max-width: 360px;
  text-align: center;
  font-size: 15px;
  line-height: 1.5;
  color: #e3d6ec;
  animation: ${rise} 0.6s 0.14s ease both;
`;

const List = styled.ul`
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const LinkBtn = styled.a<{ $d: number }>`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px 12px 12px;
  border-radius: 18px;
  background: rgba(10, 4, 16, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  color: #fff;
  text-decoration: none;
  animation: ${rise} 0.6s ${({ $d }) => 0.2 + $d * 0.08}s ease both;
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  @media (hover: hover) {
    &:hover { transform: translateY(-3px); border-color: rgba(242, 162, 102, 0.6); background: rgba(10, 4, 16, 0.7); }
  }
  &:active { transform: scale(0.98); }
`;

const Ic = styled.span<{ $bg: string }>`
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 14px;
  display: grid;
  place-items: center;
  background: ${({ $bg }) => $bg};
  svg { width: 26px; height: 26px; }
`;

const Txt = styled.span`
  flex: 1;
  b { display: block; font-size: 17px; font-weight: 600; }
  small { display: block; font-size: 13px; color: #cdbfd8; margin-top: 2px; }
`;

const Social = styled.a`
  margin-top: 30px;
  color: #fff;
  opacity: 0.9;
  svg { width: 30px; height: 30px; }
`;

const Foot = styled.p`
  margin-top: 36px;
  font-size: 12px;
  color: #a998b8;
`;

export function LinksPage() {
  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title: "Keep Clin", url });
      else await navigator.clipboard.writeText(url);
    } catch {}
  };

  return (
    <Page>
      <Glow $c="#EC9453" $x="-160px" $y="-120px" />
      <Glow $c="#6F3E90" $x="55%" $y="35%" />
      <Card>
        <TopBar>
          <Logo $size={44} aria-hidden>K</Logo>
          <RoundBtn onClick={share} aria-label="Compartilhar">
            <FiShare2 />
          </RoundBtn>
        </TopBar>

        <Avatar>
          <Logo $size={112} aria-hidden>K</Logo>
        </Avatar>
        <Name>
          Keep <span>Clin</span>
        </Name>
        <Bio>Secretária humana 100% comissionada para clínicas. Mais consultas, menos faltas e pacientes fiéis.</Bio>

        <List>
          {links.map(({ key, label, sub, href, Icon, bg }, i) => (
            <li key={key}>
              <LinkBtn href={href} $d={i} target={key === "portfolio" ? undefined : "_blank"} rel="noopener noreferrer">
                <Ic $bg={bg}>
                  <Icon aria-hidden />
                </Ic>
                <Txt>
                  <b>{label}</b>
                  <small>{sub}</small>
                </Txt>
                <FiChevronRight aria-hidden />
              </LinkBtn>
            </li>
          ))}
        </List>

        <KeepInfo />

        <Social href={site.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram da Keep Clin">
          <FaInstagram />
        </Social>
        <Foot>{site.instagramHandle}</Foot>
      </Card>
    </Page>
  );
}
