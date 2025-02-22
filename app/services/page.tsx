'use client'
import CounterUp from '@/components/elements/CounterUp'
import Layout from "@/components/layout/Layout"
import { swiperGroup1, swiperGroup3, swiperGroupAnimate } from '@/util/swiperOptions'
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
export default function Services() {

	return (
		<>

			<Layout footerStyle={1}>
				<div>
					<div className="page-header pt-30 background-body">
						<div className="custom-container position-relative mx-auto">
							<div className="bg-overlay rounded-12 overflow-hidden">
								<img className="w-100 h-100 img-banner" src="/assets/imgs/page-header/banner1.png" alt="Dynamic-Cars" />
							</div>
							<div className="container position-absolute z-1 top-50 start-50 translate-middle">
								<h2 className="Text-services">Our Services</h2>
								<span className="text-white text-xl-medium">Perfect service, top experts</span>
							</div>
							<div className="background-body position-absolute z-1 top-100 start-50 translate-middle px-3 py-2 rounded-12 border d-flex gap-3 @@navigation-page">
								<Link href="/" className="neutral-700 text-md-medium">Home</Link>
								<span>
									<img src="/assets/imgs/template/icons/arrow-right.svg" alt="Dynamic-Cars" />
								</span>
								<Link href="#" className="neutral-1000 text-md-bold">Services</Link>
							</div>
						</div>
					</div>
					{/* services list 1 */}
					<section className="section-box background-body py-96">
						<div className="container">
							<div className="row align-items-end">
								<div className="col-lg-7">
									<h3 className="neutral-1000">Comprehensive <span className="text-primary">Car Rental</span> Services to Meet All Your Needs</h3>
								</div>
								<div className="col-lg-5">
									<p className="text-lg-medium neutral-500">From daily rentals to long-term solutions, we offer a comprehensive range of vehicles and services to suit every need and budget.</p>
								</div>
							</div>
							<div className="row mt-50">
								
								<div className="col-lg-4 col-md-6">
									<div className="card-news background-card hover-up mb-24" id='airport'>
										<div className="card-image">
											<img src="/assets/imgs/services/services-list-1/img-2.png" alt="Dynamic-Cars" />
										</div>
										<div className="card-info">
											<div className="card-title mb-3">
												<Link className="text-xl-bold neutral-1000" href="#">Airport Transfers</Link>
												<p className="text-md-medium neutral-500 mt-2">Dynamic Cars offers a premium Meet & Greet Airport Service to ensure a smooth arrival at any UK airport. Whether you’re a frequent traveller, a business executive, or visiting the UK for the first time, our professional team provides a warm welcome and seamless transfer experience. Book your Meet & Greet service today and travel with ease!</p>
											</div>
											{/* <div className="card-program">
												<div className="endtime">
													<div className="card-button"><Link className="btn btn-primary2" href="/sub-service#courier-services">View Details</Link></div>
												</div>
											</div> */}
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-news background-card hover-up mb-24" id='chauffeur'>
										<div className="card-image">
											<img src="/assets/imgs/services/services-list-1/img-5.png" alt="Dynamic-Cars" />
										</div>
										<div className="card-info">
											<div className="card-title mb-3">
												<Link className="text-xl-bold neutral-1000" href="#">Chauffeur Services</Link>
												<p className="text-md-medium neutral-500 mt-2">Dynamic Cars offers premium chauffeur services across the UK, operating under private hire vehicle (PHV) regulations. Unlike traditional taxis, our private hire vehicles must be pre-booked through a licensed operator and cannot be hailed on the street or wait at taxi ranks. Our chauffeurs are fully licensed, highly trained, and committed to delivering a first-class service tailored to your needs.</p>
											</div>
											{/* <div className="card-program">
												<div className="endtime">
													<div className="card-button"><Link className="btn btn-primary2" href="/sub-service#courier-services">View Details</Link></div>
												</div>
											</div> */}
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-news background-card hover-up mb-24" id='long-distance'>
										<div className="card-image">
											<img src="/assets/imgs/services/services-list-1/img-3.png" alt="Dynamic-Cars" />
										</div>
										<div className="card-info">
											<div className="card-title mb-3">
												<Link className="text-xl-bold neutral-1000" href="#">Long Distance & Cruise Transfers</Link>
												<p className="text-md-medium neutral-500 mt-2">Our long-distance transfer service is the perfect solution for those looking to avoid the hassle of public transport. We offer comfortable, and well-maintained driven by experienced professionals who know the best routes to ensure a safe and timely trip. We make long-distance travel effortless with flexible scheduling, and transparent pricing.</p>
											</div>
											{/* <div className="card-program">
												<div className="endtime">
													<div className="card-button"><Link className="btn btn-primary2" href="/sub-service#courier-services">View Details</Link></div>
												</div>
											</div> */}
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-news background-card hover-up mb-24" id='courier'>
										<div className="card-image">
											<img src="/assets/imgs/services/services-list-1/img-1.png" alt="Dynamic-Cars" />
										</div>
										<div className="card-info">
											<div className="card-title mb-3">
											<Link className="text-xl-bold neutral-1000" href="#">Courier Services</Link>
											<p className="text-md-medium neutral-500 mt-2">Dynamic Cars & Couriers UK's specialized services include special pick-up times and internal handling requirements, dedicated line haul or delivery schedules, customized billing and administrative procedures. Whether local or long-distance delivery, you can count on Dynamic Cars for a professional, cost-effective, and hassle-free courier experience. Contact us today to book your courier service!</p>
											</div>
											{/* <div className="card-program">
												<div className="endtime">
													<div className="card-button"><Link className="btn btn-primary2" href="/sub-service#courier-services">View Details</Link></div>
												</div>
											</div> */}
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-6">
									<div className="card-news background-card hover-up mb-24" id='meet-greet'>
										<div className="card-image">
											<img src="/assets/imgs/services/services-list-1/img-6.png" alt="Dynamic-Cars" />
										</div>
										<div className="card-info">
											<div className="card-title mb-3">
												<Link className="text-xl-bold neutral-1000" href="#">Airport Meet and Greet</Link>
												<p className="text-md-medium neutral-500 mt-2">Dynamic Cars offers a premium Service to ensure a smooth arrival at any UK airport. Whether you’re a frequent traveller, a business executive, or visiting the UK for the first time, our professional team provides a warm welcome and seamless transfer experience. Our service is available at all major UK airports, including Heathrow, Gatwick, Stansted, Luton, Birmingham, and Manchester.</p>
											</div>
											{/* <div className="card-program">
												<div className="endtime">
													<div className="card-button"><Link className="btn btn-primary2" href="/sub-service#courier-services">View Details</Link></div>
												</div>
											</div> */}
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-news background-card hover-up mb-24" id='event-management'>
										<div className="card-image">
											<img src="/assets/imgs/services/services-list-1/img-4.png" alt="Dynamic-Cars" />
										</div>
										<div className="card-info">
											<div className="card-title mb-3">
												<Link className="text-xl-bold neutral-1000" href="#">Event Management</Link>
												<p className="text-md-medium neutral-500 mt-2">At Dynamic Cars, we provide professional and seamless event transport management for all occasions, ensuring smooth and efficient transportation for guests, staff, and VIPs. Whether you’re organizing a corporate event, wedding, concert, conference, or private gathering, our dedicated team handles all transport logistics so you can focus on your event.</p>
											</div>
											{/* <div className="card-program">
												<div className="endtime">
													<div className="card-button"><Link className="btn btn-primary2" href="/sub-service#courier-services">View Details</Link></div>
												</div>
											</div> */}
										</div>
									</div>
								</div>
								
								<div className="col-lg-4 col-md-6">
									<div className="card-news background-card hover-up mb-24" id='vip-tours'>
										<div className="card-image">
											<img src="/assets/imgs/services/services-list-1/img-7.png" alt="Dynamic-Cars" />
										</div>
										<div className="card-info">
											<div className="card-title mb-3">
												<Link className="text-xl-bold neutral-1000" href="#">VIP Tours</Link>
												<p className="text-md-medium neutral-500 mt-2">Experience the UK like never before with Dynamic Cars’ VIP Tour Service, designed for those who appreciate luxury, comfort, and a personalized travel experience. Whether you’re a tourist, business executive, or special guest, our tailored private tours ensure you explore the most iconic landmarks and hidden gems with style and ease.</p>
											</div>
											{/* <div className="card-program">
												<div className="endtime">
													<div className="card-button"><Link className="btn btn-primary2" href="/sub-service#courier-services">View Details</Link></div>
												</div>
											</div> */}
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-news background-card hover-up mb-24" id='wedding'>
										<div className="card-image">
											<img src="/assets/imgs/services/services-list-1/img-8.png" alt="Dynamic-Cars" />
										</div>
										<div className="card-info">
											<div className="card-title mb-3">
												<Link className="text-xl-bold neutral-1000" href="#">Wedding Services</Link>
												<p className="text-md-medium neutral-500 mt-2">Make your special day even more memorable with Dynamic Cars’ premium wedding transport service. We provide luxury vehicles, professional chauffeurs, and seamless coordination to ensure a stress-free travel experience for you and your guests. Let Dynamic Cars handle your wedding transport so you can focus on celebrating.</p>
											</div>
											{/* <div className="card-program">
												<div className="endtime">
													<div className="card-button"><Link className="btn btn-primary2" href="/sub-service#courier-services">View Details</Link></div>
												</div>
											</div> */}
										</div>
									</div>
								</div>
								<div className="col-lg-4 col-md-6">
									<div className="card-news background-card hover-up mb-24" id='school-run'>
										<div className="card-image">
											<img src="/assets/imgs/services/services-list-1/img-9.png" alt="Dynamic-Cars" />
										</div>
										<div className="card-info">
											<div className="card-title mb-3">
												<Link className="text-xl-bold neutral-1000" href="#">School Run Services</Link>
												<p className="text-md-medium neutral-500 mt-2">At Dynamic Cars, we provide a trusted and professional school run service, ensuring your child travels to and from school safely, comfortably, and on time. Our fully vetted, DBS-checked drivers are dedicated to providing a secure and friendly environment, giving parents peace of mind. Book your child’s school transport with us today!</p>
											</div>
											{/* <div className="card-program"> 
												<div className="endtime">
													<div className="card-button"><Link className="btn btn-primary2" href="/sub-service#courier-services">View Details</Link></div>
												</div>
											</div> */}
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* banners 3 */}
					<section className="section-box-banner-3 banner-2 background-body">
						<div className="container pt-110 pb-110 position-relative z-1">
							<div className="row justify-content-center">
								<div className="col-auto text-center wow fadeInUp justify-content-center d-flex flex-column align-items-center">
									<h2 className="text-primary">Best Services in Town</h2>
									<h6 className="text-dark">
										Save 15% or more when you book and ride <br />
										before 1 April 2025
									</h6>
									<Link className="btn btn-signin text-white  btn-lg mt-20" href="/about-us">
										More About Us
										<svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
	<path d="M12.5 19L19.5 12L12.5 5M19.5 12L5.5 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

									</Link>
								</div>
							</div>
						</div>
					</section>
					{/* testimonials */}
					{/* <section className="section-box py-96 background-body">
				<div className="container">
					<div className="row align-items-end">
						<div className="col-md-9 col-sm-9 wow fadeInUp">
						<div className="box-author-testimonials btn btn-signin" >
				Testimonials
			</div>
			<h3 className="mt-8 mb-15 neutral-1000">What <span className='text-primary'>client</span> say about us?</h3>
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
												<div className="card-top pt-40 border-0 mb-0">
													<div className="card-author">
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
												<div className="card-top pt-40 border-0 mb-0">
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
												<div className="card-top pt-40 border-0 mb-0">
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
												<div className="card-top pt-40 border-0 mb-0">
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
												<div className="card-top pt-40 border-0 mb-0">
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
					</section> */}
					{/* Static 1 */}
					<section className="section-static-1 background-body border-bottom">
						<div className="container">
							<div className="row">
								<div className="pt-65 pb-96">
									<div className="wow fadeIn">
										<div className="d-flex align-items-center justify-content-around flex-wrap">
											
											<div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
												<div className="d-flex justify-content-center justify-content-md-start">
													<h3 className="count neutral-1000"><CounterUp count={10} /></h3>
													<h3 className="neutral-1000">K+</h3>
												</div>
												<div className="text-md-start text-center">
													<p className="text-lg-bold neutral-1000">Destinations</p>
													<p className="text-lg-bold neutral-1000">Collaboration</p>
												</div>
											</div>
											<div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
												<div className="d-flex justify-content-center justify-content-md-start">
													<h3 className="count neutral-1000"><CounterUp count={10} /></h3>
													<h3 className="neutral-1000">+</h3>
												</div>
												<div className="text-md-start text-center">
													<p className="text-lg-bold neutral-1000">Years</p>
													<p className="text-lg-bold neutral-1000">Experience</p>
												</div>
											</div>
											<div className="mb-4 mb-lg-0 d-block px-lg-5 px-3">
												<div className="d-flex justify-content-center justify-content-md-start">
													<h3 className="count neutral-1000"><CounterUp count={50} /></h3>
													<h3 className="neutral-1000">K+</h3>
												</div>
												<div className="text-md-start text-center">
													<p className="text-lg-bold neutral-1000">Happy</p>
													<p className="text-lg-bold neutral-1000">Customers</p>
												</div>
											</div>
											
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					{/* cta 10*/}
					<section className="section-cta-7 background-body pt-60 pb-60">
						<div className="box-cta-6">
							<div className="container">
								<div className="row align-items-center">
									<div className="col-lg-6">
										<div className="box-swiper">
											<Swiper {...swiperGroup1} className="swiper-container swiper-group-1">
												<div className="swiper-wrapper">
													<SwiperSlide className="swiper-slide">
														<img className="rounded-12" src="/assets/imgs/cta/cta-10/img-1.jpeg" alt="Dynamic-Cars" />
													</SwiperSlide>
													<SwiperSlide className="swiper-slide">
														<img className="rounded-12" src="/assets/imgs/cta/cta-10/img-2.jpeg" alt="Dynamic-Cars" />
													</SwiperSlide>
													<SwiperSlide className="swiper-slide">
														<img className="rounded-12" src="/assets/imgs/cta/cta-10/img-3.jpeg" alt="Dynamic-Cars" />
													</SwiperSlide>
													<SwiperSlide className="swiper-slide">
														<img className="rounded-12" src="/assets/imgs/cta/cta-10/img-5.jpeg" alt="Dynamic-Cars" />
													</SwiperSlide>
													<SwiperSlide className="swiper-slide">
														<img className="rounded-12" src="/assets/imgs/cta/cta-10/img-6.jpeg" alt="Dynamic-Cars" />
													</SwiperSlide>
													<SwiperSlide className="swiper-slide">
														<img className="rounded-12" src="/assets/imgs/cta/cta-10/img-7.jpeg" alt="Dynamic-Cars" />
													</SwiperSlide>
													<SwiperSlide className="swiper-slide">
														<img className="rounded-12" src="/assets/imgs/cta/cta-10/img-8.jpeg" alt="Dynamic-Cars" />
													</SwiperSlide>
												</div>
												<div className="position-absolute end-0 bottom-0 p-40">
													<div className="box-button-slider box-button-slider-team justify-content-end">
														<div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-2" tabIndex={0} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-9c1b729b91027a37b">
														<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
  														<path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
														</svg>

														</div>
														<div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-2" tabIndex={0} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-9c1b729b91027a37b">
														<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
														<path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
														</svg>

														</div>
													</div>
												</div>
											</Swiper>
										</div>
									</div>
									<div className="col-lg-6 ps-lg-5 mt-lg-0 mt-4">
										<h4 className="mb-4 neutral-1000">Plan Your Trip with Us</h4>
										<p className="text-lg-medium neutral-500 mb-4"><strong className='neutral-800'>Ride with Dynamic Cars </strong> seamless, reliable, and ready whenever you are!</p>
										<div className="row">
											<div className="col">
												<ul className="list-ticks-green list-ticks-green-2">
													<li className="neutral-500 pe-0"><strong className='neutral-800'>Seamless Booking</strong> – Quick and hassle-free reservations</li>
													<li className="neutral-500 pe-0"><strong className='neutral-800'>Reliable Service</strong> – Always on time, every time</li>
													<li className="neutral-500 pe-0"><strong className='neutral-800'>Comfort & Safety</strong> – Well-maintained vehicles for a smooth ride</li>
													<li className="neutral-500 pe-0"><strong className='neutral-800'>Anywhere, Anytime</strong> – Available whenever you need us</li>
													<li className="neutral-500 pe-0"><strong className='neutral-800'>Transparent Pricing</strong> – No hidden fees, just fair rates</li>

												</ul>
											</div>
										</div>
										<Link className="btn btn-signin mt-2" href="/contact">
											Contact us Now
											<svg xmlns="http://www.w3.org/2000/svg" width={25} height={24} viewBox="0 0 25 24" fill="none">
	<path d="M12.5 19L19.5 12L12.5 5M19.5 12L5.5 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>

										</Link>
									</div>
								</div>
							</div>
							<div className="bg-overlay position-absolute bottom-0 end-0 h-75 background-brand-2 opacity-25 z-0 rounded-start-pill" />
						</div>
					</section>
					
					{/* blog-1 */}
					{/* <section className="section-box box-news background-body">
						<div className="container">
							<div className="row align-items-end">
								<div className="col-md-9 mb-30 wow fadeInUp">
									<h3 className="title-svg neutral-500 mb-15">Upcoming Cars &amp; Events</h3>
									<p className="text-lg-medium text-bold neutral-500">Stay ahead with the latest car releases and upcoming events</p>
								</div>
								<div className="col-md-3 position-relative mb-30 wow fadeInUp">
									<div className="box-button-slider box-button-slider-team justify-content-end">
										<div className="swiper-button-prev swiper-button-prev-style-1 swiper-button-prev-2" tabIndex={0} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-f147def6ba09c37a">
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<path d="M7.99992 3.33325L3.33325 7.99992M3.33325 7.99992L7.99992 12.6666M3.33325 7.99992H12.6666" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
										<div className="swiper-button-next swiper-button-next-style-1 swiper-button-next-2" tabIndex={0} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-f147def6ba09c37a">
											<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
												<path d="M7.99992 12.6666L12.6666 7.99992L7.99992 3.33325M12.6666 7.99992L3.33325 7.99992" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<div className="box-list-news wow fadeInUp mt-5">
								<div className="box-swiper">
									<Swiper {...swiperGroup3} className="swiper-container swiper-group-3">
										<div className="swiper-wrapper">
											<SwiperSlide className="swiper-slide pt-2">
												<div className="card-news background-card hover-up">
													<div className="card-image">
														<Link href="/sub-service#courier-services">
															<img src="/assets/imgs/blog/blog-1/img-1.png" alt="Dynamic-Cars" />
														</Link>
													</div>
													<div className="card-info">
														<Link className="bg-2 rounded-12 position-absolute top-0 end-0 translate-middle-y px-3 py-2 me-4 text-sm-bold" href="/blog-grid">News</Link>
														<div className="card-meta"><span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
														<div className="card-title"><Link className="text-xl-bold neutral-1000" href="/sub-service#courier-services">2025 Cadillac Escalade costs more money </Link></div>
														<div className="card-program">
															<div className="endtime">
																<div className="card-author">
																	<img src="/assets/imgs/blog/blog-1/avatar-1.png" alt="Dynamic-Cars" />
																	<p className="text-sm-bold neutral-1000">Jimmy Dave</p>
																</div>
																<div className="card-button"><Link className="btn btn-gray" href="/sub-service#courier-services">Keep Reading</Link></div>
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide className="swiper-slide pt-2">
												<div className="card-news background-card hover-up">
													<div className="card-image">
														<Link href="/sub-service#courier-services">
															<img src="/assets/imgs/blog/blog-1/img-2.png" alt="Dynamic-Cars" />
														</Link>
													</div>
													<div className="card-info">
														<Link className="bg-2 rounded-12 position-absolute top-0 end-0 translate-middle-y px-3 py-2 me-4 text-sm-bold" href="/blog-grid">Trend</Link>
														<div className="card-meta"><span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
														<div className="card-title"><Link className="text-xl-bold neutral-1000" href="/sub-service#courier-services">2025 BMW 5 Series Review: A balanced luxury sedan</Link></div>
														<div className="card-program">
															<div className="endtime">
																<div className="card-author">
																	<img src="/assets/imgs/blog/blog-1/avatar-2.png" alt="Dynamic-Cars" />
																	<p className="text-sm-bold neutral-1000">Steven Job</p>
																</div>
																<div className="card-button"><Link className="btn btn-gray" href="/sub-service#courier-services">Keep Reading</Link></div>
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide className="swiper-slide pt-2">
												<div className="card-news background-card hover-up">
													<div className="card-image">
														<Link href="/sub-service#courier-services">
															<img src="/assets/imgs/blog/blog-1/img-3.png" alt="Dynamic-Cars" />
														</Link>
													</div>
													<div className="card-info">
														<Link className="bg-2 rounded-12 position-absolute top-0 end-0 translate-middle-y px-3 py-2 me-4 text-sm-bold" href="/blog-grid">Discovery</Link>
														<div className="card-meta"><span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
														<div className="card-title"><Link className="text-xl-bold neutral-1000" href="/sub-service#courier-services">2025 Ruf Rodeo is ready to wrangle some rough roads</Link></div>
														<div className="card-program">
															<div className="endtime">
																<div className="card-author">
																	<img src="/assets/imgs/blog/blog-1/avatar-3.png" alt="Dynamic-Cars" />
																	<p className="text-sm-bold neutral-1000">David Jame</p>
																</div>
																<div className="card-button"><Link className="btn btn-gray" href="/sub-service#courier-services">Keep Reading</Link></div>
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide className="swiper-slide pt-2">
												<div className="card-news background-card hover-up">
													<div className="card-image">
														<Link href="/sub-service#courier-services">
															<img src="/assets/imgs/blog/blog-1/img-1.png" alt="Dynamic-Cars" />
														</Link>
													</div>
													<div className="card-info">
														<Link className="bg-2 rounded-12 position-absolute top-0 end-0 translate-middle-y px-3 py-2 me-4 text-sm-bold" href="/blog-grid">News</Link>
														<div className="card-meta"><span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
														<div className="card-title"><Link className="text-xl-bold neutral-1000" href="/sub-service#courier-services">2025 Cadillac Escalade costs more money </Link></div>
														<div className="card-program">
															<div className="endtime">
																<div className="card-author">
																	<img src="/assets/imgs/blog/blog-1/avatar-1.png" alt="Dynamic-Cars" />
																	<p className="text-sm-bold neutral-1000">Jimmy Dave</p>
																</div>
																<div className="card-button"><Link className="btn btn-gray" href="/sub-service#courier-services">Keep Reading</Link></div>
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide className="swiper-slide pt-2">
												<div className="card-news background-card hover-up">
													<div className="card-image">
														<Link href="/sub-service#courier-services">
															<img src="/assets/imgs/blog/blog-1/img-2.png" alt="Dynamic-Cars" />
														</Link>
													</div>
													<div className="card-info">
														<Link className="bg-2 rounded-12 position-absolute top-0 end-0 translate-middle-y px-3 py-2 me-4 text-sm-bold" href="/blog-grid">Trend</Link>
														<div className="card-meta"><span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
														<div className="card-title"><Link className="text-xl-bold neutral-1000" href="/sub-service#courier-services">2025 BMW 5 Series Review: A balanced luxury sedan</Link></div>
														<div className="card-program">
															<div className="endtime">
																<div className="card-author">
																	<img src="/assets/imgs/blog/blog-1/avatar-2.png" alt="Dynamic-Cars" />
																	<p className="text-sm-bold neutral-1000">Steven Job</p>
																</div>
																<div className="card-button"><Link className="btn btn-gray" href="/sub-service#courier-services">Keep Reading</Link></div>
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide className="swiper-slide pt-2">
												<div className="card-news background-card hover-up">
													<div className="card-image">
														<Link href="/sub-service#courier-services">
															<img src="/assets/imgs/blog/blog-1/img-3.png" alt="Dynamic-Cars" />
														</Link>
													</div>
													<div className="card-info">
														<Link className="bg-2 rounded-12 position-absolute top-0 end-0 translate-middle-y px-3 py-2 me-4 text-sm-bold" href="/blog-grid">Discovery</Link>
														<div className="card-meta"><span className="post-date neutral-1000">18 Sep 2024</span><span className="post-time neutral-1000">6 mins</span><span className="post-comment neutral-1000">38 comments</span></div>
														<div className="card-title"><Link className="text-xl-bold neutral-1000" href="/sub-service#courier-services">2025 Ruf Rodeo is ready to wrangle some rough roads</Link></div>
														<div className="card-program">
															<div className="endtime">
																<div className="card-author">
																	<img src="/assets/imgs/blog/blog-1/avatar-3.png" alt="Dynamic-Cars" />
																	<p className="text-sm-bold neutral-1000">David Jame</p>
																</div>
																<div className="card-button"><Link className="btn btn-gray" href="/sub-service#courier-services">Keep Reading</Link></div>
															</div>
														</div>
													</div>
												</div>
											</SwiperSlide>
										</div>
									</Swiper>
								</div>
							</div>
						</div>
					</section> */}
				</div>

			</Layout>
		</>
	)
}