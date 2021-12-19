import React from "react";



export default function Login(props) {

  //llamando a toast
  
  
  
  return (
    <div className="row vh-100">
      <div className="d-flex justify-content-center bg-black pb-5 pt-5">
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
            <small id="emailHelp" className="form-text text-muted">
              Nunca compartiremos su correo electrónico con nadie más.
            </small>
          </div>
          <div className="form-group">
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
          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </form>
        </div>
        
      </div>
    </div>
      
  );
}
