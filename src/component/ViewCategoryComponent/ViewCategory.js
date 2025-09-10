import './ViewCategory.css';
import {useEffect,useState} from 'react';
import axios from 'axios';
import{__categoryapiurl} from '../../API_URL';
import {Link} from 'react-router-dom';





function ViewCategory() {
  const [cDetails,setCdetails]=useState([]);

  useEffect(()=>{
    axios.get(__categoryapiurl +"fetch").then((response)=>{
      // console.log(response.data);
      setCdetails(response.data);
    }).catch((error)=>{
      console.log(error);
    })
  })

  return (
    <>
    <div class="container-xxl py-5">
    <div class="container">
        <div class="row g-4">
            <div class="col-12 wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="text-primary text-uppercase text-center mb-4">View Categories</h6>

                {/*-- Main Category Grid -->*/}
                <div id="main" class="row">
                    {
                      cDetails.map((row) => (
                        <div class="col-md-4 col-lg-3">
                        <Link to={`/viewscategory/${row.catnm}`}>
                            <div class="card category-card shadow-sm border-light rounded">
                                <img src={`./assets/uploads/caticons/${row.caticonnm}`} class="card-img-top" alt={row.catnm} style={{"height": "180px", "object-fit": "cover"}}/>
                                <div class="card-body text-center">
                                    <h5 class="card-title text-primary">{row.catnm}</h5>
                                </div>
                            </div>
                            </Link>
                        </div>
                      ))
                    }
                </div>
            </div>
        </div>
    </div>
</div>
    </>
   
  );
}

export default ViewCategory;
