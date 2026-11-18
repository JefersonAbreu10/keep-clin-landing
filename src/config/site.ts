// Edite aqui os contatos e links da Keep Clin.
// O número do WhatsApp vai só com dígitos: código do país + DDD + número.

export const site = {
  name: "Keep Clin",
  slogan: "Atendimento humano potencializado com inteligência artificial",
  instagramHandle: "@keep.clin.ai",
  email: "keep.clin.ai@gmail.com",
  whatsappNumber: "5585985398589",
  whatsappMessage: "Olá! Vim pelo site da Keep Clin e quero saber mais sobre a atendente com IA.",
  links: {
    instagram: "https://www.instagram.com/keep.clin.ai/",
    linkedin: "https://www.linkedin.com/in/", // completar com o final do perfil (ex.: https://www.linkedin.com/in/keep-clin)
  },
} as const;

export const whatsappUrl = (msg: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(msg)}`;
