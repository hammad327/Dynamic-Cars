
import Link from "next/link"
import HeroSearch from '../elements/HeroSearch'

export default function Search1() {
	return (
		<>

			<section className="box-section box-search-advance-home10 background-100">
				<div className="container">
					<div className="box-search-advance background-card wow fadeIn">
						<div className="box-top-search">
							<div className="left-top-search">
								<span className=" neutral-1000" style={{ fontWeight: "500", fontSize:'16px' }}>
								Book with confidence! Our chauffeur-driven vehicles are available 24/7, ensuring a comfortable and reliable travel experience.
</span>
<Link className="btn btn-signin text-sm-bold text white btn-click active ml-30" href="https://dynamiccars.webbooker.icabbi.com/">Book Now</Link>

								{/* <Link className="category-link text-sm-bold btn-click" href="#">New cars</Link>
								<Link className="category-link text-sm-bold btn-click" href="#">Used cars</Link> */}
							</div>
							
						</div>
						<HeroSearch />
					</div>
				</div>
			</section>
		</>
	)
}
