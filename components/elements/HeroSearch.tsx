'use client' 
import Link from 'next/link'
import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import MyDatePicker from './MyDatePicker'

export default function HeroSearch() {
	return (
		<>
			{/* <div className="box-bottom-search background-card">
				<div className="item-search">
					<label className="text-sm-bold neutral-500">Pick Up Location</label>
					<Dropdown className="dropdown">
						<Dropdown.Toggle as="div" className="btn btn-secondary dropdown-toggle btn-dropdown-search location-search"  aria-expanded="false">New York, USA</Dropdown.Toggle>
						<Dropdown.Menu as="ul" className="dropdown-menu">
							<li>
								<Link className="dropdown-item" href="#">Paris, France</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Tokyo, Japan</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">New York City, USA</Link>
							</li>
						</Dropdown.Menu>
					</Dropdown>
				</div>
				<div className="item-search item-search-2">
					<label className="text-sm-bold neutral-500">Drop Off Location</label>
					<Dropdown className="dropdown">
						<Dropdown.Toggle as="div" className="btn btn-secondary dropdown-toggle btn-dropdown-search location-search" >Delaware, USA</Dropdown.Toggle>
						<Dropdown.Menu as="ul" className="dropdown-menu">
							<li>
								<Link className="dropdown-item" href="#">Paris, France</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">Tokyo, Japan</Link>
							</li>
							<li>
								<Link className="dropdown-item" href="#">New York City, USA</Link>
							</li>
						</Dropdown.Menu>
					</Dropdown>
				</div>
				<div className="item-search item-search-3">
					<label className="text-sm-bold neutral-500">Pick Up Date &amp; Time</label>
					<div className="box-calendar-date">
						<MyDatePicker />
					</div>
				</div>
				<div className="item-search bd-none">
					<label className="text-sm-bold neutral-500">Return Date &amp; Time</label>
					<div className="box-calendar-date">
						<MyDatePicker />
					</div>
				</div> 
				<div className="item-search bd-none d-flex justify-content-center">
  <a href="https://dynamiccars.webbooker.icabbi.com/" rel="noopener noreferrer">
    <button className="btn btn-signin text-nowrap d-flex align-items-center text-white">
      <svg className="me-2" width={20} height={20} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6H20M4 12H20M4 18H20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Book Now
    </button>
  </a>
</div>


			</div> */}
		</>
	)
}