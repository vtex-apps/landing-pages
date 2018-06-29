import React, { Component } from 'react'
import Images from './images/Images'

class Features extends Component {
  render() {
    return (
      <div className="h-100">
        <div className="cf ph2-ns pa9">
          <div className="mt5 center mw5 mw6-ns mb6 black flex justify-center">
            <div className="pa3 w-40 tc">
              <div className="fw5 f7 ttu pa5">Develop with the best</div>
              <Images image="developer-ic" />
            </div>
            <div className="pa5 f6 fw2 w-60 lh-copy tj">
              Develop apps with the best technologies in the market.
               Create react components with ReactJS, functional CSS, GraphQL,
               webpack, SSR+CSR, Source maps, schemas, resolvers and much more.
            </div>
          </div>
          <div className="mt5 center mw5 mw6-ns mb6 black flex justify-center">
            <div className="pa3 w-40 tc">
              <div className="fw5 f7 ttu pa5">Live coding</div>
              <Images image="live-coding" />
            </div>
            <div className="pa5 f6 fw2 w-60 lh-copy tj">
            Sync your solution with our serverless, Kubernetes-backend infrastructure using a simple CLI and watch changes happen live.
            </div>
          </div>
          <div className="mt5 center mw5 mw6-ns mb6 black flex justify-center">
            <div className="pa3 w-40 tc">
              <div className="fw5 f7 ttu pa5">Workspaces</div>
              <Images image="workspaces-ic" />
            </div>
            <div className="pa5 f6 fw2 w-60 lh-copy tj">
            A lightweight staging environment that behaves like a branch of your application. <br />
            Make quick rollbacks and create unlimited staging environments.
             Nothing runs locally and you can share your development workspace with a simple URL.
            </div>
          </div>
          <div className="mt5 center mw5 mw6-ns mb6 black flex justify-center">
            <div className="pa3 w-40 tc">
              <div className="fw5 f7 ttu pa5">Infra, scale & security</div>
              <Images image="infra-ic" />
            </div>
            <div className="pa5 f6 fw2 w-60 lh-copy tj">
            Don’t worry, we handle the boring stuff,
             you just need to focus on what’s really important, develop.
            </div>
          </div>
          <div className="mt5 center mw5 mw6-ns mb6 black flex justify-center">
            <div className="pa3 w-40 tc">
              <div className="fw5 f7 ttu pa5">Be golbal</div>
              <Images image="earn-global-ic" />
            </div>
            <div className="pa5 f6 fw2 w-60 lh-copy tj">
            Distribute your solutions globally in the
             VTEX App Store and reach more than 2000
             clients in the VTEX ecosystem.
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Features
