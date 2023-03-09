import React from 'react'



const Navbar =  () => {
  return (
    <div  >
     <nav class="navbar navbar-expand-lg  navbar-dark bg-primary">
         <ul class="nav navbar-nav">

             <li class="nav-item ">
                 <a class="nav-link" href="inicio.jsx">CUPID ME</a>
             </li>

             <li class="nav-item">
                 <a class="nav-link" href="">inicio</a>
             </li>

             <li class="nav-item">
                 <a class="nav-link" href="Mensajes.jsx">mensajes</a>
             </li>

             <li class="nav-item">
                 <a class="nav-link" href="Perfil.jsx">perfil</a>
             </li>

             <li class="nav-item dropdown ">

                 <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Mas</a>
                 <lu class="dropdown-menu submenu-dark">

                  <li>
                    <a href="Activedad.jsx" class="dropdown-item">Actividad</a>
                  </li>

                  <li>
                    <a href="Bloqueos.jsx" class="dropdown-item">Bloqueados</a>
                  </li>

                  <li>
                    <a href="Matches.jsx" class="dropdown-item">Matches</a>
                  </li>




                 </lu>
                
             </li>
         </ul>
     </nav>
</div>
    
  )
}

export default Navbar