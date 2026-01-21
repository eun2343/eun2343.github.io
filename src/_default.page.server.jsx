import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr/server'
import { LanguageProvider } from './translation/LanguageContext'

export { render }
export { passToClient }

// Tell the client-side what data to serialize and send to the client
const passToClient = ['pageProps', 'urlPathname']

async function render(pageContext) {
  const { Page, pageProps } = pageContext
  
  const page = React.createElement(
    StaticRouter,
    { location: pageContext.urlPathname },
    React.createElement(
      LanguageProvider,
      null,
      React.createElement(Page, pageProps)
    )
  )

  const pageHtml = renderToString(page)

  const documentHtml = escapeInject`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <link rel="icon" type="image/svg+xml" href="/vite.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Choi TCM</title>
        </head>
        <body>
          <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
        </body>
      </html>`

  return {
    documentHtml,
    pageContext: {
      // We can add custom pageContext here
    }
  }
}