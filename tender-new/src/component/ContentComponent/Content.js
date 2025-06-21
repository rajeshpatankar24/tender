import './Content.css';
import {Link} from 'react-router-dom';


function Content() {
  return (
    <>
    {/* content Start */}
    <div class="container-xxl py-5">
        <div class="container">
        <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
  <h6 class="text-secondary text-uppercase">Home</h6>
  <h1 class="mb-4">We Are Trusted Tender Company Since 1990</h1>
  <p class="mb-4">
    We have been a reliable partner for businesses and governments in providing top-notch tender services for over three decades. Our expertise and commitment to excellence have made us a trusted name in the industry.
  </p>

  <div class="row mb-5">
    <div class="col-md-6">
      <p class="fw-medium text-primary"><i class="fa fa-check text-success me-3"></i>Wide Range of Tender Services</p>
      <p class="fw-medium text-primary"><i class="fa fa-check text-success me-3"></i>Quality Services and Timely Delivery</p>
      <p class="fw-medium text-primary"><i class="fa fa-check text-success me-3"></i>Expert Consultation & Support</p>
    </div>
    <div class="col-md-6">
      <p class="fw-medium text-primary"><i class="fa fa-check text-success me-3"></i>Trusted by Leading Companies</p>
      <p class="fw-medium text-primary"><i class="fa fa-check text-success me-3"></i>Transparent and Fair Bidding Process</p>
      <p class="fw-medium text-primary"><i class="fa fa-check text-success me-3"></i>Comprehensive Industry Coverage</p>
    </div>
  </div>

 {/* About Section */}
  <div class="row mb-5">
    <div class="col-lg-6">
      <h2 class="mb-4">Why Choose Us?</h2>
      <p class="text-muted">
        Our experience in the tendering industry has allowed us to build solid relationships with clients and vendors. We offer exceptional service, ensuring that every tender meets the highest standards.
      </p>
      <ul class="list-unstyled">
        <li><i class="fa fa-check-circle text-success me-2"></i>Comprehensive Tender Solutions</li>
        <li><i class="fa fa-check-circle text-success me-2"></i>100% Transparency in Process</li>
        <li><i class="fa fa-check-circle text-success me-2"></i>Fast and Efficient Turnaround Times</li>
      </ul>
    </div>
    <div class="col-lg-6">
      <h2 class="mb-4">Our Key Values</h2>
      <p class="text-muted">
        At our core, we believe in integrity, trust, and professionalism. We maintain these values throughout our entire process, ensuring that our clients always receive the best services.
      </p>
      <ul class="list-unstyled">
        <li><i class="fa fa-check-circle text-success me-2"></i>Integrity</li>
        <li><i class="fa fa-check-circle text-success me-2"></i>Transparency</li>
        <li><i class="fa fa-check-circle text-success me-2"></i>Customer-Centric Focus</li>
      </ul>
    </div>
  </div>

 {/* Call to Action Section */}
  <div class="text-center py-5 bg-light rounded mb-5">
    <h2 class="text-primary mb-3">Ready to Get Started?</h2>
    <p class="text-muted mb-4">Join us today and start bidding on tenders that suit your business needs. We make the process simple, transparent, and efficient.</p>
    <a  class="btn btn-success btn-lg px-5 py-3"> <Link to = "/">Explore Tenders</Link></a>
  </div>

 {/* Testimonials Section */}
  <div class="text-center py-5">
    <h2 class="mb-4">What Our Clients Say</h2>
    <div class="row justify-content-center">
      <div class="col-lg-4 mb-4">
        <div class="card shadow border-light rounded-3">
          <div class="card-body">
            <p class="card-text">"Working with this company has been a game-changer for our business. The bidding process is transparent and seamless."</p>
            <h5 class="card-title">John Doe</h5>
            <p class="text-muted">CEO, John Corp</p>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mb-4">
        <div class="card shadow border-light rounded-3">
          <div class="card-body">
            <p class="card-text">"Excellent customer service and top-tier tender solutions. I would highly recommend them to anyone."</p>
            <h5 class="card-title">Jane Smith</h5>
            <p class="text-muted">Director, Alkyeone Ltd.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

        </div>
    </div>
    {/* content End */}


    </>
   
  );
}

export default Content;
