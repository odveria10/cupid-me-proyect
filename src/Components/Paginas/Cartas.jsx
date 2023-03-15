import React from 'react'

const Cartas = () => {
  return (
    <div>
        <div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./perfil.jpg" class="img-fluid rounded-start" alt=""/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">CARLOS DUARTE </h5>
        <p class="card-text">CARACTERISTICAS </p>
        <p class="card-text"><small class="text-muted">basquetbol</small></p>
        <p class="card-text"><small class="text-muted">deportes</small></p>
        <p class="card-text"><small class="text-muted">autos</small></p>
        <p class="card-text"><small class="text-muted">animales</small></p>
        <p class="card-text"><small class="text-muted">pescar</small></p>
        <p class="card-text"><small class="text-muted">playa</small></p>
      </div>
      <div class="btn-group">
  <a href="#" class="btn btn-primary active" aria-current="page">like</a>
  <a href="#" class="btn btn-primary">dislike</a>
  <a href="#" class="btn btn-primary">perfil</a>
  <a href="#" class="btn btn-primary">bloquear</a>
  <a href="#" class="btn btn-primary">menssage</a>
  <a href="#" class="btn btn-primary">follow</a>
</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cartas