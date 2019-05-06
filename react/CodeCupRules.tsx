import React, { Fragment } from 'react'
import { Helmet } from 'vtex.render-runtime'

import favicon from './images/favicon.png'
import Logo from './images/logo_codecup_02@2x.png'
import Footer from './components/CodeCup/Footer'

const CodeCupRules = () => (
  <Fragment>
    <Helmet>
      <title>VTEX Code Cup - Regras</title>
      <meta name="description" content="Coding competition from VTEX" />
      <meta name="theme-color" content="#F71963" />
      <link rel="icon" href={favicon} />
    </Helmet>
    <main className="w-100 bg-white">
      <article className="w-90 w-75-l center pa9 lh-copy">
        <img src={Logo} className="h4-l" alt="VTEX Code Cup" />
        <h1 className="t-heading-1 c-emphasis">Regras</h1>
        <p>
          O VTEX Code Cup consiste em dois (2) rounds: <strong>Round 1</strong>{' '}
          e <strong>Round Final</strong>. O Round 1 será conduzido online. O
          Round Final será presencial no escritório da VTEX no Rio de Janeiro,
          Brasil.
        </p>
        <p>
          <strong>Round 1</strong>. O Round 1 do VTEX Code Cup Round será
          conduzido online. Você irá avançar para o Round Final ​se estiver
          entre os 10 primeiros colocados no ranking do contest do Round 1.
        </p>
        <p>
          <strong>Round Final</strong>. O Round Final do VTEX Code Cup
          acontecerá em um Sábado no dia 08 de Junho de 2019 no escritório da
          VTEX no Rio de Janeiro, Brasil.
        </p>
        <p>
          Durante o Round Final, você irá resolver problemas usando somente
          equipamento provisionado pela VTEX e outros materiais. Você poderá
          escolher usar o seu próprio teclado ou material com a permissão da
          VTEX.
        </p>
        <p>
          <strong>Notificações:</strong> Os critérios de qualificação e o
          ranking de cada Round estará disponível no site oficial do VTEX Code
          Cup. Após o scoreboard estiver finalizado, você irá receber um alerta
          no seu email caso esteja qualificado para competir no próximo Round.
        </p>
        <h2 className="t-heading-2 c-emphasis">Prêmios</h2>
        <p>
          VTEX Code Cup T-Shirt. Você estará eleito a receber (1) t-shirt se
          pertencer aos <strong>20%</strong> dos melhores colocados do ranking
          no Round 1.
        </p>
        <p>
          1) O primeiro colocado no ranking geral ​será o vencedor do VTEX Code
          Cup e como prêmio ganhará u​ma{' '}
          <strong>
            viagem à Rússia com passagem e hospedagem paga sem acompanhantes
            ​por 5 dias para acompanhar a final mundial ACM-ICPC em 2020.
          </strong>
        </p>
        <p>
          Caso a organização do ACM não autorize acompanhar a final da ICPC ​ou
          o vencedor​ já esteja classificado para a final do ICPC em 2020​,
          poderá solicitar a troca do prêmio por uma participação no{' '}
          <strong>​Moscow Pre-Finals Workshop ICPC 2020​</strong>.
        </p>
        <p>
          2) ​O segundo colocado no ranking geral ​receberá um ​Fone De Ouvido
          <strong>Bose Quietcomfort 35 Ii Wls 789564-0010</strong> Preto.
        </p>
        <p>
          3) O terceiro colocado no ranking geral ​receberá um ​
          <strong>Kindle Paperwhite</strong>.
        </p>
        <h2 className="t-heading-2 c-emphasis">Residência no Brasil</h2>
        <p>
          O evento é destinado somente a <strong>residentes brasileiros</strong>
          . Não serão aceitos brasileiros residindo fora do país ou que estejam
          em viagem internacional durante o Round Final.
        </p>
        <h2 className="t-heading-2 c-emphasis">Idade Mínima</h2>
        <p>
          Você entende e concorda que precisa ter a Idade Mínima para competir
          presencialmente o Round Final. Se a sua idade não se enquadrar na
          Idade Mínima, você apenas será elegível para ganhar a camiseta da
          competição. Como {'Idade Mínima'} se entende por{' '}
          <strong>18 anos de idade</strong> no seu país de residência.
        </p>
        <h2 className="t-heading-2 c-emphasis">Inscrições</h2>
        <p>
          Inscrições vão do período de{' '}
          <strong>
            03 de maio de 2019 a 10 de maio de 2019, até as 21h00 GMT-3
          </strong>
          , para participar da primeira fase (online) da VTEX Code Cup.
        </p>
        <p>
          O Round 1 irá acontecer no dia{' '}
          <strong>11 de maio de 2019, às 13h00 GMT-3</strong> e terá duração
          máxima de 3h30min.
        </p>
        <p>
          O Round Final irá acontecer na tarde do dia{' '}
          <strong>08 de junho de 2019</strong>. Os detalhes desse Round serão
          divulgados em breve.
        </p>
        <h2 className="t-heading-2 c-emphasis">Desqualificação</h2>
        <p>
          <strong>Round 1.</strong> Você será desqualificado no Round 1 se:
        </p>
        <p>
          (A) Usar ou compartilhar informação sobre os problemas com outras
          pessoas (competidores ou não) durante o contest do Round 1.
        </p>
        <p>
          (B) Compartilhar o seu código com outra pessoa (competidores ou ​não)
          durante o contest do Round 1.
        </p>
        <p>(C) Outra pessoa solucionar o problema para você.</p>
        <p>
          <strong>Round Final.</strong> Caso você seja desqualificado no Round
          Final do VTEX Code Cup, a VTEX irá selecionar o próximo competidor com
          a pontuação mais alta no ranking após você.
        </p>
        <p>
          Você será considerado desqualificado no Round Final se preencher as
          condições abaixo:
        </p>
        <p>
          (A) Você não foi capaz de reservar o seu vôo com a VTEX ou agente de
          viagem designado com 4 semanas de antecedência após receber o e-mail
          para participar do Round Final.
        </p>
        <p>
          (B) Você não foi capaz de responder os emails de confirmação do vôo
          com 48 horas de antecedência com a VTEX ou agente de viagem designado
          que enviou o email.
        </p>
        <p>
          (C) Você falou em prover toda a documentação e informação relacionada
          ao seu vôo requisitado pela VTEX com quatro (4) semana antes do Round
          final, ou
        </p>
        <p>
          (D) Você não foi capaz de completar o Round Final ou ficou
          impossibilitado de concluir (exemplo: chegou atrasado).
        </p>
        <h2 className="t-heading-2 c-emphasis">Participação no Round Final</h2>
        <p>
          1. Você deve chegar na localização do Round Final com{' '}
          <strong>pelo menos (1) dia de antecedência</strong> para evitar
          atrasos ou possibilidades de desqualificação.
        </p>
        <p>2. Prêmios devem ser recebidos.</p>
        <p>
          3. Todos os eventos relacionados ao Round Final são apenas para
          competidores, se você não registrar convidados com antecedência eles
          não poderão assistir ao evento. A VTEX não se responsabilizará por
          qualquer custos que envolvam convidados ou terceiros.
        </p>
        <h2 className="t-heading-2 c-emphasis">
          Reembolso de despesas de viagem
        </h2>
        <p>
          Como finalista, a VTEX vai custear as despesas da sua viagem de ida e
          volta ao Rio de Janeiro relacionadas ao Round Final do VTEX Code Cuo.
          ​Você é responsável por todas as outras despesas.
        </p>
        <p>
          <strong>Vôo:</strong> ​Como finalista, você receberá transporte aéreo
          de ida e volta em classe econômica no aeroporto mais próximo de sua
          residência em um vôo selecionado pela VTEX ou seu agente designado.
        </p>
        <p>
          <strong>Acomodações:</strong> ​Como finalista, você receberá
          acomodações de hotel para uma (1) pessoa em um hotel da VTEX ou a
          escolha de seu agente designado para a duração da sua estadia.
        </p>
        <p>
          <strong>Alimentação:</strong> ​Como finalista, a VTEX reembolsará você
          pelo custo de suas refeições até R$100,00 por dia durante a sua
          estadia, conforme aprovado pela VTEX, e seus dias de viagem de e para
          a localização do Round Final.
        </p>
      </article>
    </main>
    <Footer />
  </Fragment>
)

export default CodeCupRules
