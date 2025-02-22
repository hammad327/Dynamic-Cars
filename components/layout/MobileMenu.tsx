'use client'
import Link from 'next/link'
import { useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

export default function MobileMenu({ isMobileMenu, handleMobileMenu }: any) {
	const [isAccordion, setIsAccordion] = useState(0)

	const handleAccordion = (key: any) => {
		setIsAccordion(prevState => prevState === key ? null : key)
	}
	return (
		<>
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
				<PerfectScrollbar className="mobile-header-wrapper-inner">
					<div className="mobile-header-logo">
						<Link className="d-flex" href="/"><img className="light-mode" alt="Dynamic-Cars" src="/assets/imgs/template/logo-w.png" /><img className="dark-mode" alt="Dynamic-Cars" src="/assets/imgs/template/logo-w.png" /></Link>
						<div className="burger-icon burger-icon-white" onClick={handleMobileMenu} />
					</div>
					<div className="mobile-header-content-area">
						<div className="perfect-scroll">
							<div className="mobile-menu-wrap mobile-header-border">
							<nav>
  <ul className="mobile-menu font-heading">
    <li className={`has-children ${isAccordion === 1 ? "active" : ""}`}>
      <span >
        <i ></i>
      </span>
      <Link href="/">Home</Link>
    </li>
    <li className={`has-children ${isAccordion === 3 ? "active" : ""}`}>
      <span >
        <i></i>
      </span>
      <Link href="/about-us">About Us</Link>
    </li>
    <li className={`has-children ${isAccordion === 3 ? "active" : ""}`}>
      <span >
        <i></i>
      </span>
      <Link href="/services">Services</Link>
    </li>
    {/* <li className={`has-children ${isAccordion === 2 ? "active" : ""}`}>
      <span className="menu-expand" onClick={() => handleAccordion(2)}>
        <i className="arrow-small-down"></i>
      </span>
      <Link href="/services">Services</Link>
      <ul className="sub-menu" style={{ display: `${isAccordion === 2 ? "block" : "none"}` }}>
        <li><Link href="/blog-details">Chauffeur service</Link></li>
      </ul>
    </li> */}
    
    <li>
      <Link href="/term">Terms & Conditions</Link>
    </li>
    <li>
      <Link href="/contact">Contact</Link>
    </li>
  </ul>
</nav>

							</div>
						</div>
					</div>
				</PerfectScrollbar>
			</div>
			{isMobileMenu && <div className="body-overlay-1" onClick={handleMobileMenu} />			}
		</>
	)
}
