import React, { Fragment, FunctionComponent } from 'react'
import { graphql, compose } from 'react-apollo'
import { branch, renderNothing } from 'recompose'
import { Helmet } from 'vtex.render-runtime'

import Navbar from './components/IO/Navbar'
import Footer from './components/IO/Footer'
import SideBar from './components/Docs/SideBar'
import DocsRenderer from './components/Docs/DocsRenderer'
import favicon from './images/favicon.png'

import { availableDocs } from './DocsData'
import * as RepoDocs from './graphql/getDocs.graphql'

// const testString =
// 'IyBPcmRlclBsYWNlZAoKVGhlIE9yZGVyUGxhY2VkIGFwcCBmb3IgVlRFWCBJ\nTyBTdG9yZXMsIHJlcGxhY2luZyBjaGVja291dC1jb25maXJtYXRpb24tdWku\nCgojIyBJTyBTdG9yZQoKVGhpcyBhcHAgaXMgbWFkZSB0byBiZSBhIHN0b3Jl\nIGNvbXBvbmVudCBhbmQgYmUgcGxhY2VkIGFzIGEgZGVwZW5kZW5jeSBhdCBW\nVEVYIElPIFN0b3JlLiBBbHRob3VnaHQgaXQgbWF5IGFsc28gd29yayBvbiBp\ndCdzIG93biwgYnV0IHdpdGhvdXQgYW5hbHl0aWNzLgoKIyMgT3JkZXIgR3Jv\ndXAgUXVlcnkKCkFzIGEgZGVwZW5kZW5jeSB0byB0aGlzIGFwcCBpcyBgdnRl\neC5vcmRlci1wbGFjZWQtZ3JhcGhxbGAsIHdoaWNoIGV4cG9zZXMgYSBHcmFw\naFFMIHF1ZXJ5IGRlZmluZWQgYXMgYGdldE9yZGVyR3JvdXAoJG9yZGVyR3Jv\ndXA6IFN0cmluZylgIHRoYXQgcmVjZWl2ZXMgYW4gb3JkZXIgZ3JvdXAgaWRl\nbnRpZmljYXRpb24gbnVtYmVyIGFuZCBmZXRjaGVzIHRoZSByZWxldmFudCBk\nYXRhIHRvIHRoZSBgT3JkZXJQbGFjZWRgIGNvbXBvbmVudC4gVGhpcyBvcmRl\nciBncm91cCBpZGVudGlmaWNhdGlvbiBudW1iZXIgbmVlZGVkIGZvciB0aGlz\nIGFwcCB0byB3b3JrIGlzIG9idGFpbmVkIGZyb20gdGhlIFVSTCB1bmRlciB3\naGljaCBpdCBpcyByZW5kZXJlZCwgbm9ybWFsbHkgaW4gdGhpcyBmb3JtYXQ6\nIGAuLi4vY2hlY2tvdXQvb3JkZXJQbGFjZWQ/b2c9PG9yZGVyR3JvdXBOdW1i\nZXI+YCwgYXMgYSBxdWVyeSBwYXJhbWV0ZXIuIFdoaXRob3V0IHRoaXMgcXVl\ncnkgcGFyYW1ldGVyIGBvZ2AsIHRoZSBHcmFwaFFMIHF1ZXJ5IGNhbm5vdCBi\nZSBwZXJmb3JtZWQgYW5kIHRoZSBhcHAgd2lsbCBub3QgcmVuZGVyLgoKIyMg\nRGVwZW5kZW5jaWVzCgpUaGlzIGFwcCBkZXBlbmRzIG9uOgoKLSBgdnRleC5v\ncmRlci1wbGFjZWQtZ3JhcGhxbGAKLSBgdnRleC5zdHlsZWd1aWRlYAotIGB2\ndGV4Lm9yZGVyLWRldGFpbHNgCi0gYHZ0ZXguc2hpcHBpbmctZXN0aW1hdGUt\ndHJhbnNsYXRvcmAKLSBgdnRleC5hZGRyZXNzLWZvcm1gCi0gYHZ0ZXgucHJv\nZmlsZS1mb3JtYAotIGB2dGV4LnBpeGVsLW1hbmFnZXJgCgojIyBDb250cmli\ndXRpbmcKCkNoZWNrIGl0IG91dCBbaG93IHRvIGNvbnRyaWJ1dGVdKGh0dHBz\nOi8vZ2l0aHViLmNvbS92dGV4LWFwcHMvYXdlc29tZS1pbyNjb250cmlidXRp\nbmcpIHdpdGggdGhpcyBwcm9qZWN0LiAK\n'

const Docs: FunctionComponent<any> = ({ docsQuery }) => {
  return (
    <Fragment>
      <Helmet>
        <title>Docs</title>
        <meta name="theme-color" content="#F71963" />
        <link rel="icon" href={favicon} />
      </Helmet>
      <Navbar />
      <div className="flex">
        <aside className="pt10 w-25-l ml5-l">
          <SideBar componentList={availableDocs} />
        </aside>
        <main className="pv10 w-70-l center">
          <DocsRenderer decodedMarkdown={atob(docsQuery.getDocs.encodedDocs)} />
        </main>
      </div>
      <Footer />
    </Fragment>
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
  branch(({ docsQuery }: any) => docsQuery.loading, renderNothing)
)(Docs)
