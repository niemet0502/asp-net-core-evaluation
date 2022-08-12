import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { getStoredAuthToken, storeAuthToken } from '../../utils/currentUser';

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault()

   try {
    const response = await fetch("http://localhost:5000/api/Auth/login", {
      // Adding method type
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json", "Accept": "application/json", "Access-Control-Allow-Headers":"Content-Type"}),
      mode: 'cors',

      // Adding body or contents to send
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    storeAuthToken(data)

    navigate("/employe");

    } catch (error) {
      console.log("erreir");
    }
  }


  if(getStoredAuthToken()) return ;
  return (
    <div className="container-fluid p-0">
    <div className="row m-0">
      <div className="col-12 p-0">    
        <div className="login-card">
          <div>
            <div><a className="logo" href="index.html"><img className="img-fluid for-light" src="../assets/images/logo/login.png" alt="looginpage"/><img className="img-fluid for-dark" src="../assets/images/logo/logo_dark.png" alt="looginpage"/></a></div>
            <div className="login-main"> 
              <form className="theme-form" onSubmit={submit}>
                <h4>Sign in to account</h4>
                <p>Enter your email & password to login</p>
                <div className="form-group">
                  <label className="col-form-label">Email Address</label>
                  <input className="form-control" type="email" required="" placeholder="Test@gmail.com" name="email" onChange={({target}) => setEmail(target.value)}/>
                </div>
                <div className="form-group">
                  <label className="col-form-label">Password</label>
                  <div className="form-input position-relative">
                    <input className="form-control" type="password" name="password" onChange={({target}) => setPassword(target.value)} required="" placeholder="*********"/>
                    <div className="show-hide"><span className="show">                         </span></div>
                  </div>
                </div>
                <div className="form-group mb-0">
                  <div className="checkbox p-0">
                    <input id="checkbox1" type="checkbox"/>
                    <label className="text-muted" htmlFor="checkbox1">Remember password</label>
                  </div><a className="link" href="forget-password.html">Forgot password?</a>
                  <div className="text-end mt-3">
                    <button className="btn btn-primary btn-block w-100" type="submit">Sign in</button>
                  </div>
                </div>
                <h6 className="text-muted mt-4 or">Or Sign in with</h6>
                <div className="social mt-4">
                  <div className="btn-showcase"><a className="btn btn-light" href="https://www.linkedin.com/login" target="_blank" rel="noreferrer"><i className="txt-linkedin" data-feather="linkedin"></i> LinkedIn </a><a className="btn btn-light" href="https://twitter.com/login?lang=en" target="_blank" rel="noreferrer"><i className="txt-twitter" data-feather="twitter"></i>twitter</a><a className="btn btn-light" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="txt-fb" data-feather="facebook"></i>facebook</a></div>
                </div>
                <p className="mt-4 mb-0 text-center">Don't have account?<a className="ms-2" href="sign-up.html">Create Account</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default SignIn