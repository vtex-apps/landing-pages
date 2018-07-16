import { Fragment } from 'react'

const FEATURES = [
  {
    title: 'Develop with the best',
    imageId: 'developer-ic',
    description: <Fragment>
      Develop apps with the best technologies in the market.
      Create react components with ReactJS, functional CSS, GraphQL,
      webpack, SSR+CSR, Source maps, schemas, resolvers and much more.
    </Fragment>,
    key: 1,
  },
  {
    title: 'Live coding',
    imageId: 'live-coding',
    description: <Fragment>
      Sync your solution with our serverless, Kubernetes-backend infrastructure using a simple CLI and watch changes happen live.
    </Fragment>,
    key: 2,
  },
  {
    title: 'Workspaces',
    imageId: 'workspaces-ic',
    description: <Fragment>
      A lightweight staging environment that behaves like a branch of your application. <br />
      Make quick rollbacks and create unlimited staging environments. <br />
      Nothing runs locally and you can share your development workspace with a simple URL.
    </Fragment>,
    key: 3,
  },
  {
    title: 'Infra, scale & security',
    imageId: 'infra-ic',
    description: <Fragment>
      Don’t worry, we handle the boring stuff,
      you just need to focus on what’s really important:<span className="rebel-pink"> developing</span>.
    </Fragment>,
    key: 4,
  },
  {
    title: 'Be global',
    imageId: 'earn-global-ic',
    description: <Fragment>
      Distribute your solutions globally in the
       VTEX App Store and reach more than 2000
       clients in the VTEX ecosystem.
    </Fragment>,
    key: 5,
  },
]

export {
  FEATURES
}
