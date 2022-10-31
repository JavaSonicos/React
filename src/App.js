import logo from './logo.svg';
import './App.css';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  Navigate
} from "react-router-dom";

import { Carrito } from './components/Carrito';
import { Navegacion } from './components/navegacion/Navegacion';
import { ListaProductos } from './components/ListaProductos';
import { Home } from './components/paginas/Home';
import { ModificarProducto } from './components/ModificarProducto';
import { Ventas } from './components/paginas/Ventas';


function App() {
  return (
    <div className="App">
      <Router>
      <Navegacion/>

        <Routes>
          <Route path='/' exact element={< Home />}/>
            <Route path='/carrito' element={ < Carrito />}/>
            <Route path='/listaproductos' element={ <ListaProductos/>}/>
            <Route path='/modificarproducto' element={ < ModificarProducto />}/>
            <Route path='/ventas' element={ <Ventas />}/>
        </Routes>
        </Router> 
      
      
    </div>
  );
}

export default App;
