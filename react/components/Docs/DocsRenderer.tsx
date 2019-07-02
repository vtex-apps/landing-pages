import React, { FunctionComponent, Fragment } from 'react'
// import { graphql, compose } from 'react-apollo'
// import { branch, renderComponent } from 'recompose'

// import Skeleton from './Skeleton'
// import EmptyDocs from './EmptyDocs'

// import * as RepoDocs from '../../graphql/getDocs.graphql'

const DocsRenderer: FunctionComponent<any> = () => (
  // <Fragment>
  //   {ReactHtmlParser(docsQuery.getDocs.htmlDocs, { transform })}
  // </Fragment>
  <Fragment>Error</Fragment>
)

// export default compose(
//   graphql(RepoDocs.default, {
//     name: 'docsQuery',
//     options: () => {
//       const params = new URLSearchParams(location.search)
//       const repositoryName = params.get('repo') || 'store-components'
//       return {
//         variables: {
//           repositoryName,
//         },
//       }
//     },
//   }),
//   branch(({ docsQuery }: any) => docsQuery.loading, renderComponent(Skeleton)),
//   branch(({ docsQuery }: any) => !!docsQuery.error, renderComponent(EmptyDocs))
// )(DocsRenderer)
export default DocsRenderer
