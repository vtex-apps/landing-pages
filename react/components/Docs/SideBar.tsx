import React, { FunctionComponent } from 'react'
import { Link } from 'vtex.render-runtime'

interface Props {
  componentList: {
    formattedName: string
    urlName: string
  }[]
}

const SideBar: FunctionComponent<Props> = ({ componentList }) => (
  <ul className="bg-base--inverted pa7 mt0 br3 list">
    {componentList.map(component => (
      <li className="pb3">
        <Link to={`/docs?repo=${component.urlName}`}>
          {component.formattedName}
        </Link>
      </li>
    ))}
  </ul>
)

export default SideBar
