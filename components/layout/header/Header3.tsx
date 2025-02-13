'use client'
import dynamic from 'next/dynamic'
const ThemeSwitch = dynamic(() => import('@/components/elements/ThemeSwitch'), {
	ssr: false,
})
import Link from 'next/link'

export default function Header3({ scroll, isMobileMenu, handleMobileMenu, handleOffcanvas, isOffcanvas }: any) {
	return (
		<>
			<header className={`header sticky-bar header-home-2 border-0 ${scroll ? 'stick' : ''}`}>
				<div className="container-fluid background-body">
					<div className="main-header">
						<div className="header-left">
							<div className="header-logo">
								<Link className="d-flex" href="/">
									<img className="light-mode" alt="Dynamic-Cars" src="/assets/imgs/template/logo-d.svg" />
									<img className="dark-mode" alt="Dynamic-Cars" src="/assets/imgs/template/logo-w.png" />
								</Link>
							</div>
							<div className="header-nav">
								<nav className="nav-main-menu">
									<ul className="main-menu">
                    <li >
                      <Link className="color-black" href="/">
                        Home
                      </Link>
                      
                    </li>
                    {/* <li className="mega-li-small has-children arrow-black">
                      <Link className="color-black" href="#">
                        Services
                      </Link>
                      <div className="mega-menu">
                        <div className="mega-menu-inner mega-menu-inner-small">
                          <div className="row">
                            <div className="col-lg-6">
                              <h6 className="text-lg-bold neutral-1000">
                                Cars List
                              </h6>
                              <ul className="sub-menu">
                                <li>
                                  <Link href="/cars-list-1">Cars List v1</Link>
                                </li>
                                <li>
                                  <Link href="/cars-list-2">Cars List v2</Link>
                                </li>
                                <li>
                                  <Link href="/cars-list-3">Cars List v3</Link>
                                </li>
                                <li>
                                  <Link href="/cars-list-4">Cars List v4</Link>
                                </li>
                              </ul>
                            </div>
                            <div className="col-lg-6">
                              <h6 className="text-lg-bold neutral-1000">
                                Car Details
                              </h6>
                              <ul className="sub-menu">
                                <li>
                                  <Link href="/cars-details-1">
                                    Car Details v1
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/cars-details-2">
                                    Car Details v2
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/cars-details-3">
                                    Car Details v3
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/cars-details-4">
                                    Car Details v4
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li> */}
                     <li >
                      <Link className="color-black" href="/about-us">
					  About Us
                      </Link>
                     
                    </li>
                    <li className="has-children arrow-black">
                      <Link className="color-black" href="/services">
                        Services
                      </Link>
                      <ul className="sub-menu">
                        <li>
                          <Link href="/blog-details">Chauffeur service</Link>
                        </li>
                        
                      </ul>
                    </li>
                    
                   
                    <li>
                      <Link className="color-black" href="/term">
                      Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link className="color-black" href="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
								</nav>
							</div>
							<div className="header-right">
								<div className="d-none d-xxl-inline-block align-middle mr-15">
									<Link className="btn btn-signin neutral-1000" href="/login">
										<svg className="mb-1" xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12" fill="none">
											<path d="M1 12C1 12 0 12 0 11C0 10 1 7 6 7C11 7 12 10 12 11C12 12 11 12 11 12H1ZM6 6C6.79565 6 7.55871 5.68393 8.12132 5.12132C8.68393 4.55871 9 3.79565 9 3C9 2.20435 8.68393 1.44129 8.12132 0.87868C7.55871 0.316071 6.79565 0 6 0C5.20435 0 4.44129 0.316071 3.87868 0.87868C3.31607 1.44129 3 2.20435 3 3C3 3.79565 3.31607 4.55871 3.87868 5.12132C4.44129 5.68393 5.20435 6 6 6Z" fill="#101010" />
										</svg>
										Sign in
									</Link>
									<div className="d-none d-xxl-inline-block align-middle mr-15">
									<ThemeSwitch/>
									</div>
									<Link className="btn btn-signin background-brand-2 text-dark" href="#">Add Listing</Link>
								</div>
								<div className="burger-icon-2 burger-icon-white" onClick={handleOffcanvas}>
									<img src="/assets/imgs/template/icons/menu.svg" alt="Dynamic-Cars" />
								</div>
								<div className="burger-icon burger-icon-white" onClick={handleMobileMenu}>
									<span className="burger-icon-top" />
									<span className="burger-icon-mid"> </span>
									<span className="burger-icon-bottom"> </span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

		</>
	)
}
