import './ViewBid.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { __bidproductapiurl } from '../../API_URL';
import { useParams } from 'react-router-dom';
function ViewBid() {
  const [bDetails, setBidDetails] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios.get(__bidproductapiurl + "fetch?_id=" + params._id).then((response) => {
      setBidDetails(response.data);
    });
  })


  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <h3 class="text-success text-uppercase">Bid Details </h3>
              <table class="table table-bordered">
                <tr>
                  <td>bidding Id</td>
                  <td>Product Id</td>
                  <td>User Id</td>
                  <td>bidding Price</td>
                  <td>info</td>
                </tr>
                {
                  bDetails.map((row) => (
                    <tr>
                      <td>{row._id}</td>
                      <td>{row.p_id}</td>
                      <td>{row.u_id}</td>
                      <td>{row.bidprice}</td>
                      <td>{row.info}</td>
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

export default ViewBid;
