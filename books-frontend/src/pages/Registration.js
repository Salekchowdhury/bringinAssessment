
import React, { useState } from "react"
import { Link } from "react-router-dom";
import RegistrationApis from "../apis/RegistrationApis";
const Registration= ()=>{
const [status, setStatus]=useState('');
    const [userInput, setUserInput] =useState({
        name:'',
        email:'',
        password:'',
    });
// console.log('status is',status );
    const handleInput = (e)=>{
        e.persist();
        setUserInput({...userInput, [e.target.name]: e.target.value})
    }

    const onSubmitUserData = async(e)=>{
        e.preventDefault();
        const data = userInput;
        const res = await RegistrationApis.store(data)
        if(res){
            setStatus(res.data.message);
        }

    }
    // console.log(userInput);
    return(
        <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">
                {status? <small className=" alert alert-success">{status}</small>: ''}
                  <div className="mb-md-5 mt-md-4 pb-5">
           
                    <h2 className="fw-bold mb-2 text-uppercase">Create Account</h2>
                    <form onSubmit={onSubmitUserData}>
                    <div className="form-outline form-white mb-4">
                      <input type="text" onChange={handleInput} value={userInput.name} name="name" placeholder='Full Name...' id="typeEmailX" className="form-control form-control-lg" />
                    </div>
                    <div className="form-outline form-white mb-4">
                      <input type="email" onChange={handleInput} value={userInput.email} name="email" placeholder='Email...' id="typeEmailX" className="form-control form-control-lg" />
                    </div>
      
                    <div className="form-outline form-white mb-4">
                      <input type="password" onChange={handleInput} value={userInput.password} name="password" placeholder='Password...' id="typePasswordX" className="form-control form-control-lg" />
      
                    </div>
                    <button className="btn btn-outline-light btn-lg px-5" type="submit">Sign Up</button>
                  </form>
                  </div>
      

                  <div>
                    <p className="mb-0">Have an account? <Link to="/login" className="text-white-50 fw-bold">Sign In</Link>
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
export default Registration;