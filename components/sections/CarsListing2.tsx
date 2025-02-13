
import Link from "next/link"

export default function CarsListing2() {
	return (
		<>

			<section className="section-box box-flights background-body">
				<div className="container">
					<div className="row align-items-end mb-10">
						<div className="col-md-8">
							<h3 className="neutral-1000 wow fadeInUp">Our Fleet
							</h3>
							<p className="text-lg-medium neutral-500 wow fadeInUp">Choose from eco-friendly luxury sedans, hybrids, and custom orders.</p>
						</div>
						{/* <div className="col-md-4 mt-md-0 mt-4">
							<div className="d-flex justify-content-end">
								<Link className="btn btn-primary wow fadeInUp" href="/cars-list-1">
									View More
									<svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 15L15 8L8 1M15 8L1 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
								</Link>
							</div>
						</div> */}
					</div>
					<div className="row pt-30 ">
						<div className="col-lg-3  col-md-6 wow fadeIn" data-wow-delay="0.1s">
							<div className="card-journey-small background-card hover-up">
								<div className="card-image">
										<img src="/assets/imgs/cars-listing/cars-listing-2/car-1.png" alt="Dynamic-Cars" />
								</div>
								<div className="card-info p-4 pt-30">
									<div className="card-rating">
										<div className="card-left" />
										{/* <div className="card-right">
											<span className="rating text-xs-medium py-1 rounded-pill">4.96 <span className="text-xs-medium neutral-500">(672 reviews)</span></span>
										</div> */}
									</div>
									<div className="card-title"><Link className="text-lg-bold neutral-1000 text-nowrap" href="">Sedan (Prius)
									</Link></div>
									<div className="card-program">
										<div className="card-location">
											{/* <p className="text-location text-sm-medium neutral-500">Manchester, England</p> */}
										</div>
										<div className="card-facitlities">
										<p className="card-seat text-md-medium">Capacity 4</p>
										<p className="card-gear text-md-medium">Luggage 2</p>
											{/* <p className="card-miles text-md-medium">Luggage 2</p>
											<p className="card-fuel text-md-medium">Diesel</p> */}
										</div>
										{/* <div className="endtime">
											<div className="card-price">
												<h6 className="text-lg-bold neutral-1000">$498.25</h6>
												<p className="text-md-medium neutral-500" />
											</div>
											<div className="card-button"><Link className="btn btn-gray" href="">Book
												Now</Link></div>
										</div> */}
									</div>
								</div>
							</div>
						</div>
						{/* <div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
							<div className="card-journey-small background-card hover-up">
								<div className="card-image">
									
										<img src="/assets/imgs/cars-listing/cars-listing-2/car-2.png" alt="Dynamic-Cars" />
									
								</div>
								<div className="card-info p-4 pt-30">
									<div className="card-rating">
										<div className="card-left" />
										
									</div>
									<div className="card-title"><Link className="text-lg-bold neutral-1000 text-nowrap" href="">Estate Car
									</Link></div>
									<div className="card-program">
										
										<div className="card-facitlities">
										<p className="card-seat text-md-medium">Capacity 4</p>
										<p className="card-gear text-md-medium">Luggage 3</p>
											
										</div>
										
									</div>
								</div>
							</div>
						</div> */}
						<div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
							<div className="card-journey-small background-card hover-up">
								<div className="card-image">
									
										<img src="/assets/imgs/cars-listing/cars-listing-2/car-2.png" alt="Dynamic-Cars" />
									
								</div>
								<div className="card-info p-4 pt-30">
									<div className="card-rating">
										<div className="card-left" />
										{/* <div className="card-right">
											<span className="rating text-xs-medium py-1 rounded-pill">4.96 <span className="text-xs-medium neutral-500">(672 reviews)</span></span>
										</div> */}
									</div>
									<div className="card-title"><Link className="text-lg-bold neutral-1000 text-nowrap" href="">Executive (E class)
									</Link></div>
									<div className="card-program">
										<div className="card-location">
											{/* <p className="text-location text-sm-medium neutral-500">Manchester, England</p> */}
										</div>
										<div className="card-facitlities">
										<p className="card-seat text-md-medium">Capacity 4</p>
										<p className="card-gear text-md-medium">Luggage 2</p>
											{/* <p className="card-miles text-md-medium">Luggage 2</p>
											<p className="card-fuel text-md-medium">Diesel</p> */}
										</div>
										{/* <div className="endtime">
											<div className="card-price">
												<h6 className="text-lg-bold neutral-1000">$498.25</h6>
												<p className="text-md-medium neutral-500" />
											</div>
											<div className="card-button"><Link className="btn btn-gray" href="">Book
												Now</Link></div>
										</div> */}
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
							<div className="card-journey-small background-card hover-up">
								<div className="card-image">
									
										<img src="/assets/imgs/cars-listing/cars-listing-2/car-3.png" alt="Dynamic-Cars" />
									
								</div>
								<div className="card-info p-4 pt-30">
									<div className="card-rating">
										<div className="card-left" />
										{/* <div className="card-right">
											<span className="rating text-xs-medium py-1 rounded-pill">4.96 <span className="text-xs-medium neutral-500">(672 reviews)</span></span>
										</div> */}
									</div>
									<div className="card-title"><Link className="text-lg-bold neutral-1000 text-nowrap" href="">MPV (Vito Car)</Link></div>
									<div className="card-program">
										<div className="card-location">
											{/* <p className="text-location text-sm-medium neutral-500">Manchester, England</p> */}
										</div>
										<div className="card-facitlities">
										<p className="card-seat text-md-medium">Capacity 5</p>
										<p className="card-gear text-md-medium">Luggage 3</p>
											{/* <p className="card-miles text-md-medium">Luggage 2</p>
											<p className="card-fuel text-md-medium">Diesel</p> */}
										</div>
										{/* <div className="endtime">
											<div className="card-price">
												<h6 className="text-lg-bold neutral-1000">$498.25</h6>
												<p className="text-md-medium neutral-500" />
											</div>
											<div className="card-button"><Link className="btn btn-gray" href="">Book
												Now</Link></div>
										</div> */}
									</div>
									
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
							<div className="card-journey-small background-card hover-up">
								<div className="card-image">
									
										<img src="/assets/imgs/cars-listing/cars-listing-2/car-4.png" alt="Dynamic-Cars" />
									
								</div>
								<div className="card-info p-4 pt-30">
									<div className="card-rating">
										<div className="card-left" />
										{/* <div className="card-right">
											<span className="rating text-xs-medium py-1 rounded-pill">4.96 <span className="text-xs-medium neutral-500">(672 reviews)</span></span>
										</div> */}
									</div>
									<div className="card-title"><Link className="text-lg-bold neutral-1000 text-nowrap" href="">Luxury (S Class)</Link></div>
									<div className="card-program">
										<div className="card-location">
											{/* <p className="text-location text-sm-medium neutral-500">Manchester, England</p> */}
										</div>
										<div className="card-facitlities">
										<p className="card-seat text-md-medium">Capacity 5</p>
										<p className="card-gear text-md-medium">Luggage 3</p>
											{/* <p className="card-miles text-md-medium">Luggage 2</p>
											<p className="card-fuel text-md-medium">Diesel</p> */}
										</div>
										{/* <div className="endtime">
											<div className="card-price">
												<h6 className="text-lg-bold neutral-1000">$498.25</h6>
												<p className="text-md-medium neutral-500" />
											</div>
											<div className="card-button"><Link className="btn btn-gray" href="">Book
												Now</Link></div>
										</div> */}
									</div>
									
								</div>
							</div>
						</div>
						<div className="col-lg-3 col-md-6 wow fadeIn" data-wow-delay="0.1s">
							<div className="card-journey-small background-card hover-up">
								<div className="card-image">
									
										<img src="/assets/imgs/cars-listing/cars-listing-2/car-5.png" alt="Dynamic-Cars" />
									
								</div>
								<div className="card-info p-4 pt-30">
									<div className="card-rating">
										<div className="card-left" />
										{/* <div className="card-right">
											<span className="rating text-xs-medium py-1 rounded-pill">4.96 <span className="text-xs-medium neutral-500">(672 reviews)</span></span>
										</div> */}
									</div>
									<div className="card-title"><Link className="text-lg-bold neutral-1000 text-nowrap" href="">Luxury MPV (V Class)</Link></div>
									<div className="card-program">
										<div className="card-location">
											{/* <p className="text-location text-sm-medium neutral-500">Manchester, England</p> */}
										</div>
										<div className="card-facitlities">
										<p className="card-seat text-md-medium">Capacity 5</p>
										<p className="card-gear text-md-medium">Luggage 3</p>
											{/* <p className="card-miles text-md-medium">Luggage 2</p>
											<p className="card-fuel text-md-medium">Diesel</p> */}
										</div>
										{/* <div className="endtime">
											<div className="card-price">
												<h6 className="text-lg-bold neutral-1000">$498.25</h6>
												<p className="text-md-medium neutral-500" />
											</div>
											<div className="card-button"><Link className="btn btn-gray" href="">Book
												Now</Link></div>
										</div> */}
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
