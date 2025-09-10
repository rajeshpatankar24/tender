import './Header.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Auth from '../AuthenticationComponent/Auth';
import { Link } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';





function Header() {

    const [Content, setContent] = useState();
    useEffect(() => {
        setInterval(() => {
            var token = localStorage.getItem("token");
            var role = localStorage.getItem("role");
            if (token != null && role == "admin") {
                setContent(
                    <>
                        {/* Topbar Start */}
                        <div class="container-fluid bg-light d-none d-lg-block">
                            <div class="row align-items-center top-bar">
                                <div class="col-lg-3 col-md-12 text-center text-lg-start">
                                    {/* <a href="" class="navbar-brand m-0 p-0">
                            <h1 class="text-primary m-0">Tenders</h1>
                        </a> */}
                                </div>
                                <div class="col-lg-9 col-md-12 text-end">
                                    <div class="h-100 d-inline-flex align-items-center me-4">
                                        <i class="fa fa-user text-success me-2"></i>
                                        <p class="m-0">Welcome Admin</p>
                                    </div>
                                    <div class="h-100 d-inline-flex align-items-center me-4">
                                        <i class="far fa-envelope-open text-primary me-2"></i>
                                        <p class="m-0">{localStorage.email}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        {/* Topbar End */}
                    </>
                )

            }
           
            else if (token != null && role == "user") {
                setContent(
                    <>
                        {/* Topbar Start */}
                        <div class="container-fluid bg-light d-none d-lg-block">
                            <div class="row align-items-center top-bar">
                                <div class="col-lg-3 col-md-12 text-center text-lg-start">
                                    {/* <a href="" class="navbar-brand m-0 p-0">
                     <h1 class="text-primary m-0">Tenders</h1>
                 </a> */}
                                </div>
                                <div class="col-lg-9 col-md-12 text-end">
                                    <div class="h-100 d-inline-flex align-items-center me-4">
                                        <i class="fa fa-user text-primary me-2"></i>
                                       
                                        <p class="m-0">Welcome User</p>
                                    </div>
                                    <div class="h-100 d-inline-flex align-items-center me-4">
                                        <i class="far fa-envelope-open text-primary me-2"></i>
                                        <p class="m-0">{localStorage.email}</p>
                                    </div>
                                    <div class="h-100 d-inline-flex align-items-center">
                                    <a class="btn btn-sm-square bg-white text-primary me-1" ><Link to ="http://www.facebook.com"><i class="fab fa-facebook-f"></i></Link></a>
                                        <a class="btn btn-sm-square bg-white text-primary me-1" ><Link to ="http://www.twitter.com"><i class="fab fa-twitter"></i></Link></a>
                                        <a class="btn btn-sm-square bg-white text-primary me-1" ><Link to = "https://www.linkedin.com"><i class="fab fa-linkedin-in"></i></Link></a>
                                        <a class="btn btn-sm-square bg-white text-primary me-0" ><Link to="http://www.instagram.com"><i class="fab fa-instagram"></i></Link></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Topbar End */}
                    </>
                )

            }
            else {
                setContent(
                    <>
                        {/* Topbar Start */}
                        <div class="container-fluid bg-light d-none d-lg-block">
                            <div class="row align-items-center top-bar">
                                <div class="col-lg-3 col-md-12 text-center text-lg-start">
                                    {/* <a href="" class="navbar-brand m-0 p-0">
                     <h1 class="text-primary m-0">Tenders</h1>
                 </a> */}
                                </div>
                                <div class="col-lg-9 col-md-12 text-end">
                                    <div class="h-100 d-inline-flex align-items-center me-4">
                                        <i class="fa fa-map-marker-alt text-primary me-2"></i>
                                        <p class="m-0">123 StreetTown, Indore, India</p>
                                    </div>
                                    <div class="h-100 d-inline-flex align-items-center me-4">
                                        <i class="far fa-envelope-open text-primary me-2"></i>
                                        <p class="m-0">BidPro@gmail.com</p>
                                    </div>
                                    <div class="h-100 d-inline-flex align-items-center">
                                        <a class="btn btn-sm-square bg-white text-primary me-1 " ><Link to ="http://www.facebook.com"><i class="fab fa-facebook-f"></i></Link></a>
                                        <a class="btn btn-sm-square bg-white text-primary me-1" ><Link to ="http://www.twitter.com"><i class="fab fa-twitter"></i></Link></a>
                                        <a class="btn btn-sm-square bg-white text-primary me-1" ><Link to = "https://www.linkedin.com"><i class="fab fa-linkedin-in"></i></Link></a>
                                        <a class="btn btn-sm-square bg-white text-primary me-0" ><Link to="http://www.instagram.com"><i class="fab fa-instagram"></i></Link></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Topbar End */}
                    </>
                )

            }
        }, 1)

    }, [])
    return (

        <>
            <Auth />
            {Content}
        </>

    );
}

export default Header;
