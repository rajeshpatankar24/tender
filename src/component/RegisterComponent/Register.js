import './Register.css';
import { useState ,useEffect} from 'react';
import Select from 'react-select';

import axios from 'axios';
import { __urlapi } from '../../API_URL';

function Register() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
   const [cityOptions, setCityOptions] = useState([]);
  const [city, setCity] = useState(null);
  const [gender, setGender] = useState();
  const [output, setOutput] = useState();
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    } else if (!/^[A-Za-z ]+$/.test(name)) {
      newErrors.name = 'Name must contain only letters';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(mobile)) {
      newErrors.mobile = 'Enter valid 10-digit Indian mobile number';
    }

    if (!address.trim()) {
      newErrors.address = 'Address is required';
    }

    if (!city) {
      newErrors.city = 'City is required';
    }

    if (!gender) {
      newErrors.gender = 'Gender is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };



  const handleSubmit = () => {

    const userDetails = { "name": name, "email": email, "password": password, "mobile": mobile, "address": address, "city": city?.value || "", "gender": gender };
    if (validate()) {
      // Normally submit the form or call API here
      setOutput('Registration successful!');
    } else {
      setOutput('');
    }
    axios.post(__urlapi + "save", userDetails).then(() => {
      //console.log(userDetails);
      setName("");
      setEmail("");
      setPassword("");
      setMobile("");
      setAddress("");
      setCity("");
      setOutput("User register successfully....");
    }).catch((error) => {
      console.log(error);
      setOutput("User registeration failed....");
    });
  };
  useEffect(() => {
    axios.post('https://countriesnow.space/api/v0.1/countries/cities', {
      country: 'India'
    })
    .then(res => {
      const formattedCities = res.data.data.map(city => ({
        value: city,
        label: city
      }));
      setCityOptions(formattedCities);
    })
    .catch(err => {
      console.error('Error fetching cities:', err);
    });
  }, []);

  return (
    <>
       <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5" style={{ paddingLeft: '350px' }}>
          <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
            <h1 className="display-5 mb-4">
              Register <span className="text-primary">Here!!!</span>
            </h1>
            <form>
              {output && <p className="alert alert-success">{output}</p>}

              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={e => setName(e.target.value)}
                  value={name}
                />
                {errors.name && <small className="text-danger">{errors.name}</small>}
              </div>

              <br />
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input
                  type="email"
                  className="form-control"
                  onChange={e => setEmail(e.target.value)}
                  value={email}
                />
                {errors.email && <small className="text-danger">{errors.email}</small>}
              </div>

              <br />
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={e => setPassword(e.target.value)}
                  value={password}
                />
                {errors.password && <small className="text-danger">{errors.password}</small>}
              </div>

              <br />
              <div className="form-group">
                <label htmlFor="mobile">Mobile:</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={e => setMobile(e.target.value)}
                  value={mobile}
                />
                {errors.mobile && <small className="text-danger">{errors.mobile}</small>}
              </div>

              <br />
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <textarea
                  rows="5"
                  className="form-control"
                  onChange={e => setAddress(e.target.value)}
                  value={address}
                ></textarea>
                {errors.address && <small className="text-danger">{errors.address}</small>}
              </div>

              <br />
              <div className="form-group">
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

              <br />
              <div className="form-group">
                <label htmlFor="gender">Gender:&nbsp;&nbsp;</label>
                Male{' '}
                <input
                  type="radio"
                  onChange={e => setGender(e.target.value)}
                  value="male"
                  name="gender"
                />
                &nbsp;&nbsp;
                Female{' '}
                <input
                  type="radio"
                  onChange={e => setGender(e.target.value)}
                  value="female"
                  name="gender"
                />
                <br />
                {errors.gender && <small className="text-danger">{errors.gender}</small>}
              </div>

              <br />
              <button type="button" className="btn btn-success" onClick={handleSubmit}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Register;

