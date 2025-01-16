import React,{useState} from 'react'
import { Route, Switch } from "react-router";
import MainPage from './MainPage';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
function LoginPage() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/user/login", loginData);
      localStorage.setItem("token", response.data.token);
      setIsAuthenticated(true);
      navigate("/main");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    fetch();
  };


  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">
                <form onSubmit={handleLogin}>
                  <p>Please login to your account</p>
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example11">
                      Username
                    </label>
                    <input
                      type="email"
                      id="form2Example11"
                      className="form-control"
                      placeholder="Phone number or email address"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example22">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form2Example22"
                      className="form-control"
                      value={loginData.password}
                      onChange={(e) =>
                        setLoginData({ ...loginData, password: e.target.value })
                      }
                    />
                  </div>

                  <div className="text-center pt-1 mb-5 pb-1">
                    <button
                      className="btn btn-primary btn-block fa-lg gradient-custom-1 mb-3"
                      type="submit"
                    >
                      Log in
                    </button>
                  </div>

                  <div className="d-flex align-items-center justify-content-center pb-4">
                    <p className="mb-0 me-2">Don't have an account?</p>
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => navigate("/register")}
                    >
                      Create new
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default LoginPage
