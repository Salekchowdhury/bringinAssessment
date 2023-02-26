import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ShowAlert from "../alert/ShowAlert";
import LoginApis from "../apis/LoginApis";


const Navbar =()=>{
const navigation =useNavigate();

var authButton = localStorage.getItem('auth_token');
  
const logoutSubmit =async(e)=>{
  e.preventDefault();
  const res = await LoginApis.logout()
  if(res.data.status =200){
   localStorage.removeItem('auth_token');
   localStorage.removeItem('auth_name');
   ShowAlert.swal('Success', res.data.message, 'success')
   navigation('/login');

  }

}

    return(
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" to="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
        {!authButton ? <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/registration">Registration</Link>
        </li> 
        </ul> : <ul  className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/book">Books</Link>
        </li>
        <li className="nav-item">
          <button onClick={logoutSubmit} className="nav-link  btn  btn-danger btn-sm text-white">Logout</button>
        </li>
          </ul>}
      
    </div>
  </div>
        </nav>
    )
}
export default Navbar;