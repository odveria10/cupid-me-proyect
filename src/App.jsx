import {BrowserRouter  , Routes, Route , } from 'react-router-dom';
import Navbar from './Components/Navegacion/Navbar';
import Inicio from './Components/Paginas/Inicio';
import Mensajes from './Components/Paginas/Mensajes';
import Perfil from './Components/Paginas/Perfil';
import Footer from './Components/Footer/Footer';
import Cartas from './Components/Paginas/Cartas';




const App = () => {
  return (
    <div className="App bg-info">


      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='Cartas.jsx' element={<Cartas/>}/>
      <Route path='inicio.jsx' element={<Inicio/>}/>
        <Route path='/Mensajes.jsx' element={<Mensajes/>}/>
        <Route path='/Perfil.jsx'element={<Perfil/>}/>
      </Routes>
      </BrowserRouter>

      
      
<Footer/>
    </div>
    
  )
}
 
export default App;
