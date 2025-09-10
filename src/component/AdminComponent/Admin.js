import './Admin.css';


function Admin() {
  return (
    <>
   <div className="container-xxl py-5">
  <div className="container">
    <div className="row g-5">
      <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="text-secondary text-uppercase">Admin Dashboard</h6>
        
        <h1 className="mb-4">We Are a Trusted Tenders Company Since 1990</h1>
        
        <p className="mb-4">
          Welcome to the admin dashboard, where you can manage all tenders, track submissions, and ensure quality services. We have been providing trusted tender services since 1990 and continue to lead the market.
        </p>
        
        <div className="features-list">
          <p className="fw-medium text-primary">
            <i className="fa fa-check text-success me-3"></i> Efficient Tender Management
          </p>
          <p className="fw-medium text-primary">
            <i className="fa fa-check text-success me-3"></i> Real-Time Updates & Notifications
          </p>
          <p className="fw-medium text-primary">
            <i className="fa fa-check text-success me-3"></i> High-Quality Service Assurance
          </p>
        </div>

        <h2 className="text-success mt-5">Admin Controls</h2>
        <div className="admin-controls">
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary">Manage Tenders</h5>
                  <p className="card-text">Easily manage tender listings, deadlines, and more.</p>
                  <a href="#" className="btn btn-primary">Go to Tenders</a>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary">View Submissions</h5>
                  <p className="card-text">Track all submitted tenders and review progress.</p>
                  <a href="#" className="btn btn-primary">View Submissions</a>
                </div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-4 mb-4">
              <div className="card shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary">Monitor Services</h5>
                  <p className="card-text">Monitor service quality and customer feedback.</p>
                  <a href="#" className="btn btn-primary">Monitor Services</a>
                </div>
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

export default Admin;
