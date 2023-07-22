import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='d-flex justify-content-center '>
      <section >
        <form className='d-flex flex-column gap-2' id='loginsection'>
          <div class="form-group row  ">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-10">
              <input type="email" class="ms-2 form-control" id="inputEmail3" placeholder="Email" />
            </div>
          </div>
          <div class="form-group row">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-10">
              <input type="password" class="ms-2 form-control" id="inputPassword3" placeholder="Password" />
            </div>
          </div>
          <div >
            <p>Forget Password? <Link className='link'><b>Click here to reset password</b></Link></p>
          </div>

          <div class="form-group row ">
            <div class="col-sm-10">
              <button type="submit" class="btn button-style">Log in</button>
            </div>
          </div>
        </form>
      </section>
    </div>
  )
}

export default Login
