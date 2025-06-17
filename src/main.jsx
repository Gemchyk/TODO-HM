import { createRoot } from 'react-dom/client'
import { store } from './store/store'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)
