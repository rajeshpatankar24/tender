import React, { useState } from 'react';
import './Admin.css';

function Admin() {
  // Mock tenders
  const [tenders, setTenders] = useState([
    {
      id: 1,
      title: 'Road Construction Tender',
      description: 'Tender for building a 5km road',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'IT Infrastructure Tender',
      description: 'Setup network infrastructure for office',
      status: 'Pending',
    },
  ]);

  // Handler to update tender status
  const handleTenderAction = (id, action) => {
    const updatedTenders = tenders.map((tender) =>
      tender.id === id ? { ...tender, status: action } : tender
    );
    setTenders(updatedTenders);
  };

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-12">
            <h6 className="text-secondary text-uppercase">Admin Dashboard</h6>
            <h1 className="mb-4">We Are a Trusted Tenders Company Since 1990</h1>

            <p className="mb-4">
              Welcome to the admin dashboard, where you can manage all tenders, track submissions,
              and ensure quality services.
            </p>

            <h2 className="text-success mt-5">Manage Tenders</h2>

            <div className="row">
              {tenders.map((tender) => (
                <div key={tender.id} className="col-md-6 col-lg-4 mb-4">
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <h5 className="card-title text-primary">{tender.title}</h5>
                      <p className="card-text">{tender.description}</p>
                      <p className="card-text">
                        <strong>Status:</strong>{' '}
                        <span
                          className={
                            tender.status === 'Approved'
                              ? 'text-success'
                              : tender.status === 'Rejected'
                              ? 'text-danger'
                              : 'text-warning'
                          }
                        >
                          {tender.status}
                        </span>
                      </p>

                      {tender.status === 'Pending' && (
                        <div className="d-flex gap-2">
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => handleTenderAction(tender.id, 'Approved')}
                          >
                            Approve
                          </button>
                          <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleTenderAction(tender.id, 'Rejected')}
                          >
                            Reject
                          </button>
                        </div>
                      )}

                      {tender.status !== 'Pending' && (
                        <button
                          className="btn btn-secondary btn-sm mt-2"
                          onClick={() => handleTenderAction(tender.id, 'Pending')}
                        >
                          Reset
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Your other sections can remain below */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
