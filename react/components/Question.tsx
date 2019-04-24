import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'

interface Question {
  questionId: string
}

const Question: FunctionComponent<Question> = ({ questionId }) => {
  return (
    <article className="pa5 mv5">
      <details>
        <summary className="t-heading-3 c-emphasis normal list">
          <FormattedMessage id={`io.faq.${questionId}.summary`} />
        </summary>
        <div className="pa4">
          <p className="t-body">
            <FormattedMessage id={`io.faq.${questionId}.ans`} />
          </p>
        </div>
      </details>
    </article>
  )
}

export default Question
