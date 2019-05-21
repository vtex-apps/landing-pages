import React, { FunctionComponent } from 'react'
import remark from 'remark'
import remark2react from 'remark-react'
import { graphql, compose } from 'react-apollo'
import { branch, renderComponent } from 'recompose'

import RendererPlaceHolder from './RendererPlaceHolder'

import * as RepoDocs from '../../graphql/getDocs.graphql'

const customParagraph: FunctionComponent = ({ children }) => (
  <p className="t-body">{children}</p>
)

const DocsRenderer: FunctionComponent<any> = ({ docsQuery }) => {
  const remarkReactComponents = {
    p: customParagraph,
  }

  return (
    <article className="pa7 w-100">
      {
        remark()
          .use(remark2react, { remarkReactComponents })
          .processSync(atob(docsQuery.getDocs.encodedDocs)).contents
      }
    </article>
  )
}

export default compose(
  graphql(RepoDocs.default, {
    name: 'docsQuery',
    options: () => {
      const params = new URLSearchParams(location.search)
      const repositoryName = params.get('repo') || 'store-components'
      return {
        variables: {
          repositoryName,
        },
      }
    },
  }),
  branch(
    ({ docsQuery }: any) => docsQuery.loading,
    renderComponent(RendererPlaceHolder)
  )
)(DocsRenderer)
