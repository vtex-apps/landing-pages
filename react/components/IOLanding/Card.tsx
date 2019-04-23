import React, { FunctionComponent, ReactNode } from 'react'
import { FormattedMessage } from 'react-intl'

interface Props {
  icon: ReactNode
  title: string
  text: string
  index: number
}

const Card: FunctionComponent<Props> = ({ icon, title, text, index }) => {
  return (
    <article
      className={`flex justify-between bg-muted-1 mv3 ${
        index % 2 === 0 ? 'mr3-m' : 'ml3-m'
      } items-center ph6 pv5 w-40 br3`}
    >
      <div className="mr7">{icon}</div>
      <div>
        <p className="t-heading-4 c-muted-5">
          <FormattedMessage id={title} />
        </p>
        <p className="t-body c-muted-2">
          <FormattedMessage id={text} />
        </p>
      </div>
    </article>
  )
}

export default Card
