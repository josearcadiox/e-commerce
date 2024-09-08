import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Comprar } from './Pages/Comprar';
import { ComprarCategoria } from './Pages/ComprarCategoria'
import { Producto } from './Pages/Producto';
import { LoginSignUp } from './Pages/LoginSignUp';
import { Carrito } from './Pages/Carrito';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Comprar/>}></Route>
        <Route path='/hombres' element={<ComprarCategoria category='hombres'/>}></Route>
        <Route path='/mujeres' element={<ComprarCategoria category='mujeres'/>}></Route>
        <Route path='/niños' element={<ComprarCategoria category='niños'/>}></Route>
        <Route path="/Producto" element={<Producto/>}>
          <Route path=':productId' element={<Producto/>}></Route>
        </Route>
        <Route path='/Carrito' element={<Carrito/>}/>
        <Route path='/login' element={<LoginSignUp/>}/>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
