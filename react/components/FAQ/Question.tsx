import React, { FunctionComponent } from 'react'
import { FormattedMessage } from 'react-intl'

interface Question {
  summaryId: string
  ansId: string
}

const Question: FunctionComponent<Question> = ({ summaryId, ansId }) => {
  return (
    <article className="pa5 mv5">
      <details>
        <summary className="t-heading-3 c-emphasis normal list">
          <FormattedMessage id={`io.faq.${summaryId}`} />
        </summary>
        <div className="pa4">
          <p className="t-body">
            <FormattedMessage id={`io.faq.${ansId}`} />
          </p>
        </div>
      </details>
    </article>
  )
}

export default Question
