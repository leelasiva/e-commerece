import { useState } from 'react';
import { Link } from 'react-router-dom';
function Login() {
  const [showSignup,setShowsignup]= useState(false);

  const toggleSignup=()=>{
    setShowsignup(!showSignup);
  }
  return (
    <div id="loginPage">
      <div id='header'>
        <div className='container bg-light'>
          <div className='row'>
            <div className='head-wrapper d-flex justify-content-center align-items-center'>
              <div>
                <Link to={'/'} className='text-decoration-none'>Ecommerce</Link>
                </div>
                <div>
                {
                  !showSignup ?(
                    <div className='login-wrapper'>
                    <h4 className='text-center'>Login</h4>
                      <div className='input-group'>
                        <input type='text' id='username' placeholder='username' className='form-control'/>
                      </div>
                      <div className='input-group'>
                      <input type='text' id='password' placeholder='password' className='form-control'/>
                    </div>
                    <div className='input-group'>
                    <input type='submit' value='Login as user' />
                  </div>
                  <div className='input-group'>
                  <input className='text-center text-info'  onClick={toggleSignup}/>Dont have an Account! SignUp
                </div>
                    </div>
                  ):(
                    <div className='login-wrapper'>
                    <h4 className='text-center'>SignUp</h4>
                      <div className='input-group'>
                        <input type='text' id='username' placeholder='username' className='form-control'/>
                      </div>
                      <div className='input-group'>
                      <input type='text' id='password' placeholder='password' className='form-control'/>
                    </div>
                    <div className='input-group'>
                    <input type='email' id='email' placeholder='email' className='form-control'/>
                  </div>
                   
                  <div className='input-group'>
                  <div className='text-center text-info'  onClick={toggleSignup}/>Dont have an Account! SignUp
                </div>
                    </div>
                  )
                  
                }
                </div>
            </div>

          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <h2>Welcome to Ecommerce Site</h2>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
export default Login;