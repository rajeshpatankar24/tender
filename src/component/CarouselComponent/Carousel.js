import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const Carousel = () => {
  const [BannerContent, setBannerContent] = useState();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token !== null) {
      setBannerContent(<></>);
    } 
    
    else {
      setBannerContent(
        <div className="container-fluid p-0 mb-5">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={1200}
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="position-relative w-100">
                <img
                  className="img-fluid w-100"
                  src="/assets/img/slide-1.jpg"
                  alt="Slide 1"
                  style={{ objectFit: "cover", height: "100%", maxHeight: "100vh" }}
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                  style={{ background: "rgba(0, 0, 0, 0.4)" }}
                >
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col-12 col-md-10 col-lg-8">
                        <h5 className="text-white text-uppercase mb-3">Tender Services</h5>
                        <h1 className="display-6 text-white mb-4">
                          Efficient Tendering Services
                        </h1>
                        <p className="fs-6 fw-medium text-white mb-4 pb-2">
                          We provide expert tendering solutions for both individuals and organizations.
                          Get professional help with competitive bidding and submission.
                        </p>
                        <a href="#" className="btn btn-primary py-2 px-4 me-2 mb-2">
                          Read More
                        </a>
                        <a href="#" className="btn btn-secondary py-2 px-4 mb-2">
                          Get a Free Quote
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="position-relative w-100">
                <img
                  className="img-fluid w-100"
                  src="/assets/img/slide-2.jpg"
                  alt="Slide 2"
                  style={{ objectFit: "cover", height: "100%", maxHeight: "100vh" }}
                />
                <div
                  className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
                  style={{ background: "rgba(0, 0, 0, 0.4)" }}
                >
                  <div className="container">
                    <div className="row justify-content-start">
                      <div className="col-12 col-md-10 col-lg-8">
                        <h5 className="text-white text-uppercase mb-3">Tender Services</h5>
                        <h1 className="display-6 text-white mb-4">
                          Streamlined Bidding Process
                        </h1>
                        <p className="fs-6 fw-medium text-white mb-4 pb-2">
                          Experience an easy and seamless bidding process with our service.
                          Let us guide you to success with our tailored tender submission approach.
                        </p>
                        <a href="#" className="btn btn-primary py-2 px-4 me-2 mb-2">
                          Learn More
                        </a>
                        <a href="#" className="btn btn-secondary py-2 px-4 mb-2">
                          Get a Free Quote
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      );
    }
  }, []);

  return <>{BannerContent}</>;
};

export default Carousel;
