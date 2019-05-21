import React, { FunctionComponent } from 'react'

const customParagraph: FunctionComponent = ({ children }) => (
  <p className="t-body lh-title">{children}</p>
)

const customH1: FunctionComponent = ({ children }) => (
  <h1
    id={`${children}`.toLowerCase().replace(' ', '-')}
    className="t-heading-2 bb b--muted-4"
  >
    {children}
  </h1>
)

const customH2: FunctionComponent = ({ children }) => (
  <h2
    id={`${children}`.toLowerCase().replace(' ', '-')}
    className="t-heading-3"
  >
    {children}
  </h2>
)

const customH3: FunctionComponent = ({ children }) => (
  <h3
    id={`${children}`.toLowerCase().replace(' ', '-')}
    className="t-heading-4"
  >
    {children}
  </h3>
)

const customH4: FunctionComponent = ({ children }) => (
  <h4
    id={`${children}`.toLowerCase().replace(' ', '-')}
    className="t-heading-5"
  >
    {children}
  </h4>
)

const customH5: FunctionComponent = ({ children }) => (
  <h5
    id={`${children}`.toLowerCase().replace(' ', '-')}
    className="t-heading-6"
  >
    {children}
  </h5>
)

const customTableHeader: FunctionComponent = ({ children }) => (
  <th className="tc ph4">{children}</th>
)

const customTableData: FunctionComponent = ({ children }) => (
  <td className="tc pv4">{children}</td>
)

const customCode: FunctionComponent = ({ children }) => (
  <code className="t-code bg-base--inverted">{children}</code>
)

export const remarkReactComponents = {
  h1: customH1,
  h2: customH2,
  h3: customH3,
  h4: customH4,
  h5: customH5,
  p: customParagraph,
  code: customCode,
  th: customTableHeader,
  td: customTableData,
}
