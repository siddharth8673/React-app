import React, { useState } from "react";
import { Button } from "../styles/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/authcontext";
import {useNavigate} from "react-router-dom"
import Header from "../componets/Header1";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await createUser(email, password);
      navigate("/home")
    } catch (error) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
  <>
  <Header/>
    <div className="Auth-form-container">
      <form className="Auth-form" >
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Create Account</h3>
          <div className="text-center">
            Already registered?
            <span className="link-primary">
              <Link to="/Signin">Sign In</Link>
            </span>
            <span className="link-primary"></span>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
              id="email"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              id="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <Button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Create Account
            </Button>
          </div>
        </div>
      </form>
    </div>
    </>
  );
};
export default SignUp;
