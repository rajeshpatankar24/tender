import './CPAdmin.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { __urlapi } from '../../API_URL';
import { useNavigate } from 'react-router-dom';

function CPAdmin() {
  const navigate = useNavigate();
  const [opassword, setOldPassword] = useState();
  const [npassword, setNewPassword] = useState();
  const [cnpassword, setConfirmNewPassword] = useState();
  const [output, setOutput] = useState();

  useEffect(() => {

  });
  const handleSubmit = () => {

    var condition_obj = { "email": localStorage.getItem("email"),"password":opassword };
    axios.get(__urlapi + "fetch", {
      params: { condition_obj: condition_obj }
    }).then((response) => {
      console.log(response.data)
      if (npassword == cnpassword) {
        const update_details = { "condition_obj": { "email": localStorage.getItem("email") }, "content_obj": { "password": cnpassword } };
        axios.patch(__urlapi + "update", update_details).then((response) => {
          alert("Password changed successfully.please login again....");
          navigate('/logout')
        })
      }
      else{
        setOutput("New password & confirm new password mismatch ,please try again... ");
        setNewPassword("");
        setConfirmNewPassword("");

      }
    }).catch((error) => {
     setOutput("Invalid old password, please try again.... ")
     setOldPassword("");
    });



  }
  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <h1 class="display-5 mb-4">Password change <span class="text-success">Here!!!</span></h1>
              <span style={{ "color": "green" }}>{output}</span>
              <form>
                <br />
                <div class="form-group">
                  <label for="opwd">Password:</label>
                  <input type="password" class="form-control" onChange={e => setOldPassword(e.target.value)} value={opassword} placeholder='Enter  old password' />
                </div>
                <br />

                <div class="form-group">
                  <label for="npwd">Password:</label>
                  <input type="password" class="form-control" onChange={e => setNewPassword(e.target.value)} value={npassword} placeholder='Enter new password' />
                </div>
                <br />

                <div class="form-group">
                  <label for="cnpwd">Password:</label>
                  <input type="password" class="form-control" onChange={e => setConfirmNewPassword(e.target.value)} value={cnpassword} placeholder='Enter confirm new password' />
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

export default CPAdmin;
