import './Nav.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Nav() {
  const [navContent, setNavContent] = useState();

  useEffect(() => {
    setInterval(() => {

      var token = localStorage.getItem("token");
      var role = localStorage.getItem("role");
      if (token != undefined && role == "admin") {
        setNavContent(
          <>
            {/* Navbar Start */}
            <div class="container-fluid nav-bar bg-light">
              <nav class="navbar navbar-expand-lg navbar-light bg-white p-3 py-lg-0 px-lg-4">

                <div class="container-fluid">
                  <a class="navbar-brand" href="#"> <h3 class="text-success m-0">Bid<span className="color-b" style={{ "color": "black " }}>Pro</span></h3></a>
                  {/* <a className="navbar-brand text-brand" href="index.html">TEN<span className="color-b">DER</span></a> */}

                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                      <li class="nav-item">
                        <a class="nav-link" ><Link to="/admin">Admin</Link></a>

                      </li>
                      <li class="nav-item">
                        <a class="nav-link" ><Link to="/manageuser">Manage User</Link></a>
                      </li>
                      <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"  >Manage Category</a>
                        <div class="dropdown-menu m-0">
                          <a class="dropdown-item"><Link to="/addcategory">Add Category</Link></a>
                          <a class="dropdown-item"><Link to="/addsubcategory">Add Sub Category</Link></a>
                        </div>
                      </div>
                      <div class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown"  >Setting</a>
                        <div class="dropdown-menu m-0">
                          <a class="dropdown-item"><Link to="/epadmin">Edit profile</Link></a>
                          <a class="dropdown-item"><Link to="/cpadmin">Change password</Link></a>
                        </div>
                      </div>
                      <li class="nav-item">
                        <a class="nav-link" ><Link to="/logout">Logout </Link></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>

            </div>
            {/* Navbar End */}

          </>
        )
      }

      else if (token != undefined && role == "user") {
        setNavContent(
          <>
            {/* Navbar Start */}

            <div className="container-fluid nav-bar bg-light">
              <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm p-3 py-lg-0 px-lg-4">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    <h3 className="text-success m-0">
                      Bid<span className="text-dark">Pro</span>
                    </h3>
                  </a>

                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                      {/* User Home Link */}
                      <li className="nav-item ms-2 me-2">
                        <Link
                          to="/user"
                          className="nav-link text-dark px-2 py-2 rounded-3 hover-link"
                          activeClassName="active-link">
                          User Home
                        </Link>
                      </li>
                      <li className="nav-item ms-2 me-2">
                        <Link
                          to="/viewcategory"
                          className="nav-link text-dark px-2 py-2 rounded-3 hover-link"
                          activeClassName="active-link"
                        >
                          View Category
                        </Link>
                      </li>
                      <li className="nav-item ms-2 me-2">
                        <Link
                          to="/viewp"
                          className="nav-link text-dark px-2 py-2 rounded-3 hover-link"
                          activeClassName="active-link"
                        >
                          Add Tender
                        </Link>
                      </li>
                      <li className="nav-item ms-2 me-2">
                        <Link
                          to="/viewbidp"
                          className="nav-link text-dark px-2 py-2 rounded-3 hover-link"
                          activeClassName="active-link"
                        >
                          View Tender
                        </Link>
                      </li>

                      {/* Settings Dropdown */}
                      <li className="nav-item dropdown ms-2 me-2">
                        <a
                          className="nav-link dropdown-toggle text-dark px-2 py-2 rounded-3 hover-link"
                          href="#"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Settings
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li>
                            <Link className="dropdown-item" to="/epuser">
                              Edit Profile
                            </Link>
                          </li>
                          <li>
                            <Link className="dropdown-item" to="/cpuser">
                              Change Password
                            </Link>
                          </li>
                        </ul>
                      </li>

                      {/* Logout Link */}
                      <li className="nav-item ms-2 me-2">
                        <Link
                          to="/logout"
                          className="nav-link text-dark px-2 py-2 rounded-3 hover-link"
                          activeClassName="active-link"
                        >
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>

          </>
        )
      }
      else {
        setNavContent(
          <>
            {/* Navbar Start */}
            <div class="container-fluid nav-bar bg-light">
              <nav class="navbar navbar-expand-lg navbar-light bg-white p-3 py-lg-0 px-lg-4">

                <div class="container-fluid">
                  <a class="navbar-brand" href="#"> <h2 class="text-success m-0">Bid<span className="color-b" style={{ "color": "black " }}>Pro</span></h2></a>
                  {/* <a className="navbar-brand text-brand" href="index.html">TEN<span className="color-b">DER</span></a> */}

                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                      <li class="nav-item">
                        <a class="nav-link" ><Link to="/">Home </Link></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" ><Link to="/about">About </Link></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" ><Link to="/services">Services </Link></a>

                      </li>
                      {/* <li class="nav-item">
                      <a class="nav-link" ><Link to="/category">Category</Link></a>
                      </li> */}


                      <li class="nav-item">
                        <a class="nav-link" ><Link to="/register">Register</Link></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" ><Link to="/login">Login </Link></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
            {/* Navbar End */}

          </>
        )
      }
    }, 1000)
  }, []);
  return (
    <>
      {navContent}
    </>

  );
}

export default Nav;
