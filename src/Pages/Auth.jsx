import React from 'react'
import LoginImg from '../assets/login.png'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Auth = ({insideRegister}) => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{width:"100%",height:"100vh"}}>
      <div className="container w-75">
        <div className="card shadow p-2">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img className='w-100' src={LoginImg} alt="login" />
            </div>
            <div className="col-lg-6">
              <h1 className='fw-bolder mt-2'><i className='fa-solid fa-diagram-project me-1'></i>Project Fair</h1>
              <h5 className="fw-bolder mt-2">
                Sign {insideRegister?"Up":"In"} to your Account
              </h5>
              <Form>
                {
                  insideRegister &&
                  <FloatingLabel
          controlId="floatingInputname"
          label="username"
          className="mb-2"
        >
          <Form.Control type="text" placeholder="Username" />
        </FloatingLabel>
                }
                <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-2"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
        {
          insideRegister?
          <div className="mt-3">
          <button className="btn btn-primary mb-2">Register</button>
          <p>Already have an Account ? Click Here to <Link to={'/login'}>Login</Link></p>
          </div>
          :
          <div className="mt-3">
          <button className="btn btn-primary mb-2">Login</button>
          <p>New User ? Click Here to <Link to={'/register'}>Register</Link></p>
          </div>
        }

              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth