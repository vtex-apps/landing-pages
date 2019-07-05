import React, { FunctionComponent } from 'react'

import { questions } from './FAQData'
import QuestionCard from '../CodeCup/QuestionCard'

const FAQ: FunctionComponent = () => (
  <section id="faq" className="pa8 bg-base c-on-base mt8">
    <p className="t-heading-1">F.A.Q</p>
    <p>
      Para saber mais sobre o TETRIX, o Desafio, confira as{' '}
      <a
        href="https://drive.google.com/file/d/1RUtzx23oaKNklXCMC_up-7ha2hV_grn-/view?usp=sharing"
        className="c-on-base"
      >
        Regras do Desafio
      </a>{' '}
      e as dúvidas frequentes antes de iniciar sua inscrição.
    </p>
    <div className="flex flex-column items-center">
      {questions.map(q => (
        <QuestionCard question={q.question} ans={q.ans} key={q.question} />
      ))}
    </div>
  </section>
)

export default FAQ
