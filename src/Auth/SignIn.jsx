import React from "react";
import { Button } from "../styles/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css";
import { Link,useNavigate } from "react-router-dom";
import { UserAuth } from "../context/authcontext";
import { useState } from "react";
import Header from "../componets/Header1";


const SignUp = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const navigate=useNavigate();
  const {signIn} = UserAuth();

  const handleonClick = async(e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email,password)
      navigate("/home")
    } catch (error) {
      setError(error.message)
      console.log(error.message)
    }
  }
  return (
    <>
      <Header/>
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log In</h3>
          <div className="text-center">
            Already registered?
            <span className="link-primary" >
              <Link to="/SignUp">SignUp</Link>
            </span>
            <span className="link-primary"></span>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              id="email"
              required
              onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control mt-1"
              placeholder="Enter password"
              required
              onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Button type="submit" className="btn btn-primary" onClick={handleonClick}>
            Login with existing account
            </Button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};
export default SignUp;
