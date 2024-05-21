import './index.css'
import Home from './component/Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductDetail from './component/Pages/ProductDetail'
import Checkout from './component/Pages/Checkout'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path="/detail/:id" Component={ProductDetail} />
        <Route path="/checkout/:id" Component={Checkout} />

      </Routes>

      {/* <Home /> */}
    </Router>
  )
}

export default App
