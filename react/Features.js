import React, { Component } from 'react'
import Images from './images/Images'

const descriptionClassName = 'pa5 f6 fw2 w-60 lh-copy mid-gray'
const cardClassName = 'center mw6-ns flex justify-center'
const imageAndTitleClassName = 'pa3 w-40 tc'
const titleClassName = 'fw5 f7 ttu ph5 pt5'
class Features extends Component {
  render() {
    return (
      <div className="h-100">
        <div className="cf pa9-ns serious-black">
          <div className={`mt5 mb6 ${cardClassName}`}>
            <div className={imageAndTitleClassName}>
              <div className={`${titleClassName} pb5`}>Develop with the best</div>
              <Images image="developer-ic" />
            </div>
            <div className={descriptionClassName}>
              Develop apps with the best technologies in the market.
               Create react components with ReactJS, functional CSS, GraphQL,
               webpack, SSR+CSR, Source maps, schemas, resolvers and much more.
            </div>
          </div>
          <div className={`mt5 ${cardClassName}`}>
            <div className={imageAndTitleClassName}>
              <div className={`${titleClassName}`}>Live coding</div>
              <Images image="live-coding" />
            </div>
            <div className={descriptionClassName}>
            Sync your solution with our serverless, Kubernetes-backend infrastructure using a simple CLI and watch changes happen live.
            </div>
          </div>
          <div className={`mb6 ${cardClassName}`}>
            <div className={imageAndTitleClassName}>
              <div className={`${titleClassName}`}>Workspaces</div>
              <Images image="workspaces-ic" />
            </div>
            <div className={descriptionClassName}>
            A lightweight staging environment that behaves like a branch of your application. <br />
            Make quick rollbacks and create unlimited staging environments.
             Nothing runs locally and you can share your development workspace with a simple URL.
            </div>
          </div>
          <div className={`mt5 mb3 ${cardClassName}`}>
            <div className={imageAndTitleClassName}>
              <div className={`${titleClassName}`}>Infra, scale & security</div>
              <Images image="infra-ic" />
            </div>
            <div className={descriptionClassName}>
            Don’t worry, we handle the boring stuff,
             you just need to focus on what’s really important:<span className="rebel-pink"> developing</span>.
            </div>
          </div>
          <div className={cardClassName}>
            <div className={imageAndTitleClassName}>
              <div className={`${titleClassName}`}>Be golbal</div>
              <Images image="earn-global-ic" />
            </div>
            <div className={descriptionClassName}>
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
