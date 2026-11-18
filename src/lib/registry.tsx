"use client";

import { useState, type ReactNode } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager, ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { GlobalStyle } from "@/styles/GlobalStyle";

// Coleta o CSS do styled-components no servidor (App Router) para evitar "flash" sem estilo.
export default function StyledComponentsRegistry({ children }: { children: ReactNode }) {
  const [sheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = sheet.getStyleElement();
    sheet.instance.clearTag();
    return <>{styles}</>;
  });

  const content = (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );

  if (typeof window !== "undefined") return content;

  return <StyleSheetManager sheet={sheet.instance}>{content}</StyleSheetManager>;
}
