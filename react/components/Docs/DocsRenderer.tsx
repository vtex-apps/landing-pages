import React, { FunctionComponent, Fragment } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { graphql, compose } from 'react-apollo'
import { branch, renderComponent } from 'recompose'

import RendererPlaceHolder from './RendererPlaceHolder'
import EmptyDocs from './EmptyDocs'

import * as RepoDocs from '../../graphql/getDocs.graphql'

const DocsRenderer: FunctionComponent<any> = ({ docsQuery }) => (
  <Fragment>{ReactHtmlParser(docsQuery.getDocs.htmlDocs)}</Fragment>
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
  branch(
    ({ docsQuery }: any) => docsQuery.loading,
    renderComponent(RendererPlaceHolder)
  ),
  branch(({ docsQuery }: any) => !!docsQuery.error, renderComponent(EmptyDocs))
)(DocsRenderer)
