export { prerender }
export { onBeforeRender }

// Pre-render the root route
function prerender() {
  return [
    { url: '/' }
  ]
}

// Handle server-side redirect logic
function onBeforeRender(pageContext) {
  const { urlPathname } = pageContext
  
  if (urlPathname === '/') {
    // Redirect root to default language
    return {
      pageContext: {
        redirectTo: '/en'
      }
    }
  }
  
  return {
    pageContext: {}
  }
}