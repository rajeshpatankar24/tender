
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
  const [output, setOutput] = useState('');
  const [isSuccess, setIsSuccess] = useState(null); // New state for success/error flag
  const loginSectionRef = useRef();

  // Scroll to the login section when the component mounts
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

    const userDetails = { "email": email, "password": password };

    axios.post(__urlapi + "login", userDetails)
      .then((response) => {
        setEmail("");
        setPassword("");
        setOutput("Login successful!");
        setIsSuccess(true); // Mark success
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

        // Navigate to the appropriate dashboard based on role
        (user.role === "admin") ? navigate("/admin") : navigate("/user");

      })
      .catch((error) => {
        setIsSuccess(false); // Mark error
        setOutput("Invalid email or incorrect password");
        toast.error('Invalid email or password!');
      });
  };

  return (
    <>
      <div ref={loginSectionRef} className="container-xxl py-5" id="login">
        <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
          <div className="row g-5 w-100" style={{ paddingLeft: '350px' }}>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h1 className="display-5 mb-4 text-center">Login <span className="text-success">Here!!!</span></h1>
              {/* Show output message with color based on success */}
              <span style={{ color: isSuccess === null ? 'initial' : isSuccess ? 'green' : 'red' }}>
                {output}
              </span>
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
                <div className="form-group mb-3">
                  <label htmlFor="pwd">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    placeholder="Enter your password"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="btn btn-success w-100"
                    onClick={handleSubmit}>
                    Login
                  </button>
                  <ToastContainer />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;























// (user.role =="admin")?navigate("/admin"):navigate("/user");
