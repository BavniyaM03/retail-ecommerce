import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/store.js'
import { SnackbarProvider} from 'notistack';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <SnackbarProvider maxSnack={3}  autoHideDuration={2000}>
        <App />
        </SnackbarProvider>
    </Provider>
  </StrictMode >
)
