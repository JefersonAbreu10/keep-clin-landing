export const theme = {
  colors: {
    orange: "#EC9453",
    pink: "#BA726C",
    purple: "#6F3E90",
    purpleDark: "#3B1F4F",
    ink: "#24152F",
    text: "#4A3A55",
    muted: "#7D6D88",
    bg: "#FFFAF6",
    soft: "#F7EEE9",
    line: "#EADDD7",
    white: "#FFFFFF",
  },
  gradient: "linear-gradient(135deg, #EC9453 0%, #BA726C 50%, #6F3E90 100%)",
  gradientSoft:
    "linear-gradient(135deg, rgba(236,148,83,.14) 0%, rgba(186,114,108,.12) 50%, rgba(111,62,144,.14) 100%)",
  radius: { sm: "12px", md: "20px", lg: "32px", pill: "999px" },
  shadow: {
    sm: "0 4px 14px rgba(59, 31, 79, .08)",
    md: "0 18px 40px rgba(59, 31, 79, .12)",
    lg: "0 30px 70px rgba(59, 31, 79, .20)",
  },
  bp: {
    sm: "@media (min-width: 560px)",
    md: "@media (min-width: 820px)",
    lg: "@media (min-width: 1080px)",
    xl: "@media (min-width: 1320px)",
    short: "@media (max-height: 720px)",
    phoneShort: "@media (max-width: 819px) and (max-height: 760px)",
  },
} as const;

export type AppTheme = typeof theme;
