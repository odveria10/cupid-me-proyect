import React from 'react'


const Inicio = () => {
  return (
    <div className='welcome align-items-center'>
<div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-3">CUPID ME</h1>
          <p class="lead">WELCOME</p>
          <hr class="my-2"/>
        
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">CREA TU CUENTA</a>
          </p>
        </div>
      </div>
      <div className='border text-center '>
      <form method="post" action="" name="signup-form">
    <div class="form-element">
        <label>Username</label>
        <input type="text" name="username" pattern="[a-zA-Z0-9]+" required />
    </div>
    <div class="form-element ">
        <label>Email</label>
        <input type="email" name="email" required />
    </div>
    <div class="form-element">
        <label>Password</label>
        <input type="password" name="password" required />
    </div>
    <button type="submit" name="register" value="register">Register</button>
</form>
</div>

      
    </div>
    
  )
}

export default Inicio