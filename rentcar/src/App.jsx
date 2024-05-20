import './index.css'
import Home from './component/Pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import ProductDetail from './component/Pages/ProductDetail'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path="/detail/:id" Component={ProductDetail} />

      </Routes>

      {/* <Home /> */}
    </Router>
  )
}

export default App
