import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import ProductListing from './components/ProductListing'
import ShoppingCart from './components/ShoppingCart'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ErrorBoundary>
          <div className="App">
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/products" element={<ProductListing />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="*" element={<LandingPage />} />
            </Routes>
          </div>
        </ErrorBoundary>
      </Router>
    </Provider>
  )
}

export default App
