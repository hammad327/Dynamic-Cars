'use client'
import Link from "next/link"
import { useState } from 'react'
import ModalVideo from 'react-modal-video'

export default function Cta1() {
	const [isOpen, setOpen] = useState(false)
	return (
		<>

			<section className="box-cta-1 background-100 py-96">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6 pe-lg-5 wow fadeInUp">
							<div className="card-video">
								<div className="card-image"><a className="btn " onClick={() => setOpen(true)} /><img src="/assets/imgs/cta/cta-1/video.png" alt="Dynamic-Cars" /></div>
							</div>
						</div>
						<div className="col-lg-6 mt-lg-0 mt-4">
  <span className="btn btn-signin bg-primary text-light mb-4 wow fadeInUp">
    Make your Special day more Special
  </span>
  <h4 className="mb-4 neutral-1000 wow fadeInUp " style={{
    borderBottom: "3px solid rgb(97, 97, 97)",
    paddingBottom: "5px",
    width:'60%'
  }}>WHY CHOOSE US</h4>
  <p className="text-lg-medium neutral-500 mb-4 wow fadeInUp">
    Our chauffeur-driven vehicles are available at any time. From early morning to late night, we are ready to take you to and from airports in London and across the UK. Whether you’re traveling alone or to a party, we can accommodate your needs.
  </p>
  <div className="row">
    <div className="col-md-6">
      <ul className="list-ticks-green">
        <li className="neutral-1000 wow fadeInUp" data-wow-delay="0.1s">
          Easy Online Booking
        </li>
        <p className="text-sm neutral-500 mb-3">
          Our quick and easy online booking facility makes your London airport transfer reservation simpler and more efficient.
        </p>
        <li className="neutral-1000 wow fadeInUp" data-wow-delay="0.2s">
          Professional Drivers
        </li>
        <p className="text-sm neutral-500 mb-3">
          Our drivers are 100% professional, punctual, friendly, kind, helpful & non-smokers.
        </p>
      </ul>
    </div>
    <div className="col-md-6">
      <ul className="list-ticks-green wow fadeInUp">
        <li className="neutral-1000 wow fadeInUp" data-wow-delay="0.3s">
          Big Fleet Of Vehicles
        </li>
        <p className="text-sm neutral-500 mb-3">
		We provide Car and miniCar services in Epsom for airport transfers, events, and more, with a fleet of Eco, 6-8 seater cars.       </p>
        <li className="neutral-1000 wow fadeInUp" data-wow-delay="0.4s">
          Online Payment
        </li>
        <p className="text-sm neutral-500 mb-3">
          Payment is easy as we accept both cash and credit card with a money-back guarantee.
        </p>
      </ul>
    </div>
  </div>
</div>

					</div>
				</div>
			</section>
			<ModalVideo channel='youtube' isOpen={isOpen} videoId="JXMWOmuR1hU" onClose={() => setOpen(false)} />
		</>
	)
}
