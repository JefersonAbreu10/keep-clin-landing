"use client";

import styled from "styled-components";
import {
  FiMessageCircle, FiRepeat, FiTarget, FiShield, FiHeart, FiClock,
  FiTrendingUp, FiTrendingDown, FiStar, FiArrowRight,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { whatsappUrl, asset } from "@/config/site";

const grad = "linear-gradient(135deg,#EC9453,#BA726C 55%,#6F3E90)";

const Wrap = styled.div`
  width: 100%;
  margin-top: 44px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const Section = styled.section`
  padding: 24px 20px;
  border-radius: 24px;
  background: rgba(10, 4, 16, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
`;

const Step = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #f2a266;
  i {
    font-style: normal;
    width: 24px;
    height: 24px;
    border-radius: 8px;
    display: grid;
    place-items: center;
    background: ${grad};
    color: #fff;
    letter-spacing: 0;
  }
`;

const H2 = styled.h2`
  margin-top: 10px;
  font-size: 22px;
  line-height: 1.25;
  font-weight: 700;
  em { font-style: normal; color: #f2a266; }
`;

const P = styled.p`
  margin-top: 10px;
  font-size: 15px;
  line-height: 1.6;
  color: #e3d6ec;
  b { color: #fff; }
`;

const Grid = styled.div<{ $cols?: number }>`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(${({ $cols = 2 }) => $cols}, 1fr);
  gap: 10px;
`;

const Tile = styled.div`
  padding: 14px 12px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  svg { width: 20px; height: 20px; flex-shrink: 0; color: #f2a266; }
`;

const Row = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 12px;
  align-items: flex-start;
  padding: 14px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const Badge = styled.span<{ $bg?: string }>`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  flex-shrink: 0;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 18px;
  background: ${({ $bg }) => $bg ?? grad};
  svg { width: 20px; height: 20px; }
`;

const RowTxt = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: #cdbfd8;
  b { display: block; font-size: 15px; color: #fff; }
  q { color: #fff; }
`;

const Pills = styled.div`
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  span {
    font-size: 13px;
    font-weight: 600;
    padding: 7px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.16);
  }
`;

const Flow = styled.div`
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 6px;
  div {
    flex: 1;
    text-align: center;
    padding: 12px 6px;
    border-radius: 14px;
    font-size: 14px;
    font-weight: 700;
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.14);
    small { display: block; font-size: 11px; color: #f2a266; font-weight: 700; }
  }
  div.hi { background: ${grad}; border-color: transparent; small { color: #fff; } }
  svg { flex-shrink: 0; color: #cdbfd8; }
`;

const Metric = styled.div`
  padding: 12px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  b { display: block; font-size: 14px; }
  span { display: block; margin-top: 2px; font-size: 12px; line-height: 1.35; color: #cdbfd8; }
`;

const Stamp = styled.div`
  margin: 18px auto 0;
  width: fit-content;
  padding: 8px 18px;
  border: 3px solid #f2a266;
  border-radius: 12px;
  color: #f2a266;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 14px;
  transform: rotate(-4deg);
`;

const Dot = styled.i<{ $c: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  background: ${({ $c }) => $c};
  box-shadow: 0 0 18px ${({ $c }) => $c};
`;

const Phones = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: center;
  gap: 10px;
  img { width: 46%; max-width: 190px; height: auto; filter: drop-shadow(0 18px 30px rgba(0,0,0,.45)); }
`;

const Result = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 15px;
  font-weight: 600;
  em { font-style: normal; font-weight: 700; color: #9be7c4; }
`;

const Cta = styled.a`
  margin-top: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px;
  border-radius: 999px;
  background: #25d366;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  box-shadow: 0 14px 30px rgba(37, 211, 102, 0.3);
  svg { width: 22px; height: 22px; }
  &:active { transform: scale(0.98); }
`;

const S = ({ n, t }: { n: number; t: string }) => (
  <Step><i>{n}</i>{t}</Step>
);

const tarefas = [
  { I: FiMessageCircle, t: "Atendimento" },
  { I: FiRepeat, t: "Follow-up" },
  { I: FiTarget, t: "Conversão de leads" },
  { I: FiShield, t: "Retenção" },
  { I: FiHeart, t: "Fidelização" },
];

const spin = [
  ["S", "Situação", "O que te motivou a nos procurar?", "descobre o motivo"],
  ["P", "Problema", "Qual é sua principal preocupação?", "descobre a dor"],
  ["I", "Implicação", "Como isso afeta sua rotina?", "descobre a urgência"],
  ["N", "Necessidade", "Qual resultado você espera?", "descobre o objetivo"],
];

const metricas = [
  ["FRT", "quanto tempo leva para responder"],
  ["SLA", "se os prazos foram cumpridos"],
  ["TMA", "quanto dura cada atendimento"],
  ["FCR", "resolveu no primeiro contato"],
  ["Conversão", "conversas que viram consulta"],
  ["Show rate", "pacientes que compareceram"],
  ["No-show", "pacientes que faltaram"],
  ["Ocupação", "quanto da agenda foi preenchida"],
  ["CSAT", "satisfação do paciente"],
  ["NPS", "se indicaria a clínica"],
  ["Retorno", "pacientes que voltam"],
  ["Reclamações", "o que precisa melhorar"],
];

const farol = [
  ["#2BC48A", "Verde · Satisfeito", "Manter o relacionamento."],
  ["#F5C04A", "Amarelo · Neutro", "Não reclama, mas também não se encanta. Ação: encantar."],
  ["#E5484D", "Vermelho · Se afastando", "Ação: retomar o contato e reagendar."],
  ["#7A1F3D", "Crítico · Risco de não voltar", "Ação: contato prioritário."],
];

export function KeepInfo() {
  return (
    <Wrap>
      <Section>
        <S n={1} t="O que é" />
        <H2>Clínica <em>AI-First</em>, com cuidado humano</H2>
        <P>
          A Keep Clin transforma a sua clínica em uma <b>AI-First</b> sem perder a experiência humanizada.
          Um <b>humano dedicado</b> atua com a IA, o modelo é <b>100% comissionado</b> e damos <b>garantia de resultado</b>.
        </P>
      </Section>

      <Section>
        <S n={2} t="O que ela faz" />
        <H2>Do primeiro contato até o paciente <em>voltar</em></H2>
        <P>Responde em minutos, acolhe cada lead, conduz a etapa de vendas, agenda, confirma e acompanha cada paciente.</P>
        <Grid $cols={2}>
          {tarefas.map(({ I, t }) => (
            <Tile key={t}><I aria-hidden />{t}</Tile>
          ))}
        </Grid>
        <Pills><span>+ e muito mais</span></Pills>
      </Section>

      <Section>
        <S n={3} t="Atendimento humanizado" />
        <H2>Cada paciente é <em>único</em></H2>
        <P>
          Cada paciente é analisado de forma individual. A <b>inteligência artificial potencializa</b> os resultados,
          mas sempre há uma pessoa cuidando.
        </P>
        <Row>
          <Badge><FiClock /></Badge>
          <RowTxt>
            <b>24 horas, 7 dias por semana</b>
            A IA garante a resposta rápida a qualquer hora, e a humana dedicada continua o atendimento com o toque humano.
          </RowTxt>
        </Row>
      </Section>

      <Section>
        <S n={4} t="Método SPIN" />
        <H2>Primeiro ela <em>entende</em>, depois apresenta a solução</H2>
        <P>Na etapa de vendas, usamos o método SPIN, quatro perguntas que revelam o que o paciente realmente precisa:</P>
        {spin.map(([l, n, q, d]) => (
          <Row key={l}>
            <Badge>{l}</Badge>
            <RowTxt><b>{n}</b><q>{q}</q> → {d}</RowTxt>
          </Row>
        ))}
      </Section>

      <Section>
        <S n={5} t="Construção de valor" />
        <H2>O paciente percebe valor <em>antes</em> de ouvir o preço</H2>
        <Flow>
          <div><small>1</small>Entender</div>
          <FiArrowRight aria-hidden />
          <div className="hi"><small>2</small>Solução</div>
          <FiArrowRight aria-hidden />
          <div><small>3</small>Preço</div>
        </Flow>
        <Pills>
          {["Exclusividade", "Autoridade", "Experiência", "Personalização", "Relacionamento"].map((p) => (
            <span key={p}>{p}</span>
          ))}
        </Pills>
      </Section>

      <Section>
        <S n={6} t="Metas em contrato" />
        <H2>Sua clínica <em>não é só mais uma</em></H2>
        <P>
          As metas ficam <b>definidas em contrato</b>, com 12 indicadores. É o nosso compromisso, por escrito.
          Cada número tem uma estratégia por trás, com técnicas de vendas e planos de ação.
        </P>
        <Grid $cols={2}>
          {metricas.map(([n, d]) => (
            <Metric key={n}><b>{n}</b><span>{d}</span></Metric>
          ))}
        </Grid>
        <Stamp>DEFINIDO EM CONTRATO</Stamp>
      </Section>

      <Section>
        <S n={7} t="Farol do paciente" />
        <H2>Cada cor, uma ação. <em>Meta: todos no verde.</em></H2>
        <P>Ela classifica cada paciente pela satisfação e age de forma diferente para cada um:</P>
        {farol.map(([c, t, a]) => (
          <Row key={t}>
            <Dot $c={c} aria-hidden />
            <RowTxt><b>{t}</b>{a}</RowTxt>
          </Row>
        ))}
      </Section>

      <Section>
        <S n={8} t="Aplicativo / CRM" />
        <H2>A clínica <em>na palma da sua mão</em></H2>
        <P>
          A Keep Clin automatiza as tarefas repetitivas com um CRM ou um aplicativo feito para a sua clínica.
          Você acompanha os indicadores e os atendimentos <b>em tempo real</b>, com tudo centralizado.
        </P>
        <Phones>
          <img src={asset("/img/app-inicio.webp")} alt="Tela inicial do aplicativo Keep Clin" />
          <img src={asset("/img/app-indicadores.webp")} alt="Tela de indicadores do aplicativo Keep Clin" />
        </Phones>
        <Pills>
          {["Indicadores", "Atendimentos em tempo real", "Receituário", "Financeiro", "Relatórios", "Contratos"].map((p) => (
            <span key={p}>{p}</span>
          ))}
        </Pills>
      </Section>

      <Section>
        <S n={9} t="Resultados" />
        <H2>Estratégia: dados, <em>com o cuidado de uma pessoa</em></H2>
        <Result>Tempo de resposta <em>em minutos</em></Result>
        <Result>Consultas agendadas <em>▲ mais</em></Result>
        <Result>Faltas <em>▼ menos</em></Result>
        <Result>Pacientes que voltam <em>▲ mais</em></Result>
        <Grid $cols={3}>
          <Tile style={{ flexDirection: "column" }}><FiTrendingDown aria-hidden />Despesas</Tile>
          <Tile style={{ flexDirection: "column" }}><FiTrendingUp aria-hidden />Lucro</Tile>
          <Tile style={{ flexDirection: "column" }}><FiStar aria-hidden />Qualidade</Tile>
        </Grid>
        <P style={{ textAlign: "center", marginTop: 16 }}>
          Nosso objetivo: <b>reduzir despesas desnecessárias, aumentar o lucro e melhorar a qualidade.</b>
        </P>
        <Cta href={whatsappUrl("Olá! Vi a página da Keep Clin e quero saber mais.")} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp aria-hidden /> Fale com a Keep Clin
        </Cta>
      </Section>
    </Wrap>
  );
}

