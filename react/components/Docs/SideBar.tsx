import React, { FunctionComponent } from 'react'
import { Link } from 'vtex.render-runtime'

interface Props {
  componentList: {
    formattedName: string
    urlName: string
  }[]
}

const SideBar: FunctionComponent<Props> = ({ componentList }) => (
  <ul className="pa7 mt0 list br b--muted-5">
    {componentList.map(component => (
      <li className="pv3 link">
        <Link to={`/docs?repo=${component.urlName}`}>
          {component.formattedName}
        </Link>
      </li>
    ))}
  </ul>
)

export default SideBar
