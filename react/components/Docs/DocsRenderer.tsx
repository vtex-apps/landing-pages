import React, { FunctionComponent } from 'react'
import remark from 'remark'
import remark2react from 'remark-react'

const DocsRenderer: FunctionComponent<{ decodedMarkdown: string }> = ({
  decodedMarkdown,
}) => (
  <article className="pa7 bg-base--inverted br3">
    {
      remark()
        .use(remark2react)
        .processSync(decodedMarkdown).contents
    }
  </article>
)

export default DocsRenderer
