import {BrowserRouter  , Routes, Route , } from 'react-router-dom';
import Navbar from './Components/Navegacion/Navbar';
import Inicio from './Components/Paginas/Inicio';
import Mensajes from './Components/Paginas/Mensajes';
import Perfil from './Components/Paginas/Perfil';
import Footer from './Components/Footer/Footer';



const App = () => {
  return (
    <div className="App bg-info">
      <BrowserRouter>
      <Navbar/>
        <Routes>
        
      <Route path='/' element={<Inicio/>}/>
        <Route path='/Mensajes' element={<Mensajes/>}/>
        <Route path='/Perfil'element={<Perfil/>}/>
      </Routes>
      </BrowserRouter>
      
<Footer/>
    </div>
    
  )
}
 
export default App;
