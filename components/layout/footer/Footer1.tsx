import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaGooglePlusG } from 'react-icons/fa';
import './footer.css';  

export default function Footer1() {
  return (
    <>
      <footer className="footer">
        {/* White Overlay */}
        <div className="overlay"></div>

        <div className="container">
          <div className="row">
            {/* About Us Section */}
            <div className="col-md-3 col-sm-12 footer-1">
              <div className="mt-20 mb-20">
                <h6 className="text-linear-3 font-bold">
                  About Us
                </h6>
                <p className='aboutintro'>
                  At DynamicCars, we specialize in providing premium private hire transfers with professional drivers, ensuring a seamless and comfortable journey to and from all London Airports, UK Cruise Ports, and destinations across the UK.
                </p>
                <Link className="d-flex" href="/">
                  <img className="light-mode" alt="Dynamic-Cars" src="/assets/imgs/template/logo-w.png" />
                  <img className="dark-mode" alt="Dynamic-Cars" src="/assets/imgs/template/logo-w.png" />
                </Link>
              </div>
            </div>

            {/* Company Section */}
            <div className="col-md-2 ml-30 col-xs-6 footer-3">
              <h6 className="text-linear-3">
                Company
              </h6>
              <ul className="menu-footer">
                {[{ name: 'Home', url: '/' }, { name: 'About Us', url: '/about-us' }, { name: 'Contact', url: '/contact' }, { name: 'Terms of Use', url: '/term' }].map((item, index) => (
                  <li key={index}>
                    <Link href={item.url}>
                      <span className="arrow">►</span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Services Section */}
            <div className="col-md-2 ml-30 col-xs-6 footer-2">
              <h6 className="text-linear-3">
                Our Services
              </h6>
              <ul className="menu-footer">
                {['Airport Transfers', 'Chauffeur Services', 'Long Distance & Cruise Transfers', 'Courier Services', 'Airport Meet and Greet', 'Event Management', 'VIP Tours', 'Wedding Services', 'School Run Services'].map((service, index) => (
                  <li key={index}>
                    <Link href="/services">
                      <span className="arrow">►</span>
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="col-md-3 ml-30 col-xs-6 footer-4 menu-footer">
              <h6 className="text-linear-3 font-bold ">
                Contact Us
              </h6>
<div className='menu-footer'>
              <p>
                <FaPhoneAlt className="phone-icon" />
                <Link href="tel:+441372613001">+44 13 72 61 3001</Link>
              </p>

              <p>
                <FaPhoneAlt className="phone-icon" />
                <Link href="tel:+442034883484">+44 20 34 88 3484</Link>
              </p>

              <p>
                <FaEnvelope className="email-icon" />
                <Link href="mailto:bookings@dynamiccarsuk.co.uk" className='emailcontact'>bookings@dynamiccarsuk.co.uk</Link>
              </p>
			  </div>
              {/* Social Icons */}
              <div className="box-socials-footer d-flex justify-content-start align-items-center">
                {[{ icon: FaFacebookF, link: 'https://www.facebook.com/Dynamiccarsuk/' }, { icon: FaTwitter, link: 'https://twitter.com/dynamiccarsuk' }, { icon: FaInstagram, link: 'https://www.instagram.com/dynamiccarsuk/' }, { icon: FaYoutube, link: 'https://www.youtube.com/@dynamiccars3169' }, { icon: FaGooglePlusG, link: 'https://www.google.com/search?q=dynamic+cars+epsom' }].map((social, index) => (
                  <Link key={index} href={social.link} target="_blank">
                    <social.icon className="social-icons" />
                  </Link>
                ))}
              </div>

              {/* License Image */}
              <div className="col text-center mt-20">
                <img className="license-image" src="/assets/imgs/page/homepage2/liscence2.png" alt="License" />
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-6 text-md-start text-center mb-20">
                <p className="text-sm color-black">
                  © {new Date().getFullYear()} Dynamic Cars | Powered by:{' '}
                  <a href="https://solworx.co.uk/">Solworx Technologies Ltd</a>
                </p>
              </div>
              <div className="col-md-6 text-md-end text-center mb-20">
                <div className="d-flex align-items-center justify-content-center justify-content-md-end">
                  {/* Additional content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
