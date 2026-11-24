"use client";

import styled from "styled-components";
import { FiMail } from "react-icons/fi";
import { Container, Logo } from "./ui";
import { SocialButtons } from "./SocialButtons";
import { site } from "@/config/site";

const Foot = styled.footer`
  background: ${({ theme }) => theme.colors.ink};
  color: rgba(255,255,255,.7);
  padding: 64px 0 100px;
  ${({ theme }) => theme.bp.md} { padding-bottom: 28px; }
`;

const Grid = styled(Container)`
  display: grid;
  gap: 36px;
  ${({ theme }) => theme.bp.md} { grid-template-columns: 1.4fr 1fr 1fr; }
  h3 { color: #fff; font-size: 15px; margin-bottom: 14px; }
  p { font-size: 15px; max-width: 360px; margin-top: 16px; }
  ul.links { display: grid; gap: 2px; font-size: 15px; }
  ul.links a { display: inline-flex; align-items: center; min-height: 40px; }
  a:hover { color: ${({ theme }) => theme.colors.orange}; }
  .mail { display: inline-flex; align-items: center; gap: 8px; }
`;

const Bottom = styled(Container)`
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid rgba(255,255,255,.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 13px;
  ${({ theme }) => theme.bp.md} { flex-direction: row; justify-content: space-between; }
`;

export function Footer() {
  return (
    <Foot>
      <Grid>
        <div>
          <Logo light />
          <p>{site.slogan}. Especialista em vendas e sucesso do cliente, com metas em contrato e um aplicativo feito para a sua clínica.</p>
        </div>
        <nav aria-label="Rodapé">
          <h3>Navegação</h3>
          <ul className="links">
            <li><a href="#solucao">Solução</a></li>
            <li><a href="#metodo">Método de vendas</a></li>
            <li><a href="#metas">Metas em contrato</a></li>
            <li><a href="#farol">Farol do paciente</a></li>
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#aplicativo">Aplicativo</a></li>
            <li><a href="#como-funciona">Como funciona</a></li>
            <li><a href="#faq">Dúvidas</a></li>
          </ul>
        </nav>
        <div>
          <h3>Contato</h3>
          <ul className="links" style={{ marginBottom: 18 }}>
            <li><a className="mail" href={`mailto:${site.email}`}><FiMail aria-hidden /> {site.email}</a></li>
            <li>Instagram: {site.instagramHandle}</li>
          </ul>
          <SocialButtons variant="glass" />
        </div>
      </Grid>
      <Bottom>
        <span>© {new Date().getFullYear()} Keep Clin. Todos os direitos reservados.</span>
        <span>Crescemos junto com o seu sucesso</span>
      </Bottom>
    </Foot>
  );
}
