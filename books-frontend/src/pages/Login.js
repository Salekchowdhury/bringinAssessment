import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert2';
import ShowAlert from '../alert/ShowAlert';
import LoginApis from '../apis/LoginApis';

const Login = () => {

  const navigation = useNavigate();
const [loginInput, setLoginInput] =useState({
    email: '',
    password: '',
    error_list: [],
});

const handleInputChange =(e)=>{
    e.persist();
    setLoginInput({...loginInput, [e.target.name]: e.target.value})

}



    const handleSubmit= async(e)=>{
          e.preventDefault();
          const data = loginInput;
          const res = await LoginApis.login(data);
          console.log('sss', res);
          if(res.data.status == 200){
            localStorage.setItem('auth_token', res.data.token)
            localStorage.setItem('auth_name', res.data.userName)
            // swal('Success',res.data.message, 'success')
            ShowAlert.swal("Success",res.data.message, 'success');
            navigation('/book')

          }else if(res.data.status == 401){
            ShowAlert.swal("Warning", res.data.message, 'warning');
          }else{
            setLoginInput({...loginInput, error_list: res.data.validation_error})
          }
    }

 

  return (
    <section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white">
          <div className="card-body p-5 text-center">
            <div className="mb-md-5 mt-md-4 pb-5">
              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>
              <form onSubmit={handleSubmit}>
                 <div className="form-outline form-white mb-4">
                     <input type="email" onChange={handleInputChange} value={loginInput.email} name="email" placeholder='Email...' id="typeEmailX" className="form-control form-control-lg" />
                     <small className='text-danger me-auto'>{loginInput.error_list.email}</small>
                </div>
                <div className="form-outline form-white mb-4">
                    <input type="password"  onChange={handleInputChange} value={loginInput.password} name="password" placeholder='Password...' id="typePasswordX" className="form-control form-control-lg" />
                    <small className='text-danger'>{loginInput.error_list.password}</small>
                </div>
                 <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
              </form>
 
            </div>
            <div>
              <p className="mb-0">Don't have an account? <Link to="/registration" className="text-white-50 fw-bold">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}
export default Login;
