"use client";

import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  ${({ theme }) => theme.bp.md} { padding: 0 32px; }
`;

/* Cada seção ocupa uma tela inteira (100svh) e centraliza o conteúdo. */
export const Section = styled.section<{ $tone?: "light" | "soft" | "dark" }>`
  position: relative;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 72px 0 16px;
  @media (max-width: 819px) and (max-height: 640px) { padding: 68px 0 8px; }
  ${({ theme }) => theme.bp.md} { padding: 92px 0 32px; }
  ${({ theme }) => theme.bp.short} { ${({ theme }) => theme.bp.md} { padding: 80px 0 20px; } }
  ${({ $tone, theme }) =>
    $tone === "soft" &&
    css`background: ${theme.colors.soft};`}
  ${({ $tone, theme }) =>
    $tone === "dark" &&
    css`
      background: ${theme.colors.ink};
      color: rgba(255, 255, 255, 0.82);
    `}
`;

export const Eyebrow = styled.span<{ $light?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${({ theme, $light }) => ($light ? theme.colors.orange : theme.colors.purple)};
  &::before {
    content: "";
    width: 22px;
    height: 3px;
    border-radius: 3px;
    background: ${({ theme }) => theme.gradient};
  }
`;

export const H2 = styled.h2<{ $light?: boolean }>`
  margin-top: 10px;
  font-size: clamp(23px, 3.6vw, 42px);
  ${({ theme }) => theme.bp.short} { font-size: clamp(21px, 2.9vw, 34px); }
  line-height: 1.15;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme, $light }) => ($light ? theme.colors.white : theme.colors.ink)};
`;

export const Lead = styled.p<{ $light?: boolean }>`
  margin-top: 10px;
  font-size: clamp(14px, 1.4vw, 17px);
  line-height: 1.5;
  ${({ theme }) => theme.bp.short} { font-size: clamp(13px, 1.2vw, 15.5px); margin-top: 6px; }
  max-width: 640px;
  color: ${({ theme, $light }) => ($light ? "rgba(255,255,255,.75)" : theme.colors.muted)};
`;

export const GradText = styled.span`
  background: ${({ theme }) => theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const SectionHead = styled.div<{ $center?: boolean }>`
  margin-bottom: 16px;
  ${({ $center }) =>
    $center &&
    css`
      text-align: center;
      ${Lead} { margin-left: auto; margin-right: auto; }
    `}
  ${({ theme }) => theme.bp.md} { margin-bottom: 32px; }
  ${({ theme }) => theme.bp.short} { ${({ theme }) => theme.bp.md} { margin-bottom: 20px; } }
`;

const btnBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 50px;
  padding: 0 24px;
  border-radius: ${({ theme }) => theme.radius.pill};
  font-weight: 700;
  font-size: 16px;
  white-space: nowrap;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  svg { width: 20px; height: 20px; flex-shrink: 0; }
  @media (hover: hover) { &:hover { transform: translateY(-2px); } }
  &:active { transform: scale(0.97); }
`;

export const ButtonPrimary = styled.a`
  ${btnBase}
  color: #fff;
  background: ${({ theme }) => theme.gradient};
  box-shadow: 0 12px 28px rgba(111, 62, 144, 0.32);
  @media (hover: hover) { &:hover { box-shadow: 0 18px 36px rgba(111, 62, 144, 0.4); } }
`;

export const ButtonGhost = styled.a<{ $light?: boolean }>`
  ${btnBase}
  color: ${({ theme, $light }) => ($light ? "#fff" : theme.colors.purple)};
  background: ${({ $light }) => ($light ? "rgba(255,255,255,.1)" : "#fff")};
  border: 1.5px solid ${({ theme, $light }) => ($light ? "rgba(255,255,255,.35)" : theme.colors.line)};
  @media (hover: hover) { &:hover { border-color: ${({ theme }) => theme.colors.orange}; } }
`;

export const LogoMark = styled.span<{ $size?: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size = 40 }) => $size}px;
  height: ${({ $size = 40 }) => $size}px;
  border-radius: 28%;
  background: ${({ theme }) => theme.gradient};
  color: #fff;
  font-weight: 700;
  font-size: ${({ $size = 40 }) => Math.round($size * 0.56)}px;
  line-height: 1;
  box-shadow: 0 8px 18px rgba(111, 62, 144, 0.28);
  flex-shrink: 0;
`;

export const LogoText = styled.span<{ $light?: boolean }>`
  font-size: 21px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: ${({ theme, $light }) => ($light ? "#fff" : theme.colors.ink)};
  b { font-weight: 300; }
`;

export const Logo = ({ light = false, size = 40 }: { light?: boolean; size?: number }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }} aria-label="Keep Clin">
    <LogoMark $size={size} aria-hidden>K</LogoMark>
    <LogoText $light={light}>
      Keep <b>Clin</b>
    </LogoText>
  </span>
);
