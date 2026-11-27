"use client";

import styled from "styled-components";
import {
  FiPhoneCall, FiCalendar, FiRepeat, FiSmartphone, FiTarget, FiHeart, FiBarChart2, FiActivity,
} from "react-icons/fi";
import { Container, Section, Eyebrow, H2, Lead, SectionHead } from "./ui";

const services = [
  { Icon: FiPhoneCall, title: "WhatsApp e Instagram", text: "Atendimento automatizado com IA e a humana de vendas assumindo quando importa." },
  { Icon: FiRepeat, title: "Processos e rotinas", text: "Cadastros, confirmações e rotinas automatizadas." },
  { Icon: FiSmartphone, title: "Aplicativo e CRM", text: "Criamos aplicativos, CRM e tecnologias para modernizar a clínica." },
  { Icon: FiCalendar, title: "Agenda e confirmações", text: "Agendamentos e lembretes para reduzir faltas." },
  { Icon: FiTarget, title: "Conversão de leads", text: "Etapa de vendas consultiva com o método SPIN para virar consulta." },
  { Icon: FiHeart, title: "Retenção e fidelização", text: "Identificamos riscos e trazemos o paciente de volta." },
  { Icon: FiBarChart2, title: "Indicadores em tempo real", text: "Informações centralizadas e metas acompanhadas." },
  { Icon: FiActivity, title: "Estratégia e planos de ação", text: "Soluções pensadas para aumentar os lucros." },
];

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 10px;
  ${({ theme }) => theme.bp.md} { gap: 14px; }
  ${({ theme }) => theme.bp.lg} { grid-template-columns: repeat(4, 1fr); gap: 16px; }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 11px 11px;
  border-radius: 16px;
  background: rgba(255,255,255,.05);
  border: 1px solid rgba(255,255,255,.1);
  transition: background 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
  @media (hover: hover) { &:hover { background: rgba(255,255,255,.08); border-color: rgba(236,148,83,.5); transform: translateY(-4px); } }
  .ic {
    width: 36px; height: 36px; border-radius: 12px;
    display: grid; place-items: center; color: #fff;
    background: ${({ theme }) => theme.gradient};
    svg { width: 18px; height: 18px; }
  }
  .ic { flex-shrink: 0; }
  h3 { min-width: 0; font-size: 13.5px; color: #fff; line-height: 1.25; overflow-wrap: anywhere; }
  p { display: none; font-size: 12px; line-height: 1.4; color: rgba(255,255,255,.65); }

  ${({ theme }) => theme.bp.md} {
    display: block;
    padding: 22px 20px;
    p { display: block; }
    border-radius: ${({ theme }) => theme.radius.md};
    .ic { width: 46px; height: 46px; border-radius: 15px; svg { width: 21px; height: 21px; } }
    h3 { margin-top: 16px; font-size: 17px; }
    p { margin-top: 6px; font-size: 14.5px; }
  }
  ${({ theme }) => theme.bp.short} {
    ${({ theme }) => theme.bp.md} { padding: 16px 18px; .ic { width: 40px; height: 40px; } h3 { margin-top: 10px; font-size: 16px; } p { font-size: 13.5px; } }
  }
`;

export function Services() {
  return (
    <Section id="servicos" $tone="dark" aria-labelledby="servicos-titulo">
      <Container>
        <SectionHead>
          <Eyebrow $light>Serviços</Eyebrow>
          <H2 id="servicos-titulo" $light>Tecnologia e estratégia para a sua clínica</H2>
          <Lead $light>Automatizamos processos, criamos as ferramentas e cuidamos da venda e da retenção dos seus pacientes.</Lead>
        </SectionHead>
        <Grid>
          {services.map(({ Icon, title, text }) => (
            <Item key={title}>
              <span className="ic"><Icon aria-hidden /></span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
