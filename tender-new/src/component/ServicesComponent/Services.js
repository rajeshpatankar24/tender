
import './Services.css';

function Services() {

  return (
    <>
   <div class="container-xxl py-5 bg-light">
  <div class="container">
    <div class="row g-5">
      {/* Section Title */}
      <div class="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
        <h3 class="text-success text-uppercase">Our Services</h3>
        <h1 class="mb-4">Trusted Tendering Services Since 1990</h1>

        {/* Service Description */}
        <p class="mb-4">
          At TenderPro, we have been providing top-tier tendering services since 1990. Our expertise lies in offering the most competitive and reliable solutions to businesses looking to place successful bids and tenders.
        </p>
        
        {/* Service Key Features */}
        <h4 class="text-primary mt-4">Why Choose Our Tender Services?</h4>
        <p class="fw-medium text-primary">
          We offer a range of tailored services to ensure your success in bidding and tendering. Here are some key reasons why clients prefer us:
        </p>
        
        {/* List of Services */}
        <div class="row">
          {/* Service Card 1 */}
          <div class="col-md-4 mb-4">
            <div class="card border-primary h-100">
              <div class="card-body">
                <h5 class="card-title text-success">Residential & Commercial Tendering</h5>
                <p class="card-text">
                  Whether you're a residential or commercial contractor, we help you submit bids that align with your business needs. Our experts make sure you meet all necessary requirements to ensure success.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div class="col-md-4 mb-4">
            <div class="card border-primary h-100">
              <div class="card-body">
                <h5 class="card-title text-success">Quality Services at Affordable Prices</h5>
                <p class="card-text">
                  We provide exceptional tendering services at competitive prices, ensuring that your investment yields the best returns. Get high-quality results without breaking the bank.
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div class="col-md-4 mb-4">
            <div class="card border-primary h-100">
              <div class="card-body">
                <h5 class="card-title text-success">Comprehensive Tender Solutions</h5>
                <p class="card-text">
                  We offer end-to-end solutions, from the initial tender submission process to post-bid assistance. Our team is here to guide you every step of the way to ensure the best possible outcome.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

       </>
   
  );
}

export default Services;
