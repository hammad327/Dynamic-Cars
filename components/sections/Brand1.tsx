
import Link from "next/link"
import Marquee from 'react-fast-marquee'

export default function Brand1() {
	return (
		<>

			<div className="background-100 pb-70">
				<div className="container">
					<div className="box-search-category">
						<h3 className="heading-3 mb-0 neutral-1000 wow fadeInUp">Companies or partners we work with</h3>
						<div className="d-flex align-items-center justify-content-between">
							<p className="text-lg-medium neutral-500 wow fadeInUp">Discover Our partners</p>
							
						</div>
						<Marquee direction="left" pauseOnHover={true} className="carouselTicker carouselTicker-left box-list-brand-car justify-content-center wow fadeIn">
            <ul className="carouselTicker__list">
              <li className="carouselTicker__item">
                <Link href="#" className="item-brand">
                  <img className="light-mode" src="/assets/imgs/page/homepage2/GroundScope.png" alt="Dynamic-Cars" />
                  <img className="dark-mode" src="/assets/imgs/page/homepage2/lexus-w.png" alt="Dynamic-Cars" />
                </Link>
              </li>
              <li className="carouselTicker__item">
                <Link href="#" className="item-brand">
                  <img className="light-mode" src="/assets/imgs/page/homepage2/Groundspan.png" alt="Dynamic-Cars" />
                  <img className="dark-mode" src="/assets/imgs/page/homepage2/mer-w.png" alt="Dynamic-Cars" />
                </Link>
              </li>
              <li className="carouselTicker__item">
                <Link href="#" className="item-brand">
                  <img className="light-mode" src="/assets/imgs/page/homepage2/Epsomcollege.png" alt="Dynamic-Cars" />
                  <img className="dark-mode" src="/assets/imgs/page/homepage2/bugatti-w.png" alt="Dynamic-Cars" />
                </Link>
              </li>
              <li className="carouselTicker__item">
                <Link href="#" className="item-brand">
                  <img className="light-mode" src="/assets/imgs/page/homepage2/Marymount.png" alt="Dynamic-Cars" />
                  <img className="dark-mode" src="/assets/imgs/page/homepage2/jaguar-w.png" alt="Dynamic-Cars" />
                </Link>
              </li>
              <li className="carouselTicker__item">
                <Link href="#" className="item-brand">
                  <img className="light-mode" src="/assets/imgs/page/homepage2/Brightworld.png" alt="Dynamic-Cars" />
                  <img className="dark-mode" src="/assets/imgs/page/homepage2/honda-w.png" alt="Dynamic-Cars" />
                </Link>
              </li>
              <li className="carouselTicker__item">
                <Link href="#" className="item-brand">
                  <img className="light-mode" src="/assets/imgs/page/homepage2/Travelthru.png" alt="Dynamic-Cars" />
                  <img className="dark-mode" src="/assets/imgs/page/homepage2/chevrolet-w.png" alt="Dynamic-Cars" />
                </Link>
              </li>
              <li className="carouselTicker__item">
                <Link href="#" className="item-brand">
                  <img className="light-mode" src="/assets/imgs/page/homepage2/Jyrney.png" alt="Dynamic-Cars" />
                  <img className="dark-mode" src="/assets/imgs/page/homepage2/acura-w.png" alt="Dynamic-Cars" />
                </Link>
              </li>
              <li className="carouselTicker__item">
                <Link href="#" className="item-brand">
                  <img className="light-mode" src="/assets/imgs/page/homepage2/CMAC.png" alt="Dynamic-Cars" />
                  <img className="dark-mode" src="/assets/imgs/page/homepage2/bmw-w.png" alt="Dynamic-Cars" />
                </Link>
              </li>
              
            </ul>
          </Marquee>

				</div>
			</div>
		</div >
		</>
	)
}
