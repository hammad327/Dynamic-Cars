import Link from "next/link";
import Marquee from 'react-fast-marquee';

export default function Brand1() {
  // List of brand items
  const brands = [
    { light: "/assets/imgs/page/homepage2/GroundScope.png", dark: "/assets/imgs/page/homepage2/lexus-w.png" },
    { light: "/assets/imgs/page/homepage2/Groundspan.png", dark: "/assets/imgs/page/homepage2/mer-w.png" },
    { light: "/assets/imgs/page/homepage2/Epsomcollege.png", dark: "/assets/imgs/page/homepage2/bugatti-w.png" },
    { light: "/assets/imgs/page/homepage2/Marymount.png", dark: "/assets/imgs/page/homepage2/jaguar-w.png" },
    { light: "/assets/imgs/page/homepage2/Brightworld.png", dark: "/assets/imgs/page/homepage2/honda-w.png" },
    { light: "/assets/imgs/page/homepage2/Travelthru.png", dark: "/assets/imgs/page/homepage2/chevrolet-w.png" },
    { light: "/assets/imgs/page/homepage2/Jyrney.png", dark: "/assets/imgs/page/homepage2/acura-w.png" },
    { light: "/assets/imgs/page/homepage2/CMAC.png", dark: "/assets/imgs/page/homepage2/bmw-w.png" },
  ];

  return (
    <>
      <div className="background-100 pb-30">
        <div className="container">
          <div className="box-search-category">
            <h3 className="heading-3 mb-0 neutral-1000 wow fadeInUp">Companies or partners we work with</h3>
            <div className="d-flex align-items-center justify-content-between">
              <p className="text-lg-medium neutral-500 wow fadeInUp">Discover Our partners</p>
            </div>
            <Marquee
              direction="left"
              pauseOnHover={true}
              gradient={false} // Disable gradient
              gradientWidth={0} // Set gradient width to 0
              className="carouselTicker carouselTicker-left box-list-brand-car justify-content-center wow fadeIn"
            >
              <ul className="carouselTicker__list">
                {/* Render the brands twice to create a seamless loop */}
                {[...brands, ...brands].map((brand, index) => (
                  <li key={index} className="carouselTicker__item">
                    <Link href="#" className="item-brand">
                      <img className="light-mode" src={brand.light} alt="Dynamic-Cars" />
                      <img className="dark-mode" src={brand.dark} alt="Dynamic-Cars" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
}