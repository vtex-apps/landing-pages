import React, { useState, FunctionComponent } from 'react'
import { IconCaretDown } from 'vtex.styleguide'

interface Props {
  question: string
  ans: string
}

const QuestionCard: FunctionComponent<Props> = ({ question, ans }) => {
  const [open, setOpen] = useState(false)
  return (
    <article className="flex flex-column pr9 w-100">
      <p
        className="flex justify-between bb b--muted-3 pv3"
        onClick={() => setOpen(!open)}
      >
        <strong>{question}</strong>
        <IconCaretDown />
      </p>
      <p hidden={!open}>{ans}</p>
    </article>
  )
}

export default QuestionCard
