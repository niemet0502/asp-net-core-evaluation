import React from 'react'

const SignIn = () => {
  return (
    <div className="container-fluid p-0">
    <div className="row m-0">
      <div className="col-12 p-0">    
        <div className="login-card">
          <div>
            <div><a className="logo" href="index.html"><img className="img-fluid for-light" src="../assets/images/logo/login.png" alt="looginpage"/><img className="img-fluid for-dark" src="../assets/images/logo/logo_dark.png" alt="looginpage"/></a></div>
            <div className="login-main"> 
              <form className="theme-form">
                <h4>Sign in to account</h4>
                <p>Enter your email & password to login</p>
                <div className="form-group">
                  <label className="col-form-label">Email Address</label>
                  <input className="form-control" type="email" required="" placeholder="Test@gmail.com"/>
                </div>
                <div className="form-group">
                  <label className="col-form-label">Password</label>
                  <div className="form-input position-relative">
                    <input className="form-control" type="password" name="login[password]" required="" placeholder="*********"/>
                    <div className="show-hide"><span className="show">                         </span></div>
                  </div>
                </div>
                <div className="form-group mb-0">
                  <div className="checkbox p-0">
                    <input id="checkbox1" type="checkbox"/>
                    <label className="text-muted" for="checkbox1">Remember password</label>
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