import './Register.css';
import { useState } from 'react';
import axios from 'axios';
import { __urlapi } from '../../API_URL';

function Register() {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  const [output, setOutput] = useState();

  const handleSubmit = () => {
    
    const userDetails = { "name": name, "email": email, "password": password, "mobile": mobile, "address": address, "city": city, "gender": gender };
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

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5" style={{ paddingLeft: '350px' }}>
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
              
              <h1 class="display-5 mb-4">Register <span class="text-primary">Here!!!</span></h1>
              <form>
                <p class="alert-success" color="blue">{output}</p>
                <div class="form-group">
                  <label for="name">Name:</label>
                  <input type="text" class="form-control" onChange={e => setName(e.target.value)} value={name} />
                </div>
                <br />
                <div class="form-group">
                  <label for="email">Email address:</label>
                  <input type="email" class="form-control" onChange={e => setEmail(e.target.value)} value={email} />
                </div>
                <br />
                <div class="form-group">
                  <label for="pwd">Password:</label>
                  <input type="password" class="form-control" onChange={e => setPassword(e.target.value)} value={password} />
                </div>
                <br />
                <div class="form-group">
                  <label for="mobile">Mobile:</label>
                  <input type="text" class="form-control" onChange={e => setMobile(e.target.value)} value={mobile} />
                </div>
                <br />
                <div class="form-group">
                  <label for="address">Address:</label>
                  <textarea rows="5" class="form-control" onChange={e => setAddress(e.target.value)} value={address} ></textarea>
                </div>
                <br />
                <div class="form-group">
                  <label for="city">City:</label>
                  <select class="form-control" onChange={e => setCity(e.target.value)} value={city} >
                    <option>Select City</option>
                    <option>Indore</option>
                    <option>Bhopal</option>
                    <option>Ujjain</option>
                  </select>
                </div>
                <br />
                <div class="form-group">
                  <label for="gender">Gender:&nbsp;&nbsp;</label>
                  Male <input type="radio" onChange={e => setGender(e.target.value)} value="male" name="gender" />
                  &nbsp;&nbsp;
                  Female <input type="radio" onChange={e => setGender(e.target.value)} value="female" name="gender" />
                </div>
                <br />
                <button type="button" class="btn btn-success" onClick={handleSubmit}>Submit</button>
              </form>

            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Register;

