import './ViewBidProduct.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { __productapiurl } from '../../API_URL';
import { Link } from 'react-router-dom';
function ViewBidProduct() {

  const [pDetails, setPDetails] = useState([]);

  useEffect(() => {
    axios.get(__productapiurl + "fetch?uid=" + localStorage.getItem('email')).then((response) => {
      setPDetails(response.data);
    }).catch((error) => {
      console.log(error)
    },[]);

  })
  return (
    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
              <h3 class="text-success text-uppercase">View Tender Detail </h3>
              
              <table class="table table-bordered">
                <tr>
                  <th>Productid</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Base Price</th>
                  <th>picon</th>
                  <th>Info</th>
                  <th>Action</th>
                </tr>
                {
                  pDetails.map((row) => (
                    <tr>
                      <td>{row._id}</td>
                      <td>{row.title}</td>
                      <td>{row.subcatnm}</td>
                      <td>{row.description}</td>
                      <td>{row.baseprice}</td>
                      <td>{row.piconnm}</td>
                      <td>{row.info}</td>
                      <td><Link to={`/viewbid/${row._id}`}>view Bid</Link></td>
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

export default ViewBidProduct;

