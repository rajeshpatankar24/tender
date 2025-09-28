import './Login.css';
import axios from 'axios';
import { useState, useRef, useEffect } from 'react';
import { __urlapi } from '../../API_URL';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // 👈 New state
  const [output, setOutput] = useState('');
  const [isSuccess, setIsSuccess] = useState(null);
  const loginSectionRef = useRef();

  useEffect(() => {
    if (loginSectionRef.current) {
      loginSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleSubmit = () => {
    if (!email || !password) {
      setOutput("Please enter both email and password");
      setIsSuccess(false);
      return;
    }

    const userDetails = { email, password };

    axios.post(__urlapi + "login", userDetails)
      .then((response) => {
        setEmail("");
        setPassword("");
        setOutput("Login successful!");
        setIsSuccess(true);
        toast.success('Login successful!');

        const user = response.data.userdetails;
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", user.name);
        localStorage.setItem("email", user.email);
        localStorage.setItem("mobile", user.mobile);
        localStorage.setItem("address", user.address);
        localStorage.setItem("city", user.city);
        localStorage.setItem("gender", user.gender);
        localStorage.setItem("role", user.role);
        localStorage.setItem("info", user.info);

        navigate(user.role === "admin" ? "/admin" : "/user");
      })
      .catch((error) => {
        setIsSuccess(false);
        setOutput("Invalid email or incorrect password");
        toast.error('Invalid email or password!');
      });
  };

  return (
    <>
      <div ref={loginSectionRef} className="container-xxl py-5" id="login">
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <div className="row justify-content-center w-100 g-5">
            <div className="col-12 col-md-8 col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="display-5 mb-4 text-center">
                Login <span className="text-success">Here!!!</span>
              </h1>

              {output && (
                <div className={`alert ${isSuccess ? 'alert-success' : 'alert-danger'}`}>
                  {output}
                </div>
              )}

              <form>
                <div className="form-group mb-3">
                  <label htmlFor="email">Email address:</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group mb-2">
                  <label htmlFor="pwd">Password:</label>
                  <input
                    type={showPassword ? 'text' : 'password'} // 👈 Toggle type
                    className="form-control"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    placeholder="Enter your password"
                  />
                </div>

                {/* ✅ Show Password Toggle */}
                <div className="form-check mb-3">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="showPassword"
                    checked={showPassword}
                    onChange={() => setShowPassword(!showPassword)}
                  />
                  <label className="form-check-label" htmlFor="showPassword">
                    Show Password
                  </label>
                </div>

                <button
                  type="button"
                  className="btn btn-success w-100"
                  onClick={handleSubmit}>
                  Login
                </button>

                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
