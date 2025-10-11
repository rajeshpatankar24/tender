import React from "react";

const HeroContent = () => {
  const token = localStorage.getItem("token");

  return (
    <div className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Simplify Your <span className="text-blue-600">Tendering Process</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Manage tenders, place bids, and track your submissions — all from one secure dashboard.
          </p>
          {!token && (
            <div className="mt-8 flex gap-4">
              <a href="/register" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </a>
              <a href="/login" className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                Login
              </a>
            </div>
          )}
        </div>

        <div className="flex justify-center">
          <img
            src="../../../public/assets/img/slide-4.jpg"
            alt="Tender Illustration"
            className="w-4/5 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
