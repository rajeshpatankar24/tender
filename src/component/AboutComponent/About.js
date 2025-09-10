import './About.css';


function About() {


  return (
    <>
   <div class="container-xxl py-5 bg-light">
  <div class="container">
    <div class="row g-5">
      <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
       {/* Section Title */}
        <h3 class="text-success text-uppercase">About Us</h3>
        <h1 class="mb-4">We Are Trusted Tendering Company Since 1990</h1>
        
       {/* Description of the Company */}
        <p class="mb-4">
          Established in 1990, we have been a trusted partner for clients looking for the best tendering services in the industry. Our team is dedicated to providing top-tier solutions that deliver results.
        </p>
        
       {/* Company Values */}
        <h4 class="mb-3">Our Core Values</h4>
        <p class="mb-4">
          At TenderPro, we believe in the principles that define our service delivery. We pride ourselves on:
        </p>
        <ul class="fw-medium text-primary">
          <li><i class="fa fa-check text-success me-3"></i>Commitment to Excellence</li>
          <li><i class="fa fa-check text-success me-3"></i>Integrity & Transparency</li>
          <li><i class="fa fa-check text-success me-3"></i>Customer Satisfaction First</li>
          <li><i class="fa fa-check text-success me-3"></i>Innovation & Quality</li>
        </ul>

       {/* Why Choose Us Section */}
        <h4 class="mt-5 mb-3">Why Choose TenderPro?</h4>
        <p class="mb-4">
          We have been the go-to company for those in need of tendering and bidding services. Here's why:
        </p>
        <div class="row">
          <div class="col-md-6">
            <div class="card border-primary mb-4">
              <div class="card-body">
                <h5 class="card-title text-primary">Expertise and Experience</h5>
                <p class="card-text">With over 30 years in the industry, we offer unmatched expertise to navigate the complexities of tenders. Our experience speaks for itself in the success of countless projects.</p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card border-primary mb-4">
              <div class="card-body">
                <h5 class="card-title text-primary">Dedicated Support</h5>
                <p class="card-text">Our team provides continuous support throughout the bidding process, ensuring you’re always in the loop and have the resources you need to succeed.</p>
              </div>
            </div>
          </div>
        </div>

       {/* Key Benefits List */}
        <h4 class="mt-5 mb-3">Our Services at a Glance</h4>
        <p class="fw-medium text-primary mb-4">
          We offer a wide range of services that are tailored to the unique needs of our clients:
        </p>
        <ul class="fw-medium text-primary">
          <li><i class="fa fa-check text-success me-3"></i>Comprehensive Tender Solutions</li>
          <li><i class="fa fa-check text-success me-3"></i>High Success Rate in Bidding</li>
          <li><i class="fa fa-check text-success me-3"></i>Custom Bid Strategies</li>
          <li><i class="fa fa-check text-success me-3"></i>Global Clientele</li>
          <li><i class="fa fa-check text-success me-3"></i>Timely Service Delivery</li>
        </ul>
      </div>
    </div>
  </div>
</div>

    </>
   
  );
}

export default About;
