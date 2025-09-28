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

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) newErrors.name = 'Name is required';
    else if (!/^[A-Za-z ]+$/.test(name)) newErrors.name = 'Name must contain only letters';

    if (!email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = 'Email is invalid';

    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    if (!mobile.trim()) newErrors.mobile = 'Mobile number is required';
    else if (!/^[6-9]\d{9}$/.test(mobile)) newErrors.mobile = 'Enter valid 10-digit Indian mobile number';

    if (!address.trim()) newErrors.address = 'Address is required';

    if (!city) newErrors.city = 'City is required';

    if (!gender) newErrors.gender = 'Gender is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
        setOutput('User registered successfully!');
        setErrors({});
      })
      .catch((error) => {
        console.error(error);
        setOutput('User registration failed.');
      });
  };

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
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row justify-content-center g-5">
          <div className="col-12 col-md-10 col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="display-5 mb-4 text-center">
              Register <span className="text-primary">Here!!!</span>
            </h1>
            <form>
              {output && <p className="alert alert-success">{output}</p>}

              <div className="form-group mb-3">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                />
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="mobile">Mobile:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setMobile(e.target.value)}
                  value={mobile}
                />
                {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="address">Address:</label>
                <textarea
                  rows="5"
                  className="form-control"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                ></textarea>
                {errors.address && <small className="text-danger">{errors.address}</small>}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="city">City:</label>
                <Select
                  options={cityOptions}
                  value={city}
                  onChange={setCity}
                  placeholder="Search or select city"
                  isClearable
                />
                {errors.city && <small className="text-danger">{errors.city}</small>}
              </div>

              <div className="form-group mb-3">
                <label htmlFor="gender">Gender:</label>
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
                {errors.gender && <small className="text-danger">{errors.gender}</small>}
              </div>

              <button type="button" className="btn btn-success w-100 mt-3" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
