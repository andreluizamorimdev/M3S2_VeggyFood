import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './layout/Layout';
import { HomePage } from './pages/HomePage/HomePage'
import { LoginPage } from './pages/LoginPage/LoginPage';
import { CarrinhoPage } from './pages/CarrinhoPage/CarrinhotPage';
import { ShoppingCartProvider } from './context/Cart/ShoppingCart.context';


function App() {
 

  return (
    <ShoppingCartProvider>
      <Router>
        <Routes>
              <Route path='/' element={<LoginPage/>}/>

          <Route path='/' element={<Layout/>} >
              
              <Route path='/home' element={<HomePage/>}/>
              <Route path='/carrinho' element={<CarrinhoPage/>}/>

          </Route>
          
        </Routes>
      
      </Router>
    </ShoppingCartProvider>
  )
}

export default App
