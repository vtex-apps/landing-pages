import React, { FunctionComponent } from 'react'

import UpArrow from '../../images/setas_up@2x.png'

const FAQ: FunctionComponent = () => (
  <section>
    <h1 className="c-emphasis t-heading-1">regras e faq ::</h1>
    <p>
      Para saber mais sobre o VTEX Code Cup, confira as regras da competição e
      as dúvidas frequentes antes de iniciar sua inscrição.{' '}
    </p>
    <div className="flex flex-column">
      {/* <QuestionCard questionId="what-is-codecup" />
      <QuestionCard questionId="how-it-works" />
      <QuestionCard questionId="who-is-eligible" />
      <QuestionCard questionId="how-to-register" />
      <QuestionCard questionId="still-have-a-question" /> */}
      <p>Placeholder for question</p>
      <p>Placeholder for question</p>
      <p>Placeholder for question</p>
      <p>Placeholder for question</p>
      <p>Placeholder for question</p>
      <p>Placeholder for question</p>
    </div>
    <img src={UpArrow} />
  </section>
)

export default FAQ
