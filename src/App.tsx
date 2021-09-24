import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { WithAxios } from './HOCs/Axios'

import { GlobalStyle } from './styles/globals'
import { AppProvider } from './context/AppContext'
import Routes from './routes'

import 'react-toastify/dist/ReactToastify.css'

export const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Router>
        <AppProvider>
          <WithAxios>
            <Routes />
          </WithAxios>
        </AppProvider>
        <GlobalStyle />
      </Router>
    </>
  )
}

export default App
