import React, { FunctionComponent } from 'react'
import { injectIntl, InjectedIntlProps } from 'react-intl'

import Question from './Question'
import Questions from '../FAQData'

const QuestionList: FunctionComponent<InjectedIntlProps> = () => {
  return (
    <section className="flex flex-column w-90 center pa5">
      {Questions.map(questionId => (
        <Question questionId={questionId} key="questionId" />
      ))}
    </section>
  )
}

export default injectIntl(QuestionList)
