import React, { FunctionComponent } from 'react'

import UpArrow from '../../images/setas_up@2x.png'
import QuestionCard from './QuestionCard'

import { questions } from './FAQData'

const FAQ: FunctionComponent = () => (
  <section id="faq" className="pt7 pb8 flex flex-column items-center">
    <div className="w-90 ml-auto-l mr0-l center">
      <h1 className="c-emphasis t-heading-1">regras e faq ::</h1>
      <p className="w-90">
        Para saber mais sobre o VTEX Code Cup, confira as{' '}
        <a className="link" href="/rules">
          Regras da Competição
        </a>{' '}
        e as dúvidas frequentes antes de iniciar sua inscrição.
      </p>
      <div className="flex flex-column items-center">
        {questions.map(q => (
          <QuestionCard question={q.question} ans={q.ans} />
        ))}
      </div>
    </div>
    <div className="flex items-center mt7">
      <img
        src={UpArrow}
        className="w-30"
        style={{ animation: 'bounce 3s infinite' }}
      />
    </div>
  </section>
)

export default FAQ
