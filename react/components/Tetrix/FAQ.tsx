import React, { FunctionComponent } from 'react'

import { questions } from './FAQData'
import QuestionCard from '../CodeCup/QuestionCard'

const FAQ: FunctionComponent = () => (
  <section className="pa8 bg-base c-on-base">
    <p className="t-heading-1">F.A.Q</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet rem unde
      delectus molestiae officiis possimus saepe minima nisi blanditiis quidem,
      voluptates quae magni? Quia, quo! Iusto placeat totam cupiditate alias?
    </p>
    <div className="flex flex-column items-center">
      {questions.map(q => (
        <QuestionCard question={q.question} ans={q.ans} key={q.question} />
      ))}
    </div>
  </section>
)

export default FAQ
