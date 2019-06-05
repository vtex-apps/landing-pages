import React, { FunctionComponent, Fragment } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { graphql, compose } from 'react-apollo'
import { branch, renderComponent } from 'recompose'
import AnchorLink from 'react-anchor-link-smooth-scroll'

import RendererPlaceHolder from './RendererPlaceHolder'
import EmptyDocs from './EmptyDocs'

import * as RepoDocs from '../../graphql/getDocs.graphql'

function transform(node: any) {
  if (
    node.type === 'tag' &&
    node.name === 'a' &&
    node.attribs.href[0] === '#'
  ) {
    return (
      <AnchorLink offset={() => 80} href={node.attribs.href}>
        {node.children[0].data}
      </AnchorLink>
    )
  }
}

const DocsRenderer: FunctionComponent<any> = ({ docsQuery }) => (
  <Fragment>
    {ReactHtmlParser(docsQuery.getDocs.htmlDocs, { transform })}
  </Fragment>
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
