import React, { FunctionComponent } from 'react'
import remark from 'remark'
import remark2react from 'remark-react'
import { graphql, compose } from 'react-apollo'
import { Spinner } from 'vtex.styleguide'
import { branch, renderComponent } from 'recompose'

import * as RepoDocs from '../../graphql/getDocs.graphql'

const DocsRenderer: FunctionComponent<any> = ({ docsQuery }) => (
  <article className="pa7 bg-base--inverted br3">
    {
      remark()
        .use(remark2react)
        .processSync(atob(docsQuery.getDocs.encodedDocs)).contents
    }
  </article>
)

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
  branch(({ docsQuery }: any) => docsQuery.loading, renderComponent(Spinner))
)(DocsRenderer)
