import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { GlobalStyle } from './styles/globals'
import { AppProvider } from './context/AppContext'

import Routes from './routes'

import 'react-toastify/dist/ReactToastify.css'

export const App: React.FC = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Router>
        <AppProvider>
          <main>
            <Routes />
          </main>
        </AppProvider>
        <GlobalStyle />
      </Router>
    </>
  )
}

export default App
