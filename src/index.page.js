export { Page }

import HomePage from './pages/HomePage'

function Page() {
  // This will render the HomePage component for the root route
  // The redirect logic will be handled by the server
  return HomePage()
}