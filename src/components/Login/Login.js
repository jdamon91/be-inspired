import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config';
import videoBg from '../../images/video6.mp4';
import './Login.css';

const Login = ({ setAuth, setUserInfo }) => {

  const [inputs, setInputs] = useState({
    username: "",
    passwordInput: ""
  });
  const [err, setError] = useState("");
  const { API_ENDPOINT } = config;
  const { username, passwordInput } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async e => {
    e.preventDefault();

    try {
      const body = { username, passwordInput };
      const response = await fetch(`${API_ENDPOINT}/login`, {
        method: "POST",
        headers: {"Content-type" : "application/json"},
        body: JSON.stringify(body)
      });
      const parseRes = await response.json()
      console.log("Logging in")
      console.log(parseRes)
      localStorage.setItem("token", parseRes.token)
      setUserInfo(parseRes.userInfo)
      setAuth(true);
    } catch (err) {
      console.error(err.message)
      setError("Wrong username or password, try again!")
    }
  };

  const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }

  return (
    <Fragment>
      <video autoPlay muted loop id="myVideo">
        <source src={videoBg} type="video/mp4" />
      </video>
      <div className='signin fade-in-login'>
        <form id="sign-in" className="form-container" onSubmit={onSubmitForm}>
          <div className="container">
            <i id="login-icon" class="fab fa-atlassian"></i>
            <h3 className="signup-sub-heading"><span className="green">Welcome</span> Back!</h3>
            <div id="login-row" className="row flex-col">
              <div className='input-field'>
                <input typeof='text' value={username} onChange={e => onChange(e)} name="username" placeholder="Username" required/>
              </div>
              <div className='input-field'>
                <input type='password' value={passwordInput} onChange={e => onChange(e)} name="passwordInput" placeholder="Password" required/>
              </div>
            </div>
          </div>
          <div className="err-msg">
            {err}
          </div>
          <button id="profile-submit" className="">Sign In <i className="fas fa-caret-right"></i></button>
          <span className="mt-5"></span>
          <Link to="/Signup" onClick={closeNav} className="green">Create Account <i className="fas fa-angle-right"></i></Link>
        </form>
      </div>
    </Fragment>
  )
}

export default Login;