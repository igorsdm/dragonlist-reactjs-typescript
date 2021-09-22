import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalStyle } from './styles/globals'
import { AppProvider } from './context/AppContext'

import Routes from './routes'

export const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <main>
          <Routes />
        </main>
      </AppProvider>
      <GlobalStyle />
    </Router>
  )
}

export default App
