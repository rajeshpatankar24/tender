import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { __urlapi } from '../../API_URL';



function ManageUser() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState([]);

  useEffect(() => {
    var condition_obj = { "role": "user" };
    axios.get(__urlapi + "fetch", {
      params: { condition_obj: condition_obj }
    }).then((response) => {
      // console.log(response.data);
      setUserDetails(response.data);
    }).catch((error) => {
      console.log(error);
    });
  });
  var changestatususer = (_id, s) => {
    if (s == "verify") {
      var update_details = { "condition_obj": { "_id": _id }, "content_obj": { "status": 1 } };
      axios.patch(__urlapi + "update", update_details).then((response) => {
        alert("User verified successfully....");
        navigate("/manageuser");
      });
    }
    else if (s == "block") {
      var update_details = { "condition_obj": { "_id": _id }, "content_obj": { "status": 0 } };
      axios.patch(__urlapi + "update", update_details).then((response) => {
        alert("User blocked successfully....");
        navigate("/manageuser");
      });
    }
    else {
      var delete_details = { "data": { "_id": _id } };
      axios.delete(__urlapi + "delete", delete_details).then((response) => {
        alert("User deleted successfully....");
        navigate("/manageuser");
      });
    }
  };


  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <h3 class="text-success text-uppercase">View and manage users here!!!  </h3>
              <table className='table table-bordered' cellPadding={"10px"}>
                <tr>
                  <th>RegID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Address</th>
                  <th>City</th>
                  <th>Gender</th>
                  <th>Info</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>

                {
                  userDetails.map((row) => (
                    <tr>
                      <td>{row._id}</td>
                      <td>{row.name}</td>
                      <td>{row.email}</td>
                      <td>{row.mobile}</td>
                      <td>{row.address}</td>
                      <td>{row.city}</td>
                      <td>{row.gender}</td>
                      <td>{row.info}</td>
                      <td>
                        {row.status == 1 ? <font color="green">Verified</font> : <font color="orange">Blocked</font>}
                      </td>
                      <td>
                        {row.status == 1 ? <font onClick={() => changestatususer(row._id, 'block')} color="blue">Change Status</font> : <font onClick={() => changestatususer(row._id, 'verify')} color="blue">Change Status</font>}
                        <br />
                        <font onClick={() => changestatususer(row._id, 'delete')} color="red">DELETE</font>
                      </td>
                    </tr>
                  ))
                }

              </table>


            </div>

          </div>
        </div>
      </div>
    </>

  );
}

export default ManageUser;
