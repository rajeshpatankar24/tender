import './Register.css';
import { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { __urlapi } from '../../API_URL';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [cityOptions, setCityOptions] = useState([]);
  const [city, setCity] = useState(null);
  const [gender, setGender] = useState('');
  const [output, setOutput] = useState('');
  const [errors, setErrors] = useState({});

  // ---------------- VALIDATION ----------------
  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Name is required';
    else if (!/^[A-Za-z ]+$/.test(name)) newErrors.name = 'Name must contain only letters';

    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = 'Email is invalid';

    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    if (!mobile.trim()) newErrors.mobile = 'Mobile number is required';
    else if (!/^[6-9]\d{9}$/.test(mobile)) newErrors.mobile = 'Enter valid 10-digit mobile number';

    if (!address.trim()) newErrors.address = 'Address is required';
    if (!city) newErrors.city = 'City is required';
    if (!gender) newErrors.gender = 'Gender is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ---------------- SUBMIT ----------------
  const handleSubmit = () => {
    const userDetails = {
      name,
      email,
      password,
      mobile,
      address,
      city: city?.value || '',
      gender,
    };

    if (!validate()) {
      setOutput('');
      return;
    }

    axios
      .post(__urlapi + 'save', userDetails)
      .then(() => {
        setName('');
        setEmail('');
        setPassword('');
        setMobile('');
        setAddress('');
        setCity(null);
        setGender('');
        setOutput('✅ User registered successfully!');
        setErrors({});
      })
      .catch((error) => {
        console.error(error);
        setOutput('❌ User registration failed.');
      });
  };

  // ---------------- FETCH CITY DATA ----------------
  useEffect(() => {
    axios
      .post('https://countriesnow.space/api/v0.1/countries/cities', {
        country: 'India',
      })
      .then((res) => {
        const formattedCities = res.data.data.map((city) => ({
          value: city,
          label: city,
        }));
        setCityOptions(formattedCities);
      })
      .catch((err) => {
        console.error('Error fetching cities:', err);
      });
  }, []);

  return (
    <div className="register-section d-flex align-items-center justify-content-center py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="card shadow-lg border-0 rounded-4 p-4 p-md-5 bg-white">
              <h2 className="text-center mb-4 fw-bold text-primary">Create Your Account</h2>
              {output && (
                <div className={`alert ${output.includes('✅') ? 'alert-success' : 'alert-danger'}`}>
                  {output}
                </div>
              )}

              {/* NAME */}
              <div className="form-group mb-3">
                <label className="fw-semibold">Full Name</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter your full name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>

              {/* EMAIL */}
              <div className="form-group mb-3">
                <label className="fw-semibold">Email Address</label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="example@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>

              {/* PASSWORD */}
              <div className="form-group mb-3">
                <label className="fw-semibold">Password</label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>

              {/* MOBILE */}
              <div className="form-group mb-3">
                <label className="fw-semibold">Mobile Number</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="10-digit mobile number"
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                />
                {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
              </div>

              {/* ADDRESS */}
              <div className="form-group mb-3">
                <label className="fw-semibold">Address</label>
                <textarea
                  rows="3"
                  className="form-control form-control-lg"
                  placeholder="Enter your full address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                ></textarea>
                {errors.address && <small className="text-danger">{errors.address}</small>}
              </div>

              {/* CITY */}
              <div className="form-group mb-3">
                <label className="fw-semibold">City</label>
                <Select
                  options={cityOptions}
                  value={city}
                  onChange={setCity}
                  placeholder="Search or select city"
                  isClearable
                  styles={{
                    control: (base) => ({
                      ...base,
                      padding: '4px',
                      borderRadius: '8px',
                    }),
                  }}
                />
                {errors.city && <small className="text-danger">{errors.city}</small>}
              </div>

              {/* GENDER */}
              <div className="form-group mb-4">
                <label className="fw-semibold d-block mb-2">Gender</label>
                <div className="d-flex gap-4">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={(e) => setGender(e.target.value)}
                      checked={gender === 'male'}
                    />
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={(e) => setGender(e.target.value)}
                      checked={gender === 'female'}
                    />
                    <label className="form-check-label">Female</label>
                  </div>
                </div>
                {errors.gender && <small className="text-danger">{errors.gender}</small>}
              </div>

              {/* BUTTON */}
              <button
                type="button"
                className="btn btn-primary btn-lg w-100 shadow-sm"
                onClick={handleSubmit}
              >
                Register Now
              </button>

              {/* Redirect Link */}
              <p className="text-center mt-3 mb-0">
                Already have an account?{' '}
                <a href="/login" className="text-decoration-none text-primary fw-semibold">
                  Login here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
