"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; -webkit-text-size-adjust: 100%; -webkit-tap-highlight-color: transparent; }
  /* Celular: a rolagem encaixa no início de cada seção (tela cheia) */
  @media (max-width: 819px) {
    html { scroll-snap-type: y proximity; }
    main > section, #inicio, footer { scroll-snap-align: start; }
  }
  body {
    font-family: var(--font-poppins), system-ui, -apple-system, "Segoe UI", sans-serif;
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  img { display: block; max-width: 100%; }
  a { color: inherit; text-decoration: none; }
  button { font: inherit; cursor: pointer; border: 0; background: none; color: inherit; touch-action: manipulation; }
  a { touch-action: manipulation; }
  ul { list-style: none; }
  section { scroll-margin-top: 0; }
  :focus-visible { outline: 3px solid ${({ theme }) => theme.colors.orange}; outline-offset: 3px; border-radius: 6px; }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { animation: none !important; transition: none !important; }
  }
`;
