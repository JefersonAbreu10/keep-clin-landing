// Edite aqui os contatos e links da Keep Clin.
// O número do WhatsApp vai só com dígitos: código do país + DDD + número.

export const site = {
  name: "Keep Clin",
  slogan: "Clínicas AI-First com experiência humanizada, 100% comissionado",
  instagramHandle: "@keep.clin.ai",
  email: "keep.clin.ai@gmail.com",
  whatsappNumber: "5585985398589",
  whatsappMessage: "Olá! Vim pelo site da Keep Clin e quero saber mais sobre como transformar a minha clínica em uma AI-First.",
  links: {
    instagram: "https://www.instagram.com/keep.clin.ai/",
    linkedin: "https://www.linkedin.com/in/", // completar com o final do perfil (ex.: https://www.linkedin.com/in/keep-clin)
  },
} as const;

export const whatsappUrl = (msg: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`;

// Caminho base do site. No GitHub Pages o site fica em /keep-clin-landing; localmente fica vazio.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export const asset = (path: string) => `${basePath}${path}`;
