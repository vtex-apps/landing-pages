import React, { FunctionComponent } from 'react'

import UpArrow from '../../images/setas_up@2x.png'
import QuestionCard from './QuestionCard'

import { questions } from './FAQData'

const FAQ: FunctionComponent = () => (
  <section className="pl9 pt7 pb8 flex flex-column items-center">
    <div className="w-90 ml-auto">
      <h1 className="c-emphasis t-heading-1">regras e faq ::</h1>
      <p>
        Para saber mais sobre o VTEX Code Cup, confira as regras da competição e
        as dúvidas frequentes antes de iniciar sua inscrição.
      </p>
      <div className="flex flex-column items-center">
        {questions.map(q => (
          <QuestionCard question={q.question} ans={q.ans} />
        ))}
      </div>
    </div>
    <div className="flex items-center mt4">
      <img src={UpArrow} className="w-30" />
    </div>
  </section>
)

export default FAQ
