import Link from "next/link";
import { FaCar, FaArrowRight, FaPlaneDeparture } from 'react-icons/fa';  // Added FaPlaneDeparture
import Marquee from 'react-fast-marquee'

export default function Banners() {
  return (
    <>
      <section className="section-box background-body py-5">
        <div className="container">
       

          {/* Coverage Areas Section */}
          <div className="row mt-5">
            <div className="col-12 text-center wow fadeInUp">
              <h3 className="text-primary mb-4">Coverage Areas</h3>
            </div>
            {[
              "Kingston upon Thames", "New Malden", "Worcester Park", "Surbiton/Tolworth", "Thames Ditton",
"East Molesey", "West Molesey", "Chessington", "West Wimbledon", "Esher", "Cobham", "Epsom/Ewell",
"Tadworth", "Ashtead", "Leatherhead", "Bookham", "Wimbledon", "Twickenham", "Hounslow", "Richmond",
"Teddington", "Hampton", "Sutton", "Cheam", "Wandsworth", "Carshalton", "Wallington", "Banstead",
"Redhill", "Reigate", "Betchworth", "Dorking", "Tooting"
 ].map((area, index) => (
              <div key={index} className="col-lg-2 col-md-3 col-sm-6 mb-3 wow fadeInUp">
                <div className="d-flex align-items-center text-start">
                  <FaCar className="text-primary me-2" />
                  <span>{area}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Airports Section */}
          <div className="row mt-5">
            <div className="col-12 text-center wow fadeInUp">
              <h3 className="text-primary mb-4">Airports</h3>
            </div>
            {[
              "London Heathrow (Terminals 1-5)", "London Gatwick (North & South)", "Luton", "Stansted", "London City Airport"
            ].map((airport, index) => (
              <div key={index} className="col-lg-4 col-md-6 mb-3 wow fadeInUp">
                <div className="d-flex align-items-center text-start">
                  <FaPlaneDeparture className="text-primary me-2" />
                  <span>{airport}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      
       
        <div className="container">
  <div className="box-search-category">
    <h3 className="heading-3 mb-30 pt-40 neutral-1000 wow fadeInUp text-center mt-5">
      We are fully licensed
    </h3>

    <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
      <img
        className="light-mode img-fluid"
        src="/assets/imgs/page/homepage2/liscence1.png"
        alt="GroundScope"
        style={{ maxHeight: "100px" }}
      />
      <img
        className="light-mode img-fluid"
        src="/assets/imgs/page/homepage2/liscence2.png"
        alt="Partner2"
        style={{ maxHeight: "100px" }}
      />
      <img
        className="light-mode img-fluid"
        src="/assets/imgs/page/homepage2/liscence3.png"
        alt="Partner3"
        style={{ maxHeight: "100px" }}
      />
    </div>
  </div>
</div>



    </section>
    </>
  );
}
