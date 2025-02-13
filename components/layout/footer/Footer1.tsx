import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaGooglePlusG  } from 'react-icons/fa';

export default function Footer1() {
	return (
		<>
			<footer
				className="footer"
				style={{
				  backgroundColor: '#ebeae9',
				  backgroundSize: 'cover',
				  backgroundPosition: 'center',
				  backgroundRepeat: 'no-repeat',
				  position: 'relative',
				}}
			  >
				{/* White Overlay */}
				<div
				  style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%',
					backgroundColor: 'rgba(255, 255, 255, 0.16)', // White overlay with opacity
					zIndex: 1,
				  }}
				></div>

				<div className="container" style={{ position: 'relative', zIndex: 2 }}>
					<div className="row">
						{/* About Us Section */}
						<div className="col-md-3 col-sm-12 footer-1">
							<div className="mt-20 mb-20">
								<h6
									className="text-linear-3 font-bold"
									style={{ color: '#363334', marginBottom: '15px', fontSize: '20px', fontWeight:'bolder'}}
								>
									About Us
								</h6>
								<p style={{ color: '#363334', fontSize: '12px', lineHeight: '1.5', marginBottom: '15px' }}>
								At DynamicCars, we specialize in providing premium private hire transfers with professional drivers, ensuring a seamless and comfortable journey to and from all London Airports, UK Cruise Ports, and destinations across the UK.
								</p>
								<Link className="d-flex" href="/">
									<img
										className="light-mode"
										alt="Dynamic-Cars"
										src="/assets/imgs/template/logo-w.png"
									/>
									<img
										className="dark-mode"
										alt="Dynamic-Cars"
										src="/assets/imgs/template/logo-w.png"
									/>
								</Link>
							</div>
						</div>

						{/* Company Section */}
						<div className="col-md-2 ml-30 col-xs-6 footer-3">
							<h6
								className="text-linear-3"
								style={{ color: '#363334', marginBottom: '15px', fontSize: '20px', fontWeight:'bolder' }}
							>
								Company
							</h6>
							<ul className="menu-footer" style={{ paddingLeft: 0, marginTop: 0 }}>
  {[
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about-us' },
    { name: 'Contact', url: '/contact' },
    { name: 'Terms of Use', url: '/term' }
  ].map((item, index) => (
    <li key={index} style={{ marginBottom: '5px' }}>
      <Link href={item.url}>
        <span style={{ fontSize: '12px', marginRight: '5px', color: '#363334' }}>►</span>
        {item.name}
      </Link>
    </li>
  ))}
</ul>

						</div>

						{/* Our Services Section */}
						<div className="col-md-2 ml-30 col-xs-6 footer-2">
							<h6
								className="text-linear-3"
								style={{ color: '#363334', marginBottom: '15px', fontSize: '20px', fontWeight:'bolder' }}
							>
								Our Services
							</h6>
							<ul className="menu-footer" style={{ paddingLeft: 0, marginTop: 0 }}>
								{[
									'Airport Transfers',
									'Chauffeur Services',
									'Long Distance & Cruise Transfers',
									'Courier Services',
									'Airport Meet and Greet',
									'Event Management',
									'VIP Tours',
									'Wedding Services',
									'School Run Services',
									
									
								].map((service, index) => (
									<li key={index} style={{ marginBottom: '5px' }}>
										<Link href="/services">
											<span style={{ fontSize: '12px', marginRight: '5px', color: '#363334' }}>►</span>
											{service}
										</Link>
									</li>
								))}
							</ul>
						</div>

						{/* Contact Us Section */}
						<div className="col-md-3 ml-30 col-xs-6 footer-4">
							<h6
								className="text-linear-3 font-bold"
								style={{ color: '#363334', marginBottom: '15px', fontSize: '20px', fontWeight:'bolder' }}
							>
								Contact Us
							</h6>

							<p style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', color: '#363334' }}>
								<FaPhoneAlt style={{ color: '#78BC51', marginRight: '10px' }} />
								<Link href="tel:+441372613001" style={{ color: '#363334', fontSize: '15px' }}>
									+44 13 72 61 3001
								</Link>
							</p>

							<p style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', color: '#363334' }}>
								<FaPhoneAlt style={{ color: '#78BC51', marginRight: '10px' }} />
								<Link href="tel:+442034883484" style={{ color: '#363334', fontSize: '15px' }}>
									+44 20 34 88 3484
								</Link>
							</p>

							<p style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', color: '#363334' }}>
  <FaEnvelope style={{ color: '#78BC51', marginRight: '10px' }} />
  <Link href="mailto:bookings@dynamiccarsuk.co.uk" style={{ color: '#363334', fontSize: '15px', verticalAlign: 'middle' }}>
    bookings@dynamiccarsuk.co.uk
  </Link>
</p>


							{/* Social Icons */}
							<div
  className="box-socials-footer d-flex justify-content-start align-items-center"
  style={{ marginTop: '20px', gap: '10px' }}
>
  {[
    { icon: FaFacebookF, link: 'https://www.facebook.com/Dynamiccarsuk/' },
    { icon: FaTwitter, link: 'https://twitter.com/dynamiccarsuk' },
    { icon: FaInstagram, link: 'https://www.instagram.com/dynamiccarsuk/' },
    { icon: FaYoutube, link: 'https://www.youtube.com/@dynamiccars3169' },
    { icon: FaGooglePlusG, link: 'https://www.google.com/search?q=dynamic+cars+epsom&sca_esv=fd368f2ad05e4b13&sxsrf=AHTn8zobt75bBMVwqVu-WM4d22gDQWXIYw%3A1738857287912&ei=R9ukZ-eiN43HhbIPs_CAyQU&ved=0ahUKEwin4teXtK-LAxWNY0EAHTM4IFkQ4dUDCBA&uact=5&oq=dynamic+cars+epsom&gs_lp=Egxnd3Mtd2l6LXNlcnAiEmR5bmFtaWMgY2FycyBlcHNvbTIOEC4YgAQYsAMYxwEYrwEyDhAAGIAEGLADGIYDGIoFMgsQABiABBiwAxiiBDILEAAYsAMYogQYiQUyCBAAGLADGO8FMggQABiwAxjvBUjvBVDrA1jrA3ABeACQAQCYAVGgAVGqAQExuAEDyAEA-AEBmAICoAJjwgIQEC4YgAQYsAMYxwEYDRivAZgDAOIDBRIBMSBAiAYBkAYGkgcBMqAH-AU&sclient=gws-wiz-serp' }, // Replace with your Google Reviews link
  ].map((social, index) => (
    <Link key={index} href={social.link} target="_blank">
      <social.icon style={{ color: '#78BC51', fontSize: '18px' }} />
    </Link>
  ))}
</div>

							{/* License Image */}
							<div className="col text-center mt-20">
								<img src="/assets/imgs/page/homepage2/liscence2.png" alt="License" width="200" />
							</div>
						</div>
					</div>

					{/* Footer Bottom */}
					<div className="footer-bottom mt-50">
						<div className="row align-items-center justify-content-center">
							<div className="col-md-6 text-md-start text-center mb-20">
								<p className="text-sm color-black" style={{ fontSize: '12px', color: '#363334' }}>
									© {new Date().getFullYear()} Dynamic Cars | Powered by:{' '}
									<a href="https://solworxtechnologies.co.uk/" style={{ color: '#78BC51', fontWeight: 'bolder' }}>
										solwork.co.uk
									</a>
								</p>
							</div>
							<div className="col-md-6 text-md-end text-center mb-20">
								<div className="d-flex align-items-center justify-content-center justify-content-md-end">
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
