import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { __productapiurl } from '../../API_URL';
import { Link } from 'react-router-dom';

const User = () => {
  const [tenders, setTenders] = useState([]);

  useEffect(() => {
    // Fetch tenders when the component mounts
    axios.get(__productapiurl + "fetch")
      .then(response => {
        setTenders(response.data); // Assuming the API returns a list of tenders
      })
      .catch(error => {
        console.error("There was an error fetching the tenders:", error);
      });
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
            <h4 className="text-success text-uppercase">User Home</h4>
            <h1 className="mb-4">We Are Trusted Tender Company Since 1990</h1>

            {/* Displaying all tenders */}
            <h2 className="mt-5 text-success">All Tenders</h2>
            <div className="tender-list">
              {tenders.length > 0 ? (
                tenders.map((row) => (
                  <div key={row} className="tender-card mb-4 p-4 border rounded shadow-sm">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th colSpan="2" className="text-center text-primary">
                            <center>
                            <td><strong>Title:</strong></td>
                            <td>{row.title}</td>
                            </center>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td><strong>Description:</strong></td>
                          <td>{row.description}</td>
                        </tr>
                        <tr>
                          <td><strong>Base Price:</strong></td>
                          <td>₹{row.baseprice}</td>
                        </tr>
                        <tr>
                          <td><strong>Category:</strong></td>
                          <td>{row.catnm} - {row.subcatnm}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="d-flex justify-content-end">
                      
                      <Link to={`/viewproduct/${row.subcatnm}`} >
                      <a  className="btn btn-primary"> View Tender Details </a>
                    </Link>
                   
                    </div>
                  </div>
                ))
              ) : (
                <p>No tenders available at the moment.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
