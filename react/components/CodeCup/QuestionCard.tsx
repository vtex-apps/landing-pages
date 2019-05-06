import React, { useState, FunctionComponent } from 'react'
import { IconCaretDown, IconCaretRight } from 'vtex.styleguide'

interface Props {
  question: string
  ans: any
}

const QuestionCard: FunctionComponent<Props> = ({ question, ans }) => {
  const [open, setOpen] = useState(false)
  return (
    <article className="flex flex-column pr9-l w-100">
      <p
        className="flex justify-between bb b--muted-3 pv3"
        onClick={() => setOpen(!open)}
      >
        <strong>{question}</strong>
        {open ? <IconCaretDown /> : <IconCaretRight />}
      </p>
      <p hidden={!open} className="ph5 lh-copy">
        {ans}
      </p>
    </article>
  )
}

export default QuestionCard
