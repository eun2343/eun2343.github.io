import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './translation/LanguageContext'

export { render }

async function render(pageContext) {
  const { Page, pageProps } = pageContext
  
  const page = React.createElement(
    BrowserRouter,
    null,
    React.createElement(
      LanguageProvider,
      null,
      React.createElement(Page, pageProps)
    )
  )

  const container = document.getElementById('react-root')
  
  if (pageContext.isHydration) {
    // Hydrate the page on client-side navigation
    hydrateRoot(container, page)
  } else {
    // First page load - container should already have the server-rendered HTML
    hydrateRoot(container, page)
  }
}