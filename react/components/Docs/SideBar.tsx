import React, { FunctionComponent } from 'react'
import { Link } from 'vtex.render-runtime'

interface Props {
  appList: {
    name: string
    files: string[]
  }[]
}

const SideBar: FunctionComponent<Props> = ({ appList }) => (
  <ul className="pa7 mt0 list br b--muted-5">
    {appList.map(app => {
      const [vendor, name] = app.name.split('.')
      return (
        <li className="pv3 link" key={app.name}>
          <Link to={`/docs?app=${app.name}&file=README.md`}>
            {name.replace('-', ' ').toLocaleUpperCase()}
          </Link>
          {app.files.length > 1 && (
            <ul className="pv3">
              {app.files.map(file => (
                <li className="pv3 link" key={app.name + file}>
                  <Link to={`/docs?app=${app.name}&file=${file}`}>{file}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      )
    })}
  </ul>
)

export default SideBar
