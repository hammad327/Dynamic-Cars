
'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { swiperGroupAnimate } from '@/util/swiperOptions'
import { useState } from 'react'
import Link from "next/link"


export default function Testimonials() {
	const [isAccordion, setIsAccordion] = useState(1)
	
		const handleAccordion = (key: any) => {
			setIsAccordion(prevState => prevState === key ? null : key)
		}
	return (
		<>

			<section className="section-box py-96 background-body">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-md-9 col-sm-9 wow fadeInUp">
						<div className="box-author-testimonials btn btn-signin" >
				Testimonials
			</div>
			<h3 className="mt-8 mb-15 neutral-1000">What <span className='text-primary'>clients</span> say about us?</h3>
			</div>
					</div>
				</div>
				<div className="block-testimonials wow fadeIn">
					<div className="container-testimonials">
						<div className="container-slider ps-0">
							<div className="box-swiper mt-30">
								<Swiper {...swiperGroupAnimate} className="swiper-container swiper-group-animate swiper-group-journey">
									<div className="swiper-wrapper">
										<SwiperSlide>
											<div className="card-testimonial background-card" >
												<div className="card-info">
													<p className="text-xl-bold card-title neutral-1000">Fast and Easy to Use</p>
													<p className="text-md-regular neutral-500">Used Dynamic Cars for an early morning trip from London to Gatwick. Driver arrived ahead of schedule. Driver was very polite and also found a forgotten charger in the back seat and called so I could go back and get it. Car was comfortable and clean. Thank you so much! Will definitely use again.</p>
												</div>
												<div className="card-top pt-20 border-0 mb-0">
													<div className="card-author">
													<div className="card-image"><img src="/assets/imgs/testimonials/testimonials-1/author-2.png" alt="Dynamic-Cars" /></div>
													<div className="card-info">
															<p className="text-lg-bold neutral-1000">Brittany Rae</p>
															<p className="text-md-regular neutral-1000">Kingston upon Thames</p>
														</div>
													</div>
													<div className="card-rate"><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" /><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" /><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" /><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" /><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" />
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-testimonial background-card" >
												<div className="card-info">
													<p className="text-xl-bold card-title neutral-1000">Super Convenient</p>
													<p className="text-md-regular neutral-500">I have been using Dynamic Cars for the past 5 years. I travel regularly for work and always book cars with Mohammed and his team. They have always been punctual, pleasant and cars are always clean. Already booking them again for my first trip of the year. Highly recommend. Silviana</p>
												</div>
												<div className="card-top pt-20 border-0 mb-0">
													<div className="card-author">
														<div className="card-image"><img src="/assets/imgs/testimonials/testimonials-1/author-2.png" alt="Dynamic-Cars" /></div>
														<div className="card-info">
															<p className="text-lg-bold neutral-1000">Silviana Palmieri</p>
														</div>
													</div>
													<div className="card-rate"><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" /><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" /><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" /><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" /><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" />
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-testimonial background-card" >
												<div className="card-info">
													<p className="text-xl-bold card-title neutral-1000">Great Features and
														Process</p>
													<p className="text-md-regular neutral-500">Lovely local car company. Reliable, on time and good mannered. Would highly recommend if you're in the area</p>
												</div>
												<div className="card-top pt-20 border-0 mb-0">
													<div className="card-author">
														<div className="card-image"><img src="/assets/imgs/testimonials/testimonials-1/author-3.png" alt="Dynamic-Cars" /></div>
														<div className="card-info">
															<p className="text-lg-bold neutral-1000">Rahul Desai</p>
														</div>
													</div>
													<div className="card-rate"><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" /><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" /><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" /><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" /><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" />
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-testimonial background-card" >
												<div className="card-info">
													<p className="text-xl-bold card-title neutral-1000">Easy to Understand</p>
													<p className="text-md-regular neutral-500">Brilliant service, texted me with ETA, incredibly polite and really cared about the quality if their service. Really recommend them</p>
												</div>
												<div className="card-top pt-20 border-0 mb-0">
													<div className="card-author">
														<div className="card-image"><img src="/assets/imgs/testimonials/testimonials-1/author-1.png" alt="Dynamic-Cars" /></div>
														<div className="card-info">
															<p className="text-lg-bold neutral-1000">Melanie Franklin</p>
														</div>
													</div>
													<div className="card-rate"><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" /><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" /><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" /><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" /><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" />
													</div>
												</div>
											</div>
										</SwiperSlide>
										<SwiperSlide>
											<div className="card-testimonial background-card" >
												<div className="card-info">
													<p className="text-xl-bold card-title neutral-1000">Easy to Understand</p>
													<p className="text-md-regular neutral-500">I used this company few times. Great service, always on time. Will use them again.</p>
												</div>
												<div className="card-top pt-20 border-0 mb-0">
													<div className="card-author">
														<div className="card-image"><img src="/assets/imgs/testimonials/testimonials-1/author-1.png" alt="Dynamic-Cars" /></div>
														<div className="card-info">
															<p className="text-lg-bold neutral-1000">Marek Javor</p>
														</div>	
													</div>
													<div className="card-rate"><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" /><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" /><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" /><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" /><img className="background-brand-2 p-1" src="/assets/imgs/template/icons/star-white.svg" alt="Dynamic-Cars" />
													</div>
												</div>
											</div>
										</SwiperSlide>
									</div>
								</Swiper>
							</div>
						</div>
					</div>
					
				</div>
			</section>
			<section className="section-box box-faqs background-body pt-0">
    <div className="box-faqs-inner">
        <div className="container">
            <div className="text-center">
                <span className="text-sm-bold bg-2 btn btn-signin bg-2 text-dark rounded-12">Our Support</span>
                <h3 className="mt-4 neutral-1000">Frequently Asked Questions</h3>
            </div>
            {/* <div className="block-faqs">
                <div className="accordion" id="accordionFAQ">
                    <div className="accordion-item wow fadeInUp border-bottom-0">
                        <h5 className="accordion-header" id="headingOne" onClick={() => handleAccordion(1)}>
                            <button className={`accordion-button text-heading-5 ${isAccordion === 1 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <h3>01</h3>
                                <p>
What Is Dynamic Cars In London?
</p>
                            </button>
                        </h5>
                        <div className={`accordion-collapse collapse  ${isAccordion == 1 ? 'show' : ''} `} id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordionFAQ">
                            <div className="accordion-body ">
                                <br/>In London, a Dynamic Cars is a Licensed Car or private hire with a driver, a saloon for carrying four passengers, and MPVs that can take between 5 and 14 passengers. These may not hail in London’s Local streets. You can hire only on a pre-booked basis as per your Requirement. While the fares are generally Cheaper and reasonable, don’t have a meter, and are Operated by London’s licensed Dynamic Cars Company, you can ask them for cost or get a quote for your trip.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item wow fadeInUp border-bottom-0">
                        <h5 className="accordion-header" id="headingTwo" onClick={() => handleAccordion(2)}>
                            <button className={`accordion-button text-heading-5 ${isAccordion === 2 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h3>02</h3>
                                <p>Is Dynamic Cars Cheaper Than Uber?</p>
                            </button>
                        </h5>
                        <div className={`accordion-collapse collapse ${isAccordion == 2 ? 'show' : ''} `} id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordionFAQ">
                            <div className="accordion-body">
							<br/>Yes, Dynamic Cars is the cheapest London Dynamic Cars and private hire company; you don’t need to pay us any extra amount in any Situation. We are a fixed-price company, while Uber can be Costly more than 2.5 times in a Peak Hour due to surge Pricing.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item wow fadeInUp border-bottom-0">
                        <h5 className="accordion-header" id="headingThree" onClick={() => handleAccordion(3)}>
                            <button className={`accordion-button text-heading-5 ${isAccordion === 3 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <h3>03</h3>
                                <p>Why Should You Hire Our London Dynamic Cars?</p>
                            </button>
                        </h5>
                        <div className={`accordion-collapse collapse ${isAccordion == 3 ? 'show' : ''} `} id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordionFAQ">
                            <div className="accordion-body">
							<br/>Dynamic Cars  offers a fixed price to and from any UK destination starting from £20. Our easy booking system allows you to obtain an immediate quote at any time of the day or night. Our free meet and greet Services at the Airport of your choice include our service. You can expect a professional and polite driver. We are up to 30% cheaper than other companies.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item wow fadeInUp border-bottom-0">
                        <h5 className="accordion-header" id="headingFour" onClick={() => handleAccordion(4)}>
                            <button className={`accordion-button text-heading-5 ${isAccordion === 4 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <h3>04</h3>
                                <p>Can I transfer airports to London?</p>
                            </button>
                        </h5>
                        <div className={`accordion-collapse collapse ${isAccordion == 4 ? 'show' : ''} `} id="collapseFour" aria-labelledby="headingFour" data-bs-parent="#accordionFAQ">
                            <div className="accordion-body">
							<br/>Whatever airports in London you are heading to and from, we cover all of London’s airports, including Heathrow, Gatwick, Stansted, Southend, and Luton Airport. You can rely on our London Airport Transfer service to pick you up wherever you are in London and get you to the Airport in good time for your flight.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item wow fadeInUp border-bottom-0">
                        <h5 className="accordion-header" id="headingFive" onClick={() => handleAccordion(5)}>
                            <button className={`accordion-button text-heading-5 ${isAccordion === 5 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <h3>05</h3>
                                <p>How Do I Get a Dynamic Cars In London?</p>
                            </button>
                        </h5>
                        <div className={`accordion-collapse collapse ${isAccordion == 5 ? 'show' : ''} `} id="collapseFive" aria-labelledby="headingFive" data-bs-parent="#accordionFAQ">
                            <div className="accordion-body">
							<br/>London’s Licensed Dynamic Cars can be Located in prominent places, including many train stations, airports, and Tube and bus stations. You can hire only pre-booked through the online website, office, and phone. London Dynamic Cars covers a wide range of Transportation services, from local Dynamic Cars companies to chauffeur-driven Cars. Reputable, licensed Dynamic Cars companies Like Dynamic Cars Ltd can offer a cheaper alternative to a black cab. Most of the hotels have a list of reputable, licensed Dynamic Cars operators. London Dynamic Cars offices are found on most of the high streets and outside the airport’s terminal.
                            </div>
                        </div>
                    </div>
					<div className="accordion-item wow fadeInUp border-bottom-0">
                        <h5 className="accordion-header" id="headingFive" onClick={() => handleAccordion(5)}>
                            <button className={`accordion-button text-heading-5 ${isAccordion === 5 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <h3>06</h3>
                                <p>How Much Are Dynamic Cars To London?</p>
                            </button>
                        </h5>
                        <div className={`accordion-collapse collapse ${isAccordion == 5 ? 'show' : ''} `} id="collapseFive" aria-labelledby="headingFive" data-bs-parent="#accordionFAQ">
                            <div className="accordion-body">
							<br/>London Dynamic Cars Fare varies Depending on where you travel. This is usually the ‘minimum charge’ for a Dynamic Cars, even if you only need to travel a couple of yards. While it varies throughout the UK, Dynamic Cars are likely to cost between £1.20 to £3 per mile (depending on location, day of the week, time of day, etc
                            </div>
                        </div>
                    </div>
					<div className="accordion-item wow fadeInUp border-bottom-0">
                        <h5 className="accordion-header" id="headingFive" onClick={() => handleAccordion(5)}>
                            <button className={`accordion-button text-heading-5 ${isAccordion === 5 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <h3>07</h3>
                                <p>Are You a Licensed, Private Operator?</p>
                            </button>
                        </h5>
                        <div className={`accordion-collapse collapse ${isAccordion == 5 ? 'show' : ''} `} id="collapseFive" aria-labelledby="headingFive" data-bs-parent="#accordionFAQ">
                            <div className="accordion-body">
							<br/>Yes, we are a Licensed Dynamic Cars operator provided by TfL (Transport of London).
                            </div>
                        </div>
                    </div>
					<div className="accordion-item wow fadeInUp border-bottom-0">
                        <h5 className="accordion-header" id="headingFive" onClick={() => handleAccordion(5)}>
                            <button className={`accordion-button text-heading-5 ${isAccordion === 5 ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <h3>08</h3>
                                <p>How do you get from one airport to another in London?</p>
                            </button>
                        </h5>
                        <div className={`accordion-collapse collapse ${isAccordion == 5 ? 'show' : ''} `} id="collapseFive" aria-labelledby="headingFive" data-bs-parent="#accordionFAQ">
                            <div className="accordion-body">
							<br/>if you are going to fly from one airport to another in London. Dynamic Cars LTD Offers the fastest and most Reliable London Airport Dynamic Cars transfer to and From Heathrow, Gatwick, Luton, London City, Stansted, and Southend Airport, 24/7 days per week. We have a wide range of vehicles which can meet your requirements.
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="row">
                <div className="col-12 wow fadeInUp mt-4">
                    <div className="d-flex justify-content-center gap-2">
                        <Link className="btn btn-signin mt-2 " href="/about-us#accordionFAQ">
                            FAQ
                            <svg width={12} height={12} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-10">
                                <path d="M8 15L15 8L8 1M15 8L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Link>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
					</section>

		</>
	)
}
