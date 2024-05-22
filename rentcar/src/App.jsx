import './index.css'
import Home from './component/Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductDetail from './component/Pages/ProductDetail'
import Checkout from './component/Pages/Checkout'
import Resi from './component/Pages/Resi'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path="/detail/:id" Component={ProductDetail} />
        <Route path="/checkout/:id" Component={Checkout} />
        <Route path="/resi/:id" Component={Resi} />

      </Routes>

      {/* <Home /> */}
    </Router>
  )
}

export default App
