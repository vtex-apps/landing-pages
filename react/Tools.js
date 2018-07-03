import React, { Component } from 'react'
import ToolCard from './ToolCard'

class Tools extends Component {
  render() {
    return (
      <div className="h-100 bg-near-white">
        <div className="cf pa9-ns">
          <div className="mt5 center mw8-ns pa8-ns mb5 serious-black">
            <h1 className="fw1 f2 ph8-s ph0-ns">
              Tools and APIs
            </h1>
            <div className="pv3 mb4 fw3 f3 mb9 ph8-s ph0-ns">
            Take advantage of our powerful suite of tools and APIs
            </div>
            <div className="flex flex-column-s flex-row-l flex-wrap">
              <ToolCard
                image="developer-ic"
                title="Toolbelt"
                subtitle="Command line interface"
                linkText="Learn about Toolbelt"
                linkUrl="http://help.vtex.com/en/faq/what-is-vtex-io-cli"
              />
              <ToolCard
                image="developer-ic"
                title="Render"
                subtitle="Frontend development tools"
                linkText="Learn about Render"
                linkUrl="http://help.vtex.com/en/faq/what-is-vtex-io-cli"
              />
              <ToolCard
                image="developer-ic"
                title="Data APIs"
                subtitle="Admin and Store APIs"
                linkText="Learn about Data APIs"
                linkUrl="http://help.vtex.com/en/developer-docs"
              />
              <ToolCard
                image="developer-ic"
                title="DreamStore"
                subtitle="VTEX Store base template"
                linkText="Learn about Dreamstore"
                linkUrl="https://github.com/vtex-apps/dreamstore-getting-started"
              />
              <ToolCard
                image="developer-ic"
                title="Onda"
                subtitle="VTEX Styleguide"
                linkText="Learn about Onda"
                linkUrl="https://vtex.github.io/styleguide/"
              />
              <ToolCard
                image="developer-ic"
                title="VTEX App Store"
                subtitle="App distribute channel"
                linkText="Learn about App Store"
                linkUrl="https://apps.vtex.com/"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Tools
