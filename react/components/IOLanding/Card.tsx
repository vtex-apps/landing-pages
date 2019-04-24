import React, { FunctionComponent, ReactNode } from 'react'
import { FormattedMessage } from 'react-intl'
import { Link } from 'vtex.render-runtime'

interface Props {
  icon: ReactNode
  title: string
  text: string
  index: number
  link: string
  soon?: boolean
}

const Card: FunctionComponent<Props> = ({
  icon,
  title,
  text,
  index,
  link,
  soon,
}) => {
  return (
    <article
      className={`bg-muted-1 mv3 ${
        index % 2 === 0 ? 'mr3-l' : 'ml3-l'
      } ph6 pv5 w-40-l w-90 br3`}
    >
      <a href={link} className="flex justify-between items-center link">
        <div className="mr7">{icon}</div>
        <div>
          <p className="t-heading-4 c-muted-5">
            <FormattedMessage id={title} />
            {soon && <span className="c-muted-2"> [SOON]</span>}
          </p>
          <p className="t-body c-muted-2">
            <FormattedMessage id={text} />
          </p>
        </div>
      </a>
    </article>
  )
}

export default Card
