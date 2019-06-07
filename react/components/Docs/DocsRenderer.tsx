import React, { FunctionComponent, Fragment } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { graphql, compose } from 'react-apollo'
import { branch, renderComponent } from 'recompose'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coy } from 'react-syntax-highlighter/dist/styles/prism'

import Skeleton from './Skeleton'
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
  } else if (
    node.type === 'tag' &&
    node.name === 'code' &&
    node.parent &&
    node.parent.name === 'pre'
  ) {
    return (
      <SyntaxHighlighter language="javascript" style={coy}>
        {node.children[0].data}
      </SyntaxHighlighter>
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
  branch(({ docsQuery }: any) => docsQuery.loading, renderComponent(Skeleton)),
  branch(({ docsQuery }: any) => !!docsQuery.error, renderComponent(EmptyDocs))
)(DocsRenderer)
