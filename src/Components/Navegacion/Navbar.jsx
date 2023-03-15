import React from 'react'



const Navbar =  () => {
  return (
    <div  >
    

    <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="Inicio.jsx">CUPID ME</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="Cartas.jsx">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Mensajes.jsx">Menssage</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="Perfil.jsx">Perfil</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            plus
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="Actividad.jsx">Actividad</a></li>
            <li><a class="dropdown-item" href="Matches.jsx">Matches</a></li>
            <li><a class="dropdown-item" href="Bloqueos.jsx">Bloqueos</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    
  )
}

export default Navbar