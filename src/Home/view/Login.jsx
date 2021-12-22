import React from "react";
import Footer from '../Body/Footer'



export default function Login(props) {

  //llamando a toast
  
  
  
  return (
    <div className="row  bg-login">
      <div className="d-flex justify-content-center vh-100  pb-5 pt-5">
        <div className="pb-5 pt-5">
          <form onSubmit={props.loginUp} className="form-login">
          <div className="form-group">
            <label className="label-login" htmlFor="exampleInputEmail1">
              Email address
            </label>
            <input
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              type="email"
              name="email"
              onChange={props.datosLogin}
              
            />
            <small id="emailHelp" className="">
              Nunca compartiremos su correo electrónico con nadie más.
            </small>
          </div>
          <div className="form-group mt-4">
            <label className="label-login" htmlFor="exampleInputPassword1">
              Password
            </label>
            <input
              className="form-control"
              id="exampleInputPassword1"
              type="password"
              name="password"
              onChange={props.datosLogin}
              
            />
          </div>
          <button type="submit" className="btn mt-4">
          <i className="bi bi-box-arrow-right"></i> Login
          </button>
        </form>
        </div>
        
      </div>
      <Footer/>
    </div>
      
  );
}
